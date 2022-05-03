import { 
  processParams, getImgSRC, getBreakpoint, determineContainerProps,
  isLowQualityPreview, generateURL, getPreviewSRC, imgStyles as styles
 } from 'cloudimage-responsive-utils';
import {
  Component, Input, Output, ViewChild, ElementRef, EventEmitter, SimpleChanges,
  OnInit, OnChanges, OnDestroy, AfterViewInit, Inject, PLATFORM_ID
} from '@angular/core';
import { CIService } from '../lib.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'ci-img',
  templateUrl: './img.component.html',
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('imgElem') imgElem: ElementRef;

  @Input() class = '';
  @Input() alt: string;
  
  @Input() src: string = '';
  @Input() doNotReplaceURL = this.ciService.config.doNotReplaceURL;
  @Input() disableAnimation = false;
  @Input() width: string;
  @Input() height: string;
  @Input() params = this.ciService.config.params;
  @Input() sizes: { [key: string] : any };
  @Input() ratio: number;
  @Input() lazyLoading = this.ciService.config.lazyLoading;
  @Input() autoAlt = false;
  @Input() placeholderBackground = this.ciService.config.placeholderBackground;
  // TODO add offset to lazyload
  @Input() offset = this.ciService.config.lazyLoadOffset;
  @Input() preserveSize: boolean;
  @Input() operation: string;

  @Output() onImgLoad: EventEmitter<Event> = new EventEmitter<Event>();

  // Internal states
  lowQualityPreview = true;
  loaded = false;
  previewLoaded = false;
  loadedImageDim: {
    width: number;
    height: number;
    ratio: number;
  }
  isSsr: boolean;
  isProcessed = false;
  preview: boolean;
  cloudimgURL = '';
  previewCloudimgURL: string;
  cloudimgSRCSET: { dpr: string; url: any; }[];
  delay = this.ciService.config.delay;
  resizeObservable$: Observable<Event>;
  resizeSubscription: Subscription;
  windowInnerWidthOld: number;

  get isLazyLoadingMode(): boolean {
    if (this.isSsr) {
      return false;
    }

    return this.lazyLoading;
  }

  constructor(
    private ciService: CIService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isSsr = isPlatformServer(this.platformId);
    this.windowInnerWidthOld = this.ciService.getWindowInnerWidth();
  }

  ngOnDestroy(): void {
    if (!this.isSsr) {
      this.resizeSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (!this.isSsr) {
      this.resizeObservable$ = fromEvent(window, 'resize').pipe(debounceTime(500));
      this.resizeSubscription = this.resizeObservable$.subscribe(() => {
        const windowInnerWidth = this.ciService.getWindowInnerWidth();

        if (this.windowInnerWidthOld < windowInnerWidth) {
          this.processImage();
        }
        this.windowInnerWidthOld = windowInnerWidth;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const srcChanged = changes.src && changes.src.previousValue !== changes.src.currentValue && !changes.src.firstChange;
    const ratioChanged = changes.ratio && changes.ratio.previousValue !== changes.ratio.currentValue && !changes.ratio.firstChange;

    if (srcChanged || ratioChanged) {
      this.processImage();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.processImage();
    }, this.delay);
  }

  processImage() {
    const imgNode = this.imgElem.nativeElement;
    const imgProps = this.getProps();
    const { imgNodeSRC, params, sizes, adaptive } = imgProps;

    const {config} = this.ciService;
    const { baseURL, presets, minLowQualityWidth, devicePixelRatioList, params: configParams = {} } = config;

    if (!imgNodeSRC) return;

    let [src, svg] = getImgSRC(imgNodeSRC, baseURL);
    let previewCloudimgURL, size;

    if (adaptive) {
      size = getBreakpoint(sizes, presets);
      if(size){
        if(size.params.src){
          [src, svg] = getImgSRC(size.params.src, baseURL);
        }
      }
    }

    const containerProps = determineContainerProps({ imgNode, config, size, ...imgProps });
    const { width } = containerProps;
    const preview = !this.isSsr ?
      this.lowQualityPreview && isLowQualityPreview(adaptive, width, svg, minLowQualityWidth) : null;
    const generateURLbyDPR = devicePixelRatio =>
      !adaptive && svg ?
        src :
        generateURL({ src, params, config, containerProps, devicePixelRatio });
    const cloudimgURL = !this.isSsr ?
      generateURLbyDPR(Number((window.devicePixelRatio).toFixed(1))) : null;
    const cloudimgSRCSET = !this.isSsr ?
      devicePixelRatioList.map(dpr => ({ dpr: dpr.toString(), url: generateURLbyDPR(dpr) })) : null;
    const operation = params.func || configParams.func;

    if (preview) {
      previewCloudimgURL = getPreviewSRC({ src, params, config, containerProps });
    }

    this.cloudimgURL = cloudimgURL;
    this.previewCloudimgURL = previewCloudimgURL;
    this.cloudimgSRCSET = cloudimgSRCSET,
    this.isProcessed = true;
    this.preview = preview;
    this.operation = operation;
  }

  getProps() {
    return {
      imgNodeSRC: this.src,
      imgNodeWidth: this.width,
      imgNodeHeight: this.height,
      imgNodeRatio: this.ratio,
      params: processParams(this.params),
      sizes: this.sizes,
      adaptive: !!this.sizes,
      doNotReplaceImageUrl: this.doNotReplaceURL,
    };
  }

  onImageLoad (event: Event) {
    this.updateLoadedImageSize(event.target as HTMLImageElement);
    this.loaded = true;

    this.onImgLoad.emit(event);
  };

  onPreviewLoaded(event: Event) {
    if (this.previewLoaded) return;

    this.updateLoadedImageSize(event.target as HTMLImageElement);
    this.previewLoaded = true;
  };

  getcloudimgSRCSET(){
    if(this.cloudimgSRCSET && !this.isSsr){
      return  this.cloudimgSRCSET
        .map(({ dpr, url }) => `${url} ${dpr}x`).join(', ');
    }

    return null;
  } 

  get pictureAlt() {
    return !this.alt && this.autoAlt ? this.getAlt(this.src) : this.alt;
  }

  get previewWrapperStyles(){
    return styles.previewWrapper();
  }

  get imgStyles() {
    return styles.img({ 
      preview: this.preview, 
      loaded: this.loaded, 
      operation: this.operation
    });
  }

  get imageStyles() {
    return styles.image({
      preserveSize: this.preserveSize,
      imgNodeWidth: this.width,
      imgNodeHeight: this.height,
      operation: this.operation,
    });
  } 

  get previewImgStyles(){
    return styles.previewImg({ loaded: this.loaded, operation: this.operation });
  }

  get pictureStyles(){
    return styles.picture({
      preserveSize: this.preserveSize,
      imgNodeWidth: this.width,
      imgNodeHeight: this.height,
      ratio: this.ratio || this.loadedImageDim?.ratio,
      previewLoaded: this.previewLoaded,
      loaded: this.loaded,
      placeholderBackground: this.placeholderBackground,
      operation: this.operation,
    });
  }

  get pictureClassName(){
    return `${this.class} cloudimage-image ${this.loaded ? 'loaded' : 'loading'}`.trim();
  } 

  private updateLoadedImageSize(image: HTMLImageElement) {
    this.loadedImageDim = {
      width: image.naturalWidth,
      height: image.naturalHeight,
      ratio: image.naturalWidth / image.naturalHeight,
    }
  }

  private getAlt (name: string) {
    if (!name) return;

    const index = name.indexOf('.');
    return name.slice(0, index);
  };
}
