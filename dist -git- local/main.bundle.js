webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aframe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AframePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AframePipe = (function () {
    function AframePipe() {
    }
    AframePipe.prototype.transform = function (value, args) {
        if (value && typeof value === 'object') {
            return { toString: function () { return value; } };
        }
        return value;
    };
    AframePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'aframe'
        })
    ], AframePipe);
    return AframePipe;
}());



/***/ }),

/***/ "../../../../../src/app/algotrade/algotrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/algotrade/algotrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgotradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlgotradeComponent = (function () {
    function AlgotradeComponent() {
    }
    AlgotradeComponent.prototype.ngOnInit = function () {
    };
    AlgotradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-algotrade',
            template: "\n\n    <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Algo Trading / Backtesting</h1>\n    <p class=\"lead text-muted\">Zipline / Pyfolio / Backtrader (Example Chart)</p>\n\n    </div>\n    </section>\n    <section class=\"viz-map m-0 p-0 jumbotron text-center text-white\">\n\n <!-- <iframe src=\"../assets/leaflet/hexbin/xhex.html\" frameborder=\"0\" style=\"margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:600px;width:100%;\" height=\"600px\" width=\"100%\"></iframe> -->\n    <img src=\"../assets/algo/Figure_0.png\" frameborder=\"0\" style=\"margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:600px;width:100%;\" height=\"600px\" width=\"100%\">\n\n    </section>\n    <section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading h13d\"></h1>\n    </div>\n    </section>\n\n    ",
            styles: [__webpack_require__("../../../../../src/app/algotrade/algotrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlgotradeComponent);
    return AlgotradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- WEBSITE BUILT ON ANGULAR 5 CLI PROJECT BASE -->\n\n<!-- TOP -->\n<app-header></app-header>\n\n\n<app-viz0></app-viz0>\n\n<!-- TWITTER SEARCH AWAITING ANGULAR 5 INTEGRATION -->\n<!-- <app-twitter></app-twitter> -->\n\n<!-- LIVE IEX EXCHANGE FINANCIAL DATA -->\n<!-- <app-iexdata></app-iexdata> -->\n\n<!-- 3D DATA GLOBE -->\n<!-- <div class=\"d50\"><app-egl3></app-egl3></div> -->\n\n<!-- leaflet starter app from example -->\n<!-- <app-leaflet></app-leaflet> -->\n\n<!-- 3D GLOBE IFRAME -->\n<app-viz2></app-viz2>\n\n<!-- D3 HEXBIN - GLOBAL DATA ANALYSIS -->\n<!-- <app-maphex></app-maphex> repo namespace collision -->\n<app-maphexi></app-maphexi> <!-- iframe -->\n\n<!-- WEATHER CHART FROM OWM API LIVE DATA -->\n<app-weatherdash></app-weatherdash>\n\n\n<app-parallax1></app-parallax1>\n\n\n<!-- LEAFLET OSM MAPS -->\n<app-map></app-map><!-- MAP POINTS/AREAS TO DO  -->\n<!-- LIVE HEAT MAPS AWAITING ANGULAR 5 TWITTER INTEGRATION -->\n<!-- <app-mapheat></app-mapheat> -->\n<app-map-twitter></app-map-twitter>\n\n<!-- LEAFLET GOOGLE MAPS -->\n<!-- <app-mapgeo></app-mapgeo> -->\n\n<!-- DASHBOARD - ECHARTS samples integration -->\n<!-- <app-dash></app-dash> -->\n\n<!-- 3D GLOBE IFRAME -->\n<app-viz4></app-viz4>\n\n<!-- FINANCE DASHBOARD - ECHARTS samples integration -->\n<app-dash2></app-dash2>\n\n<!-- CHART API DATA IEX TRADING LIVE -->\n<app-chart1></app-chart1>\n<!-- <app-chart2></app-chart2> --><!-- DATA HOOKUP TO DO  -->\n<app-chart3></app-chart3>\n\n\n<app-parallax2></app-parallax2>\n\n\n<!-- BACKTESTING ALGORITHMIC TRADES - EXAMPLE -->\n<app-algotrade></app-algotrade>\n\n<!-- WEATHER -->\n<!-- <app-weather></app-weather> -->\n\n<!-- 3D GLOBE IFRAME -->\n<app-viz3></app-viz3>\n\n<!-- DASHBOARDS - ECHARTS -->\n<app-dash3></app-dash3>\n\n<app-parallax></app-parallax>\n\n<!-- D3 - Example from d3js.org  -->\n<!-- <app-></app-> -->\n\n<!-- Echarts GL examples -->\n<app-viz1></app-viz1>\n\n\n<!-- YOUTUBE IFRAME EXAMPLE -->\n<app-video></app-video>\n\n<!-- DEVELOPMENT TOOLS -->\n<app-tools></app-tools>\n\n<!-- AFRAME VR LIVE - one live scene per page only -->\n<app-vr></app-vr>\n<div class=\"row\" style=\"margin:0px;padding:0px;overflow:hidden\">\n  <div class=\"d50\"><app-iframe1></app-iframe1></div>\n  <div class=\"d50\"><app-iframe3></app-iframe3></div>\n</div>\n\n<!-- CONTACT FORM -->\n<app-contact></app-contact>\n<!-- FOOTER -->\n<app-footer></app-footer>\n\n\n\n<!-- ZZZZZZZZZZZZZZZZZ -->\n\n<!-- <div class=\"\"><app-iframe2></app-iframe2></div> -->\n\n<!-- <div class=\"row\" style=\"margin:0px;padding:0px;overflow:hidden\">\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weatherdash_weather_service__ = __webpack_require__("../../../../../src/app/weatherdash/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_service__ = __webpack_require__("../../../../../src/app/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tools_tools_component__ = __webpack_require__("../../../../../src/app/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parallax_parallax_component__ = __webpack_require__("../../../../../src/app/parallax/parallax.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__video_video_component__ = __webpack_require__("../../../../../src/app/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__egl1_egl1_component__ = __webpack_require__("../../../../../src/app/egl1/egl1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__egl2_egl2_component__ = __webpack_require__("../../../../../src/app/egl2/egl2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__egl3_egl3_component__ = __webpack_require__("../../../../../src/app/egl3/egl3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__egl4_egl4_component__ = __webpack_require__("../../../../../src/app/egl4/egl4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__egl5_egl5_component__ = __webpack_require__("../../../../../src/app/egl5/egl5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__egl6_egl6_component__ = __webpack_require__("../../../../../src/app/egl6/egl6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__iframe1_iframe1_component__ = __webpack_require__("../../../../../src/app/iframe1/iframe1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__iframe2_iframe2_component__ = __webpack_require__("../../../../../src/app/iframe2/iframe2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__iframe3_iframe3_component__ = __webpack_require__("../../../../../src/app/iframe3/iframe3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__iframe4_iframe4_component__ = __webpack_require__("../../../../../src/app/iframe4/iframe4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__d31_d31_component__ = __webpack_require__("../../../../../src/app/d31/d31.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__d32_d32_component__ = __webpack_require__("../../../../../src/app/d32/d32.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__d33_d33_component__ = __webpack_require__("../../../../../src/app/d33/d33.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__d34_d34_component__ = __webpack_require__("../../../../../src/app/d34/d34.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__d35_d35_component__ = __webpack_require__("../../../../../src/app/d35/d35.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__d36_d36_component__ = __webpack_require__("../../../../../src/app/d36/d36.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dash_v1_component__ = __webpack_require__("../../../../../src/app/dash/v1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dash_v2_component__ = __webpack_require__("../../../../../src/app/dash/v2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dash_v3_component__ = __webpack_require__("../../../../../src/app/dash/v3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__dash_v4_component__ = __webpack_require__("../../../../../src/app/dash/v4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__dash_v5_component__ = __webpack_require__("../../../../../src/app/dash/v5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__dash_v6_component__ = __webpack_require__("../../../../../src/app/dash/v6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__dash2_v21_component__ = __webpack_require__("../../../../../src/app/dash2/v21.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dash2_v22_component__ = __webpack_require__("../../../../../src/app/dash2/v22.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dash2_v23_component__ = __webpack_require__("../../../../../src/app/dash2/v23.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__dash2_v24_component__ = __webpack_require__("../../../../../src/app/dash2/v24.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__dash2_v25_component__ = __webpack_require__("../../../../../src/app/dash2/v25.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__dash2_v26_component__ = __webpack_require__("../../../../../src/app/dash2/v26.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__dash3_v31_component__ = __webpack_require__("../../../../../src/app/dash3/v31.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__dash3_v32_component__ = __webpack_require__("../../../../../src/app/dash3/v32.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__dash3_v33_component__ = __webpack_require__("../../../../../src/app/dash3/v33.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__dash3_v34_component__ = __webpack_require__("../../../../../src/app/dash3/v34.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dash3_v35_component__ = __webpack_require__("../../../../../src/app/dash3/v35.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__dash3_v36_component__ = __webpack_require__("../../../../../src/app/dash3/v36.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__three_three_component__ = __webpack_require__("../../../../../src/app/three/three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__parallax2_parallax2_component__ = __webpack_require__("../../../../../src/app/parallax2/parallax2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__vr_vr_component__ = __webpack_require__("../../../../../src/app/vr/vr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__viz0_viz0_component__ = __webpack_require__("../../../../../src/app/viz0/viz0.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__viz1_viz1_component__ = __webpack_require__("../../../../../src/app/viz1/viz1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__viz2_viz2_component__ = __webpack_require__("../../../../../src/app/viz2/viz2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__viz3_viz3_component__ = __webpack_require__("../../../../../src/app/viz3/viz3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__viz4_viz4_component__ = __webpack_require__("../../../../../src/app/viz4/viz4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__dash_dash_component__ = __webpack_require__("../../../../../src/app/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__dash2_dash2_component__ = __webpack_require__("../../../../../src/app/dash2/dash2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__dash3_dash3_component__ = __webpack_require__("../../../../../src/app/dash3/dash3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__parallax1_parallax1_component__ = __webpack_require__("../../../../../src/app/parallax1/parallax1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__aframe_pipe__ = __webpack_require__("../../../../../src/app/aframe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__d3_d3_component__ = __webpack_require__("../../../../../src/app/d3/d3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__leaflet_leaflet_component__ = __webpack_require__("../../../../../src/app/leaflet/leaflet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__maphex_maphex_component__ = __webpack_require__("../../../../../src/app/maphex/maphex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__mapgeo_mapgeo_component__ = __webpack_require__("../../../../../src/app/mapgeo/mapgeo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__maphexi_maphexi_component__ = __webpack_require__("../../../../../src/app/maphexi/maphexi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__algotrade_algotrade_component__ = __webpack_require__("../../../../../src/app/algotrade/algotrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__mapheat_mapheat_component__ = __webpack_require__("../../../../../src/app/mapheat/mapheat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__map_twitter_map_twitter_component__ = __webpack_require__("../../../../../src/app/map-twitter/map-twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__twitter_twitter_component__ = __webpack_require__("../../../../../src/app/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__weatherdash_weatherdash_component__ = __webpack_require__("../../../../../src/app/weatherdash/weatherdash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__chart1_chart1_component__ = __webpack_require__("../../../../../src/app/chart1/chart1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__chart2_chart2_component__ = __webpack_require__("../../../../../src/app/chart2/chart2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__chart3_chart3_component__ = __webpack_require__("../../../../../src/app/chart3/chart3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__iexdata_iexdata_component__ = __webpack_require__("../../../../../src/app/iexdata/iexdata.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_17__parallax_parallax_component__["a" /* ParallaxComponent */],
                __WEBPACK_IMPORTED_MODULE_18__video_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__egl1_egl1_component__["a" /* Egl1Component */],
                __WEBPACK_IMPORTED_MODULE_20__egl2_egl2_component__["a" /* Egl2Component */],
                __WEBPACK_IMPORTED_MODULE_21__egl3_egl3_component__["a" /* Egl3Component */],
                __WEBPACK_IMPORTED_MODULE_22__egl4_egl4_component__["a" /* Egl4Component */],
                __WEBPACK_IMPORTED_MODULE_23__egl5_egl5_component__["a" /* Egl5Component */],
                __WEBPACK_IMPORTED_MODULE_24__egl6_egl6_component__["a" /* Egl6Component */],
                __WEBPACK_IMPORTED_MODULE_25__iframe1_iframe1_component__["a" /* Iframe1Component */],
                __WEBPACK_IMPORTED_MODULE_26__iframe2_iframe2_component__["a" /* Iframe2Component */],
                __WEBPACK_IMPORTED_MODULE_27__iframe3_iframe3_component__["a" /* Iframe3Component */],
                __WEBPACK_IMPORTED_MODULE_28__iframe4_iframe4_component__["a" /* Iframe4Component */],
                __WEBPACK_IMPORTED_MODULE_29__d31_d31_component__["a" /* D31Component */],
                __WEBPACK_IMPORTED_MODULE_30__d32_d32_component__["a" /* D32Component */],
                __WEBPACK_IMPORTED_MODULE_31__d33_d33_component__["a" /* D33Component */],
                __WEBPACK_IMPORTED_MODULE_32__d34_d34_component__["a" /* D34Component */],
                __WEBPACK_IMPORTED_MODULE_33__d35_d35_component__["a" /* D35Component */],
                __WEBPACK_IMPORTED_MODULE_34__d36_d36_component__["a" /* D36Component */],
                __WEBPACK_IMPORTED_MODULE_35__dash_v1_component__["a" /* V1Component */],
                __WEBPACK_IMPORTED_MODULE_36__dash_v2_component__["a" /* V2Component */],
                __WEBPACK_IMPORTED_MODULE_37__dash_v3_component__["a" /* V3Component */],
                __WEBPACK_IMPORTED_MODULE_38__dash_v4_component__["a" /* V4Component */],
                __WEBPACK_IMPORTED_MODULE_39__dash_v5_component__["a" /* V5Component */],
                __WEBPACK_IMPORTED_MODULE_40__dash_v6_component__["a" /* V6Component */],
                __WEBPACK_IMPORTED_MODULE_41__dash2_v21_component__["a" /* V21Component */],
                __WEBPACK_IMPORTED_MODULE_42__dash2_v22_component__["a" /* V22Component */],
                __WEBPACK_IMPORTED_MODULE_43__dash2_v23_component__["a" /* V23Component */],
                __WEBPACK_IMPORTED_MODULE_44__dash2_v24_component__["a" /* V24Component */],
                __WEBPACK_IMPORTED_MODULE_45__dash2_v25_component__["a" /* V25Component */],
                __WEBPACK_IMPORTED_MODULE_46__dash2_v26_component__["a" /* V26Component */],
                __WEBPACK_IMPORTED_MODULE_47__dash3_v31_component__["a" /* V31Component */],
                __WEBPACK_IMPORTED_MODULE_48__dash3_v32_component__["a" /* V32Component */],
                __WEBPACK_IMPORTED_MODULE_49__dash3_v33_component__["a" /* V33Component */],
                __WEBPACK_IMPORTED_MODULE_50__dash3_v34_component__["a" /* V34Component */],
                __WEBPACK_IMPORTED_MODULE_51__dash3_v35_component__["a" /* V35Component */],
                __WEBPACK_IMPORTED_MODULE_52__dash3_v36_component__["a" /* V36Component */],
                __WEBPACK_IMPORTED_MODULE_53__three_three_component__["a" /* ThreeComponent */],
                __WEBPACK_IMPORTED_MODULE_54__parallax2_parallax2_component__["a" /* Parallax2Component */],
                __WEBPACK_IMPORTED_MODULE_55__vr_vr_component__["a" /* VrComponent */],
                __WEBPACK_IMPORTED_MODULE_56__viz0_viz0_component__["a" /* Viz0Component */],
                __WEBPACK_IMPORTED_MODULE_57__viz1_viz1_component__["a" /* Viz1Component */],
                __WEBPACK_IMPORTED_MODULE_58__viz2_viz2_component__["a" /* Viz2Component */],
                __WEBPACK_IMPORTED_MODULE_59__viz3_viz3_component__["a" /* Viz3Component */],
                __WEBPACK_IMPORTED_MODULE_60__viz4_viz4_component__["a" /* Viz4Component */],
                __WEBPACK_IMPORTED_MODULE_61__dash_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_62__dash2_dash2_component__["a" /* Dash2Component */],
                __WEBPACK_IMPORTED_MODULE_63__dash3_dash3_component__["a" /* Dash3Component */],
                __WEBPACK_IMPORTED_MODULE_64__parallax1_parallax1_component__["a" /* Parallax1Component */],
                __WEBPACK_IMPORTED_MODULE_65__aframe_pipe__["a" /* AframePipe */],
                __WEBPACK_IMPORTED_MODULE_66__d3_d3_component__["a" /* D3Component */],
                __WEBPACK_IMPORTED_MODULE_67__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_76__weatherdash_weatherdash_component__["a" /* WeatherdashComponent */],
                __WEBPACK_IMPORTED_MODULE_68__leaflet_leaflet_component__["a" /* LeafletComponent */],
                __WEBPACK_IMPORTED_MODULE_69__maphex_maphex_component__["a" /* MaphexComponent */],
                __WEBPACK_IMPORTED_MODULE_70__mapgeo_mapgeo_component__["a" /* MapgeoComponent */],
                __WEBPACK_IMPORTED_MODULE_71__maphexi_maphexi_component__["a" /* MaphexiComponent */],
                __WEBPACK_IMPORTED_MODULE_72__algotrade_algotrade_component__["a" /* AlgotradeComponent */],
                __WEBPACK_IMPORTED_MODULE_73__mapheat_mapheat_component__["a" /* MapheatComponent */],
                __WEBPACK_IMPORTED_MODULE_74__map_twitter_map_twitter_component__["a" /* MapTwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_75__twitter_twitter_component__["a" /* TwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_77__chart1_chart1_component__["a" /* Chart1Component */],
                __WEBPACK_IMPORTED_MODULE_78__chart2_chart2_component__["a" /* Chart2Component */],
                __WEBPACK_IMPORTED_MODULE_79__chart3_chart3_component__["a" /* Chart3Component */],
                __WEBPACK_IMPORTED_MODULE_80__iexdata_iexdata_component__["a" /* IexdataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_echarts__["a" /* AngularEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAGhxfPfmOSDG_sKfXS7bzdW1mKzYhAKn8'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__chart_service__["a" /* ChartService */], __WEBPACK_IMPORTED_MODULE_3__weatherdash_weather_service__["a" /* WeatherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from page below:                *\r\n* https://startbootstrap.com/                            *\r\n**********************************************************\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://getbootstrap.com/                            *\n**********************************************************\n-->\n\n<carousel>\n    <slide>\n      <img src=\"http://lorempixel.com/1200/600/nature/1\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"http://lorempixel.com/1200/600/nature/2\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </slide>\n    <slide>\n      <img src=\"http://lorempixel.com/1200/600/nature/3\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </slide>\n  </carousel>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__["a" /* CarouselConfig */], useValue: { interval: 4000, noPause: true } }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// var cors = require('cors')
// import 'cors';
var ChartService = (function () {
    function ChartService(_http) {
        this._http = _http;
    }
    // this._http.use(cors())
    ChartService.prototype.chart1y = function () {
        // return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
        return this._http.get("https://api.iextrading.com/1.0/stock/aapl/chart/1y")
            .map(function (result) { return result; });
    };
    ChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "../../../../../src/app/chart1/chart1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// import { Component, OnInit } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component({
//   selector: 'app-chart1',
//   templateUrl: './chart1.component.html',
//   styleUrls: ['./chart1.component.css']
// })
// export class Chart1Component implements OnInit {

var Chart1Component = (function () {
    function Chart1Component() {
        this.option = {};
    }
    Chart1Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        //数据模型 time0 open1 close2 min3 max4 vol5 tag6 macd7 dif8 dea9
        //['2015-10-19',18.56,18.25,18.19,18.56,55.00,0,-0.00,0.08,0.09]
        var data = splitData([
            ["2015-10-16", 18.4, 18.58, 18.33, 18.79, 67.0, 1, 0.04, 0.11, 0.09],
            ["2015-10-19", 18.56, 18.25, 18.19, 18.56, 55.0, 0, -0.0, 0.08, 0.09],
            ["2015-10-20", 18.3, 18.22, 18.05, 18.41, 37.0, 0, 0.01, 0.09, 0.09],
            ["2015-10-21", 18.18, 18.69, 18.02, 18.98, 89.0, 0, 0.03, 0.1, 0.08],
            ["2015-10-22", 18.42, 18.29, 18.22, 18.48, 43.0, 0, -0.06, 0.05, 0.08],
            ["2015-10-23", 18.26, 18.19, 18.08, 18.36, 46.0, 0, -0.1, 0.03, 0.09],
            ["2015-10-26", 18.33, 18.07, 17.98, 18.35, 65.0, 0, -0.15, 0.03, 0.1],
            ["2015-10-27", 18.08, 18.04, 17.88, 18.13, 37.0, 0, -0.19, 0.03, 0.12],
            ["2015-10-28", 17.96, 17.86, 17.82, 17.99, 35.0, 0, -0.24, 0.03, 0.15],
            ["2015-10-29", 17.85, 17.81, 17.8, 17.93, 27.0, 0, -0.24, 0.06, 0.18],
            ["2015-10-30", 17.79, 17.93, 17.78, 18.08, 43.0, 0, -0.22, 0.11, 0.22],
            ["2015-11-02", 17.78, 17.83, 17.78, 18.04, 27.0, 0, -0.2, 0.15, 0.25],
            ["2015-11-03", 17.84, 17.9, 17.84, 18.06, 34.0, 0, -0.12, 0.22, 0.28],
            ["2015-11-04", 17.97, 18.36, 17.85, 18.39, 62.0, 0, -0.0, 0.3, 0.3],
            ["2015-11-05", 18.3, 18.57, 18.18, 19.08, 177.0, 0, 0.07, 0.33, 0.3],
            ["2015-11-06", 18.53, 18.68, 18.3, 18.71, 95.0, 0, 0.12, 0.35, 0.29],
            ["2015-11-09", 18.75, 19.08, 18.75, 19.98, 202.0, 1, 0.16, 0.35, 0.27],
            ["2015-11-10", 18.85, 18.64, 18.56, 18.99, 85.0, 0, 0.09, 0.29, 0.25],
            ["2015-11-11", 18.64, 18.44, 18.31, 18.64, 50.0, 0, 0.06, 0.27, 0.23],
            ["2015-11-12", 18.55, 18.27, 18.17, 18.57, 43.0, 0, 0.05, 0.25, 0.23],
            ["2015-11-13", 18.13, 18.14, 18.09, 18.34, 35.0, 0, 0.05, 0.24, 0.22],
            ["2015-11-16", 18.01, 18.1, 17.93, 18.17, 34.0, 0, 0.07, 0.25, 0.21],
            ["2015-11-17", 18.2, 18.14, 18.08, 18.45, 58.0, 0, 0.11, 0.25, 0.2],
            ["2015-11-18", 18.23, 18.16, 18.0, 18.45, 47.0, 0, 0.13, 0.25, 0.19],
            ["2015-11-19", 18.08, 18.2, 18.05, 18.25, 32.0, 0, 0.15, 0.24, 0.17],
            ["2015-11-20", 18.15, 18.15, 18.11, 18.29, 36.0, 0, 0.13, 0.21, 0.15],
            ["2015-11-23", 18.16, 18.19, 18.12, 18.34, 47.0, 0, 0.11, 0.18, 0.13],
            ["2015-11-24", 18.23, 17.88, 17.7, 18.23, 62.0, 0, 0.03, 0.13, 0.11],
            ["2015-11-25", 17.85, 17.73, 17.56, 17.85, 66.0, 0, -0.03, 0.09, 0.11],
            ["2015-11-26", 17.79, 17.53, 17.5, 17.92, 63.0, 0, -0.1, 0.06, 0.11],
            ["2015-11-27", 17.51, 17.04, 16.9, 17.51, 67.0, 0, -0.16, 0.05, 0.13],
            ["2015-11-30", 17.07, 17.2, 16.98, 17.32, 55.0, 0, -0.12, 0.09, 0.15],
            ["2015-12-01", 17.28, 17.11, 16.91, 17.28, 39.0, 0, -0.09, 0.12, 0.16],
            ["2015-12-02", 17.13, 17.91, 17.05, 17.99, 102.0, 0, -0.01, 0.17, 0.18],
            ["2015-12-03", 17.8, 17.78, 17.61, 17.98, 71.0, 0, -0.09, 0.14, 0.18],
            ["2015-12-04", 17.6, 17.25, 17.13, 17.69, 51.0, 0, -0.18, 0.1, 0.19],
            ["2015-12-07", 17.2, 17.39, 17.15, 17.45, 43.0, 0, -0.19, 0.12, 0.22],
            ["2015-12-08", 17.3, 17.42, 17.18, 17.62, 45.0, 0, -0.23, 0.13, 0.24],
            ["2015-12-09", 17.33, 17.39, 17.32, 17.59, 44.0, 0, -0.29, 0.13, 0.28],
            ["2015-12-10", 17.39, 17.26, 17.21, 17.65, 44.0, 0, -0.37, 0.13, 0.32],
            ["2015-12-11", 17.23, 16.92, 16.66, 17.26, 114.0, 1, -0.44, 0.15, 0.37],
            ["2015-12-14", 16.75, 17.06, 16.5, 17.09, 94.0, 0, -0.44, 0.21, 0.44],
            ["2015-12-15", 17.03, 17.03, 16.9, 17.06, 46.0, 0, -0.44, 0.28, 0.5],
            ["2015-12-16", 17.08, 16.96, 16.87, 17.09, 30.0, 0, -0.4, 0.36, 0.56],
            ["2015-12-17", 17.0, 17.1, 16.95, 17.12, 50.0, 0, -0.3, 0.47, 0.62],
            ["2015-12-18", 17.09, 17.52, 17.04, 18.06, 156.0, 0, -0.14, 0.59, 0.66],
            ["2015-12-21", 17.43, 18.23, 17.35, 18.45, 152.0, 1, 0.02, 0.69, 0.68],
            ["2015-12-22", 18.14, 18.27, 18.06, 18.32, 94.0, 0, 0.08, 0.72, 0.68],
            ["2015-12-23", 18.28, 18.19, 18.17, 18.71, 108.0, 0, 0.13, 0.73, 0.67],
            ["2015-12-24", 18.18, 18.14, 18.01, 18.31, 37.0, 0, 0.19, 0.74, 0.65],
            ["2015-12-25", 18.22, 18.33, 18.2, 18.36, 48.0, 0, 0.26, 0.75, 0.62],
            ["2015-12-28", 18.35, 17.84, 17.8, 18.39, 48.0, 0, 0.27, 0.72, 0.59],
            ["2015-12-29", 17.83, 17.94, 17.71, 17.97, 36.0, 0, 0.36, 0.73, 0.55],
            ["2015-12-30", 17.9, 18.26, 17.55, 18.3, 71.0, 1, 0.43, 0.71, 0.5],
            ["2015-12-31", 18.12, 17.99, 17.91, 18.33, 72.0, 0, 0.4, 0.63, 0.43],
            ["2016-01-04", 17.91, 17.28, 17.16, 17.95, 37.0, 1, 0.34, 0.55, 0.38],
            ["2016-01-05", 17.17, 17.23, 17.0, 17.55, 51.0, 0, 0.37, 0.51, 0.33],
            ["2016-01-06", 17.2, 17.31, 17.06, 17.33, 31.0, 0, 0.37, 0.46, 0.28],
            ["2016-01-07", 17.15, 16.67, 16.51, 17.15, 19.0, 0, 0.3, 0.37, 0.22],
            ["2016-01-08", 16.8, 16.81, 16.61, 17.06, 60.0, 0, 0.29, 0.32, 0.18],
            ["2016-01-11", 16.68, 16.04, 16.0, 16.68, 65.0, 0, 0.2, 0.24, 0.14],
            ["2016-01-12", 16.03, 15.98, 15.88, 16.25, 46.0, 0, 0.2, 0.21, 0.11],
            ["2016-01-13", 16.21, 15.87, 15.78, 16.21, 57.0, 0, 0.2, 0.18, 0.08],
            ["2016-01-14", 15.55, 15.89, 15.52, 15.96, 42.0, 0, 0.2, 0.16, 0.05],
            ["2016-01-15", 15.87, 15.48, 15.45, 15.92, 34.0, 1, 0.17, 0.11, 0.02],
            ["2016-01-18", 15.39, 15.42, 15.36, 15.7, 26.0, 0, 0.21, 0.1, -0.0],
            ["2016-01-19", 15.58, 15.71, 15.35, 15.77, 38.0, 0, 0.25, 0.09, -0.03],
            ["2016-01-20", 15.56, 15.52, 15.24, 15.68, 38.0, 0, 0.23, 0.05, -0.07],
            ["2016-01-21", 15.41, 15.3, 15.28, 15.68, 35.0, 0, 0.21, 0.0, -0.1],
            ["2016-01-22", 15.48, 15.28, 15.13, 15.49, 30.0, 0, 0.21, -0.02, -0.13],
            ["2016-01-25", 15.29, 15.48, 15.2, 15.49, 21.0, 0, 0.2, -0.06, -0.16],
            ["2016-01-26", 15.33, 14.86, 14.78, 15.39, 30.0, 0, 0.12, -0.13, -0.19],
            ["2016-01-27", 14.96, 15.0, 14.84, 15.22, 51.0, 0, 0.13, -0.14, -0.2],
            ["2016-01-28", 14.96, 14.72, 14.62, 15.06, 25.0, 0, 0.1, -0.17, -0.22],
            ["2016-01-29", 14.75, 14.99, 14.62, 15.08, 36.0, 0, 0.13, -0.17, -0.24],
            ["2016-02-01", 14.98, 14.72, 14.48, 15.18, 27.0, 0, 0.1, -0.21, -0.26],
            ["2016-02-02", 14.65, 14.85, 14.65, 14.95, 18.0, 0, 0.11, -0.21, -0.27],
            ["2016-02-03", 14.72, 14.67, 14.55, 14.8, 23.0, 0, 0.1, -0.24, -0.29],
            ["2016-02-04", 14.79, 14.88, 14.69, 14.93, 22.0, 0, 0.13, -0.24, -0.3],
            ["2016-02-05", 14.9, 14.86, 14.78, 14.93, 16.0, 0, 0.12, -0.26, -0.32],
            ["2016-02-15", 14.5, 14.66, 14.47, 14.82, 19.0, 0, 0.11, -0.28, -0.34],
            ["2016-02-16", 14.77, 14.94, 14.72, 15.05, 26.0, 0, 0.14, -0.28, -0.35],
            ["2016-02-17", 14.95, 15.03, 14.88, 15.07, 38.0, 0, 0.12, -0.31, -0.37],
            ["2016-02-18", 14.95, 14.9, 14.87, 15.06, 28.0, 0, 0.07, -0.35, -0.39],
            ["2016-02-19", 14.9, 14.75, 14.68, 14.94, 22.0, 0, 0.03, -0.38, -0.4],
            ["2016-02-22", 14.88, 15.01, 14.79, 15.11, 38.0, 1, 0.01, -0.4, -0.4],
            ["2016-02-23", 15.01, 14.83, 14.72, 15.01, 24.0, 0, -0.09, -0.45, -0.4],
            ["2016-02-24", 14.75, 14.81, 14.67, 14.87, 21.0, 0, -0.17, -0.48, -0.39],
            ["2016-02-25", 14.81, 14.25, 14.21, 14.81, 51.0, 1, -0.27, -0.5, -0.37],
            ["2016-02-26", 14.35, 14.45, 14.28, 14.57, 28.0, 0, -0.26, -0.46, -0.33],
            ["2016-02-29", 14.43, 14.56, 14.04, 14.6, 48.0, 0, -0.25, -0.41, -0.29],
            ["2016-03-01", 14.56, 14.65, 14.36, 14.78, 32.0, 0, -0.21, -0.36, -0.25],
            ["2016-03-02", 14.79, 14.96, 14.72, 14.97, 60.0, 0, -0.13, -0.29, -0.22],
            ["2016-03-03", 14.95, 15.15, 14.91, 15.19, 53.0, 1, -0.05, -0.23, -0.21],
            ["2016-03-04", 15.14, 15.97, 15.02, 16.02, 164.0, 1, 0.06, -0.17, -0.2],
            ["2016-03-07", 15.9, 15.78, 15.65, 16.0, 41.0, 0, 0.04, -0.19, -0.21],
            ["2016-03-08", 15.78, 15.96, 15.21, 15.99, 45.0, 0, 0.05, -0.19, -0.21],
            ["2016-03-09", 15.73, 16.05, 15.41, 16.08, 74.0, 0, 0.03, -0.2, -0.22],
            ["2016-03-10", 15.82, 15.66, 15.65, 15.98, 19.0, 0, -0.02, -0.23, -0.22],
            ["2016-03-11", 15.59, 15.76, 15.42, 15.78, 32.0, 0, 0.01, -0.22, -0.22],
            ["2016-03-14", 15.78, 15.72, 15.65, 16.04, 31.0, 0, 0.03, -0.2, -0.22],
            ["2016-03-15", 15.81, 15.86, 15.6, 15.99, 35.0, 0, 0.1, -0.18, -0.23],
            ["2016-03-16", 15.88, 16.42, 15.79, 16.45, 123.0, 0, 0.17, -0.16, -0.24],
            ["2016-03-17", 16.39, 16.23, 16.11, 16.4, 46.0, 0, 0.14, -0.2, -0.26],
            ["2016-03-18", 16.39, 16.17, 16.04, 16.4, 59.0, 0, 0.13, -0.22, -0.28],
            ["2016-03-21", 16.21, 16.22, 16.11, 16.44, 50.0, 0, 0.12, -0.24, -0.3],
            ["2016-03-22", 16.27, 16.19, 16.16, 16.42, 33.0, 0, 0.1, -0.27, -0.32],
            ["2016-03-23", 16.26, 16.18, 16.18, 16.29, 19.0, 0, 0.08, -0.3, -0.33],
            ["2016-03-24", 16.18, 16.11, 16.01, 16.23, 23.0, 0, 0.04, -0.33, -0.35],
            ["2016-03-25", 16.12, 16.13, 16.1, 16.2, 15.0, 0, 0.0, -0.35, -0.35],
            ["2016-03-28", 16.15, 15.85, 15.81, 16.2, 22.0, 0, -0.06, -0.38, -0.35],
            ["2016-03-29", 15.9, 15.79, 15.76, 16.05, 19.0, 0, -0.06, -0.37, -0.34],
            ["2016-03-30", 15.79, 16.24, 15.78, 16.3, 29.0, 0, -0.03, -0.35, -0.33],
            ["2016-03-31", 16.3, 16.09, 16.02, 16.35, 25.0, 0, -0.07, -0.37, -0.33],
            ["2016-04-01", 16.18, 16.27, 15.98, 16.3, 38.0, 0, -0.08, -0.36, -0.32],
            ["2016-04-05", 16.13, 16.34, 16.07, 16.37, 39.0, 0, -0.13, -0.37, -0.31],
            ["2016-04-06", 16.21, 16.26, 16.19, 16.35, 30.0, 0, -0.2, -0.39, -0.29],
            ["2016-04-07", 16.32, 16.1, 16.05, 16.35, 29.0, 1, -0.26, -0.39, -0.26],
            ["2016-04-08", 16.0, 16.16, 15.98, 16.21, 22.0, 0, -0.28, -0.37, -0.23],
            ["2016-04-11", 16.16, 16.31, 16.15, 16.57, 31.0, 0, -0.3, -0.33, -0.19],
            ["2016-04-12", 16.41, 16.29, 16.12, 16.41, 17.0, 0, -0.31, -0.3, -0.14],
            ["2016-04-13", 16.39, 16.48, 16.0, 16.68, 40.0, 0, -0.3, -0.25, -0.1],
            ["2016-04-14", 16.5, 16.46, 16.37, 16.68, 22.0, 0, -0.27, -0.19, -0.06],
            ["2016-04-15", 16.56, 16.93, 16.46, 17.04, 58.0, 0, -0.2, -0.12, -0.02],
            ["2016-04-18", 16.76, 17.06, 16.72, 17.27, 50.0, 0, -0.16, -0.07, 0.01],
            ["2016-04-19", 17.21, 17.11, 17.02, 17.23, 30.0, 0, -0.12, -0.02, 0.03],
            ["2016-04-20", 17.11, 17.33, 16.8, 17.36, 78.0, 0, -0.04, 0.03, 0.05],
            ["2016-04-21", 17.27, 17.69, 17.17, 17.93, 79.0, 0, 0.05, 0.08, 0.06],
            ["2016-04-22", 17.6, 17.87, 17.56, 18.02, 55.0, 0, 0.09, 0.1, 0.05],
            ["2016-04-25", 17.75, 17.9, 17.41, 17.96, 39.0, 1, 0.11, 0.09, 0.04],
            ["2016-04-26", 17.81, 17.91, 17.6, 17.95, 39.0, 0, 0.12, 0.08, 0.02],
            ["2016-04-27", 17.9, 17.88, 17.81, 17.95, 25.0, 0, 0.12, 0.06, 0.0],
            ["2016-04-28", 17.93, 17.88, 17.67, 17.93, 28.0, 0, 0.11, 0.04, -0.01],
            ["2016-04-29", 17.87, 17.75, 17.73, 17.92, 19.0, 0, 0.08, 0.01, -0.03],
            ["2016-05-03", 17.79, 17.7, 17.56, 17.85, 35.0, 0, 0.05, -0.01, -0.04],
            ["2016-05-04", 17.7, 17.65, 17.59, 17.71, 24.0, 0, 0.02, -0.04, -0.05],
            ["2016-05-05", 17.65, 17.62, 17.46, 17.7, 20.0, 0, -0.03, -0.06, -0.05],
            ["2016-05-06", 17.62, 17.32, 17.3, 17.65, 29.0, 0, -0.1, -0.09, -0.05],
            ["2016-05-09", 17.33, 17.3, 17.21, 17.45, 23.0, 0, -0.13, -0.1, -0.03],
            ["2016-05-10", 17.11, 17.04, 16.98, 17.41, 28.0, 0, -0.15, -0.09, -0.01],
            ["2016-05-11", 17.06, 17.15, 17.06, 17.32, 20.0, 0, -0.12, -0.05, 0.01],
            ["2016-05-12", 17.02, 17.46, 17.02, 17.58, 26.0, 0, -0.07, -0.01, 0.03],
            ["2016-05-13", 17.41, 17.57, 17.34, 17.62, 23.0, 0, -0.06, 0.01, 0.03],
            ["2016-05-16", 17.55, 17.5, 17.48, 17.64, 37.0, 0, -0.06, 0.01, 0.04],
            ["2016-05-17", 17.49, 17.48, 17.39, 17.53, 13.0, 0, -0.03, 0.03, 0.05],
            ["2016-05-18", 17.41, 17.82, 17.39, 17.87, 46.0, 0, 0.01, 0.06, 0.06],
            ["2016-05-19", 17.74, 17.81, 17.67, 17.86, 17.0, 0, -0.01, 0.05, 0.05],
            ["2016-05-20", 17.76, 17.88, 17.7, 17.93, 14.0, 0, -0.03, 0.04, 0.06],
            ["2016-05-23", 17.88, 17.52, 17.48, 17.97, 16.0, 0, -0.09, 0.02, 0.06],
            ["2016-05-24", 17.51, 17.33, 17.32, 17.51, 8.0, 0, -0.09, 0.03, 0.07],
            ["2016-05-25", 17.59, 17.55, 17.44, 17.59, 10.0, 0, -0.03, 0.07, 0.08],
            ["2016-05-26", 17.5, 17.69, 17.5, 17.8, 12.0, 0, 0.0, 0.09, 0.09],
            ["2016-05-27", 17.77, 17.66, 17.62, 17.77, 7.0, 0, 0.03, 0.1, 0.09],
            ["2016-05-30", 17.75, 17.84, 17.62, 17.87, 20.0, 0, 0.08, 0.12, 0.08],
            ["2016-05-31", 17.88, 18.0, 17.81, 18.03, 41.0, 0, 0.1, 0.12, 0.07],
            ["2016-06-01", 18.09, 17.83, 17.73, 18.09, 22.0, 0, 0.08, 0.1, 0.06],
            ["2016-06-02", 17.82, 17.73, 17.66, 17.88, 10.0, 0, 0.07, 0.08, 0.05],
            ["2016-06-03", 17.8, 17.78, 17.71, 17.83, 9.0, 0, 0.08, 0.08, 0.04],
            ["2016-06-06", 17.73, 17.64, 17.56, 17.83, 12.0, 0, 0.07, 0.06, 0.03],
            ["2016-06-07", 17.76, 17.8, 17.59, 17.87, 11.0, 0, 0.08, 0.06, 0.02],
            ["2016-06-08", 17.75, 17.77, 17.65, 17.84, 9.0, 0, 0.04, 0.03, 0.01],
            ["2016-06-13", 17.58, 17.32, 17.29, 17.79, 16.0, 0, -0.02, -0.01, 0.0],
            ["2016-06-14", 17.33, 17.38, 17.29, 17.5, 10.0, 0, -0.01, 0.0, 0.0],
            ["2016-06-15", 17.25, 17.39, 17.25, 17.46, 18.0, 0, 0.0, 0.01, 0.0],
            ["2016-06-16", 17.26, 17.4, 17.26, 17.46, 22.0, 0, 0.01, 0.01, 0.0],
            ["2016-06-17", 17.38, 17.5, 17.37, 17.67, 13.0, 0, 0.03, 0.02, 0.0],
            ["2016-06-20", 17.62, 17.51, 17.42, 17.63, 15.0, 0, 0.03, 0.01, -0.0],
            ["2016-06-21", 17.53, 17.54, 17.5, 17.7, 11.0, 0, 0.02, 0.0, -0.01],
            ["2016-06-22", 17.5, 17.5, 17.46, 17.6, 10.0, 0, -0.01, -0.01, -0.01],
            ["2016-06-23", 17.52, 17.26, 17.24, 17.53, 16.0, 0, -0.04, -0.03, -0.01],
            ["2016-06-24", 17.26, 17.25, 17.18, 17.38, 60.0, 0, -0.03, -0.02, -0.0],
            ["2016-06-27", 17.25, 17.28, 17.18, 17.33, 19.0, 0, -0.01, -0.0, 0.0],
            ["2016-06-28", 17.25, 17.29, 17.21, 17.32, 13.0, 0, 0.02, 0.01, 0.0],
            ["2016-06-29", 17.31, 17.45, 17.27, 17.49, 21.0, 0, 0.07, 0.04, 0.0],
            ["2016-06-30", 17.47, 17.5, 17.39, 17.55, 17.0, 0, 0.11, 0.04, -0.01],
            ["2016-07-01", 17.5, 17.63, 17.49, 17.66, 10.0, 0, 0.14, 0.05, -0.03],
            ["2016-07-04", 17.63, 17.72, 17.63, 17.92, 17.0, 0, 0.16, 0.03, -0.05],
            ["2016-07-05", 17.79, 17.56, 17.45, 17.79, 18.0, 0, 0.14, 0.0, -0.07],
            ["2016-07-06", 17.53, 17.42, 17.31, 17.54, 20.0, 0, 0.14, -0.02, -0.09],
            ["2016-07-07", 17.41, 17.51, 17.35, 17.52, 15.0, 0, 0.16, -0.03, -0.11],
            ["2016-07-08", 17.5, 17.39, 17.35, 17.51, 15.0, 0, 0.16, -0.05, -0.13],
            ["2016-07-11", 17.49, 17.48, 17.4, 17.55, 16.0, 0, 0.17, -0.07, -0.15],
            ["2016-07-12", 17.48, 17.71, 17.46, 17.75, 25.0, 0, 0.16, -0.1, -0.18],
            ["2016-07-13", 17.13, 17.05, 17.02, 17.39, 28.0, 0, 0.07, -0.17, -0.2],
            ["2016-07-14", 17.07, 17.09, 17.0, 17.16, 12.0, 0, 0.08, -0.17, -0.21],
            ["2016-07-15", 17.08, 17.14, 17.08, 17.17, 11.0, 0, 0.09, -0.18, -0.22],
            ["2016-07-18", 17.15, 17.26, 17.13, 17.49, 24.0, 0, 0.1, -0.19, -0.23],
            ["2016-07-19", 17.26, 17.12, 17.09, 17.33, 13.0, 0, 0.07, -0.21, -0.25],
            ["2016-07-20", 17.1, 17.07, 17.02, 17.14, 11.0, 0, 0.06, -0.23, -0.26],
            ["2016-07-21", 17.07, 17.24, 17.07, 17.27, 14.0, 0, 0.07, -0.23, -0.27],
            ["2016-07-22", 17.25, 17.08, 17.03, 17.25, 10.0, 0, 0.04, -0.26, -0.28],
            ["2016-07-25", 17.09, 17.12, 17.01, 17.18, 8.0, 0, 0.04, -0.26, -0.28],
            ["2016-07-26", 17.05, 17.17, 17.05, 17.2, 11.0, 0, 0.04, -0.27, -0.29],
            ["2016-07-27", 17.2, 17.37, 16.89, 17.38, 32.0, 0, 0.02, -0.28, -0.29],
            ["2016-07-28", 17.19, 17.14, 17.09, 17.29, 19.0, 0, -0.04, -0.32, -0.3],
            ["2016-07-29", 17.15, 17.16, 17.04, 17.23, 12.0, 0, -0.08, -0.33, -0.29],
            ["2016-08-01", 17.15, 17.18, 17.1, 17.24, 19.0, 0, -0.13, -0.34, -0.28],
            ["2016-08-02", 17.21, 17.15, 17.12, 17.25, 9.0, 0, -0.19, -0.36, -0.26],
            ["2016-08-03", 17.08, 17.07, 17.01, 17.16, 9.0, 0, -0.25, -0.36, -0.24],
            ["2016-08-04", 17.11, 17.06, 16.98, 17.12, 11.0, 1, -0.29, -0.35, -0.2],
            ["2016-08-05", 17.06, 17.1, 17.05, 17.15, 16.0, 0, -0.33, -0.32, -0.16],
            ["2016-08-08", 17.14, 17.13, 17.07, 17.15, 13.0, 0, -0.35, -0.29, -0.11],
            ["2016-08-09", 17.13, 17.17, 17.1, 17.2, 25.0, 0, -0.35, -0.24, -0.06],
            ["2016-08-10", 17.17, 17.28, 17.15, 17.29, 18.0, 0, -0.31, -0.17, -0.01],
            ["2016-08-11", 17.3, 17.45, 17.26, 17.87, 31.0, 0, -0.24, -0.09, 0.03],
            ["2016-08-12", 17.51, 17.99, 17.47, 18.0, 44.0, 0, -0.14, -0.0, 0.07],
            ["2016-08-15", 18.1, 18.42, 18.02, 18.99, 81.0, 0, -0.09, 0.04, 0.09],
            ["2016-08-16", 18.64, 18.31, 18.12, 18.87, 60.0, 0, -0.1, 0.05, 0.1],
            ["2016-08-17", 18.43, 18.4, 18.31, 18.68, 21.0, 0, -0.08, 0.08, 0.11],
            ["2016-08-18", 18.33, 18.23, 18.13, 18.65, 32.0, 0, -0.07, 0.09, 0.13],
            ["2016-08-19", 18.34, 18.62, 18.31, 18.75, 39.0, 0, 0.0, 0.14, 0.14],
            ["2016-08-22", 18.62, 18.69, 18.51, 18.8, 20.0, 0, 0.01, 0.14, 0.13],
            ["2016-08-23", 18.61, 18.66, 18.52, 19.0, 28.0, 0, 0.01, 0.14, 0.13],
            ["2016-08-24", 18.66, 18.62, 18.43, 18.7, 19.0, 0, 0.0, 0.13, 0.13],
            ["2016-08-25", 18.57, 18.51, 18.19, 18.64, 19.0, 0, -0.0, 0.13, 0.13],
            ["2016-08-26", 18.49, 18.55, 18.44, 18.6, 16.0, 0, 0.01, 0.13, 0.13],
            ["2016-08-29", 18.46, 18.27, 18.03, 18.48, 20.0, 0, 0.01, 0.13, 0.13],
            ["2016-08-30", 18.24, 18.44, 18.23, 18.52, 19.0, 0, 0.07, 0.17, 0.13],
            ["2016-08-31", 18.36, 18.63, 18.36, 18.76, 15.0, 0, 0.13, 0.18, 0.12],
            ["2016-09-01", 18.6, 18.62, 18.55, 18.78, 15.0, 0, 0.16, 0.18, 0.1],
            ["2016-09-02", 18.52, 18.68, 18.48, 18.72, 17.0, 0, 0.19, 0.17, 0.08],
            ["2016-09-05", 18.68, 18.75, 18.57, 18.82, 19.0, 0, 0.2, 0.15, 0.05],
            ["2016-09-06", 18.75, 18.51, 18.43, 18.78, 17.0, 0, 0.18, 0.11, 0.02],
            ["2016-09-07", 18.51, 18.56, 18.4, 18.62, 17.0, 0, 0.17, 0.08, -0.0],
            ["2016-09-08", 18.58, 18.53, 18.48, 18.63, 8.0, 0, 0.13, 0.04, -0.03],
            ["2016-09-09", 18.52, 18.33, 18.31, 18.57, 8.0, 0, 0.06, -0.02, -0.05],
            ["2016-09-12", 18.16, 17.9, 17.81, 18.18, 28.0, 0, -0.02, -0.07, -0.06],
            ["2016-09-13", 17.91, 17.91, 17.9, 18.08, 13.0, 0, -0.05, -0.08, -0.05],
            ["2016-09-14", 17.99, 17.54, 17.48, 17.99, 22.0, 0, -0.09, -0.09, -0.05],
            ["2016-09-19", 17.55, 17.81, 17.55, 17.88, 16.0, 0, -0.06, -0.06, -0.03],
            ["2016-09-20", 17.8, 17.74, 17.67, 17.85, 10.0, 0, -0.06, -0.05, -0.02],
            ["2016-09-21", 17.75, 17.88, 17.75, 17.95, 7.0, 0, -0.03, -0.03, -0.02],
            ["2016-09-22", 17.99, 17.97, 17.88, 18.17, 12.0, 0, -0.02, -0.02, -0.01],
            ["2016-09-23", 17.99, 17.98, 17.93, 18.09, 13.0, 0, -0.01, -0.01, -0.01],
            ["2016-09-26", 17.91, 18.0, 17.85, 18.09, 14.0, 0, -0.0, -0.01, -0.01],
            ["2016-09-27", 17.97, 18.07, 17.94, 18.1, 10.0, 0, 0.0, -0.01, -0.01],
            ["2016-09-28", 18.06, 17.89, 17.83, 18.06, 10.0, 0, -0.0, -0.01, -0.01],
            ["2016-09-29", 17.96, 18.0, 17.92, 18.07, 10.0, 0, 0.03, 0.01, -0.01],
            ["2016-09-30", 17.96, 18.0, 17.95, 18.1, 8.0, 0, 0.06, 0.02, -0.01],
            ["2016-10-10", 18.03, 18.3, 18.03, 18.38, 19.0, 0, 0.11, 0.04, -0.02],
            ["2016-10-11", 18.33, 18.33, 18.26, 18.49, 12.0, 0, 0.1, 0.02, -0.04],
            ["2016-10-12", 18.28, 18.15, 18.1, 18.31, 10.0, 0, 0.07, -0.02, -0.05],
            ["2016-10-13", 18.15, 18.09, 18.05, 18.21, 10.0, 0, 0.06, -0.03, -0.06],
            ["2016-10-14", 18.1, 18.1, 18.0, 18.15, 12.0, 0, 0.04, -0.05, -0.07],
            ["2016-10-17", 18.07, 17.86, 17.83, 18.1, 12.0, 0, 0.01, -0.07, -0.08],
            ["2016-10-18", 17.86, 17.93, 17.84, 17.99, 14.0, 0, 0.03, -0.07, -0.08],
            ["2016-10-19", 17.93, 17.88, 17.83, 18.05, 11.0, 0, 0.03, -0.07, -0.08],
            ["2016-10-20", 17.9, 17.89, 17.83, 17.98, 12.0, 0, 0.05, -0.06, -0.09],
            ["2016-10-21", 17.91, 17.91, 17.82, 17.93, 12.0, 0, 0.07, -0.06, -0.09],
            ["2016-10-24", 17.93, 18.31, 17.86, 18.42, 29.0, 0, 0.11, -0.05, -0.1],
            ["2016-10-25", 18.31, 18.13, 18.09, 18.46, 19.0, 0, 0.06, -0.09, -0.12],
            ["2016-10-26", 18.12, 17.97, 17.95, 18.15, 14.0, 0, 0.02, -0.12, -0.13],
            ["2016-10-27", 18.06, 17.81, 17.77, 18.06, 21.0, 0, -0.01, -0.13, -0.13],
            ["2016-10-28", 17.8, 17.9, 17.8, 18.05, 20.0, 0, -0.01, -0.13, -0.13],
            ["2016-10-31", 17.87, 17.86, 17.72, 17.96, 12.0, 0, -0.02, -0.14, -0.13],
            ["2016-11-01", 17.87, 17.98, 17.79, 17.99, 18.0, 0, -0.03, -0.14, -0.12],
            ["2016-11-02", 17.86, 17.84, 17.76, 17.94, 30.0, 0, -0.06, -0.15, -0.12],
            ["2016-11-03", 17.83, 17.93, 17.79, 17.97, 27.0, 0, -0.07, -0.14, -0.11],
            ["2016-11-04", 17.9, 17.91, 17.87, 18.0, 26.0, 0, -0.09, -0.15, -0.1],
            ["2016-11-07", 17.91, 17.89, 17.85, 17.93, 20.0, 0, -0.11, -0.14, -0.09],
            ["2016-11-08", 17.92, 17.99, 17.89, 18.06, 26.0, 0, -0.12, -0.13, -0.07],
            ["2016-11-09", 18.0, 17.89, 17.77, 18.08, 34.0, 0, -0.15, -0.13, -0.06],
            ["2016-11-10", 17.95, 18.0, 17.94, 18.11, 27.0, 0, -0.15, -0.11, -0.03],
            ["2016-11-11", 17.95, 18.02, 17.93, 18.08, 27.0, 0, -0.17, -0.1, -0.01],
            ["2016-11-14", 18.0, 18.04, 17.95, 18.25, 35.0, 0, -0.18, -0.08, 0.01],
            ["2016-11-15", 18.1, 18.18, 18.03, 18.24, 25.0, 0, -0.18, -0.06, 0.04],
            ["2016-11-16", 18.23, 18.12, 18.05, 18.29, 23.0, 0, -0.21, -0.04, 0.06],
            ["2016-11-17", 18.11, 18.12, 18.01, 18.14, 27.0, 0, -0.21, -0.01, 0.09],
            ["2016-11-18", 18.12, 18.1, 18.03, 18.16, 18.0, 0, -0.19, 0.03, 0.12],
            ["2016-11-21", 18.08, 18.34, 18.08, 18.68, 41.0, 0, -0.13, 0.08, 0.15],
            ["2016-11-22", 18.37, 18.37, 18.28, 18.49, 52.0, 0, -0.09, 0.12, 0.17],
            ["2016-11-23", 18.4, 18.84, 18.37, 18.9, 66.0, 0, -0.02, 0.17, 0.18],
            ["2016-11-24", 18.77, 18.74, 18.61, 18.97, 26.0, 0, -0.02, 0.17, 0.18],
            ["2016-11-25", 18.8, 18.99, 18.66, 19.02, 40.0, 0, -0.01, 0.18, 0.19],
            ["2016-11-28", 19.1, 18.65, 18.52, 19.2, 85.0, 0, -0.06, 0.16, 0.19],
            ["2016-11-29", 18.65, 18.75, 18.51, 18.76, 49.0, 0, -0.06, 0.17, 0.2],
            ["2016-11-30", 18.76, 18.55, 18.47, 18.82, 39.0, 0, -0.08, 0.17, 0.21],
            ["2016-12-01", 18.55, 18.49, 18.41, 18.64, 53.0, 0, -0.06, 0.19, 0.22],
            ["2016-12-02", 18.53, 18.49, 18.24, 18.54, 48.0, 0, -0.02, 0.21, 0.23],
            ["2016-12-05", 18.39, 18.66, 18.34, 18.67, 50.0, 0, 0.03, 0.25, 0.23],
            ["2016-12-06", 18.66, 18.6, 18.57, 18.78, 31.0, 0, 0.08, 0.26, 0.23],
            ["2016-12-07", 18.65, 18.62, 18.58, 18.71, 12.0, 0, 0.15, 0.29, 0.21],
            ["2016-12-08", 18.67, 18.76, 18.62, 18.88, 26.0, 0, 0.25, 0.32, 0.19],
            ["2016-12-09", 18.76, 19.2, 18.75, 19.34, 62.0, 0, 0.34, 0.33, 0.16],
            ["2016-12-12", 19.16, 19.25, 18.9, 19.65, 79.0, 1, 0.34, 0.28, 0.11],
            ["2016-12-13", 19.09, 18.88, 18.81, 19.2, 24.0, 0, 0.27, 0.2, 0.06],
            ["2016-12-14", 18.8, 18.82, 18.8, 19.14, 32.0, 0, 0.23, 0.13, 0.02],
            ["2016-12-15", 18.73, 18.24, 18.2, 18.73, 36.0, 0, 0.13, 0.05, -0.01],
            ["2016-12-16", 18.24, 18.18, 18.12, 18.4, 24.0, 0, 0.1, 0.02, -0.03],
            ["2016-12-19", 18.15, 18.01, 17.93, 18.18, 24.0, 0, 0.06, -0.02, -0.05],
            ["2016-12-20", 17.99, 17.79, 17.7, 17.99, 29.0, 1, 0.02, -0.05, -0.05],
            ["2016-12-21", 17.83, 17.81, 17.77, 17.98, 30.0, 0, 0.0, -0.05, -0.06],
            ["2016-12-22", 17.85, 17.72, 17.65, 17.85, 21.0, 0, -0.03, -0.07, -0.06],
            ["2016-12-23", 17.77, 17.6, 17.54, 17.77, 18.0, 0, -0.04, -0.08, -0.05],
            ["2016-12-26", 17.56, 17.75, 17.39, 17.77, 16.0, 0, -0.04, -0.07, -0.05],
            ["2016-12-27", 17.73, 17.71, 17.65, 17.82, 10.0, 0, -0.06, -0.07, -0.04],
            ["2016-12-28", 17.72, 17.62, 17.49, 17.77, 26.0, 0, -0.09, -0.07, -0.03],
            ["2016-12-29", 17.6, 17.49, 17.43, 17.62, 28.0, 0, -0.09, -0.06, -0.02],
            ["2016-12-30", 17.53, 17.6, 17.47, 17.61, 22.0, 0, -0.05, -0.03, -0.01],
            ["2017-01-03", 17.6, 17.92, 17.57, 17.98, 28.0, 1, 0.0, 0.0, 0.0]
        ]);
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            var macds = [];
            var difs = [];
            var deas = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
                macds.push(rawData[i][6]);
                difs.push(rawData[i][7]);
                deas.push(rawData[i][8]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
                macds: macds,
                difs: difs,
                deas: deas
            };
        }
        //分段计算
        function fenduans() {
            var markLineData = [];
            var idx = 0;
            var tag = 0;
            var vols = 0;
            for (var i = 0; i < data.times.length; i++) {
                //初始化数据
                if (data.datas[i][5] != 0 && tag == 0) {
                    idx = i;
                    vols = data.datas[i][4];
                    tag = 1;
                }
                if (tag == 1) {
                    vols += data.datas[i][4];
                }
                if (data.datas[i][5] != 0 && tag == 1) {
                    markLineData.push([
                        {
                            xAxis: idx,
                            yAxis: data.datas[idx][1] > data.datas[idx][0]
                                ? data.datas[idx][3].toFixed(2)
                                : data.datas[idx][2].toFixed(2),
                            value: vols
                        },
                        {
                            xAxis: i,
                            yAxis: data.datas[i][1] > data.datas[i][0]
                                ? data.datas[i][3].toFixed(2)
                                : data.datas[i][2].toFixed(2)
                        }
                    ]);
                    idx = i;
                    vols = data.datas[i][4];
                    tag = 2;
                }
                //更替数据
                if (tag == 2) {
                    vols += data.datas[i][4];
                }
                if (data.datas[i][5] != 0 && tag == 2) {
                    markLineData.push([
                        {
                            xAxis: idx,
                            yAxis: data.datas[idx][1] > data.datas[idx][0]
                                ? data.datas[idx][3].toFixed(2)
                                : data.datas[idx][2].toFixed(2),
                            value: (vols / (i - idx + 1)).toFixed(2) + " M"
                        },
                        {
                            xAxis: i,
                            yAxis: data.datas[i][1] > data.datas[i][0]
                                ? data.datas[i][3].toFixed(2)
                                : data.datas[i][2].toFixed(2)
                        }
                    ]);
                    idx = i;
                    vols = data.datas[i][4];
                }
            }
            return markLineData;
        }
        //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push("-");
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        // DATA //
        // CHART //
        this.option = {
            title: {
                text: "Stock Charts",
                left: 0
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "line"
                }
            },
            legend: {
                data: ["KLine", "MA5"]
            },
            grid: [
                {
                    left: "3%",
                    right: "1%",
                    height: "60%"
                },
                {
                    left: "3%",
                    right: "1%",
                    top: "71%",
                    height: "10%"
                },
                {
                    left: "3%",
                    right: "1%",
                    top: "82%",
                    height: "14%"
                }
            ],
            xAxis: [
                {
                    type: "category",
                    data: data.times,
                    scale: true,
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: "dataMin",
                    max: "dataMax"
                },
                {
                    type: "category",
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: { show: false }
                },
                {
                    type: "category",
                    gridIndex: 2,
                    data: data.times,
                    axisLabel: { show: false }
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: {
                        show: false
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber: 3,
                    axisLine: { onZero: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true }
                },
                {
                    gridIndex: 2,
                    splitNumber: 4,
                    axisLine: { onZero: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true }
                }
            ],
            dataZoom: [
                {
                    type: "inside",
                    xAxisIndex: [0, 0],
                    start: 20,
                    end: 100
                },
                {
                    show: true,
                    xAxisIndex: [0, 1],
                    type: "slider",
                    top: "97%",
                    start: 20,
                    end: 100
                },
                {
                    show: false,
                    xAxisIndex: [0, 2],
                    type: "slider",
                    start: 20,
                    end: 100
                }
            ],
            series: [
                {
                    name: "K线周期图表(matols.com)",
                    type: "candlestick",
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: "#ef232a",
                            color0: "#14b143",
                            borderColor: "#ef232a",
                            borderColor0: "#14b143"
                        }
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: "Honeydew"
                            }
                        },
                        data: fenduans()
                    },
                    markPoint: {
                        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
                    },
                    markLine: {
                        label: {
                            normal: {
                                position: "middle",
                                textStyle: { color: "Blue", fontSize: 15 }
                            }
                        },
                        data: fenduans(),
                        symbol: ["circle", "none"]
                    }
                },
                {
                    name: "MA5",
                    type: "line",
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },
                {
                    name: "Volumn",
                    type: "bar",
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList;
                                if (data.datas[params.dataIndex][1] >
                                    data.datas[params.dataIndex][0]) {
                                    colorList = "#ef232a";
                                }
                                else {
                                    colorList = "#14b143";
                                }
                                return colorList;
                            }
                        }
                    }
                },
                {
                    name: "MACD",
                    type: "bar",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.macds,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList;
                                if (params.data >= 0) {
                                    colorList = "#ef232a";
                                }
                                else {
                                    colorList = "#14b143";
                                }
                                return colorList;
                            }
                        }
                    }
                },
                {
                    name: "DIF",
                    type: "line",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.difs
                },
                {
                    name: "DEA",
                    type: "line",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.deas
                }
            ]
        };
        // CHART CODE END // });
    };
    Chart1Component.prototype.ngOnDestroy = function () { };
    Chart1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-chart1",
            // templateUrl: './chart1.component.html',
            // styleUrls: ['./chart1.component.css'],
            template: "\n      <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n    "
        })
    ], Chart1Component);
    return Chart1Component;
}());



/***/ }),

/***/ "../../../../../src/app/chart2/chart2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Chart2Component = (function () {
    /////////////
    function Chart2Component(http) {
        this.http = http;
        this.option = {};
    }
    Chart2Component.prototype.ngOnInit = function () {
        // this.http.get('https://api.iextrading.com/1.0/stock/aapl/chart/1y').subscribe(data => {
        this.http.get('https://api.iextrading.com/1.0/stock/aapl/chart/1y').subscribe(function (data) {
            // this.http.get('https://api.iextrading.com/1.0/stock/AAPL/chart/1y?format=csv').subscribe(data => {
            console.log(data);
            // console.log(data[6]['open']); // 117.52
            // console.log(data[6]); // {date: "2016-12-28", open: 117.52, high: 118.0166, low: 116.2, close: 116.76, …}
            // .map(data => _.values(data));
        });
        // }
        var echarts = {};
        // let resdata = res["list"].map(res => res.main.temp_max);
        // let resdata = res.map(res => res.main.temp_max);
        /////////////
        // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
        // var data0 = splitData([
        // var data0 = splitData( resdata );
        var data0 = splitData([
            ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
            ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
            ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
            ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
        ]);
        function splitData(rawData) {
            var categoryData = [];
            var values = [];
            for (var i = 0; i < rawData.length; i++) {
                categoryData.push(rawData[i].splice(0, 1)[0]);
                values.push(rawData[i]);
            }
            return {
                categoryData: categoryData,
                values: values
            };
        }
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        }
        this.option = {
            title: {
                text: '上证指数',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            legend: {
                data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: '日K',
                    type: 'candlestick',
                    data: data0.values,
                    markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return param != null ? Math.round(param.value) : '';
                                }
                            }
                        },
                        data: [
                            {
                                name: 'XX标点',
                                coord: ['2013/5/31', 2300],
                                value: 2300,
                                itemStyle: {
                                    normal: { color: 'rgb(41,60,85)' }
                                }
                            },
                            {
                                name: 'highest value',
                                type: 'max',
                                valueDim: 'highest'
                            },
                            {
                                name: 'lowest value',
                                type: 'min',
                                valueDim: 'lowest'
                            },
                            {
                                name: 'average value on close',
                                type: 'average',
                                valueDim: 'close'
                            }
                        ],
                        tooltip: {
                            formatter: function (param) {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        data: [
                            // [
                            //     {
                            //         name: 'from lowest to highest',
                            //         type: 'min',
                            //         valueDim: 'lowest',
                            //         symbol: 'circle',
                            //         symbolSize: 10,
                            //         label: {
                            //             normal: {show: false},
                            //             emphasis: {show: false}
                            //         }
                            //     },
                            //     {
                            //         type: 'max',
                            //         valueDim: 'highest',
                            //         symbol: 'circle',
                            //         symbolSize: 10,
                            //         label: {
                            //             normal: {show: false},
                            //             emphasis: {show: false}
                            //         }
                            //     }
                            // ],
                            {
                                name: 'min line on close',
                                type: 'min',
                                valueDim: 'close'
                            },
                            {
                                name: 'max line on close',
                                type: 'max',
                                valueDim: 'close'
                            }
                        ]
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
            ]
        };
        // CHART CODE END // });
        // });  // close _chart - service //
    }; // close ngAfterViewInit //
    Chart2Component.prototype.ngOnDestroy = function () { };
    Chart2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-chart2",
            // templateUrl: './chart2.component.html',
            // styleUrls: ['./chart2.component.css'],
            template: "\n      <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Chart2Component);
    return Chart2Component;
}()); // Chart2Component //



/***/ }),

/***/ "../../../../../src/app/chart3/chart3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Chart3Component = (function () {
    function Chart3Component() {
        this.option = {};
    }
    Chart3Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
        var data0 = splitData([
            ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
            ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
            ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
            ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
            ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
            ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
            ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
            ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
            ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
            ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
            ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
            ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
            ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
            ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
            ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
            ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
            ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
            ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
            ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
            ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
            ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
            ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
            ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
            ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
            ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
            ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
            ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
            ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
            ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
            ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
            ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
            ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
            ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
            ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
            ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
            ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
            ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
            ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
            ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
            ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
            ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
            ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
            ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
            ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
            ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
            ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
            ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
            ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
            ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
            ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
            ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
            ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
            ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
            ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
            ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
            ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
            ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
            ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
            ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
            ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
            ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
            ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
            ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
            ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
            ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
            ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
            ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
            ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
            ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
            ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
            ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
            ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
            ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
            ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
            ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
            ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
            ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
            ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
            ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
            ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
            ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
            ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
            ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
            ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
            ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
            ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
            ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
            ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
        ]);
        function splitData(rawData) {
            var categoryData = [];
            var values = [];
            for (var i = 0; i < rawData.length; i++) {
                categoryData.push(rawData[i].splice(0, 1)[0]);
                values.push(rawData[i]);
            }
            return {
                categoryData: categoryData,
                values: values
            };
        }
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data0.values[i - j][1];
                }
                result.push(sum / dayCount);
            }
            return result;
        }
        this.option = {
            title: {
                text: 'Market',
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                }
            },
            legend: {
                data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%'
            },
            xAxis: {
                type: 'category',
                data: data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: { onZero: false },
                splitLine: { show: false },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 50,
                    end: 100
                },
                {
                    show: true,
                    type: 'slider',
                    y: '90%',
                    start: 50,
                    end: 100
                }
            ],
            series: [
                {
                    name: '日K',
                    type: 'candlestick',
                    data: data0.values,
                    markPoint: {
                        label: {
                            normal: {
                                formatter: function (param) {
                                    return param != null ? Math.round(param.value) : '';
                                }
                            }
                        },
                        data: [
                            {
                                name: 'XX标点',
                                coord: ['2013/5/31', 2300],
                                value: 2300,
                                itemStyle: {
                                    normal: { color: 'rgb(41,60,85)' }
                                }
                            },
                            {
                                name: 'highest value',
                                type: 'max',
                                valueDim: 'highest'
                            },
                            {
                                name: 'lowest value',
                                type: 'min',
                                valueDim: 'lowest'
                            },
                            {
                                name: 'average value on close',
                                type: 'average',
                                valueDim: 'close'
                            }
                        ],
                        tooltip: {
                            formatter: function (param) {
                                return param.name + '<br>' + (param.data.coord || '');
                            }
                        }
                    },
                    markLine: {
                        symbol: ['none', 'none'],
                        data: [
                            // [
                            //     {
                            //         name: 'from lowest to highest',
                            //         type: 'min',
                            //         valueDim: 'lowest',
                            //         symbol: 'circle',
                            //         symbolSize: 10,
                            //         label: {
                            //             normal: {show: false},
                            //             emphasis: {show: false}
                            //         }
                            //     },
                            //     {
                            //         type: 'max',
                            //         valueDim: 'highest',
                            //         symbol: 'circle',
                            //         symbolSize: 10,
                            //         label: {
                            //             normal: {show: false},
                            //             emphasis: {show: false}
                            //         }
                            //     }
                            // ],
                            {
                                name: 'min line on close',
                                type: 'min',
                                valueDim: 'close'
                            },
                            {
                                name: 'max line on close',
                                type: 'max',
                                valueDim: 'close'
                            }
                        ]
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: calculateMA(20),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30),
                    smooth: true,
                    lineStyle: {
                        normal: { opacity: 0.5 }
                    }
                },
            ]
        };
        // CHART CODE END // });
    };
    Chart3Component.prototype.ngOnDestroy = function () { };
    Chart3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-chart3",
            // templateUrl: './chart3.component.html',
            // styleUrls: ['./chart3.component.css'],
            template: "\n      <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n    "
        })
    ], Chart3Component);
    return Chart3Component;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n**********************************************************\r\n* Component Code remixed from page below:                *\r\n* https://startbootstrap.com/                            *\r\n**********************************************************\r\n*/\r\n\r\n/*    contact style    */\r\nsection#contact {\r\n  /* background-color: #222; */\r\n  /* background-image: url(../img/map-image.png); */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nsection#contact .section-heading {\r\n  color: #fff;\r\n}\r\n\r\nsection#contact .form-group {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsection#contact .form-group input,\r\nsection#contact .form-group textarea {\r\n  padding: 20px;\r\n}\r\n\r\nsection#contact .form-group input.form-control {\r\n  height: auto;\r\n}\r\n\r\nsection#contact .form-group textarea.form-control {\r\n  height: 236px;\r\n}\r\n\r\nsection#contact .form-control:focus {\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n\r\nsection#contact::-webkit-input-placeholder {\r\n  text-transform: uppercase;\r\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-weight: 700;\r\n  color: #bbb;\r\n}\r\n\r\nsection#contact:-moz-placeholder {\r\n  text-transform: uppercase;\r\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-weight: 700;\r\n  color: #bbb;\r\n}\r\n\r\nsection#contact::-moz-placeholder {\r\n  text-transform: uppercase;\r\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-weight: 700;\r\n  color: #bbb;\r\n}\r\n\r\nsection#contact:-ms-input-placeholder {\r\n  text-transform: uppercase;\r\n  font-family: Montserrat,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-weight: 700;\r\n  color: #bbb;\r\n}\r\n\r\nsection#contact .text-danger {\r\n  color: #e74c3c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://startbootstrap.com/                            *\n**********************************************************\n-->\n<section id=\"Contact\" class=\"contact m-0 jumbotron text-center text-white\" style=\"\nbackground: linear-gradient(to left, #3a6186 , #89253e);\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Contact</h1>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h2>Get in Touch!</h2>\n        <hr class=\"primary\">\n        <p></p>\n        <hr class=\"primary\">\n        <form name=\"sentMessage\" id=\"contactForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name *\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\n                <p class=\"help-block text-danger\"></p>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\n                <p class=\"help-block text-danger\"></p>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"tel\" class=\"form-control\" placeholder=\"Phone *\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" placeholder=\"Your Message *\" id=\"message\" required data-validation-required-message=\"Please enter a message.\"></textarea>\n                <p class=\"help-block text-danger\"></p>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-lg-12 text-center\">\n              <div id=\"success\"></div>\n              <button type=\"submit\" class=\"btn btn-xl\">Send</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/d3/d3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d3/d3.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  d3 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/d3/d3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D3Component = (function () {
    function D3Component() {
    }
    D3Component.prototype.ngOnInit = function () {
    };
    D3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d3',
            template: __webpack_require__("../../../../../src/app/d3/d3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d3/d3.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D3Component);
    return D3Component;
}());



/***/ }),

