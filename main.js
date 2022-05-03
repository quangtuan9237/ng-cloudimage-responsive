"use strict";
(self["webpackChunkexample"] = self["webpackChunkexample"] || []).push([["main"],{

/***/ 5390:
/*!***************************************************!*\
  !*** ./projects/example/src/app/app.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _containerBox_containerBox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containerBox/containerBox.component */ 7254);
/* harmony import */ var lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib */ 4610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ 90);








function AppComponent_div_247_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-container-box")(2, "ci-img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " original: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r1.src)("ratio", image_r1.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](image_r1.original_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", "https://cloudimage.public.airstore.io/demo/" + image_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

var _c0 = function _c0() {
  return {
    w: 400,
    h: 150
  };
};

var _c1 = function _c1() {
  return {
    r: 1
  };
};

var _c2 = function _c2() {
  return {
    h: 560
  };
};

var _c3 = function _c3() {
  return {
    w: "50vw"
  };
};

var _c4 = function _c4() {
  return {
    w: "55vw",
    h: 300
  };
};

var _c5 = function _c5() {
  return {
    w: 1200
  };
};

var _c6 = function _c6(a0, a1, a2, a3, a4, a5) {
  return {
    "(max-width: 575px)": a0,
    "(min-width): 576px)": a1,
    "(min-width: 620px)": a2,
    "(min-width: 768px)": a3,
    "(min-width: 992px)": a4,
    "(min-width: 1200px)": a5
  };
};

var AppComponent = /*#__PURE__*/function () {
  function AppComponent() {
    (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.initialization = "import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { CIModule, CIConfig } from 'ng-cloudimage-responsive';\nimport { AppComponent } from './app.component';\n\nconst ciConfig = {\n  token: 'demo',\n  baseUrl: 'https://jolipage.airstore.io/'\n};\n\n@NgModule({\n    declarations: [ AppComponent ],\n    imports: [ BrowserModule, CIModule ],\n    providers: [\n      {provide: CIConfig, useValue: ciConfig}\n    ],\n    bootstrap: [ AppComponent ]\n})\nexport class MyAppModule {}";
    this.implement = "<ci-img src=\"img.jpg\" alt=\"Demo image\" ratio=\"1.5\"></ci-img>";
    this.images = [{
      src: 'luca-bravo-121932.jpg',
      ratio: 4.538 / 1.932,
      original_size: '4.8mb'
    }, {
      src: 'alain.jpg',
      ratio: 6 / 4,
      original_size: '5.8mb'
    }, {
      src: 'ameen-fahmy.jpg',
      ratio: 2.926 / 1.953,
      original_size: '0.5mb'
    }, {
      src: 'tim-patch.jpg',
      ratio: 5.464 / 3.640,
      original_size: '7.5mb'
    }, {
      src: 'veeterzy.jpg',
      ratio: 5.760 / 3.840,
      original_size: '8.5mb'
    }, {
      src: 'dino-reichmuth.jpg',
      ratio: 7.833 / 5.304,
      original_size: '11.9mb'
    }, {
      src: 'inma-lesielle.jpg',
      ratio: 4.032 / 2.688,
      original_size: '3.0mb'
    }, {
      src: 'jeremy-thomas.jpg',
      ratio: 5.005 / 3.417,
      original_size: '5.2mb'
    }, {
      src: 'jordan-hubbard.jpg',
      ratio: 5 / 3.333,
      original_size: '3.0mb'
    }, {
      src: 'jp-valery.jpg',
      ratio: 5.472 / 3.648,
      original_size: '2.2mb'
    }, {
      src: 'kira-laktionov.jpg',
      ratio: 4.032 / 2.688,
      original_size: '2.6mb'
    }, {
      src: 'michael-d-beckwith-6.jpg',
      ratio: 5.184 / 3.456,
      original_size: '5.2mb'
    }, {
      src: 'michael-d-beckwith.jpg',
      ratio: 8.192 / 5.461,
      original_size: '9.2mb'
    }, {
      src: 'ricky-kharawala.jpg',
      ratio: 8.192 / 5.461,
      original_size: '9.2mb'
    }, {
      src: 'rodolfo-marques.jpg',
      ratio: 6 / 4,
      original_size: '8.2mb'
    }, {
      src: 'dino-reichmuth-9.jpg',
      ratio: 6.616 / 3.744,
      b: 1.76,
      original_size: '9.7mb'
    }, {
      src: 'ishan-seefromthesky.jpg',
      ratio: 5.464 / 3.070,
      original_size: '4.2mb'
    }, {
      src: 'dino-reichmuth-1.jpg',
      ratio: 7.952 / 5.622,
      original_size: '9.2mb'
    }, {
      src: 'dino-reichmuth-11.jpg',
      ratio: 5.256 / 7.880,
      original_size: '11mb'
    }];
  }

  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "getDevicePixelRatio",
    value: function getDevicePixelRatio() {
      return Math.round(window.devicePixelRatio || 1);
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 382,
  vars: 24,
  consts: [["id", "main", 1, "wrapper"], [1, "home"], [1, "container"], ["href", "https://scaleflex.github.io/ng-cloudimage-responsive/", 1, "logo"], [1, "reference-buttons"], ["target", "_blank", "href", "https://github.com/Scaleflex/ng-cloudimage-responsive/subscription", "data-icon", "octicon-eye", "aria-label", "Watch Scaleflex/ng-cloudimage-responsive on GitHub", 1, "github-button"], ["target", "_blank", "href", "https://github.com/Scaleflex/ng-cloudimage-responsive", "data-icon", "octicon-star", "aria-label", "Star Scaleflex/ng-cloudimage-responsive on GitHub", 1, "github-button"], ["target", "_blank", "href", "https://github.com/Scaleflex/ng-cloudimage-responsive/fork", "data-icon", "octicon-repo-forked", "aria-label", "Fork Scaleflex/ng-cloudimage-responsive on GitHub", 1, "github-button"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?text=Responsive%20images,%20now%20easier%20than%20ever&url=https://scaleflex.github.io/ng-cloudimage-responsive/&via=cloudimage&hashtags=images,cloudimage,responsive_images,lazy_loading,web_acceleration,image_managementimage_resizing,image_compression,image_optimization,image_CDN,image_CDNwebp,jpeg_xr,jpg_optimization,image_resizing_and_CDN,cropresize", 1, "twitter-share-button", "btn", "btn-info"], [1, "actions-wrapper"], ["id", "view-github-btn", "href", "https://github.com/scaleflex/ng-cloudimage-responsive", "target", "_blank", 1, "btn", "btn-primary"], ["href", "https://codesandbox.io/s/qr6zzr8rj?fontsize=14&module=%2Fsrc%2Fapp%2Fapp.module.ts", "target", "_blank", 1, "btn", "btn-light", 2, "margin-left", "5px"], ["href", "https://github.com/scaleflex/ng-cloudimage-responsive", "target", "_blank"], ["src", "https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png", "alt", "Fork me on GitHub", 1, "fork-me-on-github"], ["href", "https://www.filerobot.com/", 1, "robot-icon"], ["id", "robot-icon", "src", "https://demo.cloudimg.io/width/800/foil1/https://cdn.scaleflex.it/filerobot/assets/robot-icon-left.png", "alt", "", 2, "width", "100%"], [3, "src", "ratio"], [2, "background", "#fff"], [1, "container", "ready-to-start"], [1, "text-center"], ["href", "https://www.cloudimage.io/en/home"], [2, "margin-top", "20px"], ["href", "https://medium.com/cloudimage/cloudimage-resizes-your-images-saves-time-accelerates-your-website-and-increases-your-conversion-eb128903d4c2"], ["target", "_blank", "href", "https://cdn.scaleflex.it/demo/redcharlie.jpg"], [1, "table", "table-bordered"], ["rowspan", "2", 2, "vertical-align", "middle"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/400/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/800/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/600/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/1200/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/1600/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], ["target", "_blank", "href", "https://demo.cloudimg.io/width/2400/foil1/https://cdn.scaleflex.it/demo/redcharlie.jpg"], [1, "ready-to-start"], [1, "container-fluid", 2, "max-width", "1200px", "margin-left", "auto", "margin-right", "auto", "padding-top", "20px"], [1, "row", "images-in-columns"], [1, "col-12"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-6", "col-lg-7"], [3, "src", "operation", "sizes"], ["href", "https://cloudimage.public.airstore.io/demo/dino-reichmuth-1.jpg", "target", "_blank"], [1, "col-md-6", "col-lg-5", "desc-wrapper-with-media-query"], ["href", "https://www.cloudimage.io/en/register_page"], ["id", "plugin-version-switcher", 1, "plugin-version-switcher", "btn-group", "btn-toggle"], ["id", "js-version-box"], [1, "action-wrapper", "first-action"], [1, "highlight"], [1, "javascript"], [1, "action-wrapper", "second-action"], [3, "highlight"], [1, "action-wrapper", "third-action"], [1, "action-wrapper", "forth-action"], ["href", "https://github.com/scaleflex/ng-cloudimage-responsive#table-of-contents", "target", "_blank"], [2, "text-align", "center"], ["href", "mailto:hello@cloudimage.io"], [1, "container", "ready-to-start", "filerobot-ui-family"], [1, "col-sm-3", "filerobot-ui-family-label", 2, "max-width", "200px", "min-width", "200px"], [1, "col-sm-9", "filerobot-ui-family-libs", 2, "max-width", "calc(100% - 200px)"], ["target", "_blank", "href", "https://github.com/scaleflex/js-cloudimage-responsive"], ["target", "_blank", "href", "https://github.com/scaleflex/react-cloudimage-responsive"], ["target", "_blank", "href", "https://github.com/scaleflex/js-cloudimage-360-view"], ["target", "_blank", "href", "https://github.com/scaleflex/filerobot-uploader"], ["target", "_blank", "href", "https://github.com/scaleflex/filerobot-image-editor"], [1, "copyright"], [1, "team-desc", "col-sm-8"], ["href", "https://www.cloudimage.io/en/home", "target", "_blank"], [2, "margin-top", "10px"], ["href", "https://www.scaleflex.it/en/home", "target", "_blank"], [1, "footer-menu", "col-sm-4"], ["href", "https://github.com/scaleflex/ng-cloudimage-responsive/issues", "target", "_blank"], ["id", "device-pixel-ratio", 1, "device-pixel-ratio"], [1, "col-6"], ["target", "_blank", 3, "href"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Angular Cloudimage Responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Watch");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Star");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Fork");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Tweet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h1")(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Responsive images");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, ", now easier than\xA0ever.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Make your existing images ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " without creating new images. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " one high quality original image and the plugin will ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "resize, compress and accelerate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " images across the World in your site for all devices. The plugin supports ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "lazy load");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "fancy animation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " on image load. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9)(38, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "View on GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Edit on CodeSandbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "app-container-box")(48, "ci-img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 17)(50, "section", 18)(51, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "ul")(54, "li")(55, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Resize large images");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " to the size needed by your design and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "generate multiple images");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " for different device screen size ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Strip all unnecessary metadata and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "optimize JPEG, PNG and GIF compression");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Efficiently ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "lazy load images");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " to speed initial page load and save bandwidth");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Use the low quality image with \"blur-up\" technique to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "show a preview");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " of the image ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "while it loads");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li")(78, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Hold the image position");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " so your page doesn't jump while images load");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "section", 18)(82, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "How it works");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " The plugin detects the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "width of image's container");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "pixel ratio density");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " of your device to load the exact image size you need. It ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "processes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " images via ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Cloudimage.io");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " service which offers comprehensive ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "automated image optimization");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " solutions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " When an image is first loaded on your website or mobile app, Cloudimage's resizing servers will ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "download");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " your origin image from your origin server, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "resize");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " it and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "deliver");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " to your user via lightning-fast Content Delivery Networks (CDNs). Once the image is resized in the format of your choice, Cloudimage will send it to a Content Delivery Network, which will in turn deliver it rocket fast to your visitors, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "responsively across various screen sizes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Read the following ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "article");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " to learn more about Cloudimage.io service. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 17)(121, "section", 18)(122, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "In numbers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " We have original image stored via CDN with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "6240\xD74160 px resolution");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "8.7 mb size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "https://cdn.scaleflex.it/demo/redcharlie.jpg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, " link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " In the table below we can see what size and resolution will be loaded depending on the image's container. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "table", 24)(138, "thead")(139, "tr")(140, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "container size");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "pixel ratio density");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "calculated width");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "result: dimantion | size | link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "tbody")(149, "tr")(150, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, " 400px ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "400px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "400\xD7267 | 18.7 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "tr")(161, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "800px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "800\xD7533 | 58.1 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "tr")(170, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, " 570px ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "600px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "600\xD7400 | 35.4 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "tr")(181, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "1200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "1200x800 | 119 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "tr")(190, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, " 720px ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "800px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "800\xD7533 | 58.1 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "tr")(201, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "1600px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "1600px\xD71066 | 200 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "tr")(210, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, " 1170px ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "1200px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "1200x800 | 119 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "tr")(221, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "2400px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "2400x1600 | 405 kb | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, " * The plugin ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "rounds container width");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, " to next possible value which can be divided by 100 without the remainder. It's done for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "cache reasons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, " so that we cache not all images different by 1px, but only 100px, 200px, 300px\xA0\u2026 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "section", 32)(238, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "Gallery demo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "Change the size of your browser's window and reload the page to see how the Cloudimage Responsive plugin will deliver an optimized image for the screen size.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 33)(243, "div", 34)(244, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "app-container-box")(246, "ci-img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](247, AppComponent_div_247_Template, 9, 4, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 37)(249, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "ci-img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, " original: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "9.2mb");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, " link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 41)(259, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "You can control your image size/ratio/crop with media query breakpoints");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Resize your browser window to see how it works");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "pre")(264, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "\n<ci-img\n  operation=\"crop\"\n  [src]=\"images[18].src\"\n  [sizes]=\"'\n    sm 400x200,\n    (min-width: 620px) 200x60,\n    md 250x350,\n    lg 350x300,\n    xl 400x250\n  '\"\n</ci-img>\n      ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "section", 18)(267, "h2", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Ready to get started?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "To use the plugin, you will need a Cloudimage token. Don't worry, it only takes seconds to get one by registering ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, ". Once your token is created, you can configure it as described below. This token allows you to use 25GB of image cache and 25GB of worldwide CDN traffic per month for free.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "section", 2)(275, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](276, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 44)(278, "div", 45)(279, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Install using npm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "figure", 46)(282, "pre")(283, "code", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "npm install --save ng-cloudimage-responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "div")(286, "div", 48)(287, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, " initialize it with your ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "token");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, " and the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "baseUrl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, " of your image storage using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "CloudimageProvider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "figure", 46)(298, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](299, "code", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, " Get your Cloudimage tokens ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 50)(306, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, " Implement it, just using the Img component: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "figure", 46)(309, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "code", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "p")(312, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "NOTE: \"ratio\" is recommended to prevent page layout jumping. The parameter is used to calculate image height to hold the image position while image is loading. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "div", 51)(315, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, " \u2026and you're done! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, " Visit the full documentation here. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "section", 53)(320, "div", 18)(321, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "Any questions?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, " Contact us at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "hello@cloudimage.io");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, ", our experts will be happy to help! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "footer")(329, "div", 17)(330, "section", 55)(331, "div", 37)(332, "div", 56)(333, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "Filerobot UI family:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "div", 57)(336, "ul")(337, "li")(338, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](339, "JS Cloudimage Responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "li")(341, "a", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "React Cloudimage Responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "li")(344, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "JS Cloudimage 360 view");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "li")(347, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, "Uploader");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "li")(350, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "Image Editor");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](352, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "div", 63)(354, "div", 2)(355, "div", 37)(356, "div", 64)(357, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](358, "Made with \u2764 in 2019 in Paris, Munich and Sofia by the Scaleflex team, the guys behind ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](359, "a", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "Cloudimage.io");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](365, "Scaleflex team");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, ". All rights reserved. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "div", 68)(368, "ul")(369, "li")(370, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "View GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "li")(373, "a", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "Current Issues");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "li")(376, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](377, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, " Your device pixel ratio: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](381);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.images[0].src)("ratio", ctx.images[0].ratio);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](198);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.images[8].src)("ratio", ctx.images[8].ratio);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.images.slice(1, 7));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.images[18].src)("operation", "crop")("sizes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](17, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c5)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.initialization);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("highlight", ctx.implement);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getDevicePixelRatio());
    }
  },
  directives: [_containerBox_containerBox_component__WEBPACK_IMPORTED_MODULE_2__["default"], lib__WEBPACK_IMPORTED_MODULE_4__.ImgComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.Highlight],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.eot');\n  src: url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.eot?#iefix') format('embedded-opentype'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.woff2') format('woff2'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.woff') format('woff'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.ttf') format('truetype'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-Medium.svg#HelveticaNeue-Medium') format('svg');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Helvetica Neue';\n  src: url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.eot');\n  src: url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.eot?#iefix') format('embedded-opentype'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.woff2') format('woff2'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.woff') format('woff'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.ttf') format('truetype'),\n  url('https://scaleflex.ultrafast.io/https://cdn.scaleflex.it/filerobot/assets/fonts/helvetica-neue/HelveticaNeue-LightExt.svg#HelveticaNeue-LightExt') format('svg');\n  font-weight: 300;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHZldGljYS1uZXVlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixrSUFBa0k7RUFDbEk7Ozs7a0tBSWdLO0VBQ2hLLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0lBQW9JO0VBQ3BJOzs7O3NLQUlvSztFQUNwSyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImhlbHZldGljYS1uZXVlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJztcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLU1lZGl1bS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLU1lZGl1bS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgdXJsKCdodHRwczovL3NjYWxlZmxleC51bHRyYWZhc3QuaW8vaHR0cHM6Ly9jZG4uc2NhbGVmbGV4Lml0L2ZpbGVyb2JvdC9hc3NldHMvZm9udHMvaGVsdmV0aWNhLW5ldWUvSGVsdmV0aWNhTmV1ZS1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpLFxuICB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gIHVybCgnaHR0cHM6Ly9zY2FsZWZsZXgudWx0cmFmYXN0LmlvL2h0dHBzOi8vY2RuLnNjYWxlZmxleC5pdC9maWxlcm9ib3QvYXNzZXRzL2ZvbnRzL2hlbHZldGljYS1uZXVlL0hlbHZldGljYU5ldWUtTWVkaXVtLnN2ZyNIZWx2ZXRpY2FOZXVlLU1lZGl1bScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnO1xuICBzcmM6IHVybCgnaHR0cHM6Ly9zY2FsZWZsZXgudWx0cmFmYXN0LmlvL2h0dHBzOi8vY2RuLnNjYWxlZmxleC5pdC9maWxlcm9ib3QvYXNzZXRzL2ZvbnRzL2hlbHZldGljYS1uZXVlL0hlbHZldGljYU5ldWUtTGlnaHRFeHQuZW90Jyk7XG4gIHNyYzogdXJsKCdodHRwczovL3NjYWxlZmxleC51bHRyYWZhc3QuaW8vaHR0cHM6Ly9jZG4uc2NhbGVmbGV4Lml0L2ZpbGVyb2JvdC9hc3NldHMvZm9udHMvaGVsdmV0aWNhLW5ldWUvSGVsdmV0aWNhTmV1ZS1MaWdodEV4dC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLUxpZ2h0RXh0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICB1cmwoJ2h0dHBzOi8vc2NhbGVmbGV4LnVsdHJhZmFzdC5pby9odHRwczovL2Nkbi5zY2FsZWZsZXguaXQvZmlsZXJvYm90L2Fzc2V0cy9mb250cy9oZWx2ZXRpY2EtbmV1ZS9IZWx2ZXRpY2FOZXVlLUxpZ2h0RXh0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgdXJsKCdodHRwczovL3NjYWxlZmxleC51bHRyYWZhc3QuaW8vaHR0cHM6Ly9jZG4uc2NhbGVmbGV4Lml0L2ZpbGVyb2JvdC9hc3NldHMvZm9udHMvaGVsdmV0aWNhLW5ldWUvSGVsdmV0aWNhTmV1ZS1MaWdodEV4dC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gIHVybCgnaHR0cHM6Ly9zY2FsZWZsZXgudWx0cmFmYXN0LmlvL2h0dHBzOi8vY2RuLnNjYWxlZmxleC5pdC9maWxlcm9ib3QvYXNzZXRzL2ZvbnRzL2hlbHZldGljYS1uZXVlL0hlbHZldGljYU5ldWUtTGlnaHRFeHQuc3ZnI0hlbHZldGljYU5ldWUtTGlnaHRFeHQnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbiJdfQ== */"]
});

