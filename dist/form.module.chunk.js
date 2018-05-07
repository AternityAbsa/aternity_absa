webpackJsonp(["form.module"],{

/***/ "./src/app/layout/form/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("./src/app/layout/form/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */]
    }
];
var FormRoutingModule = /** @class */ (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Imsp Activity Charts'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>Text Input</label>\n                    <input class=\"form-control\">\n                    <p class=\"help-block\">Example block-level help text here.</p>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text Input with Placeholder</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\">\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Static Control</label>\n                    <p class=\"form-control-static\">email@example.com</p>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text area</label>\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Checkboxes</label>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 1\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 2\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 3\n                        </label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Inline Checkboxes</label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">1\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">2\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">3\n                    </label>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Radio Buttons</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n                        </label>\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Inline Radio Buttons</label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n                    </label>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Selects</label>\n                    <select class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Multiple Selects</label>\n                    <select multiple=\"\" class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </fieldset>\n\n                <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n            </form>\n\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Disabled Form States</h4>\n\n            <form role=\"form\">\n\n                <fieldset disabled=\"\">\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled input</label>\n                        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled select menu</label>\n                        <select id=\"disabledSelect\" class=\"form-control\">\n                            <option>Disabled select</option>\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\"> Disabled Checkbox\n                        </label>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n                </fieldset>\n\n            </form>\n            <br>\n\n            <h4>Form Validation</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\n                </div>\n\n            </form>\n\n            <h4>Input Groups</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n                    </div>\n                    <!-- <span class=\"input-group-addon\">@</span> -->\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-eur\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n\n            </form>\n\n            <p>For complete documentation, please visit <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n        </div>\n    </div>\n    <!-- /.row -->\n</div>\n"

/***/ }),

/***/ "./src/app/layout/form/form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            /* { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Client Inquiry' },
             { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cif Search' },
             { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
             { data: [38, 48, 40, 19, 86, 27, 90], label: 'Fbss Launch' } **/
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Client Inquiry' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Cif Search' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
            { data: [38, 48, 40, 19, 86, 27, 90], label: 'Fbss Launch' }
        ];
        // Doughnut
        this.doughnutChartLabels = [
            'Fbss Client Inquiry',
            'Cif Search',
            'Fbss Login',
            'Fbss Launch'
        ];
        this.doughnutChartData = [350, 450, 100, 90];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = [
            'Inactivity',
            'Cif Search',
            'Fbss Login',
            'Fbss Launch',
            'Outlook',
            'Fbss Client Inquiry',
            'Acrobat'
        ];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = [
            'Fbss Client Inquiry',
            'Cif Search',
            'Fbss Login',
            'Fbss Launch'
        ];
        this.pieChartData = [300, 500, 100, 250];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = [
            'AF CAF Gauteng East Sales Support [Consumer Banking]',
            'BB Limpopo Premium LP [Distribution and Coverage]',
            'Delivery Chanel Services',
            'Group Administration',
            'Group Credit'
        ];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fbss Launch' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Fbss Login' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Fbss Client Inquiry' },
            { data: [70, 65, 77, 15, 95, 59, 80], label: 'Cif Search' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(80,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                // grey
                backgroundColor: 'rgba(100,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    // events
    FormComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    FormComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    FormComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/layout/form/form.component.html"),
            styles: [__webpack_require__("./src/app/layout/form/form.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_routing_module__ = __webpack_require__("./src/app/layout/form/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_component__ = __webpack_require__("./src/app/layout/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__form_routing_module__["a" /* FormRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map