/***/ "../../../../../src/app/d31/d31.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d31/d31.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n\n  <!-- <div class=\"text-center bg-primary\"><h3>Data Visualization</h3></div> -->\n  <div class=\"d3-0\">\n    <div class=\"d3-scale\">\n      <!-- <iframe  class=\"d3-scale\" src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;\" scrolling=\"no\"></iframe> -->\n      <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" class=\"d3-wrap\" frameborder=\"0\" scrolling=\"no\"></iframe>\n    </div>\n  </div>\n<!--\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">D3</h1>\n  <p class=\"lead text-muted\">Data Visualization</p>\n  <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/d31/d31.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D31Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D31Component = (function () {
    function D31Component() {
    }
    D31Component.prototype.ngOnInit = function () {
    };
    D31Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d31',
            template: __webpack_require__("../../../../../src/app/d31/d31.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d31/d31.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D31Component);
    return D31Component;
}());



/***/ }),

/***/ "../../../../../src/app/d32/d32.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d32/d32.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n    <div class=\"container\">\n      <!-- <h1 class=\"jumbotron-heading h13d\">D3</h1> -->\n    <p class=\"lead text-muted\">Data Visualization</p>\n    <iframe src=\"../assets/aframe/d3chart/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/d32/d32.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D32Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D32Component = (function () {
    function D32Component() {
    }
    D32Component.prototype.ngOnInit = function () {
    };
    D32Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d32',
            template: __webpack_require__("../../../../../src/app/d32/d32.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d32/d32.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D32Component);
    return D32Component;
}());