/***/ }),

/***/ 2196:
/*!************************************************!*\
  !*** ./projects/example/src/app/app.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; },
/* harmony export */   "hljsLanguages": function() { return /* binding */ hljsLanguages; }
/* harmony export */ });
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5390);
/* harmony import */ var lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib */ 4610);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ 90);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ 9625);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 8866);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containerBox_containerBox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containerBox/containerBox.component */ 7254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











function hljsLanguages() {
  return [{
    name: 'typescript',
    func: (highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_3___default())
  }, {
    name: 'xml',
    func: (highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default())
  }];
}
var ciConfig = {
  token: 'demo',
  baseUrl: 'https://cloudimage.public.airstore.io/demo/',
  // queryString: '?&size_info=1&v2',
  lazyLoadOffset: 100,
  lazyLoading: true,
  placeholderBackground: '#e1e1e1'
};
var AppModule = /*#__PURE__*/(0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: lib__WEBPACK_IMPORTED_MODULE_7__.CI_CONFIG,
    useValue: ciConfig
  }],
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, lib__WEBPACK_IMPORTED_MODULE_7__.CIModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HighlightModule.forRoot({
    languages: hljsLanguages
  })]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _containerBox_containerBox_component__WEBPACK_IMPORTED_MODULE_5__["default"]],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, lib__WEBPACK_IMPORTED_MODULE_7__.CIModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__.HighlightModule]
  });
})();

/***/ }),

/***/ 7254:
/*!*************************************************************************!*\
  !*** ./projects/example/src/app/containerBox/containerBox.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContainerBoxComponent; }
/* harmony export */ });
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





var _c0 = ["containerElem"];

var ContainerBoxComponent = /*#__PURE__*/function () {
  function ContainerBoxComponent() {
    (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContainerBoxComponent);
  }

  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContainerBoxComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.resizeSubscription$.unsubscribe();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.width = this.containerElem.nativeElement.offsetWidth;
      this.resizeObservable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(400));
      this.resizeSubscription$ = this.resizeObservable$.subscribe(function () {
        _this.width = _this.containerElem.nativeElement.offsetWidth;
      });
    }
  }]);

  return ContainerBoxComponent;
}();



ContainerBoxComponent.ɵfac = function ContainerBoxComponent_Factory(t) {
  return new (t || ContainerBoxComponent)();
};

ContainerBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ContainerBoxComponent,
  selectors: [["app-container-box"]],
  viewQuery: function ContainerBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.containerElem = _t.first);
    }
  },
  decls: 6,
  vars: 1,
  consts: [[1, "container-width-box"], ["containerElem", ""]],
  template: function ContainerBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "container width: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.width);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 9566:
/*!**********************************************************!*\
  !*** ./projects/example/src/environments/environment.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 1986:
/*!**************************************!*\
  !*** ./projects/example/src/main.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2196);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9566);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ }),

/***/ 4610:
/*!********************************************************!*\
  !*** ./dist/lib/fesm2015/ng-cloudimage-responsive.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CIModule": function() { return /* binding */ CIModule; },