/***/ }),

/***/ "../../../../../src/app/d33/d33.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d33/d33.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <!-- <h1 class=\"jumbotron-heading h13d\">D3</h1> -->\n  <p class=\"lead text-muted\">Data Visualization</p>\n  <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/d33/d33.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D33Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D33Component = (function () {
    function D33Component() {
    }
    D33Component.prototype.ngOnInit = function () {
    };
    D33Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d33',
            template: __webpack_require__("../../../../../src/app/d33/d33.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d33/d33.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D33Component);
    return D33Component;
}());



/***/ }),

/***/ "../../../../../src/app/d34/d34.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d34/d34.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <!-- <h1 class=\"jumbotron-heading h13d\">D3</h1> -->\n  <p class=\"lead text-muted\">Data Visualization</p>\n  <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/d34/d34.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D34Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D34Component = (function () {
    function D34Component() {
    }
    D34Component.prototype.ngOnInit = function () {
    };
    D34Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d34',
            template: __webpack_require__("../../../../../src/app/d34/d34.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d34/d34.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D34Component);
    return D34Component;
}());



/***/ }),

/***/ "../../../../../src/app/d35/d35.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d35/d35.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <!-- <h1 class=\"jumbotron-heading h13d\">D3</h1> -->\n  <p class=\"lead text-muted\">Data Visualization</p>\n  <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/d35/d35.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D35Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D35Component = (function () {
    function D35Component() {
    }
    D35Component.prototype.ngOnInit = function () {
    };
    D35Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d35',
            template: __webpack_require__("../../../../../src/app/d35/d35.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d35/d35.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D35Component);
    return D35Component;
}());



/***/ }),