/* harmony export */   "CIService": function() { return /* binding */ CIService; },
/* harmony export */   "CI_CONFIG": function() { return /* binding */ CI_CONFIG; },
/* harmony export */   "ImgComponent": function() { return /* binding */ ImgComponent; }
/* harmony export */ });
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 507);
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudimage-responsive-utils */ 5763);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 5600);












var CI_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('ci.config');

var CIService = /*#__PURE__*/function () {
  function CIService(ciConfig, platformId) {
    (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CIService);

    this.platformId = platformId;
    this.isSsr = false;
    this.config = {};
    this.isSsr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId);
    var _ciConfig$token = ciConfig.token,
        token = _ciConfig$token === void 0 ? '' : _ciConfig$token,
        _ciConfig$domain = ciConfig.domain,
        domain = _ciConfig$domain === void 0 ? ciConfig.customDomain ? ciConfig.customDomain : 'cloudimg.io' : _ciConfig$domain,
        _ciConfig$customDomai = ciConfig.customDomain,
        customDomain = _ciConfig$customDomai === void 0 ? false : _ciConfig$customDomai,
        _ciConfig$lazyLoading = ciConfig.lazyLoading,
        lazyLoading = _ciConfig$lazyLoading === void 0 ? true : _ciConfig$lazyLoading,
        _ciConfig$lazyLoadOff = ciConfig.lazyLoadOffset,
        lazyLoadOffset = _ciConfig$lazyLoadOff === void 0 ? 100 : _ciConfig$lazyLoadOff,
        _ciConfig$placeholder = ciConfig.placeholderBackground,
        placeholderBackground = _ciConfig$placeholder === void 0 ? '#f4f4f4' : _ciConfig$placeholder,
        baseUrl = ciConfig.baseUrl,
        baseURL = ciConfig.baseURL,
        _ciConfig$apiVersion = ciConfig.apiVersion,
        apiVersion = _ciConfig$apiVersion === void 0 ? 'v7' : _ciConfig$apiVersion,
        presets = ciConfig.presets,
        _ciConfig$ratio = ciConfig.ratio,
        ratio = _ciConfig$ratio === void 0 ? 1.5 : _ciConfig$ratio,
        _ciConfig$params = ciConfig.params,
        params = _ciConfig$params === void 0 ? 'org_if_sml=1' : _ciConfig$params,
        _ciConfig$imageSizeAt = ciConfig.imageSizeAttributes,
        imageSizeAttributes = _ciConfig$imageSizeAt === void 0 ? 'use' : _ciConfig$imageSizeAt,
        _ciConfig$exactSize = ciConfig.exactSize,
        exactSize = _ciConfig$exactSize === void 0 ? false : _ciConfig$exactSize,
        _ciConfig$doNotReplac = ciConfig.doNotReplaceURL,
        doNotReplaceURL = _ciConfig$doNotReplac === void 0 ? false : _ciConfig$doNotReplac,
        _ciConfig$limitFactor = ciConfig.limitFactor,
        limitFactor = _ciConfig$limitFactor === void 0 ? 100 : _ciConfig$limitFactor,
        _ciConfig$devicePixel = ciConfig.devicePixelRatioList,
        devicePixelRatioList = _ciConfig$devicePixel === void 0 ? cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.CONSTANTS.DEVICE_PIXEL_RATIO_LIST : _ciConfig$devicePixel,
        _ciConfig$lowQualityP = ciConfig.lowQualityPreview;
    _ciConfig$lowQualityP = _ciConfig$lowQualityP === void 0 ? {} : _ciConfig$lowQualityP;
    var _ciConfig$lowQualityP2 = _ciConfig$lowQualityP.minImgWidth,
        minImgWidth = _ciConfig$lowQualityP2 === void 0 ? 250 : _ciConfig$lowQualityP2,
        _ciConfig$autoAlt = ciConfig.autoAlt,
        autoAlt = _ciConfig$autoAlt === void 0 ? false : _ciConfig$autoAlt,
        delay = ciConfig.delay;
    this.config = {
      token: token,
      domain: domain,
      customDomain: customDomain,
      lazyLoading: lazyLoading,
      lazyLoadOffset: lazyLoadOffset,
      placeholderBackground: placeholderBackground,
      baseURL: baseUrl || baseURL,
      ratio: ratio,
      exactSize: exactSize,
      presets: presets ? presets : {
        xs: '(max-width: 575px)',
        sm: '(min-width: 576px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 992px)',
        xl: '(min-width: 1200px)' // from 1200    USUALSCREEN

      },
      params: (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.processParams)(params),
      apiVersion: apiVersion,
      previewQualityFactor: 10,
      doNotReplaceURL: doNotReplaceURL,
      devicePixelRatioList: devicePixelRatioList,
      limitFactor: limitFactor,
      minLowQualityWidth: minImgWidth,
      imageSizeAttributes: imageSizeAttributes,
      autoAlt: autoAlt,
      delay: delay
    };
  }

  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CIService, [{
    key: "getWindowInnerWidth",
    value: function getWindowInnerWidth() {
      return this.isSsr ? 1000 : window.innerWidth;
    }
  }]);

  return CIService;
}();

CIService.ɵfac = function CIService_Factory(t) {
  return new (t || CIService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](CI_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
};

CIService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: CIService,
  factory: CIService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CIService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [CI_CONFIG]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

var _c0 = ["imgElem"];

function ImgComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}

function ImgComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "img", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_1_ng_container_0_Template_img_load_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return !ctx_r9.isSsr && ctx_r9.onImageLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r5.imageStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r5.pictureClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", ctx_r5.pictureAlt)("src", !ctx_r5.isSsr ? ctx_r5.cloudimgURL : null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("srcset", ctx_r5.getcloudimgSRCSET(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ImgComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_1_ng_template_1_Template_img_load_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return !ctx_r12.isSsr && ctx_r12.onImageLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r7.imageStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r7.pictureClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", ctx_r7.pictureAlt)("lazyLoad", !ctx_r7.isSsr ? ctx_r7.getcloudimgSRCSET() : null)("useSrcset", true);
  }
}

function ImgComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ImgComponent_ng_template_1_ng_container_0_Template, 3, 7, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImgComponent_ng_template_1_ng_template_1_Template, 2, 7, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isLazyLoadingMode)("ngIfElse", _r6);
  }
}

function ImgComponent_ng_template_3_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_3_ng_container_2_div_1_Template_img_load_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r19.onPreviewLoaded($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r18.previewWrapperStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r18.previewImgStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r18.previewCloudimgURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ImgComponent_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImgComponent_ng_template_3_ng_container_2_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_3_ng_container_2_Template_img_load_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return !ctx_r21.isSsr && ctx_r21.onImageLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.preview && ctx_r15.operation !== "bound");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r15.imgStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", ctx_r15.pictureAlt)("src", !ctx_r15.isSsr ? ctx_r15.cloudimgURL : null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("srcset", ctx_r15.getcloudimgSRCSET(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function ImgComponent_ng_template_3_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_3_ng_template_3_div_0_Template_img_load_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r24.onPreviewLoaded($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r23.previewWrapperStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r23.previewImgStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", ctx_r23.previewCloudimgURL);
  }
}