/***/ "../../../../../src/app/d36/d36.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://github.com/d3/d3/wiki/Gallery                  *\r\n**********************************************************\r\n*/\r\n#wrap { width: 100%; height: 100%; padding: 0; overflow: hidden; }\r\n#frame { width: 100%; height: 100%; border: 1px solid black; }\r\n#frame {\r\n    -ms-zoom: 0.75;\r\n    -moz-transform: scale(0.75);\r\n    -moz-transform-origin: 0 0;\r\n    -o-transform: scale(0.75);\r\n    -o-transform-origin: 0 0;\r\n    -webkit-transform: scale(0.75);\r\n    -webkit-transform-origin: 0 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/d36/d36.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from:                           *\n* https://github.com/d3/d3/wiki/Gallery                  *\n**********************************************************\n-->\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <!-- <h1 class=\"jumbotron-heading h13d\">D3</h1> -->\n  <p class=\"lead text-muted\">Data Visualization</p>\n  <iframe src=\"../assets/d3/4060606-Choropleth/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/d36/d36.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D36Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D36Component = (function () {
    function D36Component() {
    }
    D36Component.prototype.ngOnInit = function () {
    };
    D36Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-d36',
            template: __webpack_require__("../../../../../src/app/d36/d36.component.html"),
            styles: [__webpack_require__("../../../../../src/app/d36/d36.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], D36Component);
    return D36Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Dashboards</h1>\n    <p class=\"lead text-muted\">Built on example charts from echarts.baidu.com</p>\n\n  </div>\n</section>\n\n<section class=\"dash m-0 p-4 text-center\" id=\"dash\">\n  <div class=\"\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v1></app-v1>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 1</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v2></app-v2>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 2</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v3></app-v3>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 3</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v4></app-v4>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 4</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v5></app-v5>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 5</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-sm-12 viz-item\">\n        <app-v6></app-v6>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 6</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading h13d\"></h1>\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashComponent = (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash',
            template: __webpack_require__("../../../../../src/app/dash/dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dash/dash.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V1Component = (function () {
    function V1Component() {
        this.options = {};
    }
    V1Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.options = {
            // backgroundColor: echarts.bg,
            backgroundColor: '#95999d',
            // color: [colors.primaryLight],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: echarts.axisLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: echarts.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: echarts.splitLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'Score',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220],
                },
            ],
        };
        //});
    };
    V1Component.prototype.ngOnDestroy = function () {
    };
    V1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v1',
            // templateUrl: './v1.component.html',
            // styleUrls: ['./v1.component.css'],
            template: "\n    <div echarts [options]=\"options\" class=\"viz-chart\"></div>\n  ",
        })
    ], V1Component);
    return V1Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V2Component = (function () {
    function V2Component() {
        this.option = {};
    }
    V2Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: '完成率' }]
                }
            ]
        };
        //});
    };
    V2Component.prototype.ngOnDestroy = function () {
    };
    V2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v2',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V2Component);
    return V2Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V3Component = (function () {
    function V3Component() {
        this.options = {};
    }
    V3Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.options = {
            // backgroundColor: echarts.bg,
            backgroundColor: '#95999d',
            // color: [colors.danger, colors.warning],
            tooltip: {},
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
                textStyle: {
                    color: echarts.textColor,
                },
            },
            radar: {
                name: {
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Techology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 },
                ],
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                    },
                },
            },
            series: [
                {
                    name: 'Budget vs Spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: 'Allocated Budget',
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: 'Actual Spending',
                        },
                    ],
                },
            ],
        };
        // });
    };
    V3Component.prototype.ngOnDestroy = function () {
    };
    V3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v3',
            // templateUrl: './v3.component.html',
            // styleUrls: ['./v3.component.css'],
            template: "\n    <div echarts [options]=\"options\" class=\"viz-chart\"></div>\n  ",
        })
    ], V3Component);
    return V3Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V4Component = (function () {
    function V4Component() {
        this.option = {};
    }
    V4Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        //------------------------------------引用请注明出处
        var myData = ['大栅栏', '天安门', '故宫', '景山', '北海公园', '后海', '什刹海', '西单', '玉渊潭', '中央电视塔', '东单', '王府井', '南锣鼓巷', '工体', '潘家园', '琉璃厂'];
        var databeast = {
            1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
            2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
            3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
            4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
            6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
            7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
            9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
            10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
        };
        var databeauty = {
            1: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
            2: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            3: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
            4: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
            5: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            6: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            7: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
            8: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
            9: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
            10: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
            11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
            12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
        };
        var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.option = {
            baseOption: {
                backgroundColor: '#000',
                timeline: {
                    show: true,
                    axisType: 'category',
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            console.log(params);
                            return params.name + '月份数据统计';
                        }
                    },
                    autoPlay: true,
                    currentIndex: 6,
                    playInterval: 1000,
                    label: {
                        normal: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}月',
                        },
                    },
                    data: [],
                },
                title: {
                    //   text:'大北京景点帅哥美女统计',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    subtext: '作者:花自飘凌水自流',
                },
                legend: {
                    data: ['帅哥', '美女'],
                    top: 4,
                    right: '20%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}人',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
                toolbox: {
                    right: 20,
                    feature: {
                        saveAsImage: {},
                        restore: {},
                        dataView: {},
                        dataZoom: {},
                        magicType: {
                            type: ['line', 'bar']
                        },
                    }
                },
                grid: [{
                        show: false,
                        left: '4%',
                        top: 60,
                        bottom: 60,
                        containLabel: true,
                        width: '46%',
                    }, {
                        show: false,
                        left: '50.5%',
                        top: 80,
                        bottom: 60,
                        width: '0%',
                    }, {
                        show: false,
                        right: '4%',
                        top: 60,
                        bottom: 60,
                        containLabel: true,
                        width: '46%',
                    },],
                xAxis: [
                    {
                        type: 'value',
                        inverse: true,
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        position: 'top',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid',
                            },
                        },
                    }, {
                        gridIndex: 1,
                        show: false,
                    }, {
                        gridIndex: 2,
                        type: 'value',
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        position: 'top',
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#B2B2B2',
                                fontSize: 12,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#1F2022',
                                width: 1,
                                type: 'solid',
                            },
                        },
                    },
                ],
                yAxis: [{
                        type: 'category',
                        inverse: true,
                        position: 'right',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            margin: 8,
                            textStyle: {
                                color: '#9D9EA0',
                                fontSize: 12,
                            },
                        },
                        data: myData,
                    }, {
                        gridIndex: 1,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#9D9EA0',
                                fontSize: 12,
                            },
                        },
                        data: myData.map(function (value) {
                            return {
                                value: value,
                                textStyle: {
                                    align: 'center',
                                }
                            };
                        }),
                    }, {
                        gridIndex: 2,
                        type: 'category',
                        inverse: true,
                        position: 'left',
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            textStyle: {
                                color: '#9D9EA0',
                                fontSize: 12,
                            },
                        },
                        data: myData,
                    },],
                series: [],
            },
            options: [],
        };
        for (var i = 0; i < timeLineData.length; i++) {
            this.option.baseOption.timeline.data.push(timeLineData[i]);
            this.option.options.push({
                title: {
                    text: '大北京' + timeLineData[i] + '月份城区景点帅哥美女统计',
                },
                series: [{
                        name: '帅哥',
                        type: 'bar',
                        barGap: 20,
                        barWidth: 20,
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: true,
                                position: 'left',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#659F83',
                            },
                            emphasis: {
                                color: '#08C7AE',
                            },
                        },
                        data: databeast[timeLineData[i]],
                    },
                    {
                        name: '美女',
                        type: 'bar',
                        barGap: 20,
                        barWidth: 20,
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: true,
                                position: 'right',
                                offset: [0, 0],
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: '#F68989',
                            },
                            emphasis: {
                                color: '#F94646',
                            },
                        },
                        data: databeauty[timeLineData[i]],
                    }
                ]
            });
        }
        // CHART CODE END // });
    };
    V4Component.prototype.ngOnDestroy = function () { };
    V4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-v4",
            // templateUrl: './v4.component.html',
            // styleUrls: ['./v4.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  "
        })
    ], V4Component);
    return V4Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V5Component = (function () {
    function V5Component() {
        this.options = {};
    }
    V5Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.options = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: echarts.tooltipBackgroundColor,
                    },
                },
            },
            legend: {
                data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                textStyle: {},
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {},
                    },
                    axisLabel: {
                        textStyle: {},
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: echarts.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: echarts.splitLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'Mail marketing',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: [120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: 'Affiliate advertising',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                    name: 'Video ad',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                    name: 'Direct interview',
                    type: 'line',
                    stack: 'Total amount',
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                    name: 'Search engine',
                    type: 'line',
                    stack: 'Total amount',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                    areaStyle: { normal: { opacity: echarts.areaOpacity } },
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                },
            ],
        };
        //});
    };
    V5Component.prototype.ngOnDestroy = function () {
        //this.themeSubscription.unsubscribe();
    };
    V5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v5',
            // templateUrl: './v5.component.html',
            // styleUrls: ['./v5.component.css'],
            styles: [''],
            template: "\n    <div echarts [options]=\"options\" class=\"viz-chart\"></div>\n  ",
        })
    ], V5Component);
    return V5Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash/v6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V6Component = (function () {
    function V6Component() {
        this.options = {};
    }
    V6Component.prototype.ngAfterViewInit = function () {
        // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        // const colors: any = config.variables;
        // const echarts: any = config.variables.echarts;
        var echarts = {};
        this.options = {
            backgroundColor: echarts.bg,
            // color: [colors.primaryLight, colors.infoLight],
            legend: {
                data: ['bar', 'bar2'],
                align: 'left',
                textStyle: {
                    color: echarts.textColor,
                },
            },
            xAxis: [
                {
                    data: xAxisData,
                    silent: false,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: echarts.axisLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                },
            ],
            yAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            color: echarts.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: echarts.splitLineColor,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    },
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            },
        };
        for (var i = 0; i < 100; i++) {
            xAxisData.push('Category ' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        // });
    };
    V6Component.prototype.ngOnDestroy = function () {
    };
    V6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v6',
            // templateUrl: './v6.component.html',
            // styleUrls: ['./v6.component.css'],
            template: "\n    <div echarts [options]=\"options\" class=\"viz-chart\"></div>\n  ",
        })
    ], V6Component);
    return V6Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/dash2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash2/dash2.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"Finance\" class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Finance</h1>\n    <p class=\"lead text-muted\">Built on example charts from echarts.baidu.com</p>\n\n  </div>\n</section>\n\n<section class=\"dash m-0 p-4 text-center\" id=\"dash2\">\n  <div class=\"\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v21></app-v21>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 1</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v22></app-v22>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 2</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12 viz-item\">\n        <app-v23></app-v23>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 3</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v24></app-v24>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 4</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v25></app-v25>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 5</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-sm-12 viz-item\">\n        <app-v26></app-v26>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 6</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading h13d\"></h1>\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/dash2/dash2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash2Component = (function () {
    function Dash2Component() {
    }
    Dash2Component.prototype.ngOnInit = function () {
    };
    Dash2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash2',
            template: __webpack_require__("../../../../../src/app/dash2/dash2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dash2/dash2.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Dash2Component);
    return Dash2Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v21.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V21Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V21Component = (function () {
    function V21Component() {
        this.option = {};
    }
    V21Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: 'SENTIMENT' }]
                }
            ]
        };
        //});
    };
    V21Component.prototype.ngOnDestroy = function () {
    };
    V21Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v21',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V21Component);
    return V21Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v22.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V22Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V22Component = (function () {
    function V22Component() {
        this.option = {};
    }
    V22Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['TREND', 'DECLINERS', 'GAINERS']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    // data : ['周一','周二','周三','周四','周五','周六','周日']
                    data: ['INTC', 'AAPL', 'NVDA', 'GM', 'F', 'MSFT', 'TSLA']
                }
            ],
            series: [
                {
                    name: 'TREND',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: 'GAINERS',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: 'DECLINERS',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
        //});
    };
    V22Component.prototype.ngOnDestroy = function () {
    };
    V22Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v22',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V22Component);
    return V22Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v23.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V23Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V23Component = (function () {
    function V23Component() {
        this.option = {};
    }
    V23Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: 'PREDICTION' }]
                }
            ]
        };
        //});
    };
    V23Component.prototype.ngOnDestroy = function () {
    };
    V23Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v23',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V23Component);
    return V23Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v24.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V24Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V24Component = (function () {
    function V24Component() {
        this.option = {};
    }
    V24Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        //数据模型 time0 open1 close2 min3 max4 vol5 tag6 macd7 dif8 dea9
        //['2015-10-19',18.56,18.25,18.19,18.56,55.00,0,-0.00,0.08,0.09]
        var data = splitData([
            ["2015-10-16", 18.4, 18.58, 18.33, 18.79, 67.0, 1, 0.04, 0.11, 0.09],
            ["2015-10-19", 18.56, 18.25, 18.19, 18.56, 55.0, 0, -0.0, 0.08, 0.09],
            ["2015-10-20", 18.3, 18.22, 18.05, 18.41, 37.0, 0, 0.01, 0.09, 0.09],
            ["2015-10-21", 18.18, 18.69, 18.02, 18.98, 89.0, 0, 0.03, 0.1, 0.08],
            ["2015-10-22", 18.42, 18.29, 18.22, 18.48, 43.0, 0, -0.06, 0.05, 0.08],
            ["2015-10-23", 18.26, 18.19, 18.08, 18.36, 46.0, 0, -0.1, 0.03, 0.09],
            ["2015-10-26", 18.33, 18.07, 17.98, 18.35, 65.0, 0, -0.15, 0.03, 0.1],
            ["2015-10-27", 18.08, 18.04, 17.88, 18.13, 37.0, 0, -0.19, 0.03, 0.12],
            ["2015-10-28", 17.96, 17.86, 17.82, 17.99, 35.0, 0, -0.24, 0.03, 0.15],
            ["2015-10-29", 17.85, 17.81, 17.8, 17.93, 27.0, 0, -0.24, 0.06, 0.18],
            ["2015-10-30", 17.79, 17.93, 17.78, 18.08, 43.0, 0, -0.22, 0.11, 0.22],
            ["2015-11-02", 17.78, 17.83, 17.78, 18.04, 27.0, 0, -0.2, 0.15, 0.25],
            ["2015-11-03", 17.84, 17.9, 17.84, 18.06, 34.0, 0, -0.12, 0.22, 0.28],
            ["2015-11-04", 17.97, 18.36, 17.85, 18.39, 62.0, 0, -0.0, 0.3, 0.3],
            ["2015-11-05", 18.3, 18.57, 18.18, 19.08, 177.0, 0, 0.07, 0.33, 0.3],
            ["2015-11-06", 18.53, 18.68, 18.3, 18.71, 95.0, 0, 0.12, 0.35, 0.29],
            ["2015-11-09", 18.75, 19.08, 18.75, 19.98, 202.0, 1, 0.16, 0.35, 0.27],
            ["2015-11-10", 18.85, 18.64, 18.56, 18.99, 85.0, 0, 0.09, 0.29, 0.25],
            ["2015-11-11", 18.64, 18.44, 18.31, 18.64, 50.0, 0, 0.06, 0.27, 0.23],
            ["2015-11-12", 18.55, 18.27, 18.17, 18.57, 43.0, 0, 0.05, 0.25, 0.23],
            ["2015-11-13", 18.13, 18.14, 18.09, 18.34, 35.0, 0, 0.05, 0.24, 0.22],
            ["2015-11-16", 18.01, 18.1, 17.93, 18.17, 34.0, 0, 0.07, 0.25, 0.21],
            ["2015-11-17", 18.2, 18.14, 18.08, 18.45, 58.0, 0, 0.11, 0.25, 0.2],
            ["2015-11-18", 18.23, 18.16, 18.0, 18.45, 47.0, 0, 0.13, 0.25, 0.19],
            ["2015-11-19", 18.08, 18.2, 18.05, 18.25, 32.0, 0, 0.15, 0.24, 0.17],
            ["2015-11-20", 18.15, 18.15, 18.11, 18.29, 36.0, 0, 0.13, 0.21, 0.15],
            ["2015-11-23", 18.16, 18.19, 18.12, 18.34, 47.0, 0, 0.11, 0.18, 0.13],
            ["2015-11-24", 18.23, 17.88, 17.7, 18.23, 62.0, 0, 0.03, 0.13, 0.11],
            ["2015-11-25", 17.85, 17.73, 17.56, 17.85, 66.0, 0, -0.03, 0.09, 0.11],
            ["2015-11-26", 17.79, 17.53, 17.5, 17.92, 63.0, 0, -0.1, 0.06, 0.11],
            ["2015-11-27", 17.51, 17.04, 16.9, 17.51, 67.0, 0, -0.16, 0.05, 0.13],
            ["2015-11-30", 17.07, 17.2, 16.98, 17.32, 55.0, 0, -0.12, 0.09, 0.15],
            ["2015-12-01", 17.28, 17.11, 16.91, 17.28, 39.0, 0, -0.09, 0.12, 0.16],
            ["2015-12-02", 17.13, 17.91, 17.05, 17.99, 102.0, 0, -0.01, 0.17, 0.18],
            ["2015-12-03", 17.8, 17.78, 17.61, 17.98, 71.0, 0, -0.09, 0.14, 0.18],
            ["2015-12-04", 17.6, 17.25, 17.13, 17.69, 51.0, 0, -0.18, 0.1, 0.19],
            ["2015-12-07", 17.2, 17.39, 17.15, 17.45, 43.0, 0, -0.19, 0.12, 0.22],
            ["2015-12-08", 17.3, 17.42, 17.18, 17.62, 45.0, 0, -0.23, 0.13, 0.24],
            ["2015-12-09", 17.33, 17.39, 17.32, 17.59, 44.0, 0, -0.29, 0.13, 0.28],
            ["2015-12-10", 17.39, 17.26, 17.21, 17.65, 44.0, 0, -0.37, 0.13, 0.32],
            ["2015-12-11", 17.23, 16.92, 16.66, 17.26, 114.0, 1, -0.44, 0.15, 0.37],
            ["2015-12-14", 16.75, 17.06, 16.5, 17.09, 94.0, 0, -0.44, 0.21, 0.44],
            ["2015-12-15", 17.03, 17.03, 16.9, 17.06, 46.0, 0, -0.44, 0.28, 0.5],
            ["2015-12-16", 17.08, 16.96, 16.87, 17.09, 30.0, 0, -0.4, 0.36, 0.56],
            ["2015-12-17", 17.0, 17.1, 16.95, 17.12, 50.0, 0, -0.3, 0.47, 0.62],
            ["2015-12-18", 17.09, 17.52, 17.04, 18.06, 156.0, 0, -0.14, 0.59, 0.66],
            ["2015-12-21", 17.43, 18.23, 17.35, 18.45, 152.0, 1, 0.02, 0.69, 0.68],
            ["2015-12-22", 18.14, 18.27, 18.06, 18.32, 94.0, 0, 0.08, 0.72, 0.68],
            ["2015-12-23", 18.28, 18.19, 18.17, 18.71, 108.0, 0, 0.13, 0.73, 0.67],
            ["2015-12-24", 18.18, 18.14, 18.01, 18.31, 37.0, 0, 0.19, 0.74, 0.65],
            ["2015-12-25", 18.22, 18.33, 18.2, 18.36, 48.0, 0, 0.26, 0.75, 0.62],
            ["2015-12-28", 18.35, 17.84, 17.8, 18.39, 48.0, 0, 0.27, 0.72, 0.59],
            ["2015-12-29", 17.83, 17.94, 17.71, 17.97, 36.0, 0, 0.36, 0.73, 0.55],
            ["2015-12-30", 17.9, 18.26, 17.55, 18.3, 71.0, 1, 0.43, 0.71, 0.5],
            ["2015-12-31", 18.12, 17.99, 17.91, 18.33, 72.0, 0, 0.4, 0.63, 0.43],
            ["2016-01-04", 17.91, 17.28, 17.16, 17.95, 37.0, 1, 0.34, 0.55, 0.38],
            ["2016-01-05", 17.17, 17.23, 17.0, 17.55, 51.0, 0, 0.37, 0.51, 0.33],
            ["2016-01-06", 17.2, 17.31, 17.06, 17.33, 31.0, 0, 0.37, 0.46, 0.28],
            ["2016-01-07", 17.15, 16.67, 16.51, 17.15, 19.0, 0, 0.3, 0.37, 0.22],
            ["2016-01-08", 16.8, 16.81, 16.61, 17.06, 60.0, 0, 0.29, 0.32, 0.18],
            ["2016-01-11", 16.68, 16.04, 16.0, 16.68, 65.0, 0, 0.2, 0.24, 0.14],
            ["2016-01-12", 16.03, 15.98, 15.88, 16.25, 46.0, 0, 0.2, 0.21, 0.11],
            ["2016-01-13", 16.21, 15.87, 15.78, 16.21, 57.0, 0, 0.2, 0.18, 0.08],
            ["2016-01-14", 15.55, 15.89, 15.52, 15.96, 42.0, 0, 0.2, 0.16, 0.05],
            ["2016-01-15", 15.87, 15.48, 15.45, 15.92, 34.0, 1, 0.17, 0.11, 0.02],
            ["2016-01-18", 15.39, 15.42, 15.36, 15.7, 26.0, 0, 0.21, 0.1, -0.0],
            ["2016-01-19", 15.58, 15.71, 15.35, 15.77, 38.0, 0, 0.25, 0.09, -0.03],
            ["2016-01-20", 15.56, 15.52, 15.24, 15.68, 38.0, 0, 0.23, 0.05, -0.07],
            ["2016-01-21", 15.41, 15.3, 15.28, 15.68, 35.0, 0, 0.21, 0.0, -0.1],
            ["2016-01-22", 15.48, 15.28, 15.13, 15.49, 30.0, 0, 0.21, -0.02, -0.13],
            ["2016-01-25", 15.29, 15.48, 15.2, 15.49, 21.0, 0, 0.2, -0.06, -0.16],
            ["2016-01-26", 15.33, 14.86, 14.78, 15.39, 30.0, 0, 0.12, -0.13, -0.19],
            ["2016-01-27", 14.96, 15.0, 14.84, 15.22, 51.0, 0, 0.13, -0.14, -0.2],
            ["2016-01-28", 14.96, 14.72, 14.62, 15.06, 25.0, 0, 0.1, -0.17, -0.22],
            ["2016-01-29", 14.75, 14.99, 14.62, 15.08, 36.0, 0, 0.13, -0.17, -0.24],
            ["2016-02-01", 14.98, 14.72, 14.48, 15.18, 27.0, 0, 0.1, -0.21, -0.26],
            ["2016-02-02", 14.65, 14.85, 14.65, 14.95, 18.0, 0, 0.11, -0.21, -0.27],
            ["2016-02-03", 14.72, 14.67, 14.55, 14.8, 23.0, 0, 0.1, -0.24, -0.29],
            ["2016-02-04", 14.79, 14.88, 14.69, 14.93, 22.0, 0, 0.13, -0.24, -0.3],
            ["2016-02-05", 14.9, 14.86, 14.78, 14.93, 16.0, 0, 0.12, -0.26, -0.32],
            ["2016-02-15", 14.5, 14.66, 14.47, 14.82, 19.0, 0, 0.11, -0.28, -0.34],
            ["2016-02-16", 14.77, 14.94, 14.72, 15.05, 26.0, 0, 0.14, -0.28, -0.35],
            ["2016-02-17", 14.95, 15.03, 14.88, 15.07, 38.0, 0, 0.12, -0.31, -0.37],
            ["2016-02-18", 14.95, 14.9, 14.87, 15.06, 28.0, 0, 0.07, -0.35, -0.39],
            ["2016-02-19", 14.9, 14.75, 14.68, 14.94, 22.0, 0, 0.03, -0.38, -0.4],
            ["2016-02-22", 14.88, 15.01, 14.79, 15.11, 38.0, 1, 0.01, -0.4, -0.4],
            ["2016-02-23", 15.01, 14.83, 14.72, 15.01, 24.0, 0, -0.09, -0.45, -0.4],
            ["2016-02-24", 14.75, 14.81, 14.67, 14.87, 21.0, 0, -0.17, -0.48, -0.39],
            ["2016-02-25", 14.81, 14.25, 14.21, 14.81, 51.0, 1, -0.27, -0.5, -0.37],
            ["2016-02-26", 14.35, 14.45, 14.28, 14.57, 28.0, 0, -0.26, -0.46, -0.33],
            ["2016-02-29", 14.43, 14.56, 14.04, 14.6, 48.0, 0, -0.25, -0.41, -0.29],
            ["2016-03-01", 14.56, 14.65, 14.36, 14.78, 32.0, 0, -0.21, -0.36, -0.25],
            ["2016-03-02", 14.79, 14.96, 14.72, 14.97, 60.0, 0, -0.13, -0.29, -0.22],
            ["2016-03-03", 14.95, 15.15, 14.91, 15.19, 53.0, 1, -0.05, -0.23, -0.21],
            ["2016-03-04", 15.14, 15.97, 15.02, 16.02, 164.0, 1, 0.06, -0.17, -0.2],
            ["2016-03-07", 15.9, 15.78, 15.65, 16.0, 41.0, 0, 0.04, -0.19, -0.21],
            ["2016-03-08", 15.78, 15.96, 15.21, 15.99, 45.0, 0, 0.05, -0.19, -0.21],
            ["2016-03-09", 15.73, 16.05, 15.41, 16.08, 74.0, 0, 0.03, -0.2, -0.22],
            ["2016-03-10", 15.82, 15.66, 15.65, 15.98, 19.0, 0, -0.02, -0.23, -0.22],
            ["2016-03-11", 15.59, 15.76, 15.42, 15.78, 32.0, 0, 0.01, -0.22, -0.22],
            ["2016-03-14", 15.78, 15.72, 15.65, 16.04, 31.0, 0, 0.03, -0.2, -0.22],
            ["2016-03-15", 15.81, 15.86, 15.6, 15.99, 35.0, 0, 0.1, -0.18, -0.23],
            ["2016-03-16", 15.88, 16.42, 15.79, 16.45, 123.0, 0, 0.17, -0.16, -0.24],
            ["2016-03-17", 16.39, 16.23, 16.11, 16.4, 46.0, 0, 0.14, -0.2, -0.26],
            ["2016-03-18", 16.39, 16.17, 16.04, 16.4, 59.0, 0, 0.13, -0.22, -0.28],
            ["2016-03-21", 16.21, 16.22, 16.11, 16.44, 50.0, 0, 0.12, -0.24, -0.3],
            ["2016-03-22", 16.27, 16.19, 16.16, 16.42, 33.0, 0, 0.1, -0.27, -0.32],
            ["2016-03-23", 16.26, 16.18, 16.18, 16.29, 19.0, 0, 0.08, -0.3, -0.33],
            ["2016-03-24", 16.18, 16.11, 16.01, 16.23, 23.0, 0, 0.04, -0.33, -0.35],
            ["2016-03-25", 16.12, 16.13, 16.1, 16.2, 15.0, 0, 0.0, -0.35, -0.35],
            ["2016-03-28", 16.15, 15.85, 15.81, 16.2, 22.0, 0, -0.06, -0.38, -0.35],
            ["2016-03-29", 15.9, 15.79, 15.76, 16.05, 19.0, 0, -0.06, -0.37, -0.34],
            ["2016-03-30", 15.79, 16.24, 15.78, 16.3, 29.0, 0, -0.03, -0.35, -0.33],
            ["2016-03-31", 16.3, 16.09, 16.02, 16.35, 25.0, 0, -0.07, -0.37, -0.33],
            ["2016-04-01", 16.18, 16.27, 15.98, 16.3, 38.0, 0, -0.08, -0.36, -0.32],
            ["2016-04-05", 16.13, 16.34, 16.07, 16.37, 39.0, 0, -0.13, -0.37, -0.31],
            ["2016-04-06", 16.21, 16.26, 16.19, 16.35, 30.0, 0, -0.2, -0.39, -0.29],
            ["2016-04-07", 16.32, 16.1, 16.05, 16.35, 29.0, 1, -0.26, -0.39, -0.26],
            ["2016-04-08", 16.0, 16.16, 15.98, 16.21, 22.0, 0, -0.28, -0.37, -0.23],
            ["2016-04-11", 16.16, 16.31, 16.15, 16.57, 31.0, 0, -0.3, -0.33, -0.19],
            ["2016-04-12", 16.41, 16.29, 16.12, 16.41, 17.0, 0, -0.31, -0.3, -0.14],
            ["2016-04-13", 16.39, 16.48, 16.0, 16.68, 40.0, 0, -0.3, -0.25, -0.1],
            ["2016-04-14", 16.5, 16.46, 16.37, 16.68, 22.0, 0, -0.27, -0.19, -0.06],
            ["2016-04-15", 16.56, 16.93, 16.46, 17.04, 58.0, 0, -0.2, -0.12, -0.02],
            ["2016-04-18", 16.76, 17.06, 16.72, 17.27, 50.0, 0, -0.16, -0.07, 0.01],
            ["2016-04-19", 17.21, 17.11, 17.02, 17.23, 30.0, 0, -0.12, -0.02, 0.03],
            ["2016-04-20", 17.11, 17.33, 16.8, 17.36, 78.0, 0, -0.04, 0.03, 0.05],
            ["2016-04-21", 17.27, 17.69, 17.17, 17.93, 79.0, 0, 0.05, 0.08, 0.06],
            ["2016-04-22", 17.6, 17.87, 17.56, 18.02, 55.0, 0, 0.09, 0.1, 0.05],
            ["2016-04-25", 17.75, 17.9, 17.41, 17.96, 39.0, 1, 0.11, 0.09, 0.04],
            ["2016-04-26", 17.81, 17.91, 17.6, 17.95, 39.0, 0, 0.12, 0.08, 0.02],
            ["2016-04-27", 17.9, 17.88, 17.81, 17.95, 25.0, 0, 0.12, 0.06, 0.0],
            ["2016-04-28", 17.93, 17.88, 17.67, 17.93, 28.0, 0, 0.11, 0.04, -0.01],
            ["2016-04-29", 17.87, 17.75, 17.73, 17.92, 19.0, 0, 0.08, 0.01, -0.03],
            ["2016-05-03", 17.79, 17.7, 17.56, 17.85, 35.0, 0, 0.05, -0.01, -0.04],
            ["2016-05-04", 17.7, 17.65, 17.59, 17.71, 24.0, 0, 0.02, -0.04, -0.05],
            ["2016-05-05", 17.65, 17.62, 17.46, 17.7, 20.0, 0, -0.03, -0.06, -0.05],
            ["2016-05-06", 17.62, 17.32, 17.3, 17.65, 29.0, 0, -0.1, -0.09, -0.05],
            ["2016-05-09", 17.33, 17.3, 17.21, 17.45, 23.0, 0, -0.13, -0.1, -0.03],
            ["2016-05-10", 17.11, 17.04, 16.98, 17.41, 28.0, 0, -0.15, -0.09, -0.01],
            ["2016-05-11", 17.06, 17.15, 17.06, 17.32, 20.0, 0, -0.12, -0.05, 0.01],
            ["2016-05-12", 17.02, 17.46, 17.02, 17.58, 26.0, 0, -0.07, -0.01, 0.03],
            ["2016-05-13", 17.41, 17.57, 17.34, 17.62, 23.0, 0, -0.06, 0.01, 0.03],
            ["2016-05-16", 17.55, 17.5, 17.48, 17.64, 37.0, 0, -0.06, 0.01, 0.04],
            ["2016-05-17", 17.49, 17.48, 17.39, 17.53, 13.0, 0, -0.03, 0.03, 0.05],
            ["2016-05-18", 17.41, 17.82, 17.39, 17.87, 46.0, 0, 0.01, 0.06, 0.06],
            ["2016-05-19", 17.74, 17.81, 17.67, 17.86, 17.0, 0, -0.01, 0.05, 0.05],
            ["2016-05-20", 17.76, 17.88, 17.7, 17.93, 14.0, 0, -0.03, 0.04, 0.06],
            ["2016-05-23", 17.88, 17.52, 17.48, 17.97, 16.0, 0, -0.09, 0.02, 0.06],
            ["2016-05-24", 17.51, 17.33, 17.32, 17.51, 8.0, 0, -0.09, 0.03, 0.07],
            ["2016-05-25", 17.59, 17.55, 17.44, 17.59, 10.0, 0, -0.03, 0.07, 0.08],
            ["2016-05-26", 17.5, 17.69, 17.5, 17.8, 12.0, 0, 0.0, 0.09, 0.09],
            ["2016-05-27", 17.77, 17.66, 17.62, 17.77, 7.0, 0, 0.03, 0.1, 0.09],
            ["2016-05-30", 17.75, 17.84, 17.62, 17.87, 20.0, 0, 0.08, 0.12, 0.08],
            ["2016-05-31", 17.88, 18.0, 17.81, 18.03, 41.0, 0, 0.1, 0.12, 0.07],
            ["2016-06-01", 18.09, 17.83, 17.73, 18.09, 22.0, 0, 0.08, 0.1, 0.06],
            ["2016-06-02", 17.82, 17.73, 17.66, 17.88, 10.0, 0, 0.07, 0.08, 0.05],
            ["2016-06-03", 17.8, 17.78, 17.71, 17.83, 9.0, 0, 0.08, 0.08, 0.04],
            ["2016-06-06", 17.73, 17.64, 17.56, 17.83, 12.0, 0, 0.07, 0.06, 0.03],
            ["2016-06-07", 17.76, 17.8, 17.59, 17.87, 11.0, 0, 0.08, 0.06, 0.02],
            ["2016-06-08", 17.75, 17.77, 17.65, 17.84, 9.0, 0, 0.04, 0.03, 0.01],
            ["2016-06-13", 17.58, 17.32, 17.29, 17.79, 16.0, 0, -0.02, -0.01, 0.0],
            ["2016-06-14", 17.33, 17.38, 17.29, 17.5, 10.0, 0, -0.01, 0.0, 0.0],
            ["2016-06-15", 17.25, 17.39, 17.25, 17.46, 18.0, 0, 0.0, 0.01, 0.0],
            ["2016-06-16", 17.26, 17.4, 17.26, 17.46, 22.0, 0, 0.01, 0.01, 0.0],
            ["2016-06-17", 17.38, 17.5, 17.37, 17.67, 13.0, 0, 0.03, 0.02, 0.0],
            ["2016-06-20", 17.62, 17.51, 17.42, 17.63, 15.0, 0, 0.03, 0.01, -0.0],
            ["2016-06-21", 17.53, 17.54, 17.5, 17.7, 11.0, 0, 0.02, 0.0, -0.01],
            ["2016-06-22", 17.5, 17.5, 17.46, 17.6, 10.0, 0, -0.01, -0.01, -0.01],
            ["2016-06-23", 17.52, 17.26, 17.24, 17.53, 16.0, 0, -0.04, -0.03, -0.01],
            ["2016-06-24", 17.26, 17.25, 17.18, 17.38, 60.0, 0, -0.03, -0.02, -0.0],
            ["2016-06-27", 17.25, 17.28, 17.18, 17.33, 19.0, 0, -0.01, -0.0, 0.0],
            ["2016-06-28", 17.25, 17.29, 17.21, 17.32, 13.0, 0, 0.02, 0.01, 0.0],
            ["2016-06-29", 17.31, 17.45, 17.27, 17.49, 21.0, 0, 0.07, 0.04, 0.0],
            ["2016-06-30", 17.47, 17.5, 17.39, 17.55, 17.0, 0, 0.11, 0.04, -0.01],
            ["2016-07-01", 17.5, 17.63, 17.49, 17.66, 10.0, 0, 0.14, 0.05, -0.03],
            ["2016-07-04", 17.63, 17.72, 17.63, 17.92, 17.0, 0, 0.16, 0.03, -0.05],
            ["2016-07-05", 17.79, 17.56, 17.45, 17.79, 18.0, 0, 0.14, 0.0, -0.07],
            ["2016-07-06", 17.53, 17.42, 17.31, 17.54, 20.0, 0, 0.14, -0.02, -0.09],
            ["2016-07-07", 17.41, 17.51, 17.35, 17.52, 15.0, 0, 0.16, -0.03, -0.11],
            ["2016-07-08", 17.5, 17.39, 17.35, 17.51, 15.0, 0, 0.16, -0.05, -0.13],
            ["2016-07-11", 17.49, 17.48, 17.4, 17.55, 16.0, 0, 0.17, -0.07, -0.15],
            ["2016-07-12", 17.48, 17.71, 17.46, 17.75, 25.0, 0, 0.16, -0.1, -0.18],
            ["2016-07-13", 17.13, 17.05, 17.02, 17.39, 28.0, 0, 0.07, -0.17, -0.2],
            ["2016-07-14", 17.07, 17.09, 17.0, 17.16, 12.0, 0, 0.08, -0.17, -0.21],
            ["2016-07-15", 17.08, 17.14, 17.08, 17.17, 11.0, 0, 0.09, -0.18, -0.22],
            ["2016-07-18", 17.15, 17.26, 17.13, 17.49, 24.0, 0, 0.1, -0.19, -0.23],
            ["2016-07-19", 17.26, 17.12, 17.09, 17.33, 13.0, 0, 0.07, -0.21, -0.25],
            ["2016-07-20", 17.1, 17.07, 17.02, 17.14, 11.0, 0, 0.06, -0.23, -0.26],
            ["2016-07-21", 17.07, 17.24, 17.07, 17.27, 14.0, 0, 0.07, -0.23, -0.27],
            ["2016-07-22", 17.25, 17.08, 17.03, 17.25, 10.0, 0, 0.04, -0.26, -0.28],
            ["2016-07-25", 17.09, 17.12, 17.01, 17.18, 8.0, 0, 0.04, -0.26, -0.28],
            ["2016-07-26", 17.05, 17.17, 17.05, 17.2, 11.0, 0, 0.04, -0.27, -0.29],
            ["2016-07-27", 17.2, 17.37, 16.89, 17.38, 32.0, 0, 0.02, -0.28, -0.29],
            ["2016-07-28", 17.19, 17.14, 17.09, 17.29, 19.0, 0, -0.04, -0.32, -0.3],
            ["2016-07-29", 17.15, 17.16, 17.04, 17.23, 12.0, 0, -0.08, -0.33, -0.29],
            ["2016-08-01", 17.15, 17.18, 17.1, 17.24, 19.0, 0, -0.13, -0.34, -0.28],
            ["2016-08-02", 17.21, 17.15, 17.12, 17.25, 9.0, 0, -0.19, -0.36, -0.26],
            ["2016-08-03", 17.08, 17.07, 17.01, 17.16, 9.0, 0, -0.25, -0.36, -0.24],
            ["2016-08-04", 17.11, 17.06, 16.98, 17.12, 11.0, 1, -0.29, -0.35, -0.2],
            ["2016-08-05", 17.06, 17.1, 17.05, 17.15, 16.0, 0, -0.33, -0.32, -0.16],
            ["2016-08-08", 17.14, 17.13, 17.07, 17.15, 13.0, 0, -0.35, -0.29, -0.11],
            ["2016-08-09", 17.13, 17.17, 17.1, 17.2, 25.0, 0, -0.35, -0.24, -0.06],
            ["2016-08-10", 17.17, 17.28, 17.15, 17.29, 18.0, 0, -0.31, -0.17, -0.01],
            ["2016-08-11", 17.3, 17.45, 17.26, 17.87, 31.0, 0, -0.24, -0.09, 0.03],
            ["2016-08-12", 17.51, 17.99, 17.47, 18.0, 44.0, 0, -0.14, -0.0, 0.07],
            ["2016-08-15", 18.1, 18.42, 18.02, 18.99, 81.0, 0, -0.09, 0.04, 0.09],
            ["2016-08-16", 18.64, 18.31, 18.12, 18.87, 60.0, 0, -0.1, 0.05, 0.1],
            ["2016-08-17", 18.43, 18.4, 18.31, 18.68, 21.0, 0, -0.08, 0.08, 0.11],
            ["2016-08-18", 18.33, 18.23, 18.13, 18.65, 32.0, 0, -0.07, 0.09, 0.13],
            ["2016-08-19", 18.34, 18.62, 18.31, 18.75, 39.0, 0, 0.0, 0.14, 0.14],
            ["2016-08-22", 18.62, 18.69, 18.51, 18.8, 20.0, 0, 0.01, 0.14, 0.13],
            ["2016-08-23", 18.61, 18.66, 18.52, 19.0, 28.0, 0, 0.01, 0.14, 0.13],
            ["2016-08-24", 18.66, 18.62, 18.43, 18.7, 19.0, 0, 0.0, 0.13, 0.13],
            ["2016-08-25", 18.57, 18.51, 18.19, 18.64, 19.0, 0, -0.0, 0.13, 0.13],
            ["2016-08-26", 18.49, 18.55, 18.44, 18.6, 16.0, 0, 0.01, 0.13, 0.13],
            ["2016-08-29", 18.46, 18.27, 18.03, 18.48, 20.0, 0, 0.01, 0.13, 0.13],
            ["2016-08-30", 18.24, 18.44, 18.23, 18.52, 19.0, 0, 0.07, 0.17, 0.13],
            ["2016-08-31", 18.36, 18.63, 18.36, 18.76, 15.0, 0, 0.13, 0.18, 0.12],
            ["2016-09-01", 18.6, 18.62, 18.55, 18.78, 15.0, 0, 0.16, 0.18, 0.1],
            ["2016-09-02", 18.52, 18.68, 18.48, 18.72, 17.0, 0, 0.19, 0.17, 0.08],
            ["2016-09-05", 18.68, 18.75, 18.57, 18.82, 19.0, 0, 0.2, 0.15, 0.05],
            ["2016-09-06", 18.75, 18.51, 18.43, 18.78, 17.0, 0, 0.18, 0.11, 0.02],
            ["2016-09-07", 18.51, 18.56, 18.4, 18.62, 17.0, 0, 0.17, 0.08, -0.0],
            ["2016-09-08", 18.58, 18.53, 18.48, 18.63, 8.0, 0, 0.13, 0.04, -0.03],
            ["2016-09-09", 18.52, 18.33, 18.31, 18.57, 8.0, 0, 0.06, -0.02, -0.05],
            ["2016-09-12", 18.16, 17.9, 17.81, 18.18, 28.0, 0, -0.02, -0.07, -0.06],
            ["2016-09-13", 17.91, 17.91, 17.9, 18.08, 13.0, 0, -0.05, -0.08, -0.05],
            ["2016-09-14", 17.99, 17.54, 17.48, 17.99, 22.0, 0, -0.09, -0.09, -0.05],
            ["2016-09-19", 17.55, 17.81, 17.55, 17.88, 16.0, 0, -0.06, -0.06, -0.03],
            ["2016-09-20", 17.8, 17.74, 17.67, 17.85, 10.0, 0, -0.06, -0.05, -0.02],
            ["2016-09-21", 17.75, 17.88, 17.75, 17.95, 7.0, 0, -0.03, -0.03, -0.02],
            ["2016-09-22", 17.99, 17.97, 17.88, 18.17, 12.0, 0, -0.02, -0.02, -0.01],
            ["2016-09-23", 17.99, 17.98, 17.93, 18.09, 13.0, 0, -0.01, -0.01, -0.01],
            ["2016-09-26", 17.91, 18.0, 17.85, 18.09, 14.0, 0, -0.0, -0.01, -0.01],
            ["2016-09-27", 17.97, 18.07, 17.94, 18.1, 10.0, 0, 0.0, -0.01, -0.01],
            ["2016-09-28", 18.06, 17.89, 17.83, 18.06, 10.0, 0, -0.0, -0.01, -0.01],
            ["2016-09-29", 17.96, 18.0, 17.92, 18.07, 10.0, 0, 0.03, 0.01, -0.01],
            ["2016-09-30", 17.96, 18.0, 17.95, 18.1, 8.0, 0, 0.06, 0.02, -0.01],
            ["2016-10-10", 18.03, 18.3, 18.03, 18.38, 19.0, 0, 0.11, 0.04, -0.02],
            ["2016-10-11", 18.33, 18.33, 18.26, 18.49, 12.0, 0, 0.1, 0.02, -0.04],
            ["2016-10-12", 18.28, 18.15, 18.1, 18.31, 10.0, 0, 0.07, -0.02, -0.05],
            ["2016-10-13", 18.15, 18.09, 18.05, 18.21, 10.0, 0, 0.06, -0.03, -0.06],
            ["2016-10-14", 18.1, 18.1, 18.0, 18.15, 12.0, 0, 0.04, -0.05, -0.07],
            ["2016-10-17", 18.07, 17.86, 17.83, 18.1, 12.0, 0, 0.01, -0.07, -0.08],
            ["2016-10-18", 17.86, 17.93, 17.84, 17.99, 14.0, 0, 0.03, -0.07, -0.08],
            ["2016-10-19", 17.93, 17.88, 17.83, 18.05, 11.0, 0, 0.03, -0.07, -0.08],
            ["2016-10-20", 17.9, 17.89, 17.83, 17.98, 12.0, 0, 0.05, -0.06, -0.09],
            ["2016-10-21", 17.91, 17.91, 17.82, 17.93, 12.0, 0, 0.07, -0.06, -0.09],
            ["2016-10-24", 17.93, 18.31, 17.86, 18.42, 29.0, 0, 0.11, -0.05, -0.1],
            ["2016-10-25", 18.31, 18.13, 18.09, 18.46, 19.0, 0, 0.06, -0.09, -0.12],
            ["2016-10-26", 18.12, 17.97, 17.95, 18.15, 14.0, 0, 0.02, -0.12, -0.13],
            ["2016-10-27", 18.06, 17.81, 17.77, 18.06, 21.0, 0, -0.01, -0.13, -0.13],
            ["2016-10-28", 17.8, 17.9, 17.8, 18.05, 20.0, 0, -0.01, -0.13, -0.13],
            ["2016-10-31", 17.87, 17.86, 17.72, 17.96, 12.0, 0, -0.02, -0.14, -0.13],
            ["2016-11-01", 17.87, 17.98, 17.79, 17.99, 18.0, 0, -0.03, -0.14, -0.12],
            ["2016-11-02", 17.86, 17.84, 17.76, 17.94, 30.0, 0, -0.06, -0.15, -0.12],
            ["2016-11-03", 17.83, 17.93, 17.79, 17.97, 27.0, 0, -0.07, -0.14, -0.11],
            ["2016-11-04", 17.9, 17.91, 17.87, 18.0, 26.0, 0, -0.09, -0.15, -0.1],
            ["2016-11-07", 17.91, 17.89, 17.85, 17.93, 20.0, 0, -0.11, -0.14, -0.09],
            ["2016-11-08", 17.92, 17.99, 17.89, 18.06, 26.0, 0, -0.12, -0.13, -0.07],
            ["2016-11-09", 18.0, 17.89, 17.77, 18.08, 34.0, 0, -0.15, -0.13, -0.06],
            ["2016-11-10", 17.95, 18.0, 17.94, 18.11, 27.0, 0, -0.15, -0.11, -0.03],
            ["2016-11-11", 17.95, 18.02, 17.93, 18.08, 27.0, 0, -0.17, -0.1, -0.01],
            ["2016-11-14", 18.0, 18.04, 17.95, 18.25, 35.0, 0, -0.18, -0.08, 0.01],
            ["2016-11-15", 18.1, 18.18, 18.03, 18.24, 25.0, 0, -0.18, -0.06, 0.04],
            ["2016-11-16", 18.23, 18.12, 18.05, 18.29, 23.0, 0, -0.21, -0.04, 0.06],
            ["2016-11-17", 18.11, 18.12, 18.01, 18.14, 27.0, 0, -0.21, -0.01, 0.09],
            ["2016-11-18", 18.12, 18.1, 18.03, 18.16, 18.0, 0, -0.19, 0.03, 0.12],
            ["2016-11-21", 18.08, 18.34, 18.08, 18.68, 41.0, 0, -0.13, 0.08, 0.15],
            ["2016-11-22", 18.37, 18.37, 18.28, 18.49, 52.0, 0, -0.09, 0.12, 0.17],
            ["2016-11-23", 18.4, 18.84, 18.37, 18.9, 66.0, 0, -0.02, 0.17, 0.18],
            ["2016-11-24", 18.77, 18.74, 18.61, 18.97, 26.0, 0, -0.02, 0.17, 0.18],
            ["2016-11-25", 18.8, 18.99, 18.66, 19.02, 40.0, 0, -0.01, 0.18, 0.19],
            ["2016-11-28", 19.1, 18.65, 18.52, 19.2, 85.0, 0, -0.06, 0.16, 0.19],
            ["2016-11-29", 18.65, 18.75, 18.51, 18.76, 49.0, 0, -0.06, 0.17, 0.2],
            ["2016-11-30", 18.76, 18.55, 18.47, 18.82, 39.0, 0, -0.08, 0.17, 0.21],
            ["2016-12-01", 18.55, 18.49, 18.41, 18.64, 53.0, 0, -0.06, 0.19, 0.22],
            ["2016-12-02", 18.53, 18.49, 18.24, 18.54, 48.0, 0, -0.02, 0.21, 0.23],
            ["2016-12-05", 18.39, 18.66, 18.34, 18.67, 50.0, 0, 0.03, 0.25, 0.23],
            ["2016-12-06", 18.66, 18.6, 18.57, 18.78, 31.0, 0, 0.08, 0.26, 0.23],
            ["2016-12-07", 18.65, 18.62, 18.58, 18.71, 12.0, 0, 0.15, 0.29, 0.21],
            ["2016-12-08", 18.67, 18.76, 18.62, 18.88, 26.0, 0, 0.25, 0.32, 0.19],
            ["2016-12-09", 18.76, 19.2, 18.75, 19.34, 62.0, 0, 0.34, 0.33, 0.16],
            ["2016-12-12", 19.16, 19.25, 18.9, 19.65, 79.0, 1, 0.34, 0.28, 0.11],
            ["2016-12-13", 19.09, 18.88, 18.81, 19.2, 24.0, 0, 0.27, 0.2, 0.06],
            ["2016-12-14", 18.8, 18.82, 18.8, 19.14, 32.0, 0, 0.23, 0.13, 0.02],
            ["2016-12-15", 18.73, 18.24, 18.2, 18.73, 36.0, 0, 0.13, 0.05, -0.01],
            ["2016-12-16", 18.24, 18.18, 18.12, 18.4, 24.0, 0, 0.1, 0.02, -0.03],
            ["2016-12-19", 18.15, 18.01, 17.93, 18.18, 24.0, 0, 0.06, -0.02, -0.05],
            ["2016-12-20", 17.99, 17.79, 17.7, 17.99, 29.0, 1, 0.02, -0.05, -0.05],
            ["2016-12-21", 17.83, 17.81, 17.77, 17.98, 30.0, 0, 0.0, -0.05, -0.06],
            ["2016-12-22", 17.85, 17.72, 17.65, 17.85, 21.0, 0, -0.03, -0.07, -0.06],
            ["2016-12-23", 17.77, 17.6, 17.54, 17.77, 18.0, 0, -0.04, -0.08, -0.05],
            ["2016-12-26", 17.56, 17.75, 17.39, 17.77, 16.0, 0, -0.04, -0.07, -0.05],
            ["2016-12-27", 17.73, 17.71, 17.65, 17.82, 10.0, 0, -0.06, -0.07, -0.04],
            ["2016-12-28", 17.72, 17.62, 17.49, 17.77, 26.0, 0, -0.09, -0.07, -0.03],
            ["2016-12-29", 17.6, 17.49, 17.43, 17.62, 28.0, 0, -0.09, -0.06, -0.02],
            ["2016-12-30", 17.53, 17.6, 17.47, 17.61, 22.0, 0, -0.05, -0.03, -0.01],
            ["2017-01-03", 17.6, 17.92, 17.57, 17.98, 28.0, 1, 0.0, 0.0, 0.0]
        ]);
        //数组处理
        function splitData(rawData) {
            var datas = [];
            var times = [];
            var vols = [];
            var macds = [];
            var difs = [];
            var deas = [];
            for (var i = 0; i < rawData.length; i++) {
                datas.push(rawData[i]);
                times.push(rawData[i].splice(0, 1)[0]);
                vols.push(rawData[i][4]);
                macds.push(rawData[i][6]);
                difs.push(rawData[i][7]);
                deas.push(rawData[i][8]);
            }
            return {
                datas: datas,
                times: times,
                vols: vols,
                macds: macds,
                difs: difs,
                deas: deas
            };
        }
        //分段计算
        function fenduans() {
            var markLineData = [];
            var idx = 0;
            var tag = 0;
            var vols = 0;
            for (var i = 0; i < data.times.length; i++) {
                //初始化数据
                if (data.datas[i][5] != 0 && tag == 0) {
                    idx = i;
                    vols = data.datas[i][4];
                    tag = 1;
                }
                if (tag == 1) {
                    vols += data.datas[i][4];
                }
                if (data.datas[i][5] != 0 && tag == 1) {
                    markLineData.push([
                        {
                            xAxis: idx,
                            yAxis: data.datas[idx][1] > data.datas[idx][0]
                                ? data.datas[idx][3].toFixed(2)
                                : data.datas[idx][2].toFixed(2),
                            value: vols
                        },
                        {
                            xAxis: i,
                            yAxis: data.datas[i][1] > data.datas[i][0]
                                ? data.datas[i][3].toFixed(2)
                                : data.datas[i][2].toFixed(2)
                        }
                    ]);
                    idx = i;
                    vols = data.datas[i][4];
                    tag = 2;
                }
                //更替数据
                if (tag == 2) {
                    vols += data.datas[i][4];
                }
                if (data.datas[i][5] != 0 && tag == 2) {
                    markLineData.push([
                        {
                            xAxis: idx,
                            yAxis: data.datas[idx][1] > data.datas[idx][0]
                                ? data.datas[idx][3].toFixed(2)
                                : data.datas[idx][2].toFixed(2),
                            value: (vols / (i - idx + 1)).toFixed(2) + " M"
                        },
                        {
                            xAxis: i,
                            yAxis: data.datas[i][1] > data.datas[i][0]
                                ? data.datas[i][3].toFixed(2)
                                : data.datas[i][2].toFixed(2)
                        }
                    ]);
                    idx = i;
                    vols = data.datas[i][4];
                }
            }
            return markLineData;
        }
        //MA计算公式
        function calculateMA(dayCount) {
            var result = [];
            for (var i = 0, len = data.times.length; i < len; i++) {
                if (i < dayCount) {
                    result.push("-");
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += data.datas[i - j][1];
                }
                result.push((sum / dayCount).toFixed(2));
            }
            return result;
        }
        // DATA //
        // CHART //
        this.option = {
            title: {
                text: "Stock Charts",
                left: 0
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "line"
                }
            },
            legend: {
                data: ["KLine", "MA5"]
            },
            grid: [
                {
                    left: "3%",
                    right: "1%",
                    height: "60%"
                },
                {
                    left: "3%",
                    right: "1%",
                    top: "71%",
                    height: "10%"
                },
                {
                    left: "3%",
                    right: "1%",
                    top: "82%",
                    height: "14%"
                }
            ],
            xAxis: [
                {
                    type: "category",
                    data: data.times,
                    scale: true,
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    splitLine: { show: false },
                    splitNumber: 20,
                    min: "dataMin",
                    max: "dataMax"
                },
                {
                    type: "category",
                    gridIndex: 1,
                    data: data.times,
                    axisLabel: { show: false }
                },
                {
                    type: "category",
                    gridIndex: 2,
                    data: data.times,
                    axisLabel: { show: false }
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: {
                        show: false
                    }
                },
                {
                    gridIndex: 1,
                    splitNumber: 3,
                    axisLine: { onZero: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true }
                },
                {
                    gridIndex: 2,
                    splitNumber: 4,
                    axisLine: { onZero: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                    axisLabel: { show: true }
                }
            ],
            dataZoom: [
                {
                    type: "inside",
                    xAxisIndex: [0, 0],
                    start: 20,
                    end: 100
                },
                {
                    show: true,
                    xAxisIndex: [0, 1],
                    type: "slider",
                    top: "97%",
                    start: 20,
                    end: 100
                },
                {
                    show: false,
                    xAxisIndex: [0, 2],
                    type: "slider",
                    start: 20,
                    end: 100
                }
            ],
            series: [
                {
                    name: "K线周期图表(matols.com)",
                    type: "candlestick",
                    data: data.datas,
                    itemStyle: {
                        normal: {
                            color: "#ef232a",
                            color0: "#14b143",
                            borderColor: "#ef232a",
                            borderColor0: "#14b143"
                        }
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: "Honeydew"
                            }
                        },
                        data: fenduans()
                    },
                    markPoint: {
                        data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
                    },
                    markLine: {
                        label: {
                            normal: {
                                position: "middle",
                                textStyle: { color: "Blue", fontSize: 15 }
                            }
                        },
                        data: fenduans(),
                        symbol: ["circle", "none"]
                    }
                },
                {
                    name: "MA5",
                    type: "line",
                    data: calculateMA(5),
                    smooth: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.5
                        }
                    }
                },
                {
                    name: "Volumn",
                    type: "bar",
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data.vols,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList;
                                if (data.datas[params.dataIndex][1] >
                                    data.datas[params.dataIndex][0]) {
                                    colorList = "#ef232a";
                                }
                                else {
                                    colorList = "#14b143";
                                }
                                return colorList;
                            }
                        }
                    }
                },
                {
                    name: "MACD",
                    type: "bar",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.macds,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList;
                                if (params.data >= 0) {
                                    colorList = "#ef232a";
                                }
                                else {
                                    colorList = "#14b143";
                                }
                                return colorList;
                            }
                        }
                    }
                },
                {
                    name: "DIF",
                    type: "line",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.difs
                },
                {
                    name: "DEA",
                    type: "line",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    data: data.deas
                }
            ]
        };
        // CHART CODE END // });
    };
    V24Component.prototype.ngOnDestroy = function () { };
    V24Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-v24",
            // templateUrl: './v4.component.html',
            // styleUrls: ['./v4.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  "
        })
    ], V24Component);
    return V24Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v25.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V25Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V25Component = (function () {
    function V25Component() {
        this.option = {};
    }
    V25Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA
        var dataBJ = [
            [1, 55, 9, 56, 0.46, 18, 6, "良"],
            [2, 25, 11, 21, 0.65, 34, 9, "优"],
            [3, 56, 7, 63, 0.3, 14, 5, "良"],
            [4, 33, 7, 29, 0.33, 16, 6, "优"],
            [5, 42, 24, 44, 0.76, 40, 16, "优"],
            [6, 82, 58, 90, 1.77, 68, 33, "良"],
            [7, 74, 49, 77, 1.46, 48, 27, "良"],
            [8, 78, 55, 80, 1.29, 59, 29, "良"],
            [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
            [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
            [11, 39, 19, 38, 0.57, 31, 15, "优"],
            [12, 41, 11, 40, 0.43, 21, 7, "优"],
            [13, 64, 38, 74, 1.04, 46, 22, "良"],
            [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
            [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
            [16, 33, 6, 29, 0.34, 13, 5, "优"],
            [17, 94, 66, 110, 1.54, 62, 31, "良"],
            [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
            [19, 57, 31, 54, 0.96, 32, 14, "良"],
            [20, 22, 8, 17, 0.48, 23, 10, "优"],
            [21, 39, 15, 36, 0.61, 29, 13, "优"],
            [22, 94, 69, 114, 2.08, 73, 39, "良"],
            [23, 99, 73, 110, 2.43, 76, 48, "良"],
            [24, 31, 12, 30, 0.5, 32, 16, "优"],
            [25, 42, 27, 43, 1, 53, 22, "优"],
            [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
            [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
            [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
            [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
            [30, 52, 24, 60, 1.03, 50, 21, "良"],
            [31, 46, 5, 49, 0.28, 10, 6, "优"]
        ];
        var dataGZ = [
            [1, 26, 37, 27, 1.163, 27, 13, "优"],
            [2, 85, 62, 71, 1.195, 60, 8, "良"],
            [3, 78, 38, 74, 1.363, 37, 7, "良"],
            [4, 21, 21, 36, 0.634, 40, 9, "优"],
            [5, 41, 42, 46, 0.915, 81, 13, "优"],
            [6, 56, 52, 69, 1.067, 92, 16, "良"],
            [7, 64, 30, 28, 0.924, 51, 2, "良"],
            [8, 55, 48, 74, 1.236, 75, 26, "良"],
            [9, 76, 85, 113, 1.237, 114, 27, "良"],
            [10, 91, 81, 104, 1.041, 56, 40, "良"],
            [11, 84, 39, 60, 0.964, 25, 11, "良"],
            [12, 64, 51, 101, 0.862, 58, 23, "良"],
            [13, 70, 69, 120, 1.198, 65, 36, "良"],
            [14, 77, 105, 178, 2.549, 64, 16, "良"],
            [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
            [16, 73, 68, 97, 0.905, 51, 34, "良"],
            [17, 54, 27, 47, 0.592, 53, 12, "良"],
            [18, 51, 61, 97, 0.811, 65, 19, "良"],
            [19, 91, 71, 121, 1.374, 43, 18, "良"],
            [20, 73, 102, 182, 2.787, 44, 19, "良"],
            [21, 73, 50, 76, 0.717, 31, 20, "良"],
            [22, 84, 94, 140, 2.238, 68, 18, "良"],
            [23, 93, 77, 104, 1.165, 53, 7, "良"],
            [24, 99, 130, 227, 3.97, 55, 15, "良"],
            [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
            [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
            [27, 81, 48, 62, 1.619, 26, 3, "良"],
            [28, 56, 48, 68, 1.336, 37, 9, "良"],
            [29, 82, 92, 174, 3.29, 0, 13, "良"],
            [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
            [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
        ];
        var dataSH = [
            [1, 91, 45, 125, 0.82, 34, 23, "良"],
            [2, 65, 27, 78, 0.86, 45, 29, "良"],
            [3, 83, 60, 84, 1.09, 73, 27, "良"],
            [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [8, 89, 65, 78, 0.86, 51, 26, "良"],
            [9, 53, 33, 47, 0.64, 50, 17, "良"],
            [10, 80, 55, 80, 1.01, 75, 24, "良"],
            [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
            [12, 99, 71, 142, 1.1, 62, 42, "良"],
            [13, 95, 69, 130, 1.28, 74, 50, "良"],
            [14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
            [15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
            [16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
            [17, 79, 43, 107, 1.05, 59, 37, "良"],
            [18, 71, 46, 89, 0.86, 64, 25, "良"],
            [19, 97, 71, 113, 1.17, 88, 31, "良"],
            [20, 84, 57, 91, 0.85, 55, 31, "良"],
            [21, 87, 63, 101, 0.9, 56, 41, "良"],
            [22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
            [23, 87, 62, 100, 1, 72, 28, "良"],
            [24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
            [25, 65, 45, 51, 0.74, 39, 17, "良"],
            [26, 39, 24, 38, 0.61, 47, 17, "优"],
            [27, 39, 24, 39, 0.59, 50, 19, "优"],
            [28, 93, 68, 96, 1.05, 79, 29, "良"],
            [29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
            [30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
            [31, 187, 143, 201, 1.39, 89, 53, "中度污染"]
        ];
        var schema = [
            { name: 'date', index: 0, text: '日' },
            { name: 'AQIindex', index: 1, text: 'AQI指数' },
            { name: 'PM25', index: 2, text: 'PM2.5' },
            { name: 'PM10', index: 3, text: 'PM10' },
            { name: 'CO', index: 4, text: '一氧化碳（CO）' },
            { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
            { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
        ];
        var itemStyle = {
            normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        };
        //
        this.option = {
            backgroundColor: '#404a59',
            color: [
                '#dd4444', '#fec42c', '#80F1BE'
            ],
            legend: {
                y: 'top',
                data: ['北京', '上海', '广州'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            grid: {
                x: '10%',
                x2: 150,
                y: '18%',
                y2: '10%'
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[0] + '日：'
                        + value[7]
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                        + schema[4].text + '：' + value[4] + '<br>'
                        + schema[5].text + '：' + value[5] + '<br>'
                        + schema[6].text + '：' + value[6] + '<br>';
                }
            },
            xAxis: {
                type: 'value',
                name: '日期',
                nameGap: 16,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                max: 31,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            visualMap: [
                {
                    left: 'right',
                    top: '10%',
                    dimension: 2,
                    min: 0,
                    max: 250,
                    itemWidth: 30,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['圆形大小：PM2.5'],
                    textGap: 30,
                    textStyle: {
                        color: '#fff'
                    },
                    inRange: {
                        symbolSize: [10, 70]
                    },
                    outOfRange: {
                        symbolSize: [10, 70],
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                },
                {
                    left: 'right',
                    bottom: '5%',
                    dimension: 6,
                    min: 0,
                    max: 50,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['明暗：二氧化硫'],
                    textGap: 30,
                    textStyle: {
                        color: '#fff'
                    },
                    inRange: {
                        colorLightness: [1, 0.5]
                    },
                    outOfRange: {
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '北京',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataBJ
                },
                {
                    name: '上海',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataSH
                },
                {
                    name: '广州',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataGZ
                }
            ]
        };
        //});
    };
    V25Component.prototype.ngOnDestroy = function () {
        //this.themeSubscription.unsubscribe();
    };
    V25Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v25',
            // templateUrl: './v5.component.html',
            // styleUrls: ['./v5.component.css'],
            styles: [''],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V25Component);
    return V25Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash2/v26.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V26Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V26Component = (function () {
    function V26Component() {
        this.option = {};
        this.data = {};
    }
    V26Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        function randInt(range) {
            return Math.floor(range * Math.random());
        }
        function genData(origin, step, length) {
            var res = [];
            for (var i = 0; i < length; i++) {
                origin += step[randInt(step.length)];
                origin = Math.abs(origin);
                res.push([i, origin]);
            }
            return res;
        }
        function calcPnlAndPos(orders, price) {
            return orders.reduce(function (prev, cur) { return [
                prev[0] + cur[2] * (price - cur[1]),
                prev[1] + cur[2]
            ]; }, [0, 0]);
        }
        this.data = {};
        var length = 600;
        this.data.price = genData(3210, [-5, 0, 5], length);
        this.data.vol = genData(20, [-1, 0, 1], length);
        this.data.bidVol = genData(20, [-1, 0, 1], length);
        this.data.askVol = genData(20, [-1, 0, 1], length);
        this.data.bidPrice = this.data.price.map(function (_a) {
            var time = _a[0], value = _a[1];
            return [time, value + 5 * randInt(2)];
        });
        this.data.askPrice = this.data.price.map(function (_a) {
            var time = _a[0], value = _a[1];
            return [time, value - 5 * randInt(2)];
        });
        var com = 0;
        var comRate = 0.001;
        this.data.com = [[0, 0]];
        this.data.orders = [];
        this.data.pnl = [[0, 0]];
        this.data.npnl = [[0, 0]];
        this.data.pos = [[0, 0]];
        for (var i = 1; i < length; i++) {
            if (this.data.price[i][1] > this.data.price[i - 1][1]) {
                this.data.orders.push([this.data.price[i][0], this.data.price[i][1], 1]);
                com += this.data.price[i][1] * comRate;
            }
            else if (this.data.price[i][1] < this.data.price[i - 1][1]) {
                this.data.orders.push([this.data.price[i][0], this.data.price[i][1], -1]);
                com += this.data.price[i][1] * comRate;
            }
            this.data.com.push([i, com]);
            var _a = calcPnlAndPos(this.data.orders, this.data.price[i][1]), pnl = _a[0], pos = _a[1];
            this.data.pnl.push([i, pnl]);
            this.data.npnl.push([i, pnl - com]);
            this.data.pos.push([i, pos]);
        }
        this.option = {
            title: {
                text: 'Intraday Chart',
                x: 'center',
                y: 0
            },
            dataZoom: [
                {
                    id: 'dataZoomX',
                    type: 'slider',
                    xAxisIndex: [0, 1, 2],
                    filterMode: 'filter',
                    start: 0,
                    end: 100,
                    zoomLock: false,
                }, {
                    type: 'inside',
                },
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                },
            },
            grid: [
                { x: '7%', y: '7%', width: '85%', height: '20%' },
                { x: '7%', y: '32%', width: '85%', height: '30%' },
                { x: '7%', y: '67%', width: '85%', height: '25%' }
            ],
            xAxis: [
                { gridIndex: 0 },
                { gridIndex: 1 },
                { gridIndex: 2 },
            ],
            yAxis: [
                { gridIndex: 0, boundaryGap: ['10%', '10%'] },
                { gridIndex: 0, boundaryGap: ['10%', '10%'] },
                { gridIndex: 1, boundaryGap: ['10%', '10%'], scale: true },
                { gridIndex: 2, min: 0, max: 100 },
                { gridIndex: 2, min: -100, max: 50 },
                { gridIndex: 2, min: -50, max: 100, inverse: true, show: false }
            ],
            series: [
                {
                    name: 'pnl',
                    type: 'line',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.pnl
                },
                {
                    name: 'commission',
                    type: 'line',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.com
                },
                {
                    name: 'net pnl',
                    type: 'line',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.npnl
                },
                {
                    name: 'position',
                    type: 'bar',
                    xAxisIndex: 0,
                    yAxisIndex: 1,
                    data: this.data.pos
                },
                {
                    name: 'orders',
                    type: 'scatter',
                    xAxisIndex: 1,
                    yAxisIndex: 2,
                    symbolSize: function (value, params) { return Math.abs(value[2]) * 4; },
                    itemStyle: {
                        normal: {
                            color: function (_a) {
                                var data = _a.data;
                                return data[2] > 0 ? 'red' : 'green';
                            }
                        }
                    },
                    hoverAnimation: false,
                    data: this.data.orders
                },
                {
                    name: 'price',
                    type: 'line',
                    xAxisIndex: 1,
                    yAxisIndex: 2,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.price
                },
                {
                    name: 'bid price',
                    type: 'line',
                    xAxisIndex: 1,
                    yAxisIndex: 2,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.bidPrice,
                },
                {
                    name: 'ask price',
                    type: 'line',
                    xAxisIndex: 1,
                    yAxisIndex: 2,
                    showSymbol: false,
                    hoverAnimation: false,
                    data: this.data.askPrice,
                },
                {
                    name: 'volume',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 3,
                    data: this.data.vol
                },
                {
                    name: 'bid volume',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 4,
                    data: this.data.bidVol
                },
                {
                    name: 'ask volume',
                    type: 'bar',
                    xAxisIndex: 2,
                    yAxisIndex: 5,
                    data: this.data.askVol
                }
            ]
        };
        // CHART CODE END // });
    };
    V26Component.prototype.ngOnDestroy = function () { };
    V26Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-v26",
            // templateUrl: './v4.component.html',
            // styleUrls: ['./v4.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  "
        })
    ], V26Component);
    return V26Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/dash3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dash3/dash3.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Dashboards</h1>\n    <p class=\"lead text-muted\">Dashboard integrating sample charts from echarts.baidu.com</p>\n\n  </div>\n</section>\n\n<section class=\"dash m-0 p-4 text-center\" id=\"dash3\">\n  <div class=\"\">\n    <div class=\"row\">\n\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v31></app-v31>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 1</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v32></app-v32>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 2</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v33></app-v33>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 3</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v34></app-v34>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 4</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v35></app-v35>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 5</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n      <div class=\" col-md-6 col-sm-12 viz-item\">\n        <app-v36></app-v36>\n        <div class=\"viz-titles\">\n          <h4 class=\"viz-title\">Data Viz 6</h4>\n          <h5 class=\"viz-subtitle\">Charts</h5>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading h13d\"></h1>\n    </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/dash3/dash3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dash3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dash3Component = (function () {
    function Dash3Component() {
    }
    Dash3Component.prototype.ngOnInit = function () {
    };
    Dash3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash3',
            template: __webpack_require__("../../../../../src/app/dash3/dash3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dash3/dash3.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Dash3Component);
    return Dash3Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v31.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V31Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V31Component = (function () {
    function V31Component() {
        this.option = {};
    }
    V31Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: { formatter: '{value}%' },
                    data: [{ value: 50, name: '完成率' }]
                }
            ]
        };
        //});
    };
    V31Component.prototype.ngOnDestroy = function () {
    };
    V31Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v31',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V31Component);
    return V31Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v32.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V32Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V32Component = (function () {
    function V32Component() {
        this.option = {};
        this.app = {};
    }
    V32Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            backgroundColor: "#a73e5c",
            color: ['#ffd285', '#ff733f', '#ec4863'],
            title: [{
                    text: '河南省主要城市空气质量指数',
                    left: '1%',
                    top: '6%',
                    textStyle: {
                        color: '#ffd285'
                    }
                }, {
                    text: '污染占比分析',
                    left: '83%',
                    top: '6%',
                    textAlign: 'center',
                    textStyle: {
                        color: '#ffd285'
                    }
                }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['郑州', '洛阳', '永城']
            },
            grid: {
                left: '1%',
                right: '35%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                type: 'value'
            },
            series: [{
                    name: '郑州',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [90, 50, 39, 50, 120, 82, 80]
                }, {
                    name: '洛阳',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [70, 50, 50, 87, 90, 80, 70]
                }, {
                    name: '永城',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [290, 200, 20, 132, 15, 200, 90]
                },
                {
                    type: 'pie',
                    center: ['83%', '33%'],
                    radius: ['25%', '30%'],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 335,
                            name: '污染来源分析',
                            itemStyle: {
                                normal: {
                                    color: '#ffd285'
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ffd285',
                                        fontSize: 20
                                    }
                                }
                            }
                        }, {
                            value: 180,
                            name: '占位',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#b04459'
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ffd285',
                                    },
                                    formatter: '\n汽车尾气'
                                }
                            }
                        }]
                },
                {
                    type: 'pie',
                    center: ['83%', '72%'],
                    radius: ['25%', '30%'],
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                            value: 435,
                            name: '污染来源分析',
                            itemStyle: {
                                normal: {
                                    color: '#ff733f'
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ff733f',
                                        fontSize: 20
                                    }
                                }
                            }
                        }, {
                            value: 100,
                            name: '占位',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#b04459'
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ff733f',
                                    },
                                    formatter: '\n工业污染'
                                }
                            }
                        }]
                }]
        };
        //});
    };
    V32Component.prototype.ngOnDestroy = function () {
    };
    V32Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v32',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V32Component);
    return V32Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v33.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V33Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V33Component = (function () {
    function V33Component() {
        this.option = {};
    }
    V33Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['利润', '支出', '收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            series: [
                {
                    name: '利润',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data: [-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
        //});
    };
    V33Component.prototype.ngOnDestroy = function () {
    };
    V33Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v33',
            // templateUrl: './v21.component.html',
            // styleUrls: ['./v21.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V33Component);
    return V33Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v34.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V34Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V34Component = (function () {
    function V34Component() {
        this.option = {};
    }
    V34Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        this.option = {
            backgroundColor: "#404A59",
            color: ['#ffd285', '#ff733f', '#ec4863'],
            title: {
                backgroundColor: '#fff',
                show: true,
                text: '组合图',
                link: 'https://www.baidu.com/index.php?tn=monline_3_dg',
                left: '40%',
                top: '6%',
                textStyle: {
                    color: '#ffd285'
                }
            },
            tooltip: {},
            legend: {
                x: '30%',
                bottom: '1%',
                textStyle: {
                    color: '#ffd285',
                },
                //data: ['郑州', '永城', '新乡']
                data: [{
                        name: '郑州',
                        //icon: 'circle',
                        textStyle: { color: 'red' },
                    }, {
                        name: '永城',
                        icon: 'circle',
                        textStyle: { color: 'red' },
                    }, {
                        name: '新乡',
                        icon: 'circle',
                        textStyle: { color: 'red' },
                    }],
                backgroundColor: '#fff'
            },
            radar: {
                name: {
                    show: true,
                    color: '#fffaaa',
                },
                indicator: [{
                        name: '销售',
                        max: 6500
                    }, {
                        name: '管理',
                        max: 16000
                    }, {
                        name: '信息技术',
                        max: 30000
                    }, {
                        name: '客服',
                        max: 38000
                    }, {
                        name: '研发',
                        max: 52000
                    }, {
                        name: '市场',
                        max: 25000,
                        color: '#ff6600'
                    }],
                center: ['83%', '85%'],
                radius: 80,
                startAngle: 120,
                axisLine: {
                    show: true,
                    lineStyle: {
                        type: 'solid'
                    }
                }
                //shape : 'circle'
            },
            grid: {
                //show:true,
                left: '10%',
                right: '45%',
                top: '16%',
                bottom: '16%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                //show:false,
                type: 'category',
                axisLine: {
                    //show:false,
                    onZero: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    "show": true,
                },
                axisLabel: {
                    //show:false,
                    //rotate:45,
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                splitArea: {
                    show: true
                },
                boundaryGap: true,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                //show:false,
                "axisLine": {
                    //show:false,
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#c0576d'
                    }
                },
                "axisTick": {
                    show: true
                },
                axisLabel: {
                    //show:false,
                    textStyle: {
                        color: '#ffd285'
                    }
                },
                type: 'value'
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    //start: 0,
                    end: 100,
                    bottom: '10%',
                    startValue: '周二'
                },
                {
                    type: 'slider',
                    show: true,
                    yAxisIndex: [0],
                    textStyle: {
                        color: '#ff6600'
                    },
                    left: '60%',
                    start: 0,
                    end: 100
                },
                {
                    type: 'inside',
                    xAxisIndex: [0],
                    start: 0,
                    end: 100
                },
                {
                    type: 'inside',
                    yAxisIndex: [0],
                    start: 0,
                    end: 100
                }
            ],
            /*visualMap: [
                {
                    type: 'continuous',
                    min:0,
                    max:200,
                    left:20,
                    range: [15,100],//手柄位置
                    realtime: true,
                    calculable : true,
                }
                {
                    type:'piecewise',
                    left:20,
                    textStyle:{
                        color:'#fff'
                    },
                    pieces: [
                        {min: 1500}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 900, max: 1500},
                        {min: 310, max: 1000},
                        {min: 200, max: 300},
                        {min: 10, max: 200, label: '10 到 200'},
                        {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                        {max: 5}     // 不指定 min，表示 min 为无限大（-Infinity）。
                    ]
                }
            ],*/
            series: [{
                    name: '郑州',
                    smooth: true,
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: '#ffff00',
                            opacity: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ff6600'
                        },
                        emphasis: {
                            color: '#ff6600'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#ff6600'
                        },
                    },
                    symbolSize: 8,
                    //symbol: 'circle',
                    data: [10, 50, 39, 50, 120, 82, 80],
                    markPoint: {
                        label: {
                            normal: {
                                show: true,
                                color: '#ff0066'
                            },
                            emphasis: {
                                show: true,
                                color: '#ff9900'
                            }
                        },
                        data: [
                            {
                                name: '最大值',
                                type: 'min'
                            }
                        ]
                    }
                }, {
                    name: '永城',
                    smooth: true,
                    type: 'bar',
                    symbolSize: 8,
                    //symbol: 'circle',
                    /*markLine:{
                        lineStyle:{
                            normal:{
                                type: 'solid',
                                color:'#ff9900'
                            },
                            emphasis:{
                                type: 'solid',
                                color:'#fff'
                            }
                        },
                        data: [
                            {
                                name: '平均线',
                                // 支持 'average', 'min', 'max'
                                type: 'average'
                            },
                            {
                                name: 'Y 轴值为 100 的水平线',
                                yAxis: 100
                            },
                            [
                                {
                                    // 起点和终点的项会共用一个 name
                                    name: '最小值到最大值',
                                    type: 'min'
                                },
                                {
                                    type: 'max'
                                }
                            ],
                            [
                                {
                                    name: '两个坐标之间的标线',
                                    coord: ['周三', 65]
                                },
                                {
                                    coord: ['周三', 120]
                                }
                            ], [{
                                // 固定起点的 x 像素位置，用于模拟一条指向最大值的水平线
                                yAxis: 'min',
                                x: '70%'
                            }, {
                                type: 'min'
                            }]
                        ]
                    },*/
                    data: [70, 50, 50, 87, 90, 80, 70]
                }, {
                    name: '新乡',
                    smooth: true,
                    type: 'bar',
                    symbolSize: 8,
                    //symbol: 'circle',
                    /*markArea:{
                        itemStyle:{
                            normal:{
                                type: 'solid',
                                color:'#ff9900'
                            },
                            emphasis:{
                                type: 'solid',
                                color:'#fff'
                            }
                        },
                        data: [
                            [
                                {
                                    name: '平均值到最大值',
                                    type: 'average'
                                },
                                {
                                    type: 'max'
                                }
                            ],
      
                            [
                                {
                                    name: '两个坐标之间的标域',
                                    coord: ['周二', 50]
                                },
                                {
                                    coord: ['周三', 60]
                                }
                            ]
                        ]
                    },*/
                    data: [290, 200, 20, 132, 15, 200, 90]
                }, {
                    type: 'pie',
                    name: '饼图',
                    center: ['83%', '20%'],
                    radius: ['15%', '20%'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    label: {
                        normal: {
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            color: '#ff6600',
                        }
                    },
                    data: [{
                            value: 335,
                            name: '污染来源分析',
                            itemStyle: {
                                normal: {
                                    color: '#ffd285'
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ffd285',
                                        fontSize: 20
                                    }
                                }
                            }
                        }, {
                            value: 180,
                            name: '占位',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#404A59'
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ffd285',
                                    },
                                    formatter: '\n汽车尾气'
                                }
                            }
                        }]
                }, {
                    type: 'pie',
                    center: ['83%', '50%'],
                    radius: ['15%', '20%'],
                    name: '饼图',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    /* label: {
                             normal: {
                                 textStyle: {
                                     color: '#ffd285',
                                 },
                                 formatter: "{b}: {c} ({d}%)"
                             }
                         },*/
                    data: [{
                            value: 335,
                            name: '直接访问',
                            itemStyle: {
                                normal: {
                                    color: '#FF3300'
                                }
                            }
                        }, {
                            value: 310,
                            name: '邮件营销',
                            itemStyle: {
                                normal: {
                                    color: '#FFFF00'
                                }
                            }
                        }, {
                            value: 234,
                            name: '联盟广告',
                            itemStyle: {
                                normal: {
                                    color: '#00FF00'
                                }
                            }
                        }, {
                            value: 135,
                            name: '视频广告',
                            itemStyle: {
                                normal: {
                                    color: '#1E90FF'
                                }
                            }
                        }, {
                            value: 1548,
                            name: '搜索引擎',
                            itemStyle: {
                                normal: {
                                    color: '#ADFF2F'
                                }
                            }
                        }]
                },
                {
                    type: 'radar',
                    center: ['83%', '85%'],
                    symbolSize: 4,
                    symbolRotate: 120,
                    //radius: ['15%', '20%'],
                    //name: '雷达',
                    tooltip: {},
                    data: [{
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '预算分配'
                        }, {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: '实际开销'
                        }]
                }
            ]
        };
        // CHART CODE END // });
    };
    V34Component.prototype.ngOnDestroy = function () { };
    V34Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-v34",
            // templateUrl: './v4.component.html',
            // styleUrls: ['./v4.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  "
        })
    ], V34Component);
    return V34Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v35.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V35Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V35Component = (function () {
    function V35Component() {
        this.option = {};
    }
    V35Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA
        var dataBJ = [
            [1, 55, 9, 56, 0.46, 18, 6, "良"],
            [2, 25, 11, 21, 0.65, 34, 9, "优"],
            [3, 56, 7, 63, 0.3, 14, 5, "良"],
            [4, 33, 7, 29, 0.33, 16, 6, "优"],
            [5, 42, 24, 44, 0.76, 40, 16, "优"],
            [6, 82, 58, 90, 1.77, 68, 33, "良"],
            [7, 74, 49, 77, 1.46, 48, 27, "良"],
            [8, 78, 55, 80, 1.29, 59, 29, "良"],
            [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
            [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
            [11, 39, 19, 38, 0.57, 31, 15, "优"],
            [12, 41, 11, 40, 0.43, 21, 7, "优"],
            [13, 64, 38, 74, 1.04, 46, 22, "良"],
            [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
            [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
            [16, 33, 6, 29, 0.34, 13, 5, "优"],
            [17, 94, 66, 110, 1.54, 62, 31, "良"],
            [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
            [19, 57, 31, 54, 0.96, 32, 14, "良"],
            [20, 22, 8, 17, 0.48, 23, 10, "优"],
            [21, 39, 15, 36, 0.61, 29, 13, "优"],
            [22, 94, 69, 114, 2.08, 73, 39, "良"],
            [23, 99, 73, 110, 2.43, 76, 48, "良"],
            [24, 31, 12, 30, 0.5, 32, 16, "优"],
            [25, 42, 27, 43, 1, 53, 22, "优"],
            [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
            [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
            [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
            [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
            [30, 52, 24, 60, 1.03, 50, 21, "良"],
            [31, 46, 5, 49, 0.28, 10, 6, "优"]
        ];
        var dataGZ = [
            [1, 26, 37, 27, 1.163, 27, 13, "优"],
            [2, 85, 62, 71, 1.195, 60, 8, "良"],
            [3, 78, 38, 74, 1.363, 37, 7, "良"],
            [4, 21, 21, 36, 0.634, 40, 9, "优"],
            [5, 41, 42, 46, 0.915, 81, 13, "优"],
            [6, 56, 52, 69, 1.067, 92, 16, "良"],
            [7, 64, 30, 28, 0.924, 51, 2, "良"],
            [8, 55, 48, 74, 1.236, 75, 26, "良"],
            [9, 76, 85, 113, 1.237, 114, 27, "良"],
            [10, 91, 81, 104, 1.041, 56, 40, "良"],
            [11, 84, 39, 60, 0.964, 25, 11, "良"],
            [12, 64, 51, 101, 0.862, 58, 23, "良"],
            [13, 70, 69, 120, 1.198, 65, 36, "良"],
            [14, 77, 105, 178, 2.549, 64, 16, "良"],
            [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
            [16, 73, 68, 97, 0.905, 51, 34, "良"],
            [17, 54, 27, 47, 0.592, 53, 12, "良"],
            [18, 51, 61, 97, 0.811, 65, 19, "良"],
            [19, 91, 71, 121, 1.374, 43, 18, "良"],
            [20, 73, 102, 182, 2.787, 44, 19, "良"],
            [21, 73, 50, 76, 0.717, 31, 20, "良"],
            [22, 84, 94, 140, 2.238, 68, 18, "良"],
            [23, 93, 77, 104, 1.165, 53, 7, "良"],
            [24, 99, 130, 227, 3.97, 55, 15, "良"],
            [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
            [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
            [27, 81, 48, 62, 1.619, 26, 3, "良"],
            [28, 56, 48, 68, 1.336, 37, 9, "良"],
            [29, 82, 92, 174, 3.29, 0, 13, "良"],
            [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
            [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
        ];
        var dataSH = [
            [1, 91, 45, 125, 0.82, 34, 23, "良"],
            [2, 65, 27, 78, 0.86, 45, 29, "良"],
            [3, 83, 60, 84, 1.09, 73, 27, "良"],
            [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
            [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
            [8, 89, 65, 78, 0.86, 51, 26, "良"],
            [9, 53, 33, 47, 0.64, 50, 17, "良"],
            [10, 80, 55, 80, 1.01, 75, 24, "良"],
            [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
            [12, 99, 71, 142, 1.1, 62, 42, "良"],
            [13, 95, 69, 130, 1.28, 74, 50, "良"],
            [14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
            [15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
            [16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
            [17, 79, 43, 107, 1.05, 59, 37, "良"],
            [18, 71, 46, 89, 0.86, 64, 25, "良"],
            [19, 97, 71, 113, 1.17, 88, 31, "良"],
            [20, 84, 57, 91, 0.85, 55, 31, "良"],
            [21, 87, 63, 101, 0.9, 56, 41, "良"],
            [22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
            [23, 87, 62, 100, 1, 72, 28, "良"],
            [24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
            [25, 65, 45, 51, 0.74, 39, 17, "良"],
            [26, 39, 24, 38, 0.61, 47, 17, "优"],
            [27, 39, 24, 39, 0.59, 50, 19, "优"],
            [28, 93, 68, 96, 1.05, 79, 29, "良"],
            [29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
            [30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
            [31, 187, 143, 201, 1.39, 89, 53, "中度污染"]
        ];
        var schema = [
            { name: 'date', index: 0, text: '日' },
            { name: 'AQIindex', index: 1, text: 'AQI指数' },
            { name: 'PM25', index: 2, text: 'PM2.5' },
            { name: 'PM10', index: 3, text: 'PM10' },
            { name: 'CO', index: 4, text: '一氧化碳（CO）' },
            { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
            { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
        ];
        var itemStyle = {
            normal: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        };
        //
        this.option = {
            backgroundColor: '#404a59',
            color: [
                '#dd4444', '#fec42c', '#80F1BE'
            ],
            legend: {
                y: 'top',
                data: ['北京', '上海', '广州'],
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            },
            grid: {
                x: '10%',
                x2: 150,
                y: '18%',
                y2: '10%'
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[0] + '日：'
                        + value[7]
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                        + schema[4].text + '：' + value[4] + '<br>'
                        + schema[5].text + '：' + value[5] + '<br>'
                        + schema[6].text + '：' + value[6] + '<br>';
                }
            },
            xAxis: {
                type: 'value',
                name: '日期',
                nameGap: 16,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                max: 31,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            visualMap: [
                {
                    left: 'right',
                    top: '10%',
                    dimension: 2,
                    min: 0,
                    max: 250,
                    itemWidth: 30,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['圆形大小：PM2.5'],
                    textGap: 30,
                    textStyle: {
                        color: '#fff'
                    },
                    inRange: {
                        symbolSize: [10, 70]
                    },
                    outOfRange: {
                        symbolSize: [10, 70],
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                },
                {
                    left: 'right',
                    bottom: '5%',
                    dimension: 6,
                    min: 0,
                    max: 50,
                    itemHeight: 120,
                    calculable: true,
                    precision: 0.1,
                    text: ['明暗：二氧化硫'],
                    textGap: 30,
                    textStyle: {
                        color: '#fff'
                    },
                    inRange: {
                        colorLightness: [1, 0.5]
                    },
                    outOfRange: {
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#c23531']
                        },
                        outOfRange: {
                            color: ['#444']
                        }
                    }
                }
            ],
            series: [
                {
                    name: '北京',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataBJ
                },
                {
                    name: '上海',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataSH
                },
                {
                    name: '广州',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataGZ
                }
            ]
        };
        //});
    };
    V35Component.prototype.ngOnDestroy = function () {
        //this.themeSubscription.unsubscribe();
    };
    V35Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-v35',
            // templateUrl: './v5.component.html',
            // styleUrls: ['./v5.component.css'],
            styles: [''],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  ",
        })
    ], V35Component);
    return V35Component;
}());



/***/ }),

/***/ "../../../../../src/app/dash3/v36.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V36Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var V36Component = (function () {
    function V36Component() {
        this.option = {};
    }
    V36Component.prototype.ngAfterViewInit = function () {
        var echarts = {};
        // DATA //
        var scale = 1;
        var echartData = [{
                value: 2154,
                name: '曲阜师范大学'
            }, {
                value: 3854,
                name: '潍坊学院'
            }, {
                value: 3515,
                name: '青岛职业技术学院'
            }, {
                value: 3515,
                name: '淄博师范高等专科'
            }, {
                value: 3854,
                name: '鲁东大学'
            }, {
                value: 2154,
                name: '山东师范大学'
            }];
        var rich = {
            yellow: {
                color: "#ffc72b",
                fontSize: 30 * scale,
                padding: [5, 4],
                align: 'center'
            },
            total: {
                color: "#ffc72b",
                fontSize: 40 * scale,
                align: 'center'
            },
            white: {
                color: "#fff",
                align: 'center',
                fontSize: 14 * scale,
                padding: [21, 0]
            },
            blue: {
                color: '#49dff0',
                fontSize: 16 * scale,
                align: 'center'
            },
            hr: {
                borderColor: '#0b5263',
                width: '100%',
                borderWidth: 1,
                height: 0,
            }
        };
        this.option = {
            // backgroundColor: '#031f2d',
            title: {
                text: '总考生数',
                left: 'center',
                top: '53%',
                padding: [24, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 18 * scale,
                    align: 'center'
                }
            },
            legend: {
                selectedMode: false,
                formatter: function (name) {
                    var total = 0; //各科正确率总和
                    var averagePercent; //综合正确率
                    echartData.forEach(function (value, index, array) {
                        total += value.value;
                    });
                    return '{total|' + total + '}';
                },
                data: [echartData[0].name],
                // data: ['高等教育学'],
                // itemGap: 50,
                left: 'center',
                top: 'center',
                icon: 'none',
                align: 'center',
                textStyle: {
                    color: "#fff",
                    fontSize: 16 * scale,
                    rich: rich
                },
            },
            series: [{
                    name: '总考生数量',
                    type: 'pie',
                    radius: ['42%', '50%'],
                    hoverAnimation: false,
                    color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                    label: {
                        normal: {
                            formatter: function (params, ticket, callback) {
                                var total = 0; //考生总数量
                                var percent = 0; //考生占比
                                echartData.forEach(function (value, index, array) {
                                    total += value.value;
                                });
                                percent = parseInt(((params.value / total) * 100).toFixed(1));
                                return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                            },
                            rich: rich
                        },
                    },
                    labelLine: {
                        normal: {
                            length: 55 * scale,
                            length2: 0,
                            lineStyle: {
                                color: '#0b5263'
                            }
                        }
                    },
                    data: echartData
                }]
        };
        // CHART CODE END // });
    };
    V36Component.prototype.ngOnDestroy = function () { };
    V36Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-v36",
            // templateUrl: './v4.component.html',
            // styleUrls: ['./v4.component.css'],
            template: "\n    <div echarts [options]=\"option\" class=\"viz-chart\"></div>\n  "
        })
    ], V36Component);
    return V36Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl1/egl1.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-dark text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Data viz 3D</h1> -->\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n\n  <iframe src=\"../assets/echarts/dev/geo3D-airline.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\"  -->\n<!--\n</div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl1/egl1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl1Component = (function () {
    function Egl1Component() {
    }
    Egl1Component.prototype.ngOnInit = function () {
    };
    Egl1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl1',
            template: __webpack_require__("../../../../../src/app/egl1/egl1.component.html"),
            // styleUrls: ['./egl1.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl1Component);
    return Egl1Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl2/egl2.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Data viz 3D</h1> -->\n\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n  <iframe src=\"../assets/echarts/dev/geo3D-bar3D.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\" -->\n  <!-- <iframe src=\"../assets/echarts/dev/bar3D-non-zero.html\"  width=\"100%\" height=\"500\" scrolling=\"no\" frameborder=\"0\"></iframe> -->\n\n<!-- </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl2/egl2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl2Component = (function () {
    function Egl2Component() {
    }
    Egl2Component.prototype.ngOnInit = function () {
    };
    Egl2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl2',
            template: __webpack_require__("../../../../../src/app/egl2/egl2.component.html"),
            // styleUrls: ['./egl2.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl2Component);
    return Egl2Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl3/egl3.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Globe 3D</h1> -->\n\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n  <!-- <iframe src=\"../assets/echarts/dev/bar3D-non-zero.html\"  width=\"100%\" height=\"600\" scrolling=\"no\" frameborder=\"0\"></iframe> -->\n  <iframe src=\"../assets/echarts/dev/globe-bar3D.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\" -->\n\n<!-- </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl3/egl3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl3Component = (function () {
    function Egl3Component() {
    }
    Egl3Component.prototype.ngOnInit = function () {
    };
    Egl3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl3',
            template: __webpack_require__("../../../../../src/app/egl3/egl3.component.html"),
            // styleUrls: ['./egl3.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl3Component);
    return Egl3Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl4/egl4.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Globe 3D</h1> -->\n\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n  <!-- <iframe src=\"../assets/echarts/dev/bar3D-non-zero.html\"  width=\"100%\" height=\"600\" scrolling=\"no\" frameborder=\"0\"></iframe> -->\n  <iframe src=\"../assets/echarts/dev/globe-environment.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\" -->\n\n<!-- </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl4/egl4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl4Component = (function () {
    function Egl4Component() {
    }
    Egl4Component.prototype.ngOnInit = function () {
    };
    Egl4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl4',
            template: __webpack_require__("../../../../../src/app/egl4/egl4.component.html"),
            // styleUrls: ['./egl4.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl4Component);
    return Egl4Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl5/egl5.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Globe 3D</h1> -->\n\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n  <!-- <iframe src=\"../assets/echarts/dev/bar3D-non-zero.html\"  width=\"100%\" height=\"600\" scrolling=\"no\" frameborder=\"0\"></iframe> -->\n  <iframe src=\"../assets/echarts/dev/globe-environment.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\" -->\n\n<!-- </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl5/egl5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl5Component = (function () {
    function Egl5Component() {
    }
    Egl5Component.prototype.ngOnInit = function () {
    };
    Egl5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl5',
            template: __webpack_require__("../../../../../src/app/egl5/egl5.component.html"),
            // styleUrls: ['./egl5.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl5Component);
    return Egl5Component;
}());



/***/ }),

/***/ "../../../../../src/app/egl6/egl6.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading h13d\">Globe 3D</h1> -->\n\n  <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n  <!-- <iframe src=\"../assets/echarts/dev/bar3D-non-zero.html\"  width=\"100%\" height=\"600\" scrolling=\"no\" frameborder=\"0\"></iframe> -->\n  <iframe src=\"../assets/echarts/dev/globe-environment.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n   <!-- width=\"100%\" height=\"100%\" -->\n\n<!-- </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"\">\n    <h1 class=\"jumbotron-heading \"> </h1>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/egl6/egl6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Egl6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Egl6Component = (function () {
    function Egl6Component() {
    }
    Egl6Component.prototype.ngOnInit = function () {
    };
    Egl6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-egl6',
            template: __webpack_require__("../../../../../src/app/egl6/egl6.component.html"),
            // styleUrls: ['./egl6.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Egl6Component);
    return Egl6Component;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n**********************************************************\r\n* Parallax scrolling code remixed from page below:       *\r\n* https://www.w3schools.com/howto/howto_css_parallax.asp *\r\n**********************************************************\r\n*/\r\n\r\n.bgimg-footer {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/dublin/dublin.jpg") + ");\r\n  opacity: 40% !important ;\r\n  height: 66% !important ;\r\n}\r\n\r\n.footer-details{\r\n  padding-top: 150px;\r\n  color: white;\r\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.50);\r\n  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.50);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Parallax scrolling code remixed from page below:       *\n* https://www.w3schools.com/howto/howto_css_parallax.asp *\n**********************************************************\n-->\n<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://startbootstrap.com/                            *\n**********************************************************\n-->\n\n<div class=\"bgimg-footer footer-details\">\n  <div class=\"opacity1\">\n    <!-- Footer in parallax -->\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto my-auto text-center\">\n        <hr class=\"primary\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto my-auto text-center\">\n        <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n        <hr class=\"primary\">\n        <p>Ready to start your next project? <br>\n          Send us a message and we will get <br>back to\n          you as soon as possible!</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 ml-auto text-center\">\n        <i class=\"fa fa-globe fa-3x sr-contact\"></i>\n        <p>\n          <!-- <a href=\"http://zzz.com/\">www.zzz.com</a> -->\n        </p>\n      </div>\n      <div class=\"col-lg-4 mr-auto text-center\">\n        <i class=\"fa fa-envelope-o fa-3x sr-contact\"></i>\n        <p>\n          <!-- <a href=\"mailto:zzz@zzz.com\">zzz@zzz.com</a> -->\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto my-auto text-center\">\n        <p>Copyright 2017-2018 &copy; Globe3D.com</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n**********************************************************\r\n* Component Code remixed from:                           *\r\n* https://startbootstrap.com/                            *\r\n**********************************************************\r\n*/\r\n\r\nbody {\r\n  font-family: 'Lora', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100% !important ;\r\n  color: white;\r\n  background-color: black; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://startbootstrap.com/                            *\n**********************************************************\n-->\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger h33d\" href=\"#page-top\">Global</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto h43d\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#Finance\">Finance</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#DataViz\">Data Viz</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#Data3D\">Data 3D</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#Video\">Video</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#VR\">VR</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#Contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- Intro Header -->\n<!-- /* 3D CSS text from: http://markdotto.com/playground/3d-text/ */ -->\n<header id=\"page-top\" class=\"masthead\">\n  <div class=\"intro-body\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <!-- <h1 class=\"h13d brand-heading mx-auto\">Global</h1> -->\n\n        <div class=\"col-lg-8 mx-auto\">\n          <h1 class=\"h13d brand-heading mx-auto\">Global</h1>\n          <p class=\"h23d p-0\">Awareness</p>\n          <!-- <p class=\"h33d\">Design, Software Development, Data Science</p> -->\n          <!-- <a href=\"#services\" class=\"btn\">\n            <i class=\"fa fa-angle-double-down\"></i>\n          </a> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/iexdata/iexdata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/iexdata/iexdata.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  iexdata works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/iexdata/iexdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IexdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IexdataComponent = (function () {
    function IexdataComponent(http) {
        this.http = http;
    }
    IexdataComponent.prototype.ngOnInit = function () {
        this.http.get('https://api.iextrading.com/1.0/stock/aapl/chart/1y').subscribe(function (data) {
            console.log(data);
        });
    };
    IexdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iexdata',
            template: __webpack_require__("../../../../../src/app/iexdata/iexdata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/iexdata/iexdata.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IexdataComponent);
    return IexdataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/iframe1/iframe1.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading h13d\">AFrame VR</h1> -->\n    <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n\n    <iframe src=\"../assets/aframe/vrforce/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n<!--\n  </div>\n  </section>\n\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading \"> </h1>\n    </div>\n  </section> -->\n"

/***/ }),

/***/ "../../../../../src/app/iframe1/iframe1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iframe1Component = (function () {
    function Iframe1Component() {
    }
    Iframe1Component.prototype.ngOnInit = function () {
    };
    Iframe1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe1',
            template: __webpack_require__("../../../../../src/app/iframe1/iframe1.component.html"),
            // styleUrls: ['./iframe1.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Iframe1Component);
    return Iframe1Component;
}());



/***/ }),

/***/ "../../../../../src/app/iframe2/iframe2.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading h13d\">VR Panorama</h1> -->\n    <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n\n    <!-- <iframe src=\"../assets/aframe/d3chart/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe> -->\n\n  <!-- </div>\n  </section>\n\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading \"> </h1>\n    </div>\n  </section> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/iframe2/iframe2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iframe2Component = (function () {
    function Iframe2Component() {
    }
    Iframe2Component.prototype.ngOnInit = function () {
    };
    Iframe2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe2',
            template: __webpack_require__("../../../../../src/app/iframe2/iframe2.component.html"),
            // styleUrls: ['./iframe2.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Iframe2Component);
    return Iframe2Component;
}());



/***/ }),

/***/ "../../../../../src/app/iframe3/iframe3.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading h13d\">VR Panorama</h1> -->\n    <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n\n    <iframe src=\"../assets/aframe/scatter3d/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n\n  <!-- </div>\n  </section>\n\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading \"> </h1>\n    </div>\n  </section> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/iframe3/iframe3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iframe3Component = (function () {
    function Iframe3Component() {
    }
    Iframe3Component.prototype.ngOnInit = function () {
    };
    Iframe3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe3',
            template: __webpack_require__("../../../../../src/app/iframe3/iframe3.component.html"),
            // styleUrls: ['./iframe3.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Iframe3Component);
    return Iframe3Component;
}());



/***/ }),

/***/ "../../../../../src/app/iframe4/iframe4.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"m-0 dashw jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading h13d\">VR Panorama</h1> -->\n    <!-- <p class=\"lead text-muted\">Data Viualization</p> -->\n\n    <iframe src=\"../assets/aframe/globe-hexbin/index.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n\n  <!-- </div>\n  </section>\n\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n    <div class=\"\">\n      <h1 class=\"jumbotron-heading \"> </h1>\n    </div>\n  </section> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/iframe4/iframe4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iframe4Component = (function () {
    function Iframe4Component() {
    }
    Iframe4Component.prototype.ngOnInit = function () {
    };
    Iframe4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe4',
            template: __webpack_require__("../../../../../src/app/iframe4/iframe4.component.html"),
            // styleUrls: ['./iframe4.component.css'],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Iframe4Component);
    return Iframe4Component;
}());



/***/ }),

/***/ "../../../../../src/app/leaflet/leaflet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-body\">\n\n\t\t<h1 class=\"card-title\">Markers</h1>\n\t\t<p>\n\t\t\tMarkers are just like any other layer.\n\t\t\tYou can add them to a map by creating them and adding them to an array bound to <code>leafletLayers</code>.\n\t\t</p>\n\n\t\t<div class=\"card bg-light\">\n\t\t\t<div class=\"card-body\">\n\n<pre>\n&lt;div leaflet style=\"height: 300px;\"\n        [leafletOptions]=\"options\"\n        [leafletLayers]=\"markers\"&gt;\n&lt;/div&gt;\n</pre>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<div class=\"card-body\">\n\n\t\t<div class=\"row\">\n\t\t\t<form class=\"col\">\n\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t(click)=\"addMarker()\">Add Marker</button>\n\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t(click)=\"removeMarker()\">Remove Marker</button>\n\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<label class=\"col col-form-label\">{{markers?.length}} Markers</label>\n\t\t</div>\n\n\t\t<!-- Map -->\n\t\t<div leaflet style=\"height: 300px;\"\n\t\t\t [leafletOptions]=\"options\"\n\t\t\t [leafletLayers]=\"markers\">\n\t\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/leaflet/leaflet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LeafletComponent = (function () {
    function LeafletComponent() {
        // Open Street Map definitions
        this.LAYER_OSM = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });
        // Values to bind to Leaflet Directive
        this.options = {
            layers: [this.LAYER_OSM],
            zoom: 10,
            center: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])(46.879966, -121.726909)
        };
        this.markers = [];
    }
    LeafletComponent.prototype.addMarker = function () {
        var newMarker = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"])([46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5)], {
            icon: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/leaflet/images/marker-icon.png',
                shadowUrl: 'assets/leaflet/images/marker-shadow.png'
            })
        });
        this.markers.push(newMarker);
    };
    LeafletComponent.prototype.removeMarker = function () {
        this.markers.pop();
    };
    LeafletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leaflet',
            template: __webpack_require__("../../../../../src/app/leaflet/leaflet.component.html")
        })
    ], LeafletComponent);
    return LeafletComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map-twitter/map-twitter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-twitter/map-twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\"\nleaflet\n[leafletOptions]=\"options\"\n(leafletMapReady)=\"onMapReady($event)\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map-twitter/map-twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapTwitterComponent = (function () {
    function MapTwitterComponent(http) {
        this.http = http;
        // {"airportsFields":["name","city","country","longitude","latitude"]
        // $.get("assets/echarts/dev/data/flights.json")
        //   function getAirportCoord(idx) {
        //     return [data.airports[idx][3], data.airports[idx][4]];
        // }
        this.data = {
            data: []
        };
        //  = [["airportsFields"]["longitude"],["airportsFields"]["latitude"]];
        this.heatmapLayer = new HeatmapOverlay({
            radius: 2,
            maxOpacity: 0.8,
            scaleRadius: true,
            useLocalExtrema: true,
            latField: 'lat',
            lngField: 'lng',
            valueField: 'count'
        });
        this.options = {
            layers: [
                L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                    maxZoom: 20,
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                    detectRetina: true
                }),
                this.heatmapLayer
            ],
            zoom: 4,
            center: L.latLng([46.879966, -121.726909])
        };
    }
    MapTwitterComponent.prototype.onMapReady = function (map) {
        var _this = this;
        map.on('mousemove', function (event) {
            _this.data.data.push({
                lat: event.latlng.lat,
                lng: event.latlng.lng,
                count: 1
            });
            _this.heatmapLayer.setData(_this.data);
        });
        // map.on('mousemove', (event: L.LeafletMouseEvent) => {
        //   this.data.data.push({
        //     lat: event.latlng.lat,
        //     lng: event.latlng.lng,
        //     count: 1
        //   });
        //   this.heatmapLayer.setData(this.data);
        // });
    };
    MapTwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-twitter',
            template: __webpack_require__("../../../../../src/app/map-twitter/map-twitter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map-twitter/map-twitter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapTwitterComponent);
    return MapTwitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Mapping</h1>\n  <p class=\"lead text-muted\">Open Street Map</p>\n\n  </div>\n  </section>\n  <section class=\"viz-map m-0 p-0 jumbotron text-center text-white\">\n\n    <div>\n      <div class=\"map\" leaflet [leafletOptions]=\"options\"></div>\n    </div>\n\n  </section>\n  <section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MapComponent = (function () {
    function MapComponent() {
        this.options = {
            layers: [
                // tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                // subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 20,
                    detectRetina: true
                })
            ],
            zoom: 14,
            center: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])([37.8, -122.478255])
        };
    }
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mapgeo/mapgeo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mapgeo/mapgeo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapgeoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapgeoComponent = (function () {
    function MapgeoComponent() {
        // Define our base layers so we can reference them multiple times
        this.googleMaps = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            detectRetina: true
        });
        this.googleHybrid = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            detectRetina: true
        });
        // Marker for the top of Mt. Ranier
        this.summit = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"])([46.8523, -121.7603], {
            icon: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'leaflet/marker-icon.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        // Marker for the parking lot at the base of Mt. Ranier trails
        this.paradise = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"])([46.78465227596462, -121.74141269177198], {
            icon: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'leaflet/marker-icon.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        // Path from paradise to summit - most points omitted from this example for brevity
        this.route = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["polyline"])([[46.78465227596462, -121.74141269177198],
            [46.80047278292477, -121.73470708541572],
            [46.815471360459924, -121.72521826811135],
            [46.8360239546746, -121.7323131300509],
            [46.844306448474526, -121.73327445052564],
            [46.84979408048093, -121.74325201660395],
            [46.853193528950214, -121.74823296256363],
            [46.85322881676257, -121.74843915738165],
            [46.85119913890958, -121.7519719619304],
            [46.85103829018772, -121.7542376741767],
            [46.85101557523012, -121.75431755371392],
            [46.85140013694763, -121.75727385096252],
            [46.8525277543813, -121.75995212048292],
            [46.85290292836726, -121.76049157977104],
            [46.8528160918504, -121.76042997278273]]);
        // Layers control object with our two base layers and the three overlay layers
        this.layersControl = {
            baseLayers: {
                'Google Maps': this.googleMaps,
                'Google Hybrid': this.googleHybrid
            },
            overlays: {
                'Mt. Rainier Summit': this.summit,
                'Mt. Rainier Paradise Start': this.paradise,
                'Mt. Rainier Climb Route': this.route
            }
        };
        this.options = {
            layers: [this.googleMaps, this.route, this.summit, this.paradise],
            zoom: 7,
            center: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])([46.879966, -121.726909])
        };
        // IN TAG > (leafletMapReady)="onMapReady($event)"
        // onMapReady(map: this.Map) {
        //   this.map.fitBounds(this.route.getBounds(), {
        //     padding: point(24, 24),
        //     maxZoom: 12,
        //     animate: true
        //   });
        // }
        // options = {
        //   layers: [
        //     tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        //       subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        //     // tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //       maxZoom: 20,
        //       detectRetina: true
        //     })
        //   ],
        //   zoom: 14,
        //   center: latLng([ 37.8, -122.478255 ])
        // };
    }
    MapgeoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mapgeo',
            template: "\n    <div class=\"map\" leaflet\n    [leafletOptions]=\"options\"\n    [leafletLayersControl]=\"layersControl\"\n    ></div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/mapgeo/mapgeo.component.css")]
        })
    ], MapgeoComponent);
    return MapgeoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mapheat/mapheat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mapheat/mapheat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\"\nleaflet\n[leafletOptions]=\"options\"\n(leafletMapReady)=\"onMapReady($event)\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mapheat/mapheat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapheatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapheatComponent = (function () {
    function MapheatComponent() {
        this.data = {
            data: []
        };
        this.heatmapLayer = new HeatmapOverlay({
            radius: 2,
            maxOpacity: 0.8,
            scaleRadius: true,
            useLocalExtrema: true,
            latField: 'lat',
            lngField: 'lng',
            valueField: 'count'
        });
        this.options = {
            layers: [
                L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                    maxZoom: 20,
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                    detectRetina: true
                }),
                this.heatmapLayer
            ],
            zoom: 4,
            center: L.latLng([46.879966, -121.726909])
        };
    }
    MapheatComponent.prototype.onMapReady = function (map) {
        var _this = this;
        map.on('mousemove', function (event) {
            _this.data.data.push({
                lat: event.latlng.lat,
                lng: event.latlng.lng,
                count: 1
            });
            _this.heatmapLayer.setData(_this.data);
        });
    };
    MapheatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mapheat',
            template: __webpack_require__("../../../../../src/app/mapheat/mapheat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mapheat/mapheat.component.css")]
        })
    ], MapheatComponent);
    return MapheatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maphex/maphex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.hexbin-hexagon {\r\n\tstroke: #000;\r\n\tstroke-width: .5px;\r\n}\r\n\r\n.hexbin-container:hover .hexbin-hexagon {\r\n\ttransition: 200ms;\r\n\tstroke: orange;\r\n\tstroke-width: 1px;\r\n\tstroke-opacity: 1;\r\n}\r\n\r\n.hexbin-tooltip {\r\n\tpadding: 8px;\r\n\tborder-radius: 4px;\r\n\tborder: 1px solid black;\r\n\tbackground-color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maphex/maphex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaphexComponent = (function () {
    function MaphexComponent() {
        this.options = {
            layers: [
                Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
                    // tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 20,
                    detectRetina: true
                })
            ],
            zoom: 14,
            center: Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])([37.8, -122.478255])
        };
    }
    MaphexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maphex',
            template: "\n    <div class=\"map\" leaflet [leafletOptions]=\"options\"></div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/maphex/maphex.component.css")]
        })
    ], MaphexComponent);
    return MaphexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maphexi/maphexi.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maphexi/maphexi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphexiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaphexiComponent = (function () {
    function MaphexiComponent() {
    }
    MaphexiComponent.prototype.ngOnInit = function () {
    };
    MaphexiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maphexi',
            template: "\n\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">GeoSpatial Analysis</h1>\n  <p class=\"lead text-muted\">Built on Hexbin code from Asymmetrik/leaflet-d3</p>\n\n  </div>\n  </section>\n  <section class=\"viz-map m-0 p-0 jumbotron text-center text-white\">\n\n  <iframe src=\"../assets/leaflet/hexbin/xhex.html\" frameborder=\"0\" style=\"margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:600px;width:100%;\" height=\"600px\" width=\"100%\"></iframe>\n\n  </section>\n  <section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n  </section>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/maphexi/maphexi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaphexiComponent);
    return MaphexiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parallax/parallax.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* ______________________________________________________ */\r\n/* Parallax scrolling code remixed from page below:       */\r\n/* https://www.w3schools.com/howto/howto_css_parallax.asp */\r\n/* ______________________________________________________ */\r\n\r\n.bgimg-1, .bgimg-2, .bgimg-3 {\r\n  position: relative;\r\n  opacity: 1;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n/* .bgimg-1 {\r\n  background-image: url(\"http://lorempixel.com/800/600/nightlife/1\");\r\n  min-height: 100%;\r\n}\r\n\r\n.bgimg-2 {\r\n  background-image: url(\"http://lorempixel.com/800/600/nightlife/2\");\r\n  min-height: 100%;\r\n}\r\n\r\n.bgimg-3 {\r\n  background-image: url(\"http://lorempixel.com/800/600/nightlife/3\");\r\n  min-height: 100%;\r\n} */\r\n\r\n.caption {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 45%;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.caption span.border {\r\n  background-color: #111;\r\n  color: #fff;\r\n  padding: 18px;\r\n  font-size: 25px;\r\n  /* letter-spacing: 10px; */\r\n}\r\n\r\n\r\n/* Turn off parallax scrolling for tablets and phones */\r\n@media only screen and (max-device-width: 1024px) {\r\n    .bgimg-1, .bgimg-2, .bgimg-3 {\r\n        background-attachment: scroll;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parallax/parallax.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n**********************************************************\n* Parallax scrolling code remixed from page below:       *\n* https://www.w3schools.com/howto/howto_css_parallax.asp *\n**********************************************************\n-->\n\n<div class=\"parallax bgimg-1\">\n  <div class=\"caption\">\n    <span class=\"border\">San francisco</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/parallax/parallax.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxComponent = (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () {
    };
    ParallaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parallax',
            template: __webpack_require__("../../../../../src/app/parallax/parallax.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parallax/parallax.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxComponent);
    return ParallaxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parallax1/parallax1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ______________________________________________________ */\r\n/* Parallax scrolling code remixed from page below:       */\r\n/* https://www.w3schools.com/howto/howto_css_parallax.asp */\r\n/* ______________________________________________________ */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parallax1/parallax1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax bgimg-2\">\n  <div class=\"caption\">\n    <span class=\"border\">Dublin</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/parallax1/parallax1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallax1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parallax1Component = (function () {
    function Parallax1Component() {
    }
    Parallax1Component.prototype.ngOnInit = function () {
    };
    Parallax1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parallax1',
            template: __webpack_require__("../../../../../src/app/parallax1/parallax1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parallax1/parallax1.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Parallax1Component);
    return Parallax1Component;
}());



/***/ }),

/***/ "../../../../../src/app/parallax2/parallax2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* ______________________________________________________ */\r\n/* Parallax scrolling code remixed from page below:       */\r\n/* https://www.w3schools.com/howto/howto_css_parallax.asp */\r\n/* ______________________________________________________ */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parallax2/parallax2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n**********************************************************\n* Parallax scrolling code remixed from page below:       *\n* https://www.w3schools.com/howto/howto_css_parallax.asp *\n**********************************************************\n-->\n\n\n  <div class=\"parallax bgimg-3\">\n    <div class=\"caption\">\n      <span class=\"border\">San Francisco</span>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/parallax2/parallax2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parallax2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parallax2Component = (function () {
    function Parallax2Component() {
    }
    Parallax2Component.prototype.ngOnInit = function () {
    };
    Parallax2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parallax2',
            template: __webpack_require__("../../../../../src/app/parallax2/parallax2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parallax2/parallax2.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], Parallax2Component);
    return Parallax2Component;
}());



/***/ }),