function ImgComponent_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ImgComponent_ng_template_3_ng_template_3_div_0_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("load", function ImgComponent_ng_template_3_ng_template_3_Template_img_load_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return !ctx_r26.isSsr && ctx_r26.onImageLoad($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.preview && ctx_r17.operation !== "bound");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r17.imgStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alt", ctx_r17.pictureAlt)("lazyLoad", !ctx_r17.isSsr ? ctx_r17.getcloudimgSRCSET() : null)("useSrcset", true);
  }
}

function ImgComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ImgComponent_ng_template_3_ng_container_2_Template, 3, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ImgComponent_ng_template_3_ng_template_3_Template, 2, 6, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx_r4.pictureStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r4.pictureClassName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isLazyLoadingMode)("ngIfElse", _r16);
  }
}

var ImgComponent = /*#__PURE__*/function () {
  function ImgComponent(ciService, platformId) {
    (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ImgComponent);

    this.ciService = ciService;
    this.platformId = platformId;
    this.class = '';
    this.src = '';
    this.doNotReplaceURL = this.ciService.config.doNotReplaceURL;
    this.disableAnimation = false;
    this.params = this.ciService.config.params;
    this.lazyLoading = this.ciService.config.lazyLoading;
    this.autoAlt = false;
    this.placeholderBackground = this.ciService.config.placeholderBackground; // TODO add offset to lazyload

    this.offset = this.ciService.config.lazyLoadOffset;
    this.onImgLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(); // Internal states

    this.lowQualityPreview = true;
    this.loaded = false;
    this.previewLoaded = false;
    this.isProcessed = false;
    this.cloudimgURL = '';
    this.delay = this.ciService.config.delay;
    this.isSsr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId);
    this.windowInnerWidthOld = this.ciService.getWindowInnerWidth();
  }

  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ImgComponent, [{
    key: "isLazyLoadingMode",
    get: function get() {
      if (this.isSsr) {
        return false;
      }

      return this.lazyLoading;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (!this.isSsr) {
        this.resizeSubscription.unsubscribe();
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (!this.isSsr) {
        this.resizeObservable$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500));
        this.resizeSubscription = this.resizeObservable$.subscribe(function () {
          var windowInnerWidth = _this.ciService.getWindowInnerWidth();

          if (_this.windowInnerWidthOld < windowInnerWidth) {
            _this.processImage();
          }

          _this.windowInnerWidthOld = windowInnerWidth;
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var srcChanged = changes.src && changes.src.previousValue !== changes.src.currentValue && !changes.src.firstChange;
      var ratioChanged = changes.ratio && changes.ratio.previousValue !== changes.ratio.currentValue && !changes.ratio.firstChange;

      if (srcChanged || ratioChanged) {
        this.processImage();
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      setTimeout(function () {
        _this2.processImage();
      }, this.delay);
    }
  }, {
    key: "processImage",
    value: function processImage() {
      var imgNode = this.imgElem.nativeElement;
      var imgProps = this.getProps();
      var imgNodeSRC = imgProps.imgNodeSRC,
          params = imgProps.params,
          sizes = imgProps.sizes,
          adaptive = imgProps.adaptive;
      var config = this.ciService.config;
      var baseURL = config.baseURL,
          presets = config.presets,
          minLowQualityWidth = config.minLowQualityWidth,
          devicePixelRatioList = config.devicePixelRatioList,
          _config$params = config.params,
          configParams = _config$params === void 0 ? {} : _config$params;
      if (!imgNodeSRC) return;

      var _getImgSRC = (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.getImgSRC)(imgNodeSRC, baseURL),
          _getImgSRC2 = (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getImgSRC, 2),
          src = _getImgSRC2[0],
          svg = _getImgSRC2[1];

      var previewCloudimgURL, size;

      if (adaptive) {
        size = (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.getBreakpoint)(sizes, presets);

        if (size) {
          if (size.params.src) {
            var _getImgSRC3 = (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.getImgSRC)(size.params.src, baseURL);

            var _getImgSRC4 = (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_getImgSRC3, 2);

            src = _getImgSRC4[0];
            svg = _getImgSRC4[1];
          }
        }
      }

      var containerProps = (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.determineContainerProps)(Object.assign({
        imgNode: imgNode,
        config: config,
        size: size
      }, imgProps));
      var width = containerProps.width;
      var preview = !this.isSsr ? this.lowQualityPreview && (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.isLowQualityPreview)(adaptive, width, svg, minLowQualityWidth) : null;

      var generateURLbyDPR = function generateURLbyDPR(devicePixelRatio) {
        return !adaptive && svg ? src : (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.generateURL)({
          src: src,
          params: params,
          config: config,
          containerProps: containerProps,
          devicePixelRatio: devicePixelRatio
        });
      };

      var cloudimgURL = !this.isSsr ? generateURLbyDPR(Number(window.devicePixelRatio.toFixed(1))) : null;
      var cloudimgSRCSET = !this.isSsr ? devicePixelRatioList.map(function (dpr) {
        return {
          dpr: dpr.toString(),
          url: generateURLbyDPR(dpr)
        };
      }) : null;
      var operation = params.func || configParams.func;

      if (preview) {
        previewCloudimgURL = (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.getPreviewSRC)({
          src: src,
          params: params,
          config: config,
          containerProps: containerProps
        });
      }

      this.cloudimgURL = cloudimgURL;
      this.previewCloudimgURL = previewCloudimgURL;
      this.cloudimgSRCSET = cloudimgSRCSET, this.isProcessed = true;
      this.preview = preview;
      this.operation = operation;
    }
  }, {
    key: "getProps",
    value: function getProps() {
      return {
        imgNodeSRC: this.src,
        imgNodeWidth: this.width,
        imgNodeHeight: this.height,
        imgNodeRatio: this.ratio,
        params: (0,cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.processParams)(this.params),
        sizes: this.sizes,
        adaptive: !!this.sizes,
        doNotReplaceImageUrl: this.doNotReplaceURL
      };
    }
  }, {
    key: "onImageLoad",
    value: function onImageLoad(event) {
      this.updateLoadedImageSize(event.target);
      this.loaded = true;
      this.onImgLoad.emit(event);
    }
  }, {
    key: "onPreviewLoaded",
    value: function onPreviewLoaded(event) {
      if (this.previewLoaded) return;
      this.updateLoadedImageSize(event.target);
      this.previewLoaded = true;
    }
  }, {
    key: "getcloudimgSRCSET",
    value: function getcloudimgSRCSET() {
      if (this.cloudimgSRCSET && !this.isSsr) {
        return this.cloudimgSRCSET.map(function (_ref) {
          var dpr = _ref.dpr,
              url = _ref.url;
          return "".concat(url, " ").concat(dpr, "x");
        }).join(', ');
      }

      return null;
    }
  }, {
    key: "pictureAlt",
    get: function get() {
      return !this.alt && this.autoAlt ? this.getAlt(this.src) : this.alt;
    }
  }, {
    key: "previewWrapperStyles",
    get: function get() {
      return cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.imgStyles.previewWrapper();
    }
  }, {
    key: "imgStyles",
    get: function get() {
      return cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.imgStyles.img({
        preview: this.preview,
        loaded: this.loaded,
        operation: this.operation
      });
    }
  }, {
    key: "imageStyles",
    get: function get() {
      return cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.imgStyles.image({
        preserveSize: this.preserveSize,
        imgNodeWidth: this.width,
        imgNodeHeight: this.height,
        operation: this.operation
      });
    }
  }, {
    key: "previewImgStyles",
    get: function get() {
      return cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.imgStyles.previewImg({
        loaded: this.loaded,
        operation: this.operation
      });
    }
  }, {
    key: "pictureStyles",
    get: function get() {
      var _a;

      return cloudimage_responsive_utils__WEBPACK_IMPORTED_MODULE_3__.imgStyles.picture({
        preserveSize: this.preserveSize,
        imgNodeWidth: this.width,
        imgNodeHeight: this.height,
        ratio: this.ratio || ((_a = this.loadedImageDim) === null || _a === void 0 ? void 0 : _a.ratio),
        previewLoaded: this.previewLoaded,
        loaded: this.loaded,
        placeholderBackground: this.placeholderBackground,
        operation: this.operation
      });
    }
  }, {
    key: "pictureClassName",
    get: function get() {
      return "".concat(this.class, " cloudimage-image ").concat(this.loaded ? 'loaded' : 'loading').trim();
    }
  }, {
    key: "updateLoadedImageSize",
    value: function updateLoadedImageSize(image) {
      this.loadedImageDim = {
        width: image.naturalWidth,
        height: image.naturalHeight,
        ratio: image.naturalWidth / image.naturalHeight
      };
    }
  }, {
    key: "getAlt",
    value: function getAlt(name) {
      if (!name) return;
      var index = name.indexOf('.');
      return name.slice(0, index);
    }
  }]);

  return ImgComponent;
}();

ImgComponent.ɵfac = function ImgComponent_Factory(t) {
  return new (t || ImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](CIService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
};

ImgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ImgComponent,
  selectors: [["ci-img"]],
  viewQuery: function ImgComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.imgElem = _t.first);
    }
  },
  inputs: {
    class: "class",
    alt: "alt",
    src: "src",
    doNotReplaceURL: "doNotReplaceURL",
    disableAnimation: "disableAnimation",
    width: "width",
    height: "height",
    params: "params",
    sizes: "sizes",
    ratio: "ratio",
    lazyLoading: "lazyLoading",
    autoAlt: "autoAlt",
    placeholderBackground: "placeholderBackground",
    offset: "offset",
    preserveSize: "preserveSize",
    operation: "operation"
  },
  outputs: {
    onImgLoad: "onImgLoad"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 3,
  consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["plainImageTpl", ""], ["pictureTpl", ""], [4, "ngIf", "ngIfElse"], ["lazyLoadPlainImageTpl", ""], [2, "display", "block", 3, "alt", "src", "srcset", "load"], ["imgElem", ""], [2, "display", "block", 3, "alt", "lazyLoad", "useSrcset", "load"], ["lazyLoadPictureTpl", ""], [3, "style", 4, "ngIf"], [3, "alt", "src", "srcset", "load"], ["alt", "low quality preview", 3, "src", "load"], [3, "alt", "lazyLoad", "useSrcset", "load"], ["alt", "low quality preview", 3, "lazyLoad", "load"]],
  template: function ImgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ImgComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ImgComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ImgComponent_ng_template_3_Template, 5, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.disableAnimation)("ngIfThen", _r1)("ngIfElse", _r3);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ImgComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'ci-img',
      template: "<ng-container\n  *ngIf=\"disableAnimation; then plainImageTpl; else pictureTpl\"\n></ng-container>\n\n<ng-template #plainImageTpl>\n  <ng-container *ngIf=\"!isLazyLoadingMode; else lazyLoadPlainImageTpl\">\n    <img\n      #imgElem\n      [class]=\"pictureClassName\"\n      style=\"display: block\"\n      [style]=\"imageStyles\"\n      [alt]=\"pictureAlt\"\n      [src]=\"!isSsr ? cloudimgURL : null\"\n      [srcset]=\"getcloudimgSRCSET()\"\n      (load)=\"!isSsr && onImageLoad($event)\"\n    />\n  </ng-container>\n  <ng-template #lazyLoadPlainImageTpl>\n    <img\n      #imgElem\n      [class]=\"pictureClassName\"\n      style=\"display: block\"\n      [style]=\"imageStyles\"\n      [alt]=\"pictureAlt\"\n      [lazyLoad]=\"!isSsr ? getcloudimgSRCSET() : null\"\n      [useSrcset]=\"true\"\n      (load)=\"!isSsr && onImageLoad($event)\"\n    />\n  </ng-template>\n</ng-template>\n\n<ng-template #pictureTpl>\n  <div #imgElem [class]=\"pictureClassName\" [style]=\"pictureStyles\">\n    <ng-container *ngIf=\"!isLazyLoadingMode; else lazyLoadPictureTpl\">\n      <div\n        *ngIf=\"preview && operation !== 'bound'\"\n        [style]=\"previewWrapperStyles\"\n      >\n        <img\n          [style]=\"previewImgStyles\"\n          [src]=\"previewCloudimgURL\"\n          (load)=\"onPreviewLoaded($event)\"\n          alt=\"low quality preview\"\n        />\n      </div>\n      <img\n        [alt]=\"pictureAlt\"\n        [style]=\"imgStyles\"\n        [src]=\"!isSsr ? cloudimgURL : null\"\n        [srcset]=\"getcloudimgSRCSET()\"\n        (load)=\"!isSsr && onImageLoad($event)\"\n      />\n    </ng-container>\n  </div>\n\n  <ng-template #lazyLoadPictureTpl>\n    <div\n      *ngIf=\"preview && operation !== 'bound'\"\n      [style]=\"previewWrapperStyles\"\n    >\n      <img\n        [style]=\"previewImgStyles\"\n        [lazyLoad]=\"previewCloudimgURL\"\n        (load)=\"onPreviewLoaded($event)\"\n        alt=\"low quality preview\"\n      />\n    </div>\n    <img\n      [alt]=\"pictureAlt\"\n      [style]=\"imgStyles\"\n      [lazyLoad]=\"!isSsr ? getcloudimgSRCSET() : null\"\n      [useSrcset]=\"true\"\n      (load)=\"!isSsr && onImageLoad($event)\"\n    />\n  </ng-template>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: CIService
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }];
  }, {
    imgElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
      args: ['imgElem']
    }],
    class: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    doNotReplaceURL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    disableAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    params: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    sizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    ratio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    lazyLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    autoAlt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    placeholderBackground: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    preserveSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    operation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    onImgLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

var CIModule = /*#__PURE__*/(0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function CIModule() {
  (0,_home_tuanduong_coding_my_ng_cloudimage_responsive_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CIModule);
});

CIModule.ɵfac = function CIModule_Factory(t) {
  return new (t || CIModule)();
};

CIModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CIModule
});
CIModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CIModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      declarations: [ImgComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule],
      exports: [ImgComponent],
      providers: []
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CIModule, {
    declarations: [ImgComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageModule],
    exports: [ImgComponent]
  });
})();
/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(1986); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map