/***/ "../../../../../src/app/three/three.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/three/three.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Three.JS</h1>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/three/three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreeComponent = (function () {
    function ThreeComponent() {
    }
    ThreeComponent.prototype.ngOnInit = function () {
    };
    ThreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-three',
            template: __webpack_require__("../../../../../src/app/three/three.component.html"),
            styles: [__webpack_require__("../../../../../src/app/three/three.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ThreeComponent);
    return ThreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i {\r\n  font-size: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://getbootstrap.com/                            *\n**********************************************************\n-->\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Tools</h1>\n    <p class=\"lead\">Programming Languages &amp; Tools</p>\n\n    <ul class=\"list-inline list-icons\">\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-nodejs-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-javascript-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-python-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-angularjs-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-react-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-vuejs-plain\"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-docker-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-csharp-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-mongodb-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-postgresql-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-d3js-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-bootstrap-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-wordpress-plain\"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-webpack-plain\"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-github-plain \"></i>\n      </li>\n      <li class=\"list-inline-item\">\n        <i class=\"devicon-ubuntu-plain\"></i>\n      </li>\n    </ul>\n  </div>\n</section>\n\n<section class=\"m-0 jumbotron text-center bg-primary text-white\">\n  <div class=\"container\">\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tools',
            template: __webpack_require__("../../../../../src/app/tools/tools.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/tools.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  twitter works!\n</p> -->\n<form (submit)=\"getTweets(searchTweet)\">\n  <input [(ngModel)]=\"searchTweet\" name=\"tweet\" placeholder=\"Search something\" autocomplete=\"off\">\n  <button type=\"submit\">Twitter</button>\n</form>\n\n<div *ngIf=\"tweets\" class=\"tweets\">\n  <div class=\"tweet\" *ngFor=\"let tweet of tweets\">\n    <div class=\"left\">\n      <img class=\"picture\" [src]= \"tweet.user.profile_image_url\"/>\n    </div>\n    <div class=\"right\" >\n      <div class=\"user\">\n        <div class=\"name\"></div>\n        <span class=\"username\"> @</span>\n        <span class=\"date\"></span>\n      </div> <br><br>\n      <div class=\"text\"> </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
// Twitter code snippets from:
//http://thelillysblog.com/2017/02/26/getting-twitter-feed-angular-nodejs/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterComponent = (function () {
    // constructor(public http: Http) { }
    function TwitterComponent(http) {
        this.http = http;
    }
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-twitter',
            template: __webpack_require__("../../../../../src/app/twitter/twitter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.jumbotron {\r\nbackground-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n**********************************************************\n* Component Code remixed from page below:                *\n* https://developers.google.com/youtube/                 *\n**********************************************************\n-->\n<section id=\"Video\" class=\"m-0 jumbotron text-center text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">Video</h1>\n  </div>\n</section>\n\n<iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"720\" src=\"https://www.youtube.com/embed/QtXby3twMmI?autoplay=0&origin=http://example.com\"\n  frameborder=\"0\"></iframe>\n\n<section class=\"m-0 jumbotron text-center text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"> </h1>\n  </div>\n</section>\n\n<!-- <div id=\"ytplayer\"></div>\n\n<script>\n  // Load the IFrame Player API code asynchronously.\n  var tag = document.createElement('script');\n  tag.src = \"https://www.youtube.com/player_api\";\n  var firstScriptTag = document.getElementsByTagName('script')[0];\n  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n\n  // Replace the 'ytplayer' element with an <iframe> and\n  // YouTube player after the API code downloads.\n  var player;\n  function onYouTubePlayerAPIReady() {\n    player = new YT.Player('ytplayer', {\n      height: '360',\n      width: '640',\n      videoId: 'M7lc1UVf-VE'\n    });\n  }\n</script> -->\n"

/***/ }),

/***/ "../../../../../src/app/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__("../../../../../src/app/video/video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video/video.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/viz0/viz0.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viz0Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Viz0Component = (function () {
    function Viz0Component() {
        this.chartOption = {};
    }
    Viz0Component.prototype.ngAfterViewInit = function () {
    };
    Viz0Component.prototype.ngOnDestroy = function () {
    };
    Viz0Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz0',
            // templateUrl: './viz1.component.html',
            // styleUrls: ['./viz1.component.css'],
            styles: [''],
            template: "\n<section id=\"DataViz\" class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Data Viz</h1>\n  <p class=\"lead text-muted\">Built on Echarts-GL example charts from echarts.baidu.com</p>\n\n  </div>\n</section>\n<section class=\"viz-data m-0 jumbotron text-center text-white\">\n\n<iframe class=\"\" src=\"../assets/echarts/dev/geo3D-airline.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n\n</section>\n<section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n</section>\n  ",
        })
    ], Viz0Component);
    return Viz0Component;
}());



/***/ }),

/***/ "../../../../../src/app/viz1/viz1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viz1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Viz1Component = (function () {
    function Viz1Component() {
        this.chartOption = {};
    }
    Viz1Component.prototype.ngAfterViewInit = function () {
    };
    Viz1Component.prototype.ngOnDestroy = function () {
    };
    Viz1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz1',
            // templateUrl: './viz1.component.html',
            // styleUrls: ['./viz1.component.css'],
            styles: [''],
            template: "\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Data 3D</h1>\n  <p class=\"lead text-muted\">Built on Echarts-GL example charts from echarts.baidu.com</p>\n\n  </div>\n</section>\n<section class=\"viz-data m-0 jumbotron text-center text-white\">\n\n    <iframe class=\"\" src=\"../assets/echarts/dev/geo3D-bar3D.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n\n</section>\n<section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n</section>\n  ",
        })
    ], Viz1Component);
    return Viz1Component;
}());



/***/ }),

/***/ "../../../../../src/app/viz2/viz2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viz2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import * as $ from 'jquery';
// import '../../assets/echarts/map/js/world.js';
var Viz2Component = (function () {
    function Viz2Component() {
        this.option = {};
        this.data = {};
    }
    Viz2Component.prototype.ngAfterViewInit = function () {
        this.option = {
            backgroundColor: '#000',
            globe: {
                baseTexture: '../assets/echarts/ddata/data-1491890179041-Hkj-elqpe.jpg',
                heightTexture: '../assets/echarts/ddata/data-1491889019097-rJQYikcpl.jpg',
                displacementScale: 0.1,
                shading: 'lambert',
                environment: '../assets/echarts/ddata/data-1491837999815-H1_44Qtal.jpg',
                light: {
                    ambient: {
                        intensity: 0.1
                    },
                    main: {
                        intensity: 1.5
                    }
                },
                layers: [
                    {
                        type: 'blend',
                        blendTo: 'emission',
                        texture: '../assets/echarts/ddata/data-1491890291849-rJ2uee5ag.jpg'
                    },
                    {
                        type: 'overlay',
                        texture: '../assets/echarts/ddata/data-1491890092270-BJEhJg96l.png',
                        shading: 'lambert',
                        distance: 5
                    }
                ]
            },
            series: []
        };
    };
    Viz2Component.prototype.ngOnDestroy = function () { };
    Viz2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz2',
            // templateUrl: './viz2.component.html',
            // styleUrls: ['./viz2.component.css'],
            styles: [''],
            template: "<div class=\"\">\n<section id=\"Data3D\" class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Data 3D</h1>\n  <p class=\"lead text-muted\">Built on Echarts-GL example charts from echarts.baidu.com</p>\n  </div>\n</section>\n<section class=\"viz-data m-0 jumbotron text-center text-white\">\n<iframe class=\"\" src=\"../assets/echarts/dev/globe-flights-real.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</section>\n<section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n</section>\n  "
        })
    ], Viz2Component);
    return Viz2Component;
}());



/***/ }),

/***/ "../../../../../src/app/viz3/viz3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viz3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Viz3Component = (function () {
    function Viz3Component() {
        this.option = {};
    }
    Viz3Component.prototype.ngAfterViewInit = function () {
    };
    Viz3Component.prototype.ngOnDestroy = function () {
    };
    Viz3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz3',
            // templateUrl: './viz3.component.html',
            // styleUrls: ['./viz3.component.css'],
            styles: [''],
            template: "<div class=\"\">\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Data 3D</h1>\n  <p class=\"lead text-muted\">Built on Echarts-GL example charts from echarts.baidu.com</p>\n  </div>\n</section>\n<section class=\"viz-data m-0 jumbotron text-center text-white\">\n<iframe src=\"../assets/echarts/dev/mapbox-taxi.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n</section>\n<section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n</section>\n  ",
        })
    ], Viz3Component);
    return Viz3Component;
}());



/***/ }),

/***/ "../../../../../src/app/viz4/viz4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viz4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import * as $ from 'jquery';
//import '../../assets/echarts/map/js/world.js';
var Viz4Component = (function () {
    function Viz4Component() {
        this.option = {};
        this.data = {};
    }
    Viz4Component.prototype.ngAfterViewInit = function () {
    };
    Viz4Component.prototype.ngOnDestroy = function () {
    };
    Viz4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viz4',
            // templateUrl: './viz2.component.html',
            // styleUrls: ['./viz2.component.css'],
            styles: [''],
            template: "\n  <section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Data 3D</h1>\n  <p class=\"lead text-muted\">Built on Echarts-GL example charts from echarts.baidu.com</p>\n  </div>\n</section>\n<section class=\"viz-data m-0 jumbotron text-center text-white\">\n\n<iframe src=\"../assets/echarts/dev/0-globe-real.html\" frameborder=\"0\" style=\"overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;\" height=\"100%\" width=\"100%\"></iframe>\n\n</section>\n<section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n</section>\n  ",
        })
    ], Viz4Component);
    return Viz4Component;
}());



/***/ }),

/***/ "../../../../../src/app/vr/vr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a-scene {\r\n  width:  100%;\r\n  height: 600px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vr/vr.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"VR\" class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\">VR</h1>\n    <p class=\"lead text-muted\">Built on AFRAME (VR/AR/ThreeJS/WebGL) example project from aframe.io</p>\n  </div>\n</section>\n\n  <a-scene embedded>\n    <a-box position=\"-1 0.5 -3\" rotation=\"0 45 0\" color=\"#4CC3D9\" shadow></a-box>\n    <a-sphere position=\"0 1.25 -5\" radius=\"1.25\" color=\"#EF2D5E\" shadow></a-sphere>\n    <a-cylinder position=\"1 0.75 -3\" radius=\"0.5\" height=\"1.5\" color=\"#FFC65D\" shadow></a-cylinder>\n    <a-plane position=\"0 0 -4\" rotation=\"-90 0 0\" width=\"4\" height=\"4\" color=\"#7BC8A4\" shadow></a-plane>\n    <a-sky color=\"#ECECEC\"></a-sky>\n  </a-scene>\n"

/***/ }),

/***/ "../../../../../src/app/vr/vr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VrComponent = (function () {
    function VrComponent() {
    }
    VrComponent.prototype.ngOnInit = function () {
    };
    VrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vr',
            template: __webpack_require__("../../../../../src/app/vr/vr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vr/vr.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], VrComponent);
    return VrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherComponent = (function () {
    function WeatherComponent() {
        this.lat = -122.478255;
        this.lng = 37.819929;
    }
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            styles: ["\n    agm-map {\n      height: 400px;\n    }\n  "],
            template: "\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\"></agm-map>\n  "
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weatherdash/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.dailyForecast = function () {
        // return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
        return this._http.get("http://api.openweathermap.org/data/2.5/forecast?q=Dublin,ie&units=metric&appid=85ab77f5c363d067d38e72532a8ef9f8")
            .map(function (result) { return result; });
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "../../../../../src/app/weatherdash/weatherdash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weatherdash/weatherdash.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"m-0 jumbotron text-center bg-dark text-white\">\n  <div class=\"container\">\n  <h1 class=\"jumbotron-heading h13d\">Weather - Live</h1>\n  <p class=\"lead text-muted\">Forecast code from http tutorial on coursetro.com</p>\n\n  </div>\n  </section>\n  <section class=\"viz-map m-0 p-0 jumbotron text-center text-white\">\n\n    <div *ngIf=\"chart\">\n      <canvas id=\"canvas\">{{ chart }}</canvas>\n    </div>\n\n  </section>\n  <section class=\"m-0 jumbotron text-center bg-dark  text-white\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading h13d\"></h1>\n  </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/weatherdash/weatherdash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherdashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weatherdash/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/*
**********************************************************
* Code from http tutorial:                               *
* https://coursetro.com/posts/code/126/Let%27s-build-an-Angular-5-Chart.js-App---Tutorial
*                                                        *
**********************************************************
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherdashComponent = (function () {
    function WeatherdashComponent(_weather) {
        this._weather = _weather;
        this.chart = []; //  This will hold our chart info
    }
    WeatherdashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weather.dailyForecast().subscribe(function (res) {
            // console.log(res)
            /////////////
            var temp_max = res["list"].map(function (res) { return res.main.temp_max; });
            var temp_min = res["list"].map(function (res) { return res.main.temp_min; });
            var alldates = res["list"].map(function (res) { return res.dt; });
            var weatherDates = [];
            alldates.forEach(function (res) {
                var jsdate = new Date(res * 1000);
                weatherDates.push(jsdate.toLocaleTimeString("en", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }));
            });
            _this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]("canvas", {
                type: "line",
                data: {
                    labels: weatherDates,
                    datasets: [
                        {
                            data: temp_max,
                            borderColor: "#3cba9f",
                            fill: false
                        },
                        {
                            data: temp_min,
                            borderColor: "#ffcc00",
                            fill: false
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true
                            }
                        ],
                        yAxes: [
                            {
                                display: true
                            }
                        ]
                    }
                }
            });
        });
    };
    WeatherdashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-weatherdash",
            template: __webpack_require__("../../../../../src/app/weatherdash/weatherdash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weatherdash/weatherdash.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */]])
    ], WeatherdashComponent);
    return WeatherdashComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/dublin/dublin.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dublin.95cc0ac7046ae3d5f2d9.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aframe_fireball_component__ = __webpack_require__("../../../../aframe-fireball-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aframe_fireball_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aframe_fireball_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aframe_starnest_component__ = __webpack_require__("../../../../aframe-starnest-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aframe_starnest_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aframe_starnest_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aframe_animation_component__ = __webpack_require__("../../../../aframe-animation-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aframe_animation_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aframe_animation_component__);







if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map