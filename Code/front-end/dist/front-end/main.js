(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Start\Documents\venator-backend\Code\front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "0/63":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_organisation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/organisation.service */ "D6b3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function AdminDashboardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "sideBarMenu.procedures"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, "sideBarMenu.users"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "Admin_Dashboard.organisationName"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 16, "Admin_Dashboard.organisationEmail"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 18, "Admin_Dashboard.organisationCountry"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 20, "Admin_Dashboard.organisationCity"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 22, "Admin_Dashboard.organisationPostCode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 24, "Admin_Dashboard.organisationStreet"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 26, "Admin_Dashboard.organisationHouseNr"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 28, "Data_Table.actions"), " ");
} }
function AdminDashboardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const organisation_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showProcedures(organisation_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const organisation_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showUsers(organisation_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminDashboardComponent_ng_template_3_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const organisation_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editOrg(organisation_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organisation_r2 = ctx.$implicit;
    const index_r4 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pReorderableRow", index_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "Admin_Dashboard.show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "Admin_Dashboard.show"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.postCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](organisation_r2.houseNr);
} }
class AdminDashboardComponent {
    constructor(_organisationService, _router) {
        this._organisationService = _organisationService;
        this._router = _router;
        this.organisations = [];
        this.users = [];
    }
    ngOnInit() {
        this._organisationService.get()
            .subscribe((data) => {
            this.organisations = data;
        }, (error) => console.log(error));
    }
    showProcedures(id) {
        // console.log(id)
        localStorage.setItem('organisationId', id);
        this._router.navigate(['/shared/user/procedures']);
    }
    showUsers(id) {
        // console.log(id)
        localStorage.setItem('organisationId', id);
        this._router.navigate(['/shared/user/users']);
    }
    editOrg(id) {
        this._router.navigate(['/admin/organisation/edit/' + id]);
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_organisation_service__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 4, vars: 2, consts: [[1, "p-mt-2"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["pResizableColumn", ""], [1, "headerColor"], [3, "pReorderableRow"], [2, "width", "6rem"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "click"], ["pResizableColumn", "", 1, "ui-resizable-column"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "pTooltip", "Edit organisation", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-warning", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminDashboardComponent_ng_template_2_Template, 41, 30, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminDashboardComponent_ng_template_3_Template, 23, 14, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.organisations)("resizableColumns", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["ReorderableRow"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["Tooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "0MCZ":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/layout.component.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "8B9z");





function LayoutComponent_app_nav_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
} }
class LayoutComponent {
    constructor(_route, _translateService) {
        this._route = _route;
        this._translateService = _translateService;
        this.username = localStorage.getItem('username');
        this.role = localStorage.getItem('role');
    }
    ngOnInit() {
        this._translateService.setDefaultLang('de');
        this._route.fragment.subscribe(currentRoute => {
            this.role = localStorage.getItem('role');
            this.username = localStorage.getItem('username');
        });
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 1, consts: [[1, "p-grid"], [1, "p-mb-6", "p-col-12"], [4, "ngIf"], [1, "p-mt-6", "p-col-12"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutComponent_app_nav_bar_2_Template, 1, 0, "app-nav-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "2eAT":
/*!**********************************************!*\
  !*** ./src/app/shared/model/organisation.ts ***!
  \**********************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
class Organisation {
    constructor() {
        this.name = '';
        this.email = '';
        this.street = '';
        this.houseNr = null;
        this.city = '';
        this.postCode = null;
        this.country = '';
    }
    // constructor(name: string, logo: File ,email: string, street: string , houseNr: number , city: string , country: string ) {
    //     this.name = name;
    //     this.logo = logo;
    //     this.email = email;
    //     this.street = street;
    //     this.houseNr = houseNr;
    //     this.city = city;
    //     this.country = country;
    // }
    static setOrganisation(organisation) {
        let result = organisation;
        return result;
    }
}


/***/ }),

/***/ "33Nx":
/*!******************************************************************************!*\
  !*** ./src/app/shared/analysis/amount-analysis/amount-analysis.component.ts ***!
  \******************************************************************************/
/*! exports provided: AmountAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountAnalysisComponent", function() { return AmountAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AmountAnalysisComponent_ng_template_6_colgroup_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AmountAnalysisComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AmountAnalysisComponent_ng_template_6_colgroup_0_Template, 2, 0, "colgroup", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cols);
} }
function AmountAnalysisComponent_ng_template_7_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r10.header, " ");
} }
function AmountAnalysisComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AmountAnalysisComponent_ng_template_7_th_1_Template, 3, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cols);
} }
function AmountAnalysisComponent_ng_template_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    const rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r13[col_r15.field], " ");
} }
function AmountAnalysisComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AmountAnalysisComponent_ng_template_8_td_1_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r11 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pReorderableRow", index_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cols);
} }
function AmountAnalysisComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No postings found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AmountAnalysisComponent {
    constructor() {
        this.cols = [
            { header: "Creditorname", field: "" },
            { header: "Documentnumber", field: "" },
            { header: "bookingsdate", field: "" },
            { header: "Amount", field: "" },
            { header: "Reference", field: "" },
            { header: "Headertext", field: "" },
            { header: "text", field: "" },
            { header: "Reason", field: "" },
            { header: "Details", field: "" },
        ];
        this.postings = [];
        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
    ngOnInit() {
    }
}
AmountAnalysisComponent.ɵfac = function AmountAnalysisComponent_Factory(t) { return new (t || AmountAnalysisComponent)(); };
AmountAnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AmountAnalysisComponent, selectors: [["app-amount-analysis"]], decls: 10, vars: 6, consts: [[1, "p-mt-6"], ["type", "pie", 3, "data"], ["styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "columns", "rows", "resizableColumns", "reorderableColumns"], ["dt", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [4, "ngFor", "ngForOf"], ["pResizableColumn", ""], ["pReorderableColumn", "", "pResizableColumn", "", "pSortableColumn", "col.header", 4, "ngFor", "ngForOf"], ["pReorderableColumn", "", "pResizableColumn", "", "pSortableColumn", "col.header"], [1, "p-text-center"], [3, "pReorderableRow"], ["pReorderableRowHandle", "", "pResizableColumn", "", "class", "ui-resizable-column", "aria-placeholder", "", 4, "ngFor", "ngForOf"], ["pReorderableRowHandle", "", "pResizableColumn", "", "aria-placeholder", "", 1, "ui-resizable-column"], ["colspan", "7"]], template: function AmountAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AmountAnalysisComponent_ng_template_6_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AmountAnalysisComponent_ng_template_7_Template, 2, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AmountAnalysisComponent_ng_template_8_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AmountAnalysisComponent_ng_template_9_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.basicData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.postings)("columns", ctx.cols)("rows", 10)("resizableColumns", true)("reorderableColumns", true);
    } }, directives: [primeng_chart__WEBPACK_IMPORTED_MODULE_1__["UIChart"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["ReorderableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["ReorderableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["ReorderableRowHandle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbW91bnQtYW5hbHlzaXMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "3KVW":
/*!*********************************************!*\
  !*** ./src/app/shared/model/file-import.ts ***!
  \*********************************************/
/*! exports provided: FileToImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileToImport", function() { return FileToImport; });
class FileToImport {
    constructor() {
        this.template = {};
        this.defaultTemplate = {};
        this.fileHeader = {};
    }
}


/***/ }),

/***/ "4TYO":
/*!*************************************************************************!*\
  !*** ./src/app/shared/user-registration/user-registration.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _model_titles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/titles */ "JC4I");
/* harmony import */ var _model_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/users */ "VV3B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "HabH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











function UserRegistrationComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.roleErrorMsg"), "");
} }
function UserRegistrationComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.titleErrorMsg"), "");
} }
function UserRegistrationComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.firstname"));
} }
function UserRegistrationComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.lastnameErrorMsg"));
} }
function UserRegistrationComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.emailErrorMsg"), "");
} }
function UserRegistrationComponent_small_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.usernameErrorMsg"));
} }
function UserRegistrationComponent_small_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.mobileNrErrorMsg"));
} }
function UserRegistrationComponent_small_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.streetErrorMsg"));
} }
function UserRegistrationComponent_small_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.houseNrErrorMsg"));
} }
function UserRegistrationComponent_small_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.cityErrorMsg"), " ");
} }
function UserRegistrationComponent_small_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.postcodeErrorMsg"));
} }
function UserRegistrationComponent_small_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.countryErrorMsg"));
} }
class UserRegistrationComponent {
    constructor(_router, _messageService, _userService, _translateService) {
        this._router = _router;
        this._messageService = _messageService;
        this._userService = _userService;
        this._translateService = _translateService;
        this.titles = _model_titles__WEBPACK_IMPORTED_MODULE_0__["Titles"].getTitles();
        this.roles = [{ name: 'Manager', value: 2 }, { name: 'User', value: 3 }];
    }
    ngOnInit() {
        this.userModel = new _model_users__WEBPACK_IMPORTED_MODULE_1__["Users"]();
        this.userModel.OrganisationId = +localStorage.getItem('organisationId');
    }
    submitHandler() {
        this._userService.addUser(this.userModel)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this._messageService.add({
                severity: 'success',
                summary: 'Registered successfully!',
                detail: 'Registered successfully'
            });
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/users']);
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["app-user-registration"]], decls: 121, vars: 79, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], [1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["name", "role", "optionValue", "value", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["role", "ngModel"], [1, "ng-tns-c42-167", "p-dropdown", "p-component"], [1, "ng-tns-c42-167", "p-dropdown-label", "p-inputtext", "p-placeholder", "p-dropdown-label-empty", "ng-star-inserted"], ["class", "spanCss", 4, "ngIf"], ["name", "title", "optionValue", "name", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["title1", "ngModel"], ["for", "firstname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "firstname", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "lastname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "lastname", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["for", "email", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "email", "type", "text", "pinputtext", "", "pattern", "^(\\D)+(\\w)*((\\.(\\w)+)?)+@(\\D)+(\\w)*((\\.(\\D)+(\\w)*)+)?(\\.)[a-z]{2,}$", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "username", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "username", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "mobileNumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "mobileNumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["for", "street", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "street", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["for", "housenumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "housenumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["housenumber", "ngModel"], ["for", "city", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "city", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "postCode", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "postCode", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["postCode", "ngModel"], ["for", "country", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "country", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], [1, "spanCss"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserRegistrationComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-dropdown", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.userModel.RoleId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UserRegistrationComponent_small_18_Template, 3, 3, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p-dropdown", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_p_dropdown_ngModelChange_24_listener($event) { return ctx.userModel.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, UserRegistrationComponent_small_29_Template, 3, 3, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_35_listener($event) { return ctx.userModel.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, UserRegistrationComponent_small_37_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_43_listener($event) { return ctx.userModel.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, UserRegistrationComponent_small_45_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_51_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, UserRegistrationComponent_small_53_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_59_listener($event) { return ctx.userModel.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, UserRegistrationComponent_small_61_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_67_listener($event) { return ctx.userModel.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, UserRegistrationComponent_small_69_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_75_listener($event) { return ctx.userModel.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, UserRegistrationComponent_small_77_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_83_listener($event) { return ctx.userModel.housenumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, UserRegistrationComponent_small_85_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_91_listener($event) { return ctx.userModel.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, UserRegistrationComponent_small_93_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_99_listener($event) { return ctx.userModel.postCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, UserRegistrationComponent_small_101_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserRegistrationComponent_Template_input_ngModelChange_107_listener($event) { return ctx.userModel.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, UserRegistrationComponent_small_109_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_button_click_112_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](60);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](76);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](84);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](92);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](100);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 45, "User_Registration.header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 47, "User_Registration.role"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 49, "User_Registration.rolePlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.roles)("showClear", true)("ngModel", ctx.userModel.RoleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 51, "User_Registration.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 53, "User_Registration.titlePlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.titles)("showClear", true)("ngModel", ctx.userModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 55, "User_Registration.firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 57, "User_Registration.lastname"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 59, "User_Registration.email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 61, "User_Registration.username"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 63, "User_Registration.mobileNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](73, 65, "User_Registration.street"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r14.invalid && _r14.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](81, 67, "User_Registration.houseNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.housenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r16.invalid && _r16.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](89, 69, "User_Registration.city"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r18.invalid && _r18.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](97, 71, "User_Registration.postcode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.postCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r20.invalid && _r20.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](105, 73, "User_Registration.country"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r22.invalid && _r22.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](115, 75, "User_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](120, 77, "User_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n\n.spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ1EseUNBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQyw4QkFBQTtFQUNELDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoidXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uQ3NzXHJcbiAgICB3aWR0aDogNDAlXHJcbiAgICBtYXJnaW4tbGVmdDogMzAlXHJcblxyXG4uc3BhbkNzcyBcclxuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZjBmNCAgXHJcbiAgICAgICAgY29sb3I6ICNmNzUxMjMgICBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5MAU":
/*!*******************************************************************!*\
  !*** ./src/app/shared/reset-password/reset-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResetPasswordComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Password_Reset.passwordErrorMsg"));
} }
function ResetPasswordComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Password_Reset.passwordConfirmErrorMsg"));
} }
class ResetPasswordComponent {
    constructor(_messageService, _authService, _router, _translateService) {
        this._messageService = _messageService;
        this._authService = _authService;
        this._router = _router;
        this._translateService = _translateService;
        this.passwordObj = {
            selectedPassword: "",
            confirmedPassword: "",
        };
    }
    ngOnInit() {
    }
    submitHandle() {
        // console.log(this.passwordObj)
        if (this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword) {
            let password = this.passwordObj.selectedPassword;
            this._authService
                .resetPassword(password)
                .subscribe(res => {
                if (res.message === "successfully") {
                    this._router.navigate(['/']);
                }
                else {
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR!',
                        detail: "password could not be reset"
                    });
                }
            }, err => {
                this._translateService.get("ErrorHandler").subscribe(elem => {
                    let errorMsg = "";
                    if (err.status === 400) {
                        errorMsg = elem.badRequest_400;
                    }
                    else if (err.status === 401) {
                        errorMsg = elem.unauthorized_401;
                    }
                    else if (err.status === 403) {
                        errorMsg = elem.forbidden_403;
                    }
                    else if (err.status === 404) {
                        errorMsg = elem.NotFound_404;
                    }
                    else if (err.status === 500) {
                        errorMsg = elem.internalServerError_500;
                    }
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR',
                        life: 10000,
                        detail: errorMsg
                    });
                });
            });
        }
        else {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR!',
                    detail: elem.passwordsMatch
                });
            });
        }
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/procedures']);
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 35, vars: 19, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], ["for", "selectedPassword", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["required", "", "name", "selectedPassword", "type", "password", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["selectedPassword", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "confirmedPassword", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "confirmedPassword", "type", "password", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["confirmedPassword", "ngModel"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], [1, "spanCss"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_13_listener($event) { return ctx.passwordObj.selectedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResetPasswordComponent_small_15_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_21_listener($event) { return ctx.passwordObj.confirmedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ResetPasswordComponent_small_23_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_26_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "Password_Reset.header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Password_Reset.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordObj.selectedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "Password_Reset.passwordConfirm"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordObj.confirmedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 15, "Organisation_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 17, "Organisation_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".cardBody[_ngcontent-%COMP%] {\n  background-image: url('loginBackground1.jpg');\n  background-size: cover;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  border: 0 solid #f75123;\n  text-align: center;\n  margin-top: 9%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 302px;\n  padding: 25px;\n}\n\n.submitButtonCss[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #ffffff;\n}\n\n.inputCss[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancelButtonCss[_ngcontent-%COMP%] {\n  background-color: #58585a !important;\n  width: 100%;\n  color: #ffffff;\n}\n\n.spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhBO0VBQ1EseUNBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQyw4QkFBQTtFQUNELDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBS1IiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZEJvZHlcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ2luQmFja2dyb3VuZDEuanBnJylcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGxlZnQ6IDBcclxuICAgIHJpZ2h0OiAwXHJcbiAgICBib3R0b206IDBcclxuXHJcbi5jb250ZW50XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIGJvcmRlcjogMCBzb2xpZCAjZjc1MTIzXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIG1hcmdpbi10b3A6IDklXHJcbiAgICAvLyAgaGVpZ2h0OiAxMDAlXHJcbiAgICBsZWZ0OiAwXHJcbiAgICByaWdodDogMFxyXG4gICAgYm90dG9tOiAwXHJcbiAgICBtaW4taGVpZ2h0OiAzMDJweFxyXG4gICAgcGFkZGluZzogMjVweFxyXG5cclxuLnN1Ym1pdEJ1dHRvbkNzc1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcblxyXG4uaW5wdXRDc3NcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG4uY2FuY2VsQnV0dG9uQ3NzXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1ODVhICFpbXBvcnRhbnRcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG4uc3BhbkNzcyBcclxuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZjBmNCAgXHJcbiAgICAgICAgY29sb3I6ICNmNzUxMjMgICBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4Il19 */"] });


/***/ }),

/***/ "8B9z":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");









function NavBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function NavBarComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", lang_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, lang_r4), " ");
} }
const _c0 = function () { return { "width": "300px", "border": "none" }; };
class NavBarComponent {
    constructor(_translateService, _router) {
        this._translateService = _translateService;
        this._router = _router;
        this.sideBarShow = false;
        this.menuItems = [];
        this.userPages = [];
        this.sidebarItems = [];
        this.username = localStorage.getItem('username');
        this.role = localStorage.getItem('role');
        this.browserLang = 'de';
        this._translateService.addLangs(['de', 'en']);
        this._translateService.setDefaultLang('de');
        this.browserLang = this._translateService.getBrowserLang();
        this._translateService.use(this.browserLang.match(/de|en/) ? this.browserLang : 'de');
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.role = localStorage.getItem('role');
        this._translateService.onLangChange.subscribe((event) => {
            this._translateService.use(event.lang);
            this.getSideBarItems();
        });
        this.getSideBarItems();
    }
    getSideBarItems() {
        this._translateService.get('sideBarMenu').subscribe(elem => {
            this.menuItems = [
                {
                    label: '<button pButton type="button"  icon="pi pi-check"> </button>',
                    icon: 'pi pi-bars',
                    escape: false,
                    command: () => {
                        this.sideBarShow = true;
                    }
                }
            ];
            if (this.role === "Admin") {
                this.sidebarItems = [
                    {
                        label: 'Adminstrator',
                        items: [
                            { label: 'Import', icon: 'pi pi-file', routerLink: ['/admin/import'], command: () => { this.sideBarShow = false; } },
                            { label: elem.addUser, icon: 'pi pi-user-plus', routerLink: ['/admin/admin/add'], command: () => { this.sideBarShow = false; } },
                            { label: elem.addOrganisation, icon: 'pi pi-plus-circle', routerLink: ['admin/organisation/add'], command: () => { this.sideBarShow = false; } },
                            { label: elem.resetPassword, icon: 'pi pi-lock', routerLink: ['/resetPassword'], command: () => { this.sideBarShow = false; } },
                        ]
                    },
                    {
                        label: 'Dashboard',
                        items: [
                            { label: 'Organisations', icon: 'pi  pi-home', routerLink: ['/admin/dashboard'], command: () => { this.sideBarShow = false; } },
                        ]
                    },
                    /*             {
                                    label: elem.data,
                                    items: [
                                        {label: elem.table, icon: 'pi pi-table', routerLink: ['/shared/data'] },
                                    ]
                                }, */
                    {
                        label: elem.analysis,
                        items: [
                            { label: elem.amountAnalyisis, icon: 'pi pi-euro', routerLink: ['/analysis/amount'], command: () => { this.sideBarShow = false; } },
                            { label: elem.textAnalysis, icon: 'pi pi-inbox', command: () => { this.sideBarShow = false; } },
                            { label: elem.paymentAnalyse, icon: 'pi pi-credit-card', command: () => { this.sideBarShow = false; } },
                            { label: elem.creditorsAnalyse, icon: 'pi pi-chart-bar', command: () => { this.sideBarShow = false; } },
                        ]
                    }
                ];
                this.userPages = [
                    { label: elem.setting, icon: 'pi pi-globe' },
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }
                ];
            }
            else if (this.role === "Manager") {
                this.sidebarItems = [
                    {
                        label: 'Dashboard',
                        items: [
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/shared/user/procedures'], command: () => { this.sideBarShow = false; } },
                            { label: elem.users, icon: 'pi pi-users', routerLink: ['/shared/user/users'], command: () => { this.sideBarShow = false; } }
                        ]
                    },
                ];
                this.userPages = [
                    { label: elem.setting, icon: 'pi pi-globe' },
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }
                ];
            }
            else if (this.role === "User") {
                this.sidebarItems = [
                    {
                        label: 'Dashboard',
                        items: [
                            { label: elem.procedures, icon: 'pi  pi-home', routerLink: ['/shared/user/procedures'], command: () => { this.sideBarShow = false; } },
                        ]
                    },
                ];
                this.userPages = [
                    {
                        label: elem.logout, icon: 'pi pi-fw pi-power-off', command: () => {
                            this.logout();
                        }
                    }
                ];
            }
        });
    }
    logout() {
        localStorage.clear();
        this._router.navigate(['/']);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 12, consts: [[3, "model"], ["pTemplate", "start"], [1, "p-formgroup-inline"], [1, "p-field"], [1, "layout-topbar-action", "p-d-flex", "p-dir-row", "p-jc-center", "p-ai-center", "p-px-2", "rounded-circle", "ng-tns-c186-0", "p-ripple", 2, "height", "60px", "background-color", "#58585a", "color", "#ffffff", "border", "none", 3, "ngModel", "change", "ngModelChange"], ["langSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], ["pripple", "", 1, "layout-topbar-action", "p-d-flex", "p-dir-row", "p-jc-center", "p-ai-center", "p-px-2", "rounded-circle", "ng-tns-c186-0", "p-ripple"], ["src", "assets/profile.png", 1, "p-mr-2", 2, "width", "60px", "height", "60px", "background-color", "none", "color", "none", 3, "click"], [1, "p-link"], [3, "popup", "model"], ["menu", ""], [1, "sideBarWidth", 3, "visible", "showCloseIcon", "visibleChange"], [1, "p-text-center", 2, "font-weight", "lighter"], ["src", "assets/logo.jpg", "height", "60", "width", "75", 1, "p-mr-6", 2, "border", "hidden"], [3, "value"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavBarComponent_ng_template_3_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NavBarComponent_Template_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx._translateService.use(_r1.value); })("ngModelChange", function NavBarComponent_Template_select_ngModelChange_6_listener($event) { return ctx.browserLang = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_option_8_Template, 3, 4, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_img_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r3.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-menu", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p-sidebar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function NavBarComponent_Template_p_sidebar_visibleChange_16_listener($event) { return ctx.sideBarShow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.browserLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._translateService.getLangs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.userPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.sideBarShow)("showCloseIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.sidebarItems);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_3__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_menu__WEBPACK_IMPORTED_MODULE_7__["Menu"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_8__["Sidebar"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".navbarMargin[_ngcontent-%COMP%] {\n  float: right;\n  width: 100%;\n}\n\n.sideBarWidth[_ngcontent-%COMP%] {\n  width: 15%;\n  border: none;\n}\n\n.logoCss[_ngcontent-%COMP%] {\n  width: 15%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.buttonCss[_ngcontent-%COMP%] {\n  margin-left: 30%;\n}\n\n.textCss[_ngcontent-%COMP%] {\n  text-align: \"center\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxvQkFBQTtBQU1KIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyTWFyZ2luXHJcbiAgICBmbG9hdDogcmlnaHRcclxuICAgIHdpZHRoOiAxMDAlXHJcblxyXG4uc2lkZUJhcldpZHRoXHJcbiAgICB3aWR0aDogMTUlXHJcbiAgICBib3JkZXI6IG5vbmVcclxuLmxvZ29Dc3NcclxuICAgIHdpZHRoOiAxNSVcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgbGVmdDogMFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIHRvcDogMFxyXG5cclxuLmJ1dHRvbkNzc1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJVxyXG5cclxuLnRleHRDc3NcclxuICAgIHRleHQtYWxpZ246ICdjZW50ZXInXHJcbiJdfQ== */"] });


/***/ }),

/***/ "8Bbf":
/*!********************************************************!*\
  !*** ./src/app/shared/service/posting-data.service.ts ***!
  \********************************************************/
/*! exports provided: PostingDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingDataService", function() { return PostingDataService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostingDataService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'shared';
    }
    getDataTable(companyCode, offset, limit) {
        return this._http.get(this._thisURL + '/getPostingData/' + companyCode + '/' + offset + '/' + limit);
    }
    getLastDataTable(companyCode, limit) {
        return this._http.get(this._thisURL + '/getLastPostingData/' + companyCode + '/' + limit);
    }
    getLastDataPrevious(companyCode, strtId, endId, limit) {
        return this._http.get(this._thisURL + '/getLastDataPrevious/' + companyCode + '/' + strtId + '/' + endId + '/' + limit);
    }
    getLastDataNext(companyCode, strtId, endId, limit) {
        return this._http.get(this._thisURL + '/getLastDataNext/' + companyCode + '/' + strtId + '/' + endId + '/' + limit);
    }
}
PostingDataService.ɵfac = function PostingDataService_Factory(t) { return new (t || PostingDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostingDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostingDataService, factory: PostingDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bx2m":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service/auth.service */ "Da3E");


class TokenInterceptor {
    constructor(_authSrvc) {
        this._authSrvc = _authSrvc;
    }
    intercept(request, next) {
        // return next.handle(request);
        const token = this._authSrvc.getToken();
        const tokenizedReq = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "Cys9":
/*!*****************************************!*\
  !*** ./src/app/shared/model/choices.ts ***!
  \*****************************************/
/*! exports provided: Choices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choices", function() { return Choices; });
class Choices {
    constructor(name, value) {
        this.name = 'Select Template';
        this.value = 1;
        this.name = name;
        this.value = value;
    }
    static getTemplates() {
        let result = [];
        result.push(new Choices("SAP W-mobel", 1));
        result.push(new Choices("SAP Cinram", 2));
        result.push(new Choices("Other", 3));
        return result;
    }
    static getFileType() {
        let result = [];
        result.push(new Choices("Excel", 1));
        result.push(new Choices("Csv", 2));
        return result;
    }
    static getFileClass() {
        let result = [];
        result.push(new Choices("Accounts", 1));
        result.push(new Choices("Posting", 2));
        result.push(new Choices("Helper", 3));
        return result;
    }
    static getLocalization() {
        let result = [];
        result.push(new Choices("en_US", 1));
        result.push(new Choices("de_DE", 2));
        return result;
    }
    static getAccountTypes() {
        let result = [];
        result.push(new Choices("Kreditor", 1));
        result.push(new Choices("Debtor", 2));
        result.push(new Choices("GLA Account", 3));
        result.push(new Choices("Other", 4));
        return result;
    }
    static getDataSources() {
        let result = [];
        result.push(new Choices("SAP", 1));
        result.push(new Choices("Datev", 2));
        result.push(new Choices("Lexware", 3));
        return result;
    }
}


/***/ }),

/***/ "D6b3":
/*!*******************************************************!*\
  !*** ./src/app/admin/service/organisation.service.ts ***!
  \*******************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OrganisationService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'admin/organisation';
    }
    get() {
        return this._http.get(this._thisURL);
    }
    insert(p) {
        return this._http.post(this._thisURL, p);
    }
    getOne(id) {
        return this._http.get(this._thisURL + '/' + id);
    }
    update(p, id) {
        return this._http.put(this._thisURL + '/' + id, p);
    }
    delete(id) {
        return this._http.delete(this._thisURL + '/' + id);
    }
    getProcedures(id) {
        return this._http.get(this._thisURL + '/' + id + '/procedures');
    }
}
OrganisationService.ɵfac = function OrganisationService_Factory(t) { return new (t || OrganisationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrganisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganisationService, factory: OrganisationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Da3E":
/*!************************************************!*\
  !*** ./src/app/shared/service/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'shared';
    }
    login(data) {
        return this._http.post(this._thisURL + '/login', data);
    }
    resetPassword(data) {
        return this._http.post(this._thisURL + '/resetPassword', data);
    }
    adminRegistration(data) {
        return this._http.post(this._thisURL + '/adminRegistration', data);
    }
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getRole() {
        return localStorage.getItem('role');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H6R5":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-registration/admin-registration.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegistrationComponent", function() { return AdminRegistrationComponent; });
/* harmony import */ var _shared_model_titles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model/titles */ "JC4I");
/* harmony import */ var _shared_model_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/users */ "VV3B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _service_admin_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/admin-registration.service */ "V3WG");
/* harmony import */ var _service_organisation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/organisation.service */ "D6b3");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "arFO");












function AdminRegistrationComponent_div_8_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.organisationErrorMsg"), " ");
} }
function AdminRegistrationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-dropdown", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_div_8_Template_p_dropdown_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.userModel.OrganisationId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AdminRegistrationComponent_div_8_small_10_Template, 3, 3, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "User_Registration.organisation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "User_Registration.organisationPlaceHolder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.orgs)("showClear", true)("ngModel", ctx_r0.userModel.OrganisationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r23.invalid && _r23.touched);
} }
function AdminRegistrationComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.titleErrorMsg"), " ");
} }
function AdminRegistrationComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.firstnameErrorMsg"));
} }
function AdminRegistrationComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.lastnameErrorMsg"));
} }
function AdminRegistrationComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.emailErrorMsg"), "");
} }
function AdminRegistrationComponent_small_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.usernameErrorMsg"));
} }
function AdminRegistrationComponent_small_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.mobileNrErrorMsg"));
} }
function AdminRegistrationComponent_small_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.streetErrorMsg"));
} }
function AdminRegistrationComponent_small_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.houseNrErrorMsg"));
} }
function AdminRegistrationComponent_small_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.cityErrorMsg"));
} }
function AdminRegistrationComponent_small_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.postcodeErrorMsg"));
} }
function AdminRegistrationComponent_small_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "User_Registration.countryErrorMsg"));
} }
class AdminRegistrationComponent {
    constructor(_router, _messageService, _translateService, _adminRegistrationService, _orgService) {
        this._router = _router;
        this._messageService = _messageService;
        this._translateService = _translateService;
        this._adminRegistrationService = _adminRegistrationService;
        this._orgService = _orgService;
        this.orgs = [];
        this.titles = _shared_model_titles__WEBPACK_IMPORTED_MODULE_0__["Titles"].getTitles();
        //roles: Roles[] = Roles.getRoles();
        this.roles = [{ name: 'Admin', value: 1 }];
    }
    ngOnInit() {
        this.userModel = new _shared_model_users__WEBPACK_IMPORTED_MODULE_1__["Users"]();
        this.userModel.RoleId = 1;
        this._orgService.get()
            .subscribe((data) => {
            this.orgs = data;
        }, (error) => console.log(error));
    }
    submitHandler() {
        this._adminRegistrationService.addUser(this.userModel)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this._messageService.add({
                severity: 'success',
                summary: 'Registered successfully!',
                detail: 'Registered successfully'
            });
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    cancelHandle() {
        this._router.navigate(['/admin/dashboard/procedures']);
    }
}
AdminRegistrationComponent.ɵfac = function AdminRegistrationComponent_Factory(t) { return new (t || AdminRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_admin_registration_service__WEBPACK_IMPORTED_MODULE_6__["AdminRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_organisation_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"])); };
AdminRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminRegistrationComponent, selectors: [["app-admin-registration"]], decls: 111, vars: 70, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], ["class", "p-field p-grid", 4, "ngIf"], [1, "p-field", "p-grid"], [1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["name", "title", "optionValue", "name", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["title1", "ngModel"], [1, "ng-tns-c42-167", "p-dropdown", "p-component"], [1, "ng-tns-c42-167", "p-dropdown-label", "p-inputtext", "p-placeholder", "p-dropdown-label-empty", "ng-star-inserted"], ["class", "spanCss", 4, "ngIf"], ["for", "firstname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "firstname", "maxlength", "25", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "lastname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "lastname", "type", "text", "maxlength", "25", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["for", "email", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "email", "type", "text", "maxlength", "50", "pinputtext", "", "pattern", "^(\\D)+(\\w)*((\\.(\\w)+)?)+@(\\D)+(\\w)*((\\.(\\D)+(\\w)*)+)?(\\.)[a-z]{2,}$", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "username", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "username", "type", "text", "maxlength", "25", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "mobileNumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "mobileNumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["for", "street", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "street", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["for", "housenumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "housenumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["housenumber", "ngModel"], ["for", "city", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "city", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "postCode", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "postCode", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["postCode", "ngModel"], ["for", "country", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "country", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], ["name", "client", "optionValue", "id", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["client", "ngModel"], [1, "spanCss"]], template: function AdminRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminRegistrationComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdminRegistrationComponent_div_8_Template, 11, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-dropdown", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_p_dropdown_ngModelChange_14_listener($event) { return ctx.userModel.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdminRegistrationComponent_small_19_Template, 3, 3, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_25_listener($event) { return ctx.userModel.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AdminRegistrationComponent_small_27_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.userModel.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AdminRegistrationComponent_small_35_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_41_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AdminRegistrationComponent_small_43_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_49_listener($event) { return ctx.userModel.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, AdminRegistrationComponent_small_51_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_57_listener($event) { return ctx.userModel.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, AdminRegistrationComponent_small_59_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_65_listener($event) { return ctx.userModel.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, AdminRegistrationComponent_small_67_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_73_listener($event) { return ctx.userModel.housenumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, AdminRegistrationComponent_small_75_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_81_listener($event) { return ctx.userModel.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, AdminRegistrationComponent_small_83_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_89_listener($event) { return ctx.userModel.postCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, AdminRegistrationComponent_small_91_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminRegistrationComponent_Template_input_ngModelChange_97_listener($event) { return ctx.userModel.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, AdminRegistrationComponent_small_99_Template, 3, 3, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminRegistrationComponent_Template_button_click_102_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](50);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](74);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](82);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](90);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 40, "User_Registration.header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userModel.role === "Manager" || ctx.userModel.role === "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 42, "User_Registration.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 44, "User_Registration.titlePlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.titles)("showClear", true)("ngModel", ctx.userModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 46, "User_Registration.firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 48, "User_Registration.lastname"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 50, "User_Registration.email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 52, "User_Registration.username"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 54, "User_Registration.mobileNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r11.invalid && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 56, "User_Registration.street"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r13.invalid && _r13.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](71, 58, "User_Registration.houseNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.housenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r15.invalid && _r15.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 60, "User_Registration.city"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r17.invalid && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 62, "User_Registration.postcode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.postCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r19.invalid && _r19.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](95, 64, "User_Registration.country"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r21.invalid && _r21.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](105, 66, "User_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](110, 68, "User_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_8__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n\n.spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNRLHlDQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0MsOEJBQUE7RUFDRCwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6ImFkbWluLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Dc3NcclxuICAgIHdpZHRoOiA0MCVcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCVcclxuXHJcbi5zcGFuQ3NzIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAjZmZmMGY0ICBcclxuICAgICAgICBjb2xvcjogI2Y3NTEyMyAgIFxyXG4gICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnRcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuIl19 */"] });


/***/ }),

/***/ "HabH":
/*!************************************************!*\
  !*** ./src/app/shared/service/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'shared';
    }
    addUser(user) {
        // console.log(user)
        return this._http.post(this._thisURL + '/user/add', user);
    }
    editUser(user) {
        // console.log(user)
        return this._http.put(this._thisURL + '/user/edit', user);
    }
    getProcedures(organisationId) {
        return this._http.get(this._thisURL + '/users/' + organisationId + '/procedures');
    }
    getUsers(organisationId) {
        return this._http.get(this._thisURL + '/users/' + organisationId);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JC4I":
/*!****************************************!*\
  !*** ./src/app/shared/model/titles.ts ***!
  \****************************************/
/*! exports provided: Titles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Titles", function() { return Titles; });
class Titles {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
    static getTitles() {
        let result = [];
        result.push(new Titles("Frau"));
        result.push(new Titles("Herr"));
        return result;
    }
}


/***/ }),

/***/ "KTia":
/*!*******************************************************!*\
  !*** ./src/app/shared/notfound/notfound.component.ts ***!
  \*******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 3, vars: 3, template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Notfound.errorMsg"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "KZzQ":
/*!*******************************************************************!*\
  !*** ./src/app/shared/user-dashboard/user-dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "HabH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function UserDashboardComponent_ng_template_1_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 8);
} }
function UserDashboardComponent_ng_template_1_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDashboardComponent_ng_template_1_th_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addProcedure(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Procedure_Registration.addProedurePlaceHolder"));
} }
function UserDashboardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserDashboardComponent_ng_template_1_th_17_Template, 1, 0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserDashboardComponent_ng_template_1_th_18_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "Procedure_Registration.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "Procedure_Registration.datasource"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "Procedure_Registration.data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, "Procedure_Registration.analysis"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role !== "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role === "Admin");
} }
function UserDashboardComponent_ng_template_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function UserDashboardComponent_ng_template_2_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function UserDashboardComponent_ng_template_2_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function UserDashboardComponent_ng_template_2_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function UserDashboardComponent_ng_template_2_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDashboardComponent_ng_template_2_td_11_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const procedure_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editProcedure(procedure_r7.id, procedure_r7.name, procedure_r7.data, procedure_r7.analysis); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Procedure_Registration.editProedurePlaceHolder"));
} }
function UserDashboardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDashboardComponent_ng_template_2_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const procedure_r7 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.dataTable(procedure_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserDashboardComponent_ng_template_2_i_6_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserDashboardComponent_ng_template_2_i_7_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDashboardComponent_ng_template_2_i_9_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserDashboardComponent_ng_template_2_i_10_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserDashboardComponent_ng_template_2_td_11_Template, 3, 3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const procedure_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](procedure_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](procedure_r7.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", procedure_r7.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !procedure_r7.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", procedure_r7.analysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !procedure_r7.analysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.role !== "User");
} }
function UserDashboardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "Procedure_Registration.NoProceduresFound"));
} }
class UserDashboardComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.organisationId = localStorage.getItem('organisationId');
        this.role = localStorage.getItem('role');
        this.procedures = [];
    }
    ngOnInit() {
        this._userService
            .getProcedures(this.organisationId)
            .subscribe((data) => {
            this.procedures = data;
            // console.log(this.organisationId)
            // console.log(data)
        }, (error) => console.log(error), () => { });
    }
    dataTable(id) {
        localStorage.setItem('currentProcedureId', id);
        this._router.navigate(['/shared/data']);
    }
    editProcedure(id, name, data, analysis) {
        localStorage.setItem('currentProcedureId', id);
        localStorage.setItem('currentProcedureName', name);
        localStorage.setItem('currentProcedureData', data);
        localStorage.setItem('currentProcedureAnalysis', analysis);
        this._router.navigate(['/admin/procedure/edit']);
    }
    addProcedure() {
        this._router.navigate(['/admin/procedure/add']);
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 4, vars: 2, consts: [["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pResizableColumn", ""], [1, "headerColor"], ["style", "width: 4rem", 4, "ngIf"], ["style", "width: 4rem; border: none; background-color: #ffff; color:#58585a", 4, "ngIf"], [2, "width", "4rem"], [2, "width", "4rem", "border", "none", "background-color", "#ffff", "color", "#58585a"], ["tooltipPosition", "bottom", 1, "pi", "pi-plus-circle", 3, "pTooltip", "click"], ["pResizableColumn", "", 1, "ui-resizable-column", "pointer", 3, "click"], ["pResizableColumn", "", 1, "ui-resizable-column"], ["class", "pi pi-check checkIcon", 4, "ngIf"], ["class", "pi pi-times closeIcon", 4, "ngIf"], [1, "pi", "pi-check", "checkIcon"], [1, "pi", "pi-times", "closeIcon"], ["tooltipPosition", "bottom", 1, "pi", "pi-pencil", "headerColor", 3, "pTooltip", "click"], ["colspan", "4"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserDashboardComponent_ng_template_1_Template, 19, 14, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserDashboardComponent_ng_template_2_Template, 12, 7, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserDashboardComponent_ng_template_3_Template, 4, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.procedures)("resizableColumns", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["ResizableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["Tooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".checkIcon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #66BB6A;\n}\n\n.closeIcon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #cc0000;\n}\n\n.headerColor[_ngcontent-%COMP%] {\n  color: #e75113;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNRLGdCQUFBO0VBQ0EsY0FMQTtBQUFSOztBQU1BO0VBQ1EsZ0JBQUE7RUFDQSxjQVBBO0FBSVI7O0FBS0E7RUFDUSxjQWJFO0FBV1Y7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtBQUZKIiwiZmlsZSI6InVzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRwcmltYXJ5OiAjZTc1MTEzXHJcbiRzZWNvbmRhcnlIb3ZlcjogIzAwMDAwMFxyXG4kY2hlY2s6ICM2NkJCNkFcclxuJGNsb3NlOiAjY2MwMDAwXHJcblxyXG4uY2hlY2tJY29uXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgICAgIGNvbG9yOiAkY2hlY2tcclxuLmNsb3NlSWNvblxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxuICAgICAgICBjb2xvcjogJGNsb3NlXHJcblxyXG4uaGVhZGVyQ29sb3JcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlcclxuXHJcblxyXG4gICAgXHJcbi5wb2ludGVyXHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuXHJcbi5wb2ludGVyOmhvdmVyXHJcbiAgICBjb2xvcjogJHNlY29uZGFyeUhvdmVyICFpbXBvcnRhbnRcclxuIl19 */"] });


/***/ }),

/***/ "NHnn":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/procedure-registration/procedure-registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProcedureRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureRegistrationComponent", function() { return ProcedureRegistrationComponent; });
/* harmony import */ var _shared_model_procedures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model/procedures */ "t/uz");
/* harmony import */ var _shared_model_choices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/choices */ "Cys9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_role_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/role-service.service */ "ZaBN");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/users.service */ "rhDE");
/* harmony import */ var _service_organisation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/organisation.service */ "D6b3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");














function ProcedureRegistrationComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Procedure_Registration.organisationErrorMsg"), " ");
} }
function ProcedureRegistrationComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Procedure_Registration.datasourceErrorMsg"), " ");
} }
function ProcedureRegistrationComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Procedure_Registration.nameErrorMsg"));
} }
class ProcedureRegistrationComponent {
    constructor(_router, _messageService, _roleServiceService, _usersService, _orgService, _translateService) {
        this._router = _router;
        this._messageService = _messageService;
        this._roleServiceService = _roleServiceService;
        this._usersService = _usersService;
        this._orgService = _orgService;
        this._translateService = _translateService;
        this.orgs = [];
        this.dataSources = _shared_model_choices__WEBPACK_IMPORTED_MODULE_1__["Choices"].getDataSources();
        this.organisationId = localStorage.getItem('organisationId');
        this.procedureModel = new _shared_model_procedures__WEBPACK_IMPORTED_MODULE_0__["Procedures"]();
    }
    ngOnInit() {
        this._orgService.get()
            .subscribe((data) => {
            this.orgs = data;
        }, (error) => console.log(error));
    }
    submitHandler() {
        this._roleServiceService.addProcedure(this.procedureModel)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this._messageService.add({
                severity: 'success',
                summary: 'Registered successfully!',
                detail: 'Registered successfully'
            });
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/procedures']);
    }
}
ProcedureRegistrationComponent.ɵfac = function ProcedureRegistrationComponent_Factory(t) { return new (t || ProcedureRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_role_service_service__WEBPACK_IMPORTED_MODULE_5__["RoleServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_organisation_service__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
ProcedureRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProcedureRegistrationComponent, selectors: [["app-procedure-registration"]], decls: 61, vars: 42, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], [1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["name", "client", "optionValue", "id", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["client", "ngModel"], [1, "ng-tns-c42-167", "p-dropdown", "p-component"], [1, "ng-tns-c42-167", "p-dropdown-label", "p-inputtext", "p-placeholder", "p-dropdown-label-empty", "ng-star-inserted"], ["class", "spanCss", 4, "ngIf"], ["name", "dataSource", "optionValue", "name", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["dataSource", "ngModel"], ["for", "procedureName", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "procedureName", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["procedureName", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "data", 1, "p-col-12", "p-md-2"], [1, "p-col-12", "p-md-10", "p-field-checkbox"], ["name", "data", "binary", "true", "inputId", "data", 3, "ngModel", "ngModelChange"], ["for", "analysis", 1, "p-col-12", "p-md-2"], ["name", "analysis", "binary", "true", "inputId", "analysis", 3, "ngModel", "ngModelChange"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], [1, "spanCss"]], template: function ProcedureRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProcedureRegistrationComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-dropdown", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProcedureRegistrationComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.procedureModel.OrganisationId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProcedureRegistrationComponent_small_18_Template, 3, 3, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p-dropdown", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProcedureRegistrationComponent_Template_p_dropdown_ngModelChange_24_listener($event) { return ctx.procedureModel.dataSource = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ProcedureRegistrationComponent_small_29_Template, 3, 3, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProcedureRegistrationComponent_Template_input_ngModelChange_35_listener($event) { return ctx.procedureModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ProcedureRegistrationComponent_small_37_Template, 3, 3, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProcedureRegistrationComponent_Template_p_checkbox_ngModelChange_43_listener($event) { return ctx.procedureModel.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProcedureRegistrationComponent_Template_p_checkbox_ngModelChange_49_listener($event) { return ctx.procedureModel.analysis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureRegistrationComponent_Template_button_click_52_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 22, "Procedure_Registration.registrationHeader"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 24, "Procedure_Registration.organisation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 26, "Procedure_Registration.organisationPlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.orgs)("showClear", true)("ngModel", ctx.procedureModel.OrganisationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 28, "Procedure_Registration.datasource"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 30, "Procedure_Registration.datasourcePlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.dataSources)("showClear", true)("ngModel", ctx.procedureModel.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 32, "Procedure_Registration.name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.procedureModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 34, "Procedure_Registration.data"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.procedureModel.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 36, "Procedure_Registration.analysis"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.procedureModel.analysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](55, 38, "Procedure_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 40, "Procedure_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__["Checkbox"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n\n.buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9jZWR1cmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EseUNBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQyw4QkFBQTtFQUNELDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJwcm9jZWR1cmUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYW5Dc3MgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWNcclxuICAgICAgICAvL2JhY2tncm91bmQ6ICNmZmYwZjQgIFxyXG4gICAgICAgIGNvbG9yOiAjZjc1MTIzICAgXHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG5cclxuLmJ1dHRvbkNzc1xyXG4gICAgd2lkdGg6IDQwJVxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJSJdfQ== */"] });


/***/ }),

/***/ "OOXX":
/*!**************************************************!*\
  !*** ./src/app/admin/import/import.component.ts ***!
  \**************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model/choices */ "Cys9");
/* harmony import */ var _shared_model_file_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model/file-import */ "3KVW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_import_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/import.service */ "QNm3");
/* harmony import */ var _service_organisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/organisation.service */ "D6b3");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/steps */ "KcHJ");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ "7LiV");


















const _c0 = function () { return { width: "300px" }; };
function ImportComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-dropdown", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_25_Template_p_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.selectedProcedureId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, "Admin_Import.selectProcedure"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, "Admin_Import.selectProcedurePlaceholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.procedures)("ngModel", ctx_r0.selectedProcedureId)("showClear", true)("filter", true)("disabled", ctx_r0.selectedTemplate);
} }
function ImportComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-dropdown", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_26_Template_p_dropdown_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.selectedTemplate = $event; })("onChange", function ImportComponent_div_26_Template_p_dropdown_onChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.selectTemplatHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "Admin_Import.selectTemplate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, "Admin_Import.selectTemplatePlaceholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.templates)("ngModel", ctx_r1.selectedTemplate)("showClear", true)("filter", true);
} }
function ImportComponent_div_29_div_3_p_progressSpinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner");
} }
function ImportComponent_div_29_div_3_ng_template_6_Template(rf, ctx) { }
function ImportComponent_div_29_div_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r11 == null ? null : f_r11.file == null ? null : f_r11.file.name, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, (f_r11 == null ? null : f_r11.file == null ? null : f_r11.file.size) / 1024, "1.0-2"), " KB");
} }
const _c1 = function () { return { width: "200px" }; };
function ImportComponent_div_29_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_29_div_3_div_14_Template_p_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return f_r11.accountType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "Admin_Import.selectAccountType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r17.accountTypes)("ngModel", f_r11.accountType)("showClear", true)("filter", true);
} }
function ImportComponent_div_29_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_29_div_3_div_15_Template_p_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; return f_r11.local = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, "Admin_Import.selectLocalization"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r18.locals)("ngModel", f_r11.local)("showClear", true)("filter", true);
} }
function ImportComponent_div_29_div_3_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 33);
} }
function ImportComponent_div_29_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImportComponent_div_29_div_3_p_progressSpinner_2_Template, 1, 0, "p-progressSpinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-fileUpload", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("uploadHandler", function ImportComponent_div_29_div_3_Template_p_fileUpload_uploadHandler_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const f_r11 = ctx_r30.$implicit; const i_r12 = ctx_r30.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.UploadHandler($event, f_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ImportComponent_div_29_div_3_ng_template_6_Template, 0, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ImportComponent_div_29_div_3_span_7_Template, 3, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_29_div_3_Template_p_dropdown_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return f_r11.fileType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p-dropdown", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_div_29_div_3_Template_p_dropdown_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; return f_r11.fileClass = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ImportComponent_div_29_div_3_div_14_Template, 3, 10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ImportComponent_div_29_div_3_div_15_Template, 3, 10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_div_29_div_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const f_r11 = ctx_r37.$implicit; const i_r12 = ctx_r37.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.uploadFirstStep(f_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ImportComponent_div_29_div_3_i_20_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_div_29_div_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.goToImport(0, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_div_29_div_3_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const f_r11 = ctx_r41.$implicit; const i_r12 = ctx_r41.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.deleteFileFromServer(f_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 27, "Admin_Import.searchLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showUploadButton", false)("auto", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", f_r11.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 29, "Admin_Import.selectFileFormat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r13.fileTypes)("ngModel", f_r11.fileType)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 31, "Admin_Import.selectFileType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r13.fileClass)("ngModel", f_r11.fileClass)("showClear", true)("filter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (f_r11.fileClass == null ? null : f_r11.fileClass.value) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (f_r11.fileClass == null ? null : f_r11.fileClass.value) == 2 && (f_r11.fileType == null ? null : f_r11.fileType.value) == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 33, "Admin_Import.uploadLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !f_r11.file || !f_r11.fileType || !f_r11.fileClass || f_r11.uploaded || ctx_r13.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 35, "Admin_Import.nextLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !f_r11.file || !f_r11.fileType || !f_r11.fileClass || !f_r11.uploaded || f_r11.imported);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !f_r11.uploaded || ctx_r13.waiting);
} }
function ImportComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ImportComponent_div_29_div_3_Template, 25, 39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r2.selectedTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", f_r11.imported !== true);
} }
function ImportComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_div_31_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.addFormData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, "Admin_Import.anotherFile"));
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r53, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r55, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r57, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r59, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r61, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-accordionTab", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_1_Template_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r63.filesList[ctx_r63.currentFileIndex] == null ? null : ctx_r63.filesList[ctx_r63.currentFileIndex].defaultTemplate)["client"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ImportComponent_p_accordion_62_p_accordionTab_1_option_21_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "BuKr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_1_Template_select_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r65.filesList[ctx_r65.currentFileIndex] == null ? null : ctx_r65.filesList[ctx_r65.currentFileIndex].defaultTemplate)["companyCode"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ImportComponent_p_accordion_62_p_accordionTab_1_option_30_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "accountType");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_1_Template_select_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r66.filesList[ctx_r66.currentFileIndex] == null ? null : ctx_r66.filesList[ctx_r66.currentFileIndex].defaultTemplate)["accountType"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ImportComponent_p_accordion_62_p_accordionTab_1_option_39_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "accountNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_1_Template_select_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r67.filesList[ctx_r67.currentFileIndex] == null ? null : ctx_r67.filesList[ctx_r67.currentFileIndex].defaultTemplate)["accountNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ImportComponent_p_accordion_62_p_accordionTab_1_option_48_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "accountName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_1_Template_select_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r68.filesList[ctx_r68.currentFileIndex] == null ? null : ctx_r68.filesList[ctx_r68.currentFileIndex].defaultTemplate)["accountName"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ImportComponent_p_accordion_62_p_accordionTab_1_option_57_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 21, "Admin_Import.thirdStepHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 23, "Admin_Import.databaseField"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 25, "Admin_Import.selectedFile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 27, "Admin_Import.mappingField"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 29, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 31, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.filesList[ctx_r45.currentFileIndex] == null ? null : ctx_r45.filesList[ctx_r45.currentFileIndex].defaultTemplate["client"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.filesList[ctx_r45.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 33, "Admin_Import.client"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.filesList[ctx_r45.currentFileIndex] == null ? null : ctx_r45.filesList[ctx_r45.currentFileIndex].defaultTemplate["companyCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.filesList[ctx_r45.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 35, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.filesList[ctx_r45.currentFileIndex] == null ? null : ctx_r45.filesList[ctx_r45.currentFileIndex].defaultTemplate["accountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.filesList[ctx_r45.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 37, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.filesList[ctx_r45.currentFileIndex] == null ? null : ctx_r45.filesList[ctx_r45.currentFileIndex].defaultTemplate["accountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.filesList[ctx_r45.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 39, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r45.filesList[ctx_r45.currentFileIndex] == null ? null : ctx_r45.filesList[ctx_r45.currentFileIndex].defaultTemplate["accountName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r45.filesList[ctx_r45.currentFileIndex].fileHeader);
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r136, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r138, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r140 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r140, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r142, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r144 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r144, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r146, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r148, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r150, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r152, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r154, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r156, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r158, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r160, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r162, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r164, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r166 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r166);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r166, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r168);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r168, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r170 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r170);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r170, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_279_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r172 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r172, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r174);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r174, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_307_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r176);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r176, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r178, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_335_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r180);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r180, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_349_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r182);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r182, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_363_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r184);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r184, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_377_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r186);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r186, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_391_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r188 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r188);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r188, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_405_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r190);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r190, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_419_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r192 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r192, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_433_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r194 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r194);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r194, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_447_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r196);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r196, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_461_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r198);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r198, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_475_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r200, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_489_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r202);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r202, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_503_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r204, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_517_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r206);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r206, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_531_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r208 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r208);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r208, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_545_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r210);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r210, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_559_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r212 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r212);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r212, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_573_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r214 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r214);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r214, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_587_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r216);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r216, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_601_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r218 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r218);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r218, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_615_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r220 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r220);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r220, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_629_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r222 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r222, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_643_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r224);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r224, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_657_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r226 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r226);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r226, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_671_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r228 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r228);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r228, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_685_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r230);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r230, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_699_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r232 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r232);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r232, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_713_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r234 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r234);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r234, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_727_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r236 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r236);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r236, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_741_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r238 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r238);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r238, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_755_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r240);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r240, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_769_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r242 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r242);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r242, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_783_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r244 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r244);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r244, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_797_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r246);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r246, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_811_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r248 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r248);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r248, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_825_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r250);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r250, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_839_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r252 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r252);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r252, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_853_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r254 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r254);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r254, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_867_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r256 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r256);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r256, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_881_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r258 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r258, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_895_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r260 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r260);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r260, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_909_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r262);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r262, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_923_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r264 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r264);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r264, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_937_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r266 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r266);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r266, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_option_951_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r268 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", h_r268);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", h_r268, " ");
} }
function ImportComponent_p_accordion_62_p_accordionTab_2_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-accordionTab", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Database Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Mapping Field ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r270.filesList[ctx_r270.currentFileIndex] == null ? null : ctx_r270.filesList[ctx_r270.currentFileIndex].defaultTemplate)["client"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ImportComponent_p_accordion_62_p_accordionTab_2_option_27_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r272.filesList[ctx_r272.currentFileIndex] == null ? null : ctx_r272.filesList[ctx_r272.currentFileIndex].defaultTemplate)["executionDate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ImportComponent_p_accordion_62_p_accordionTab_2_option_41_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r273.filesList[ctx_r273.currentFileIndex] == null ? null : ctx_r273.filesList[ctx_r273.currentFileIndex].defaultTemplate)["documentNumber2"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ImportComponent_p_accordion_62_p_accordionTab_2_option_55_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r274.filesList[ctx_r274.currentFileIndex] == null ? null : ctx_r274.filesList[ctx_r274.currentFileIndex].defaultTemplate)["assignment"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ImportComponent_p_accordion_62_p_accordionTab_2_option_69_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_81_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r275.filesList[ctx_r275.currentFileIndex] == null ? null : ctx_r275.filesList[ctx_r275.currentFileIndex].defaultTemplate)["documentNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, ImportComponent_p_accordion_62_p_accordionTab_2_option_83_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_95_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r276.filesList[ctx_r276.currentFileIndex] == null ? null : ctx_r276.filesList[ctx_r276.currentFileIndex].defaultTemplate)["documentType"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, ImportComponent_p_accordion_62_p_accordionTab_2_option_97_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](102, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r277.filesList[ctx_r277.currentFileIndex] == null ? null : ctx_r277.filesList[ctx_r277.currentFileIndex].defaultTemplate)["documentDate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, ImportComponent_p_accordion_62_p_accordionTab_2_option_111_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](116, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](121, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_123_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r278.filesList[ctx_r278.currentFileIndex] == null ? null : ctx_r278.filesList[ctx_r278.currentFileIndex].defaultTemplate)["recordNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, ImportComponent_p_accordion_62_p_accordionTab_2_option_125_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](130, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](135, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_137_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r279.filesList[ctx_r279.currentFileIndex] == null ? null : ctx_r279.filesList[ctx_r279.currentFileIndex].defaultTemplate)["creditAmount"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](139, ImportComponent_p_accordion_62_p_accordionTab_2_option_139_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](144, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](149, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_151_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r280.filesList[ctx_r280.currentFileIndex] == null ? null : ctx_r280.filesList[ctx_r280.currentFileIndex].defaultTemplate)["transactionCurrency"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](153, ImportComponent_p_accordion_62_p_accordionTab_2_option_153_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](158, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](163, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r281.filesList[ctx_r281.currentFileIndex] == null ? null : ctx_r281.filesList[ctx_r281.currentFileIndex].defaultTemplate)["applicationDocument"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](167, ImportComponent_p_accordion_62_p_accordionTab_2_option_167_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](172, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](177, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_179_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r282.filesList[ctx_r282.currentFileIndex] == null ? null : ctx_r282.filesList[ctx_r282.currentFileIndex].defaultTemplate)["textPosting"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](181, ImportComponent_p_accordion_62_p_accordionTab_2_option_181_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](186, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](191, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_193_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r283.filesList[ctx_r283.currentFileIndex] == null ? null : ctx_r283.filesList[ctx_r283.currentFileIndex].defaultTemplate)["applicationDate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](195, ImportComponent_p_accordion_62_p_accordionTab_2_option_195_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](200, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](205, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_207_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r284.filesList[ctx_r284.currentFileIndex] == null ? null : ctx_r284.filesList[ctx_r284.currentFileIndex].defaultTemplate)["postingDate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](209, ImportComponent_p_accordion_62_p_accordionTab_2_option_209_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](214, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](219, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_221_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r285.filesList[ctx_r285.currentFileIndex] == null ? null : ctx_r285.filesList[ctx_r285.currentFileIndex].defaultTemplate)["companyCode"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](222, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](223, ImportComponent_p_accordion_62_p_accordionTab_2_option_223_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](228, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](233, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_235_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r286.filesList[ctx_r286.currentFileIndex] == null ? null : ctx_r286.filesList[ctx_r286.currentFileIndex].defaultTemplate)["fiscalYear"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](237, ImportComponent_p_accordion_62_p_accordionTab_2_option_237_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](242, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](247, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_249_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r287.filesList[ctx_r287.currentFileIndex] == null ? null : ctx_r287.filesList[ctx_r287.currentFileIndex].defaultTemplate)["postingPeriod"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](251, ImportComponent_p_accordion_62_p_accordionTab_2_option_251_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](256, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](261, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_263_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r288.filesList[ctx_r288.currentFileIndex] == null ? null : ctx_r288.filesList[ctx_r288.currentFileIndex].defaultTemplate)["accountType"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](265, ImportComponent_p_accordion_62_p_accordionTab_2_option_265_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](270, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](275, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_277_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r289.filesList[ctx_r289.currentFileIndex] == null ? null : ctx_r289.filesList[ctx_r289.currentFileIndex].defaultTemplate)["accountNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](279, ImportComponent_p_accordion_62_p_accordionTab_2_option_279_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](284, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](289, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_291_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r290.filesList[ctx_r290.currentFileIndex] == null ? null : ctx_r290.filesList[ctx_r290.currentFileIndex].defaultTemplate)["debitCredit"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](292, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](293, ImportComponent_p_accordion_62_p_accordionTab_2_option_293_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](298, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](303, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_305_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r291.filesList[ctx_r291.currentFileIndex] == null ? null : ctx_r291.filesList[ctx_r291.currentFileIndex].defaultTemplate)["reference"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](307, ImportComponent_p_accordion_62_p_accordionTab_2_option_307_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](312, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](317, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_319_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r292.filesList[ctx_r292.currentFileIndex] == null ? null : ctx_r292.filesList[ctx_r292.currentFileIndex].defaultTemplate)["GLAccountNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](321, ImportComponent_p_accordion_62_p_accordionTab_2_option_321_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](326, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](331, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_333_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r293.filesList[ctx_r293.currentFileIndex] == null ? null : ctx_r293.filesList[ctx_r293.currentFileIndex].defaultTemplate)["contraAccountType"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](334, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](335, ImportComponent_p_accordion_62_p_accordionTab_2_option_335_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](340, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](345, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_347_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r294.filesList[ctx_r294.currentFileIndex] == null ? null : ctx_r294.filesList[ctx_r294.currentFileIndex].defaultTemplate)["contraAccountNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](349, ImportComponent_p_accordion_62_p_accordionTab_2_option_349_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](354, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](359, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_361_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r295.filesList[ctx_r295.currentFileIndex] == null ? null : ctx_r295.filesList[ctx_r295.currentFileIndex].defaultTemplate)["contraAccountGLAccountNo"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](363, ImportComponent_p_accordion_62_p_accordionTab_2_option_363_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](368, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](373, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_375_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r296.filesList[ctx_r296.currentFileIndex] == null ? null : ctx_r296.filesList[ctx_r296.currentFileIndex].defaultTemplate)["contraAccountCreditorNo"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](377, ImportComponent_p_accordion_62_p_accordionTab_2_option_377_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](382, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](387, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_389_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r297.filesList[ctx_r297.currentFileIndex] == null ? null : ctx_r297.filesList[ctx_r297.currentFileIndex].defaultTemplate)["contraAccountDebtorNo"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](390, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](391, ImportComponent_p_accordion_62_p_accordionTab_2_option_391_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](396, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](401, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_403_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r298.filesList[ctx_r298.currentFileIndex] == null ? null : ctx_r298.filesList[ctx_r298.currentFileIndex].defaultTemplate)["dueDate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](404, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](405, ImportComponent_p_accordion_62_p_accordionTab_2_option_405_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](409);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](410, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](414);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](415, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_417_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r299.filesList[ctx_r299.currentFileIndex] == null ? null : ctx_r299.filesList[ctx_r299.currentFileIndex].defaultTemplate)["textHeader"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](418, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](419, ImportComponent_p_accordion_62_p_accordionTab_2_option_419_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](421, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](424, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](429, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_431_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r300.filesList[ctx_r300.currentFileIndex] == null ? null : ctx_r300.filesList[ctx_r300.currentFileIndex].defaultTemplate)["accountName"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](432, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](433, ImportComponent_p_accordion_62_p_accordionTab_2_option_433_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](438, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](440, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](443, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_445_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r301.filesList[ctx_r301.currentFileIndex] == null ? null : ctx_r301.filesList[ctx_r301.currentFileIndex].defaultTemplate)["contraAccountName"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](446, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](447, ImportComponent_p_accordion_62_p_accordionTab_2_option_447_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](452, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](456);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](457, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_459_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r302.filesList[ctx_r302.currentFileIndex] == null ? null : ctx_r302.filesList[ctx_r302.currentFileIndex].defaultTemplate)["balance"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](460, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](461, ImportComponent_p_accordion_62_p_accordionTab_2_option_461_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](465);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](466, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](467, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](470);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](471, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_473_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r303.filesList[ctx_r303.currentFileIndex] == null ? null : ctx_r303.filesList[ctx_r303.currentFileIndex].defaultTemplate)["debitAmount"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](474, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](475, ImportComponent_p_accordion_62_p_accordionTab_2_option_475_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](479);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](480, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](484);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](485, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_487_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r304.filesList[ctx_r304.currentFileIndex] == null ? null : ctx_r304.filesList[ctx_r304.currentFileIndex].defaultTemplate)["balanceTransactionCurrency"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](488, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](489, ImportComponent_p_accordion_62_p_accordionTab_2_option_489_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](490, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](493);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](494, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](495, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](498);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](499, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_501_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r305.filesList[ctx_r305.currentFileIndex] == null ? null : ctx_r305.filesList[ctx_r305.currentFileIndex].defaultTemplate)["debitAmountTransactionCurrency"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](502, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](503, ImportComponent_p_accordion_62_p_accordionTab_2_option_503_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](506, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](507);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](508, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](509, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](512);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](513, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](514, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_515_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r306.filesList[ctx_r306.currentFileIndex] == null ? null : ctx_r306.filesList[ctx_r306.currentFileIndex].defaultTemplate)["creditAmountTransactionCurrency"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](516, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](517, ImportComponent_p_accordion_62_p_accordionTab_2_option_517_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](521);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](522, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](523, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](525, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](526);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](527, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_529_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r307.filesList[ctx_r307.currentFileIndex] == null ? null : ctx_r307.filesList[ctx_r307.currentFileIndex].defaultTemplate)["exchangeRate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](530, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](531, ImportComponent_p_accordion_62_p_accordionTab_2_option_531_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](532, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](535);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](536, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](537, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](540);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](541, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](542, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_543_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r308.filesList[ctx_r308.currentFileIndex] == null ? null : ctx_r308.filesList[ctx_r308.currentFileIndex].defaultTemplate)["cashDiscount"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](545, ImportComponent_p_accordion_62_p_accordionTab_2_option_545_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](547, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](549);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](550, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](553, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](554);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](555, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](556, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_557_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r309.filesList[ctx_r309.currentFileIndex] == null ? null : ctx_r309.filesList[ctx_r309.currentFileIndex].defaultTemplate)["postingKey"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](558, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](559, ImportComponent_p_accordion_62_p_accordionTab_2_option_559_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](560, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](563);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](564, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](568);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](569, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](571, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_571_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r310.filesList[ctx_r310.currentFileIndex] == null ? null : ctx_r310.filesList[ctx_r310.currentFileIndex].defaultTemplate)["salesTaxKey"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](572, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](573, ImportComponent_p_accordion_62_p_accordionTab_2_option_573_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](574, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](575, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](577);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](578, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](580, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](582);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](583, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](585, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_585_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r311.filesList[ctx_r311.currentFileIndex] == null ? null : ctx_r311.filesList[ctx_r311.currentFileIndex].defaultTemplate)["taxRate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](586, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](587, ImportComponent_p_accordion_62_p_accordionTab_2_option_587_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](588, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](589, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](590, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](591);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](592, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](593, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](594, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](595, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](596);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](597, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](598, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](599, "select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_599_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r312.filesList[ctx_r312.currentFileIndex] == null ? null : ctx_r312.filesList[ctx_r312.currentFileIndex].defaultTemplate)["euTaxRate"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](600, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](601, ImportComponent_p_accordion_62_p_accordionTab_2_option_601_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](602, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](603, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](604, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](605);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](606, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](607, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](609, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](610);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](611, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](612, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](613, "select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_613_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r313.filesList[ctx_r313.currentFileIndex] == null ? null : ctx_r313.filesList[ctx_r313.currentFileIndex].defaultTemplate)["taxAmount"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](614, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](615, ImportComponent_p_accordion_62_p_accordionTab_2_option_615_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](616, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](617, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](618, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](619);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](620, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](621, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](622, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](623, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](624);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](625, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](626, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](627, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_627_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r314.filesList[ctx_r314.currentFileIndex] == null ? null : ctx_r314.filesList[ctx_r314.currentFileIndex].defaultTemplate)["taxAmountDebit"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](628, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](629, ImportComponent_p_accordion_62_p_accordionTab_2_option_629_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](630, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](631, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](632, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](633);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](634, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](635, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](637, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](638);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](639, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](641, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_641_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r315.filesList[ctx_r315.currentFileIndex] == null ? null : ctx_r315.filesList[ctx_r315.currentFileIndex].defaultTemplate)["taxAmountCredit"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](642, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](643, ImportComponent_p_accordion_62_p_accordionTab_2_option_643_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](644, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](645, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](646, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](647);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](648, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](649, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](650, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](651, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](652);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](653, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](655, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_655_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r316.filesList[ctx_r316.currentFileIndex] == null ? null : ctx_r316.filesList[ctx_r316.currentFileIndex].defaultTemplate)["stackNumber"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](656, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](657, ImportComponent_p_accordion_62_p_accordionTab_2_option_657_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](658, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](659, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](660, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](661);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](662, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](663, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](664, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](665, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](666);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](667, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](669, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_669_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r317.filesList[ctx_r317.currentFileIndex] == null ? null : ctx_r317.filesList[ctx_r317.currentFileIndex].defaultTemplate)["CostCenter2"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](670, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](671, ImportComponent_p_accordion_62_p_accordionTab_2_option_671_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](672, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](673, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](674, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](675);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](676, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](677, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](678, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](679, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](680);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](681, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](682, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](683, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_683_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r318.filesList[ctx_r318.currentFileIndex] == null ? null : ctx_r318.filesList[ctx_r318.currentFileIndex].defaultTemplate)["identifierBalanceCarryforward"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](684, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](685, ImportComponent_p_accordion_62_p_accordionTab_2_option_685_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](686, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](687, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](688, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](689);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](690, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](691, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](692, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](693, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](694);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](695, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](696, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](697, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_697_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r319.filesList[ctx_r319.currentFileIndex] == null ? null : ctx_r319.filesList[ctx_r319.currentFileIndex].defaultTemplate)["generalReversal"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](698, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](699, ImportComponent_p_accordion_62_p_accordionTab_2_option_699_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](700, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](702, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](703);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](704, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](705, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](706, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](707, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](708);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](709, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](710, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](711, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_711_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r320.filesList[ctx_r320.currentFileIndex] == null ? null : ctx_r320.filesList[ctx_r320.currentFileIndex].defaultTemplate)["ledgerId"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](712, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](713, ImportComponent_p_accordion_62_p_accordionTab_2_option_713_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](714, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](715, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](716, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](717);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](718, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](719, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](720, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](721, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](722);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](723, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](724, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](725, "select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_725_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r321.filesList[ctx_r321.currentFileIndex] == null ? null : ctx_r321.filesList[ctx_r321.currentFileIndex].defaultTemplate)["documentLink"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](726, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](727, ImportComponent_p_accordion_62_p_accordionTab_2_option_727_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](728, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](729, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](731);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](732, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](733, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](734, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](735, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](736);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](737, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](738, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](739, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_739_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r322.filesList[ctx_r322.currentFileIndex] == null ? null : ctx_r322.filesList[ctx_r322.currentFileIndex].defaultTemplate)["typeDocumentInformation1"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](740, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](741, ImportComponent_p_accordion_62_p_accordionTab_2_option_741_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](742, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](743, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](744, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](745);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](746, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](747, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](748, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](749, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](750);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](751, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](752, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](753, "select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_753_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r323.filesList[ctx_r323.currentFileIndex] == null ? null : ctx_r323.filesList[ctx_r323.currentFileIndex].defaultTemplate)["contentDocumentInformation1"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](754, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](755, ImportComponent_p_accordion_62_p_accordionTab_2_option_755_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](756, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](757, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](758, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](759);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](760, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](761, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](762, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](763, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](764);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](765, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](766, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](767, "select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_767_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r324.filesList[ctx_r324.currentFileIndex] == null ? null : ctx_r324.filesList[ctx_r324.currentFileIndex].defaultTemplate)["typeDocumentInformation2"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](768, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](769, ImportComponent_p_accordion_62_p_accordionTab_2_option_769_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](770, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](771, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](772, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](773);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](774, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](775, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](776, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](777, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](778);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](779, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](780, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](781, "select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_781_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r325.filesList[ctx_r325.currentFileIndex] == null ? null : ctx_r325.filesList[ctx_r325.currentFileIndex].defaultTemplate)["contentDocumentInformation2"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](782, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](783, ImportComponent_p_accordion_62_p_accordionTab_2_option_783_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](784, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](785, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](786, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](787);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](788, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](789, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](790, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](791, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](792);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](793, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](794, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](795, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_795_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r326.filesList[ctx_r326.currentFileIndex] == null ? null : ctx_r326.filesList[ctx_r326.currentFileIndex].defaultTemplate)["typeDocumentInformation3"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](796, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](797, ImportComponent_p_accordion_62_p_accordionTab_2_option_797_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](798, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](799, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](800, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](801);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](802, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](803, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](804, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](805, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](806);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](807, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](808, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](809, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_809_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r327.filesList[ctx_r327.currentFileIndex] == null ? null : ctx_r327.filesList[ctx_r327.currentFileIndex].defaultTemplate)["contentDocumentInformation3"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](810, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](811, ImportComponent_p_accordion_62_p_accordionTab_2_option_811_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](812, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](813, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](814, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](815);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](816, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](817, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](818, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](819, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](820);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](821, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](822, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](823, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_823_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r328.filesList[ctx_r328.currentFileIndex] == null ? null : ctx_r328.filesList[ctx_r328.currentFileIndex].defaultTemplate)["typeDocumentInformation4"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](824, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](825, ImportComponent_p_accordion_62_p_accordionTab_2_option_825_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](826, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](827, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](828, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](829);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](830, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](831, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](832, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](833, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](834);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](835, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](836, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](837, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_837_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r329.filesList[ctx_r329.currentFileIndex] == null ? null : ctx_r329.filesList[ctx_r329.currentFileIndex].defaultTemplate)["contentDocumentInformation4"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](838, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](839, ImportComponent_p_accordion_62_p_accordionTab_2_option_839_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](840, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](841, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](842, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](843);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](844, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](845, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](846, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](847, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](848);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](849, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](850, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](851, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_851_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r330.filesList[ctx_r330.currentFileIndex] == null ? null : ctx_r330.filesList[ctx_r330.currentFileIndex].defaultTemplate)["typeDocumentInformation5"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](852, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](853, ImportComponent_p_accordion_62_p_accordionTab_2_option_853_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](854, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](855, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](856, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](857);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](858, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](859, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](860, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](861, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](862);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](863, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](864, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](865, "select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_865_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r331.filesList[ctx_r331.currentFileIndex] == null ? null : ctx_r331.filesList[ctx_r331.currentFileIndex].defaultTemplate)["contentDocumentInformation5"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](866, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](867, ImportComponent_p_accordion_62_p_accordionTab_2_option_867_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](868, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](869, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](870, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](871);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](872, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](873, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](874, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](875, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](876);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](877, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](878, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](879, "select", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_879_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r332.filesList[ctx_r332.currentFileIndex] == null ? null : ctx_r332.filesList[ctx_r332.currentFileIndex].defaultTemplate)["typeDocumentInformation6"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](880, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](881, ImportComponent_p_accordion_62_p_accordionTab_2_option_881_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](882, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](883, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](884, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](885);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](886, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](887, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](888, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](889, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](890);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](891, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](892, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](893, "select", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_893_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r333.filesList[ctx_r333.currentFileIndex] == null ? null : ctx_r333.filesList[ctx_r333.currentFileIndex].defaultTemplate)["contentDocumentInformation6"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](894, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](895, ImportComponent_p_accordion_62_p_accordionTab_2_option_895_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](896, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](897, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](898, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](899);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](900, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](901, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](902, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](903, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](904);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](905, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](906, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](907, "select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_907_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r334.filesList[ctx_r334.currentFileIndex] == null ? null : ctx_r334.filesList[ctx_r334.currentFileIndex].defaultTemplate)["typeDocumentInformation7"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](908, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](909, ImportComponent_p_accordion_62_p_accordionTab_2_option_909_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](910, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](911, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](912, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](913);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](914, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](915, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](916, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](917, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](918);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](919, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](920, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](921, "select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_921_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r335.filesList[ctx_r335.currentFileIndex] == null ? null : ctx_r335.filesList[ctx_r335.currentFileIndex].defaultTemplate)["contentDocumentInformation7"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](922, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](923, ImportComponent_p_accordion_62_p_accordionTab_2_option_923_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](924, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](925, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](926, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](927);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](928, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](929, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](930, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](931, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](932);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](933, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](934, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](935, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_935_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r336.filesList[ctx_r336.currentFileIndex] == null ? null : ctx_r336.filesList[ctx_r336.currentFileIndex].defaultTemplate)["typeDocumentInformation8"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](936, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](937, ImportComponent_p_accordion_62_p_accordionTab_2_option_937_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](938, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](939, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](940, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](941);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](942, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](943, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](944, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](945, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](946);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](947, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](948, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](949, "select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_p_accordion_62_p_accordionTab_2_Template_select_ngModelChange_949_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r271); const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ((ctx_r337.filesList[ctx_r337.currentFileIndex] == null ? null : ctx_r337.filesList[ctx_r337.currentFileIndex].defaultTemplate)["contentDocumentInformation8"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](950, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](951, ImportComponent_p_accordion_62_p_accordionTab_2_option_951_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 269, "Admin_Import.client"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 271, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["client"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 273, "Admin_Import.executionDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 275, "Admin_Import.dateDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["executionDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 277, "Admin_Import.documentNumber2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 279, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["documentNumber2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 281, "Admin_Import.assignment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 283, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["assignment"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 285, "Admin_Import.documentNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 287, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["documentNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 289, "Admin_Import.documentType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 291, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["documentType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](102, 293, "Admin_Import.documentDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](107, 295, "Admin_Import.dateDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["documentDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](116, 297, "Admin_Import.recordNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](121, 299, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["recordNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](130, 301, "Admin_Import.creditAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](135, 303, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["creditAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](144, 305, "Admin_Import.transactionCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](149, 307, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["transactionCurrency"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](158, 309, "Admin_Import.applicationDocument"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](163, 311, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["applicationDocument"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](172, 313, "Admin_Import.textPosting"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](177, 315, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["textPosting"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](186, 317, "Admin_Import.applicationDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](191, 319, "Admin_Import.dateDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["applicationDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](200, 321, "Admin_Import.postingDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](205, 323, "Admin_Import.dateDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["postingDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](214, 325, "Admin_Import.companyCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](219, 327, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["companyCode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](228, 329, "Admin_Import.fiscalYear"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](233, 331, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["fiscalYear"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](242, 333, "Admin_Import.postingPeriod"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](247, 335, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["postingPeriod"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](256, 337, "Admin_Import.accountType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](261, 339, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["accountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](270, 341, "Admin_Import.accountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](275, 343, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["accountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](284, 345, "Admin_Import.debitCredit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](289, 347, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["debitCredit"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](298, 349, "Admin_Import.reference"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](303, 351, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["reference"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](312, 353, "Admin_Import.GLAccountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](317, 355, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["GLAccountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](326, 357, "Admin_Import.contraAccountType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](331, 359, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](340, 361, "Admin_Import.contraAccountNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](345, 363, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](354, 365, "Admin_Import.contraAccountGLAccountNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](359, 367, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountGLAccountNo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](368, 369, "Admin_Import.contraAccountCreditorNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](373, 371, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountCreditorNo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](382, 373, "Admin_Import.contraAccountDebtorNo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](387, 375, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountDebtorNo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](396, 377, "Admin_Import.dueDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](401, 379, "Admin_Import.dateDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["dueDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](410, 381, "Admin_Import.textHeader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](415, 383, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["textHeader"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](424, 385, "Admin_Import.accountName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](429, 387, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["accountName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](438, 389, "Admin_Import.contraAccountName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](443, 391, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contraAccountName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](452, 393, "Admin_Import.balance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](457, 395, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["balance"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](466, 397, "Admin_Import.debitAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](471, 399, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["debitAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](480, 401, "Admin_Import.balanceTransactionCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](485, 403, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["balanceTransactionCurrency"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](494, 405, "Admin_Import.debitAmountTransactionCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](499, 407, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["debitAmountTransactionCurrency"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](508, 409, "Admin_Import.creditAmountTransactionCurrency"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](513, 411, "Admin_Import.numberDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["creditAmountTransactionCurrency"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](522, 413, "Admin_Import.exchangeRate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](527, 415, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["exchangeRate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](536, 417, "Admin_Import.cashDiscount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](541, 419, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["cashDiscount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](550, 421, "Admin_Import.postingKey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](555, 423, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["postingKey"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](564, 425, "Admin_Import.salesTaxKey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](569, 427, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["salesTaxKey"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](578, 429, "Admin_Import.taxRate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](583, 431, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["taxRate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](592, 433, "Admin_Import.euTaxRate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](597, 435, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["euTaxRate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](606, 437, "Admin_Import.taxAmount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](611, 439, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["taxAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](620, 441, "Admin_Import.taxAmountDebit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](625, 443, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["taxAmountDebit"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](634, 445, "Admin_Import.taxAmountCredit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](639, 447, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["taxAmountCredit"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](648, 449, "Admin_Import.stackNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](653, 451, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["stackNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](662, 453, "Admin_Import.CostCenter2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](667, 455, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["CostCenter2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](676, 457, "Admin_Import.identifierBalanceCarryforward"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](681, 459, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["identifierBalanceCarryforward"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](690, 461, "Admin_Import.generalReversal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](695, 463, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["generalReversal"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](704, 465, "Admin_Import.ledgerId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](709, 467, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["ledgerId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](718, 469, "Admin_Import.documentLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](723, 471, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["documentLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](732, 473, "Admin_Import.typeDocumentInformation1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](737, 475, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation1"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](746, 477, "Admin_Import.contentDocumentInformation1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](751, 479, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation1"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](760, 481, "Admin_Import.typeDocumentInformation2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](765, 483, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](774, 485, "Admin_Import.contentDocumentInformation2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](779, 487, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](788, 489, "Admin_Import.typeDocumentInformation3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](793, 491, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation3"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](802, 493, "Admin_Import.contentDocumentInformation3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](807, 495, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation3"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](816, 497, "Admin_Import.typeDocumentInformation4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](821, 499, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation4"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](830, 501, "Admin_Import.contentDocumentInformation4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](835, 503, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation4"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](844, 505, "Admin_Import.typeDocumentInformation5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](849, 507, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation5"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](858, 509, "Admin_Import.contentDocumentInformation5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](863, 511, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation5"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](872, 513, "Admin_Import.typeDocumentInformation6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](877, 515, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation6"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](886, 517, "Admin_Import.contentDocumentInformation6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](891, 519, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation6"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](900, 521, "Admin_Import.typeDocumentInformation7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](905, 523, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation7"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](914, 525, "Admin_Import.contentDocumentInformation7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](919, 527, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation7"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](928, 529, "Admin_Import.typeDocumentInformation8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](933, 531, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["typeDocumentInformation8"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](942, 533, "Admin_Import.contentDocumentInformation8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](947, 535, "Admin_Import.textDataType"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r46.filesList[ctx_r46.currentFileIndex] == null ? null : ctx_r46.filesList[ctx_r46.currentFileIndex].defaultTemplate["contentDocumentInformation8"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r46.filesList[ctx_r46.currentFileIndex].fileHeader);
} }
function ImportComponent_p_accordion_62_p_accordionTab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-accordionTab", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Head Mapping is hear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", true);
} }
function ImportComponent_p_accordion_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImportComponent_p_accordion_62_p_accordionTab_1_Template, 58, 41, "p-accordionTab", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImportComponent_p_accordion_62_p_accordionTab_2_Template, 952, 537, "p-accordionTab", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ImportComponent_p_accordion_62_p_accordionTab_3_Template, 2, 1, "p-accordionTab", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.filesList[ctx_r4.currentFileIndex] == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass.value) === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.filesList[ctx_r4.currentFileIndex] == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass.value) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.filesList[ctx_r4.currentFileIndex] == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass == null ? null : ctx_r4.filesList[ctx_r4.currentFileIndex].fileClass.value) === 3);
} }
function ImportComponent_p_progressSpinner_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-progressSpinner");
} }
class ImportComponent {
    constructor(_translateService, _messageService, _importService, _orgService) {
        this._translateService = _translateService;
        this._messageService = _messageService;
        this._importService = _importService;
        this._orgService = _orgService;
        this.items = [];
        this.activeIndex = 0;
        this.uploadedFiles = [];
        this.templates = _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__["Choices"].getTemplates();
        this.fileTypes = _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__["Choices"].getFileType();
        this.fileClass = _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__["Choices"].getFileClass();
        this.locals = _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__["Choices"].getLocalization();
        this.accountTypes = _shared_model_choices__WEBPACK_IMPORTED_MODULE_0__["Choices"].getAccountTypes();
        this.waiting = false;
        this.filesList = new Array();
        this.currentFileIndex = -1;
        this.accountsCustomTemplate = {};
        this.postingCustomTemplate = {};
        this.headCustomTemplate = {};
        this.orgs = new Array();
        this.selectedOrgId = -1;
        this.procedures = new Array();
        this.selectedProcedureId = -1;
        _translateService.addLangs(['de', 'en']);
        _translateService.setDefaultLang('de');
        const browserLang = _translateService.getBrowserLang();
        _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');
    }
    ngOnInit() {
        this._translateService.get('Admin_Import').subscribe(elem => {
            this.items = [
                {
                    label: elem.firstStepLabel,
                    command: (event) => {
                        this.activeIndex = 0;
                        // this._messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
                    }
                },
                {
                    label: elem.secondStepLabel,
                    command: (event) => {
                        this.activeIndex = 1;
                    }
                },
                {
                    label: elem.thirdStepLabel,
                    command: (event) => {
                        this.activeIndex = 2;
                    }
                },
                {
                    label: elem.firthStepLabel,
                    command: (event) => {
                        this.activeIndex = 3;
                    }
                }
            ];
            this._orgService.get()
                .subscribe((data) => {
                this.orgs = data;
            }, (error) => console.log(error));
        });
    }
    // end of ngOnInit
    orgChangedHandler(e) {
        // alert(e.value);
        if (e.value > 0) {
            this._orgService.getProcedures(e.value)
                .subscribe(data => {
                this.procedures = data;
            }, error => console.log(error));
        }
    }
    selectTemplatHandler(e) {
        this.filesList = [];
        this.addFormData();
    }
    removeFormData(index) {
        this.filesList.splice(index, 1);
    }
    addFormData() {
        let f = new _shared_model_file_import__WEBPACK_IMPORTED_MODULE_1__["FileToImport"]();
        f.OrganisationId = this.selectedOrgId;
        f.procedureId = this.selectedProcedureId;
        f.defaultTemplate = this.selectedTemplate;
        this.filesList.push(f);
    }
    goToImport(wizardIndex, fileIndex) {
        this.currentFileIndex = fileIndex;
        this.activeIndex = ++wizardIndex;
    }
    goNext(index) {
        this.activeIndex = ++index;
    }
    goPrev(index) {
        this.activeIndex = --index;
    }
    setTemplate() {
        this.filesList[this.currentFileIndex].defaultTemplate = this.postingCustomTemplate;
    }
    deleteFileFromServer(f, index) {
        this.waiting = true;
        const nameOnServer = f === null || f === void 0 ? void 0 : f.nameOnServer;
        if (nameOnServer) {
            this._importService
                .deleteFile({ nameOnServer: nameOnServer })
                .subscribe(res => {
                this.waiting = false;
                this._messageService.add({
                    severity: 'success',
                    summary: 'File Deleted!',
                    detail: 'the file ' + this.filesList[index].orginalName + ' deleted successfuly!'
                });
                debugger;
                this.removeFormData(index);
            }, err => {
                this.waiting = false;
                this._messageService.add({
                    severity: 'warning',
                    summary: 'File not Deleted!',
                    detail: 'the file ' + this.filesList[index].orginalName + ' not found on the server!'
                });
            });
        }
        else {
            this._messageService.add({
                severity: 'warning',
                summary: 'File not Deleted!',
                detail: 'There is no file selected!'
            });
        }
    }
    // upload step 1
    uploadFirstStep(f, index) {
        var _a, _b, _c;
        this.waiting = true;
        // send to back-end
        // if type excel to excel-head
        // else if type csv to csv-head
        // else warn user to select type
        // get headers orginal name  and name on the server and set them to f
        const file = f === null || f === void 0 ? void 0 : f.file;
        const fileType = (_a = f === null || f === void 0 ? void 0 : f.fileType) === null || _a === void 0 ? void 0 : _a.value;
        const local = (_b = f === null || f === void 0 ? void 0 : f.local) === null || _b === void 0 ? void 0 : _b.value;
        const fileClass = (_c = f === null || f === void 0 ? void 0 : f.fileClass) === null || _c === void 0 ? void 0 : _c.value;
        const temmplate = this.selectedTemplate;
        const formData = new FormData();
        if (!!file) {
            formData.append('excel', file);
        }
        else {
            this._messageService.add({
                severity: 'warning',
                summary: 'Please choose a file',
                detail: 'You should chose a posting file!'
            });
            return;
        }
        formData.append('data', JSON.stringify({
            template: temmplate,
            fileType: fileType,
            fileClass: fileClass,
            local: local
        }));
        this._importService
            .uploadFile(formData)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this.waiting = false;
            f.fileHeader = res.headers;
            f.nameOnServer = res.fileName;
            f.orginalName = res.orginalName;
            f.defaultTemplate = res.defaultTemplate;
            if (fileClass === 1) {
                this.accountsCustomTemplate = res.defaultTemplate;
            }
            else if (fileClass === 2) {
                this.postingCustomTemplate = res.defaultTemplate;
            }
            else if (fileClass === 3) {
                this.headCustomTemplate = res.defaultTemplate;
            }
            f.uploaded = true;
            this.currentFileIndex = index;
            // console.dir(this.filesList);
            this._messageService.add({
                severity: 'success',
                summary: 'File uploaded!',
                detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' uploaded successfuly! you can upload another file now'
            });
        }, err => {
            // console.log('error: ' + err);
            this.waiting = false;
            this._messageService.add({
                severity: 'error',
                summary: 'ERROR!',
                detail: 'There is an error occured, please try again!'
            });
        });
    }
    // upload step 1 ends
    UploadHandler(event, f, index) {
        const selectedFiles = event.files;
        // debugger;
        f.file = selectedFiles[0];
        f.index = index;
    }
    importThisFile() {
        var _a, _b, _c, _d;
        this.waiting = true;
        const theFile = this.filesList[this.currentFileIndex];
        const filePath = theFile.nameOnServer;
        const fileType = (_a = theFile.fileType) === null || _a === void 0 ? void 0 : _a.value;
        const fileClass = (_b = theFile.fileClass) === null || _b === void 0 ? void 0 : _b.value;
        const local = (_c = theFile.local) === null || _c === void 0 ? void 0 : _c.value;
        const accountType = (_d = theFile.accountType) === null || _d === void 0 ? void 0 : _d.value;
        const template = theFile.defaultTemplate;
        const OrganisationId = theFile.OrganisationId;
        const procedureId = theFile.procedureId;
        // const formData: FormData = new FormData();
        // formData.append('data', JSON.stringify({
        //   template: template,
        //   fileType: fileType,
        //   fileClass: fileClass,
        //   local: local,
        //   filePath: filePath,
        //   accountType: accountType
        // }));
        const data = {
            data: {
                template: template,
                fileType: fileType,
                fileClass: fileClass,
                local: local,
                filePath: filePath,
                accountType: accountType,
                OrganisationId: OrganisationId,
                procedureId: procedureId
            }
        };
        this._importService
            .importFile(data)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this.waiting = false;
            this.filesList[this.currentFileIndex].imported = true;
            // console.dir(this.filesList);
            this._messageService.add({
                severity: 'success',
                summary: 'File imported!',
                detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' imported successfuly! you can import another file now'
            });
        }, err => {
            // debugger;
            // console.log('error: ' + err.error.error);
            this.waiting = false;
            this._messageService.add({
                severity: 'error',
                summary: 'ERROR!',
                detail: err.error.error
            });
        });
    }
}
ImportComponent.ɵfac = function ImportComponent_Factory(t) { return new (t || ImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_import_service__WEBPACK_IMPORTED_MODULE_5__["ImportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_organisation_service__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"])); };
ImportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImportComponent, selectors: [["app-import"]], decls: 88, vars: 50, consts: [[3, "model", "activeIndex", "readonly", "activeIndexChange"], [1, "p-sm-12", 3, "hidden"], [1, "p-grid"], [1, "p-col-4"], [1, "p-col-10"], [1, "p-col-2"], [1, "p-mr-4"], [1, "p-col-5"], ["optionLabel", "name", "optionValue", "id", "filterBy", "name", "required", "", 3, "options", "ngModel", "placeholder", "showClear", "filter", "disabled", "ngModelChange", "onChange"], ["class", "p-col-10", 4, "ngIf"], ["class", "p-sm-12", 3, "hidden", 4, "ngFor", "ngForOf"], ["class", "p-grid", 4, "ngIf"], [1, "card", 3, "hidden"], [1, "p-buttonset"], ["pButton", "", "type", "button", 1, "p-button-raised", "p-button-rounded", 3, "label", "click"], [4, "ngIf"], ["pButton", "", "type", "button", "label", "Previous", 1, "p-button-raised", "p-button-rounded", 3, "click"], ["pButton", "", "type", "button", "label", "Next", 1, "p-button-raised", "p-button-rounded", 3, "click"], [1, "p-col-8"], ["pButton", "", "type", "button", "label", "Import", 1, "p-button-raised", "p-button-rounded", 3, "click"], ["pButton", "", "type", "button", 1, "p-button-raised", "p-button-rounded", 3, "label", "disabled", "click"], ["optionLabel", "name", "optionValue", "id", "filterBy", "name", "required", "", 3, "options", "ngModel", "placeholder", "showClear", "filter", "disabled", "ngModelChange"], ["optionLabel", "name", "optionValue", "value", "filterBy", "name", 3, "options", "ngModel", "placeholder", "showClear", "filter", "ngModelChange", "onChange"], [1, "p-sm-12"], [1, "p-sm-6", "p-lg-3"], ["name", "excel", "mode", "advanced", "customUpload", "true", "uploadLabel", "Set File", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .csv, text/plain", 3, "showUploadButton", "auto", "chooseLabel", "uploadHandler"], ["pTemplate", "content"], [1, "p-sm-6", "p-lg-2"], ["optionLabel", "name", "filterBy", "name", 3, "options", "ngModel", "placeholder", "showClear", "filter", "ngModelChange"], ["class", "p-sm-6 p-lg-2", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-upload", "iconPos", "left", 1, "p-button-raised", "p-button-rounded", 3, "label", "disabled", "click"], ["class", "pi pi-spinner pi-spin", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", 3, "disabled", "click"], [1, "pi", "pi-spinner", "pi-spin"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "iconPos", "left", 3, "label", "click"], [3, "header", "selected", 4, "ngIf"], ["header", "Posting Mapping", 3, "selected", 4, "ngIf"], ["header", "Head Mapping", 3, "selected", 4, "ngIf"], [3, "header", "selected"], [1, "p-sm-12", "p-lg-8"], ["name", "mdt", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["header", "Posting Mapping", 3, "selected"], ["name", "client", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "executionDate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "documentNumber2", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "assignment", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "documentNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "documentType", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "documentDate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "recordNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "creditAmount", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "transactionCurrency", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "applicationDocument", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "textPosting", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "applicationDate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "postingDate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "companyCode", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "fiscalYear", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "postingPeriod", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "accountType", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "accountNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "debitCredit", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "reference", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "GLAccountNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contraAccountType", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contraAccountNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contraAccountGLAccountNo", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contraAccountCreditorNo", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contraAccountDebtorNo", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "dueDate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "textHeader", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "accountName", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "ContraAccountName", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "balance", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "debitAmount", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "balanceTransactionCurrency", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "debitAmountTransactionCurrency", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "creditAmountTransactionCurrency", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "exchangeRate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "cashDiscount", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "postingKey", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "salesTaxKey", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "taxRate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "euTaxRate", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "taxAmount", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "taxAmountDebit", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "taxAmountCredit", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "stackNumber", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "CostCenter2", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "identifierBalanceCarryforward", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "generalReversal", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "ledgerId", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "documentLink", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation1", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation1", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation2", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation2", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation3", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation3", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation4", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation4", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation5", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation5", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation6", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation6", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation7", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation7", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "typeDocumentInformation8", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["name", "contentDocumentInformation8", 1, "p-dropdown", "p-component", "p-inputtext", "p-dropdown-trigger", "custom-select", 2, "max-width", "400px", 3, "ngModel", "ngModelChange"], ["header", "Head Mapping", 3, "selected"]], template: function ImportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIndexChange", function ImportComponent_Template_p_steps_activeIndexChange_2_listener($event) { return ctx.activeIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ImportComponent_Template_p_dropdown_ngModelChange_23_listener($event) { return ctx.selectedOrgId = $event; })("onChange", function ImportComponent_Template_p_dropdown_onChange_23_listener($event) { return ctx.orgChangedHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ImportComponent_div_25_Template, 9, 14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ImportComponent_div_26_Template, 9, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ImportComponent_div_29_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ImportComponent_div_31_Template, 7, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_48_listener() { return ctx.goPrev(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_50_listener() { return ctx.goNext(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ImportComponent_p_accordion_62_Template, 4, 3, "p-accordion", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_66_listener() { return ctx.goPrev(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_67_listener() { return ctx.goNext(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "p-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ImportComponent_p_progressSpinner_81_Template, 1, 0, "p-progressSpinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_83_listener() { return ctx.goPrev(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_85_listener() { return ctx.importThisFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImportComponent_Template_button_click_86_listener() { return ctx.goPrev(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.activeIndex != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 33, "Admin_Import.firstStepHeader"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.filesList[ctx.currentFileIndex] == null ? null : ctx.filesList[ctx.currentFileIndex].orginalName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 35, "Admin_Import.selectOrganisation"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](49, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 37, "Admin_Import.selectOrganisationPlaceholder"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.orgs)("ngModel", ctx.selectedOrgId)("showClear", true)("filter", true)("disabled", ctx.selectedProcedureId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedOrgId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedProcedureId > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.activeIndex != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.filesList[ctx.currentFileIndex] == null ? null : ctx.filesList[ctx.currentFileIndex].orginalName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 39, "Admin_Import.secondStepHeader"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 41, "Admin_Import.previousLabel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 43, "Admin_Import.nextLabel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.activeIndex != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.filesList[ctx.currentFileIndex] == null ? null : ctx.filesList[ctx.currentFileIndex].orginalName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filesList[ctx.currentFileIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.activeIndex != 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.filesList[ctx.currentFileIndex] == null ? null : ctx.filesList[ctx.currentFileIndex].orginalName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.waiting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](84, 45, "Admin_Import.previousLabel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 47, "Admin_Import.continueLabel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.filesList[ctx.currentFileIndex] == null ? null : ctx.filesList[ctx.currentFileIndex].imported));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"], primeng_toast__WEBPACK_IMPORTED_MODULE_8__["Toast"], primeng_steps__WEBPACK_IMPORTED_MODULE_9__["Steps"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], primeng_messages__WEBPACK_IMPORTED_MODULE_13__["Messages"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonDirective"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__["FileUpload"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__["ProgressSpinner"], primeng_accordion__WEBPACK_IMPORTED_MODULE_17__["Accordion"], primeng_accordion__WEBPACK_IMPORTED_MODULE_17__["AccordionTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "OT8l":
/*!******************************************************************!*\
  !*** ./src/app/admin/procedure-edit/procedure-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: ProcedureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureEditComponent", function() { return ProcedureEditComponent; });
/* harmony import */ var _shared_model_procedures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model/procedures */ "t/uz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_role_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/role-service.service */ "ZaBN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");









class ProcedureEditComponent {
    constructor(_router, _messageService, _roleServiceService, _translateService) {
        this._router = _router;
        this._messageService = _messageService;
        this._roleServiceService = _roleServiceService;
        this._translateService = _translateService;
    }
    ngOnInit() {
        this.procedureModel = new _shared_model_procedures__WEBPACK_IMPORTED_MODULE_0__["Procedures"]();
        this.procedureModel.id = +localStorage.getItem('currentProcedureId');
        this.procedureModel.name = localStorage.getItem('currentProcedureName');
        this.procedureModel.data = (localStorage.getItem('currentProcedureData') === "true");
        this.procedureModel.analysis = (localStorage.getItem('currentProcedureAnalysis') === "true");
    }
    submitHandler() {
        this._roleServiceService.editProcedure(this.procedureModel)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this._messageService.add({
                severity: 'success',
                summary: 'updated successfully!',
                detail: 'updated successfully'
            });
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/procedures']);
        localStorage.removeItem("currentProcedureId");
        localStorage.removeItem("currentProcedureName");
        localStorage.removeItem("currentProcedureData");
        localStorage.removeItem("currentProcedureAnalysis");
    }
}
ProcedureEditComponent.ɵfac = function ProcedureEditComponent_Factory(t) { return new (t || ProcedureEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_role_service_service__WEBPACK_IMPORTED_MODULE_4__["RoleServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
ProcedureEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcedureEditComponent, selectors: [["app-procedure-edit"]], decls: 38, vars: 23, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], ["for", "procedureName", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["required", "", "name", "procedureName", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["procedureName", "ngModel"], ["for", "data", 1, "p-col-12", "p-md-2"], [1, "p-col-12", "p-md-10", "p-field-checkbox"], ["name", "data", "binary", "true", "inputId", "data", 3, "ngModel", "value", "ngModelChange"], ["for", "analysis", 1, "p-col-12", "p-md-2"], ["name", "analysis", "binary", "true", "inputId", "analysis", 3, "ngModel", "value", "ngModelChange"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"]], template: function ProcedureEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProcedureEditComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProcedureEditComponent_Template_input_ngModelChange_13_listener($event) { return ctx.procedureModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProcedureEditComponent_Template_p_checkbox_ngModelChange_20_listener($event) { return ctx.procedureModel.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProcedureEditComponent_Template_p_checkbox_ngModelChange_26_listener($event) { return ctx.procedureModel.analysis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProcedureEditComponent_Template_button_click_29_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 11, "Procedure_Registration.editHeader"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 13, "Procedure_Registration.name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.procedureModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 15, "Procedure_Registration.data"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.procedureModel.data)("value", ctx.procedureModel.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 17, "Procedure_Registration.analysis"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.procedureModel.analysis)("value", ctx.procedureModel.analysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 19, "Procedure_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 21, "Procedure_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n\n.buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9jZWR1cmUtZWRpdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLHlDQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0MsOEJBQUE7RUFDRCwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoicHJvY2VkdXJlLWVkaXQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhbkNzcyBcclxuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZjBmNCAgXHJcbiAgICAgICAgY29sb3I6ICNmNzUxMjMgICBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcblxyXG4uYnV0dG9uQ3NzXHJcbiAgICB3aWR0aDogNDAlXHJcbiAgICBtYXJnaW4tbGVmdDogMzAlIl19 */"] });


/***/ }),

/***/ "Q1z1":
/*!***************************************************************************!*\
  !*** ./src/app/shared/organisation-users/organisation-users.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrganisationUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationUsersComponent", function() { return OrganisationUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "HabH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function OrganisationUsersComponent_ng_template_2_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 9);
} }
function OrganisationUsersComponent_ng_template_2_th_50_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganisationUsersComponent_ng_template_2_th_50_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.addUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrganisationUsersComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, OrganisationUsersComponent_ng_template_2_th_49_Template, 1, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, OrganisationUsersComponent_ng_template_2_th_50_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, "User_Registration.role"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 16, "User_Registration.username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 18, "User_Registration.email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "User_Registration.title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, "User_Registration.firstname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, "User_Registration.lastname"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 26, "User_Registration.mobileNr"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 28, "User_Registration.street"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 30, "User_Registration.houseNr"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 32, "User_Registration.postcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 34, "User_Registration.city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 36, "User_Registration.country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role !== "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role === "Admin");
} }
function OrganisationUsersComponent_ng_template_3_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganisationUsersComponent_ng_template_3_td_25_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.edituser(user_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrganisationUsersComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrganisationUsersComponent_ng_template_3_td_25_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.RoleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.housenumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.postCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.role !== "User");
} }
function OrganisationUsersComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "User_Registration.NoUsersFound"));
} }
class OrganisationUsersComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.organisationId = localStorage.getItem('organisationId');
        this.role = localStorage.getItem('role');
        this.users = [];
        this.cols = [];
    }
    ngOnInit() {
        this._userService
            .getUsers(this.organisationId)
            .subscribe((data) => {
            this.users = data;
            // console.log(data)
        }, (error) => console.log(error), () => { });
    }
    edituser(user) {
        localStorage.setItem('selectedUser_userId', user.id);
        localStorage.setItem('selectedUser_roleId', user.RoleId);
        localStorage.setItem('selectedUser_username', user.username);
        localStorage.setItem('selectedUser_email', user.email);
        localStorage.setItem('selectedUser_title', user.title);
        localStorage.setItem('selectedUser_firstname', user.firstname);
        localStorage.setItem('selectedUser_lastname', user.lastname);
        localStorage.setItem('selectedUser_mobileNr', user.mobileNumber);
        localStorage.setItem('selectedUser_street', user.street);
        localStorage.setItem('selectedUser_houseNr', user.housenumber);
        localStorage.setItem('selectedUser_postcode', user.postCode);
        localStorage.setItem('selectedUser_city', user.city);
        localStorage.setItem('selectedUser_country', user.country);
        this._router.navigate(['/shared/user/edit']);
    }
    addUser() {
        this._router.navigate(['/shared/user/add']);
    }
}
OrganisationUsersComponent.ɵfac = function OrganisationUsersComponent_Factory(t) { return new (t || OrganisationUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OrganisationUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganisationUsersComponent, selectors: [["app-organisation-users"]], decls: 5, vars: 2, consts: [[1, "p-mt-4"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pResizableColumn", ""], [1, "headerColor"], ["style", "width: 4rem", 4, "ngIf"], ["style", "width: 4rem; border: none; background-color: #ffff; color:#58585a", 4, "ngIf"], [2, "width", "4rem"], [2, "width", "4rem", "border", "none", "background-color", "#ffff", "color", "#58585a"], ["pTooltip", "Add User", "tooltipPosition", "bottom", 1, "pi", "pi-user-plus", 3, "click"], ["pResizableColumn", "", 1, "ui-resizable-column", "pointer"], ["pResizableColumn", "", 1, "ui-resizable-column"], ["pTooltip", "Edit user", "tooltipPosition", "bottom", 1, "pi", "pi-user-edit", "headerColor", 3, "click"], ["colspan", "12"]], template: function OrganisationUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrganisationUsersComponent_ng_template_2_Template, 51, 38, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrganisationUsersComponent_ng_template_3_Template, 26, 13, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrganisationUsersComponent_ng_template_4_Template, 4, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.users)("resizableColumns", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["ResizableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["Tooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".checkIcon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #66BB6A;\n}\n\n.closeIcon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #cc0000;\n}\n\n.headerColor[_ngcontent-%COMP%] {\n  color: #e75113;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.pointer[_ngcontent-%COMP%]:hover {\n  color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmdhbmlzYXRpb24tdXNlcnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDUSxnQkFBQTtFQUNBLGNBTEE7QUFBUjs7QUFNQTtFQUNRLGdCQUFBO0VBQ0EsY0FQQTtBQUlSOztBQUtBO0VBQ1EsY0FiRTtBQVdWOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQUtBO0VBQ0kseUJBQUE7QUFGSiIsImZpbGUiOiJvcmdhbmlzYXRpb24tdXNlcnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJHByaW1hcnk6ICNlNzUxMTNcclxuJHNlY29uZGFyeUhvdmVyOiAjMDAwMDAwXHJcbiRjaGVjazogIzY2QkI2QVxyXG4kY2xvc2U6ICNjYzAwMDBcclxuXHJcbi5jaGVja0ljb25cclxuICAgICAgICBmb250LXdlaWdodDogNzAwXHJcbiAgICAgICAgY29sb3I6ICRjaGVja1xyXG4uY2xvc2VJY29uXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgICAgIGNvbG9yOiAkY2xvc2VcclxuXHJcbi5oZWFkZXJDb2xvclxyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeVxyXG5cclxuXHJcbiAgICBcclxuLnBvaW50ZXJcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLnBvaW50ZXI6aG92ZXJcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5SG92ZXIgIWltcG9ydGFudFxyXG4iXX0= */"] });


/***/ }),

/***/ "QNm3":
/*!*************************************************!*\
  !*** ./src/app/admin/service/import.service.ts ***!
  \*************************************************/
/*! exports provided: ImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return ImportService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ImportService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'admin';
    }
    uploadFile(formdata) {
        return this._http.post(this._thisURL + '/header', formdata);
    }
    importFile(formData) {
        return this._http.post(this._thisURL + '/import', formData);
    }
    deleteFile(data) {
        return this._http.post(this._thisURL + '/delete-file', data);
    }
    addProcedure(procedure) {
        console.log(procedure);
    }
}
ImportService.ɵfac = function ImportService_Factory(t) { return new (t || ImportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ImportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImportService, factory: ImportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SHm6":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/export-data.service.ts ***!
  \*******************************************************/
/*! exports provided: ExportDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportDataService", function() { return ExportDataService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ExportDataService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'shared';
    }
    exportXLSX(tableName, OrganisationId, ProcedureId) {
        return this._http.get(this._thisURL + '/export/' + tableName + '/' + OrganisationId + '/' + ProcedureId);
    }
    exportPDF(data) {
        return this._http.get(this._thisURL + '/exportPDF/' + data);
    }
}
ExportDataService.ɵfac = function ExportDataService_Factory(t) { return new (t || ExportDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ExportDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExportDataService, factory: ExportDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "SZFj":
/*!*******************************************************************!*\
  !*** ./src/app/shared/sap-data-table/sap-data-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: SAPDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAPDataTableComponent", function() { return SAPDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _model_dataTableColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/dataTableColumns */ "ZiZ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_posting_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/posting-data.service */ "8Bbf");
/* harmony import */ var _service_data_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data-filter.service */ "p/sU");
/* harmony import */ var _service_export_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/export-data.service */ "SHm6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");

















function SAPDataTableComponent_ng_template_4_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.clearFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "Data_Table.clearFilter"));
} }
function SAPDataTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.exportXLSX(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SAPDataTableComponent_ng_template_4_Template_p_dropdown_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.limit = $event; })("onChange", function SAPDataTableComponent_ng_template_4_Template_p_dropdown_onChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.limitChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.firstPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SAPDataTableComponent_ng_template_4_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.pageNrChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.lastPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SAPDataTableComponent_ng_template_4_button_13_Template, 2, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.pageLimitSizes)("ngModel", ctx_r1.limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 16, "Data_Table.firstPage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pageNr === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 18, "Data_Table.previous"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pageNr === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true)("value", ctx_r1.pageNr)("placeholder", ctx_r1.pageNr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 20, "Data_Table.next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pageNr >= ctx_r1.maxPageNr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 22, "Data_Table.lastPage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.pageNr >= ctx_r1.maxPageNr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.displayedDataCount, " of ", ctx_r1.totalCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.filtersNo > 0);
} }
function SAPDataTableComponent_ng_template_5_colgroup_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SAPDataTableComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SAPDataTableComponent_ng_template_5_colgroup_0_Template, 2, 0, "colgroup", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.cols);
} }
function SAPDataTableComponent_ng_template_6_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", col_r24.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r24.header, " ");
} }
function SAPDataTableComponent_ng_template_6_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SAPDataTableComponent_ng_template_6_th_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const col_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return (ctx_r26.criteria[col_r25.field] = $event); })("change", function SAPDataTableComponent_ng_template_6_th_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const col_r25 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.filterChange($event.target.value, col_r25.field); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SAPDataTableComponent_ng_template_6_th_3_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.submitFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r23.criteria[col_r25.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Data_Table.filter"));
} }
function SAPDataTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SAPDataTableComponent_ng_template_6_th_1_Template, 3, 2, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SAPDataTableComponent_ng_template_6_th_3_Template, 4, 4, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.cols);
} }
function SAPDataTableComponent_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r34 = ctx.$implicit;
    const rowData_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r34.header == "balance" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, rowData_r32[col_r34.field], "EUR") : rowData_r32[col_r34.field], " ");
} }
function SAPDataTableComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SAPDataTableComponent_ng_template_7_td_1_Template, 3, 4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r30 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pReorderableRow", index_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.cols);
} }
function SAPDataTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No postings found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "10000px" }; };
class SAPDataTableComponent {
    constructor(_messageService, _postingDataService, _dataFilterService, _exportDataService, _router, _translateService) {
        this._messageService = _messageService;
        this._postingDataService = _postingDataService;
        this._dataFilterService = _dataFilterService;
        this._exportDataService = _exportDataService;
        this._router = _router;
        this._translateService = _translateService;
        this.organisationId = localStorage.getItem('organisationId');
        this.procedureId = localStorage.getItem('currentProcedureId');
        this.filtersNo = 0;
        this.loading = false;
        this.selectLastPage = false;
        this.postings = [];
        this.pageLimitSizes = [{ value: 25 }, { value: 50 }, { value: 100 },];
        this.limit = 25;
        this.pageNr = 1;
        this.maxPageNr = 0;
        this.displayedDataCount = 0;
        this.criteria = {
            OrganisationId: this.organisationId,
            procedureId: this.procedureId,
            limit: this.limit,
            offset: 0
        };
        this.totalCount = 0;
    }
    ngOnInit() {
        // this._translateService.setDefaultLang('de');
        // this._translateService.
        _model_dataTableColumns__WEBPACK_IMPORTED_MODULE_1__["dataTableColumns"].getDataTableColumns(this._translateService).then(cols => {
            debugger;
            this.cols = cols;
            this.getData();
        });
        this._translateService.onLangChange.subscribe((event) => {
            _model_dataTableColumns__WEBPACK_IMPORTED_MODULE_1__["dataTableColumns"].getDataTableColumns(this._translateService).then(cols => {
                debugger;
                this.cols = cols;
                // this.getData();
            });
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._dataFilterService
                .get(this.criteria)
                .subscribe(data => {
                this.data = data;
                this.postings = this.data.rows;
                this.totalCount = this.data.count;
                this.displayedDataCount = this.totalCount > this.limit ? this.limit : this.totalCount;
                this.maxPageNr = Math.ceil(this.totalCount / this.limit);
                this.loading = false;
            }, error => {
                this.loading = false;
            });
        });
    }
    filterChange(value, field) {
        if (value) {
            this.criteria[field] = value;
            ++this.filtersNo;
        }
        else {
            delete this.criteria[field];
            --this.filtersNo;
        }
        this.pageNr = 1;
        this.criteria.offset = 0;
        this.loading = true;
        this.getData();
    }
    submitFilter() {
        this.loading = true;
        this.getData();
    }
    clearFilter() {
        this.criteria = {
            OrganisationId: this.organisationId,
            procedureId: this.procedureId,
            limit: this.limit,
            offset: 0
        };
        this.pageNr = 1;
        this.getData();
    }
    nextPage() {
        ++this.pageNr;
        if (this.pageNr > this.maxPageNr)
            return;
        this.loading = true;
        this.criteria.offset += +this.limit;
        this.getData();
    }
    lastPage() {
        this.pageNr = this.maxPageNr;
        this.criteria.offset = (this.pageNr - 1) * +this.limit;
        this.loading = true;
        this.getData();
    }
    previousPage() {
        --this.pageNr;
        if (this.pageNr <= 0)
            return;
        this.loading = true;
        this.criteria.offset -= +this.limit;
        this.getData();
    }
    firstPage() {
        this.pageNr = 1;
        this.loading = true;
        this.criteria.offset = 0;
        this.getData();
    }
    pageNrChange(value) {
        this.loading = true;
        this.criteria.offset = (this.pageNr - 1) * this.limit;
        this.loading = true;
        this.getData();
    }
    limitChange(e) {
        this.limit = e.value;
        this.criteria.offset = 0;
        this.criteria.limit = this.limit;
        this.pageNr = 1;
        this.loading = true;
        this.getData();
    }
    exportXLSX() {
        this._exportDataService
            .exportXLSX('posting', this.organisationId, this.procedureId)
            .subscribe(url => {
            // console.log(url);
            window.open(url.toString(), "_blank");
        }, (error) => console.log(error));
    }
    exportPDF() {
        this._exportDataService
            .exportPDF(this.postings)
            .subscribe((data) => {
            // console.log(data);
        }, (error) => console.log(error), () => { });
    }
}
SAPDataTableComponent.ɵfac = function SAPDataTableComponent_Factory(t) { return new (t || SAPDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_posting_data_service__WEBPACK_IMPORTED_MODULE_4__["PostingDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_filter_service__WEBPACK_IMPORTED_MODULE_5__["DataFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_export_data_service__WEBPACK_IMPORTED_MODULE_6__["ExportDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
SAPDataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SAPDataTableComponent, selectors: [["app-sap-data-table"]], decls: 9, vars: 10, consts: [[1, "card", 2, "overflow", "scroll"], ["styleClass", "p-datatable-sm p-datatable-gridlines", "scrollHeight", "400px", 3, "value", "columns", "lazy", "loading", "showCurrentPageReport", "resizableColumns", "reorderableColumns"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "p-mb-4"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-file-excel", "pTooltip", "Xlsx", "tooltipPosition", "bottom", 1, "p-mr-2", "p-button-warning", 3, "click"], ["optionValue", "value", "optionLabel", "value", 1, "p-mr-2", 3, "options", "ngModel", "ngModelChange", "onChange"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-left", "tooltipPosition", "bottom", 1, "p-mr-2", 3, "disabled", "pTooltip", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-left", "tooltipPosition", "bottom", 1, "p-mr-2", 3, "disabled", "pTooltip", "click"], ["pInputText", "", "type", "number", "min", "1", 1, "pageNrInput", "p-mr-2", 3, "disabled", "value", "placeholder", "change"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-right", "tooltipPosition", "bottom", 1, "p-mr-2", 3, "disabled", "pTooltip", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-angle-double-right", "tooltipPosition", "bottom", 1, "p-mr-2", 3, "disabled", "pTooltip", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-filter-slash", "class", "p-ml-6 clearFilter", "tooltipPosition", "bottom", 3, "pTooltip", "click", 4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-filter-slash", "tooltipPosition", "bottom", 1, "p-ml-6", "clearFilter", 3, "pTooltip", "click"], [4, "ngFor", "ngForOf"], ["pResizableColumn", ""], ["pReorderableColumn", "", "pResizableColumn", "", "pSortableColumn", "col.header", 4, "ngFor", "ngForOf"], ["pResizableColumn", "", 4, "ngFor", "ngForOf"], ["pReorderableColumn", "", "pResizableColumn", "", "pSortableColumn", "col.header"], ["tooltipPosition", "bottom", 1, "p-text-center", 3, "pTooltip"], ["pInputText", "", "type", "text", 1, "filterInputCss", 3, "ngModel", "ngModelChange", "change"], ["tooltipPosition", "bottom", 1, "pi", "pi-filter", "p-ml-2", "iconColor", 3, "pTooltip", "click"], [3, "pReorderableRow"], ["pReorderableRowHandle", "", "pResizableColumn", "", "class", "ui-resizable-column", "aria-placeholder", "", 4, "ngFor", "ngForOf"], ["pReorderableRowHandle", "", "pResizableColumn", "", "aria-placeholder", "", 1, "ui-resizable-column"], ["colspan", "7"]], template: function SAPDataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SAPDataTableComponent_ng_template_4_Template, 14, 24, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SAPDataTableComponent_ng_template_5_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SAPDataTableComponent_ng_template_6_Template, 4, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SAPDataTableComponent_ng_template_7_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SAPDataTableComponent_ng_template_8_Template, 3, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.postings)("columns", ctx.cols)("lazy", true)("loading", ctx.loading)("showCurrentPageReport", true)("resizableColumns", true)("reorderableColumns", true);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ReorderableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["SortableColumn"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ReorderableRow"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["ReorderableRowHandle"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CurrencyPipe"]], styles: [".filterInputCss[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.iconColor[_ngcontent-%COMP%] {\n  color: #58585a;\n  cursor: pointer;\n}\n\n.pageNrInput[_ngcontent-%COMP%] {\n  width: 1%;\n}\n\n.clearFilter[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #58585a;\n}\n\n.ui-resizable-column[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzYXAtZGF0YS10YWJsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFVBQUE7QUFISjs7QUFLQTtFQUNJLGNBTlE7RUFPUixlQUFBO0FBRko7O0FBSUE7RUFDSSxTQUFBO0FBREo7O0FBR0E7RUFDSSxvQ0FBQTtFQUNBLGNBZFE7QUFjWjs7QUFHQTtFQUNJLDRCQUFBO0FBQUoiLCJmaWxlIjoic2FwLWRhdGEtdGFibGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeUNvbG9yOiAjZTc1MTEzXHJcbiRwcmltYXJ5SG92ZXI6ICNmNzUxMjNcclxuJHNlY29uZGFyeTogIzU4NTg1YVxyXG5cclxuLmZpbHRlcklucHV0Q3NzXHJcbiAgICB3aWR0aDogODAlXHJcblxyXG4uaWNvbkNvbG9yXHJcbiAgICBjb2xvcjogJHNlY29uZGFyeVxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4ucGFnZU5ySW5wdXRcclxuICAgIHdpZHRoOiAxJVxyXG4gICAgXHJcbi5jbGVhckZpbHRlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeVxyXG5cclxuXHJcbi51aS1yZXNpemFibGUtY29sdW1uXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/layout.component */ "0MCZ");



class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
    } }, directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "V3WG":
/*!*************************************************************!*\
  !*** ./src/app/admin/service/admin-registration.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegistrationService", function() { return AdminRegistrationService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AdminRegistrationService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'admin';
    }
    addUser(user) {
        console.log(user);
        return this._http.post(this._thisURL + '/user', user);
    }
}
AdminRegistrationService.ɵfac = function AdminRegistrationService_Factory(t) { return new (t || AdminRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminRegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminRegistrationService, factory: AdminRegistrationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VV3B":
/*!***************************************!*\
  !*** ./src/app/shared/model/users.ts ***!
  \***************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
class Users {
    constructor() {
        this.title = '';
        this.email = '';
        // role:  string ='';
        this.RoleId = 3;
        this.role = '';
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.mobileNumber = '';
        // contactPerson: string ='';
        this.street = '';
        this.housenumber = null;
        this.city = '';
        this.postCode = '';
        this.country = '';
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "8B9z");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _admin_import_import_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/import/import.component */ "OOXX");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/steps */ "KcHJ");
/* harmony import */ var _shared_unauth_unauth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/unauth/unauth.component */ "n8em");
/* harmony import */ var _shared_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/notfound/notfound.component */ "KTia");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/login/login.component */ "aI8T");
/* harmony import */ var _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/admin-registration/admin-registration.component */ "H6R5");
/* harmony import */ var _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/reset-password/reset-password.component */ "5MAU");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/layout/layout.component */ "0MCZ");
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/megamenu */ "BAkx");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/panelmenu */ "kSmT");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/tree */ "g9iH");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _shared_sap_data_table_sap_data_table_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared/sap-data-table/sap-data-table.component */ "SZFj");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _shared_reset_password_new_user_reset_password_new_user_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared/reset-password-new-user/reset-password-new-user.component */ "xrWM");
/* harmony import */ var _admin_procedure_registration_procedure_registration_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin/procedure-registration/procedure-registration.component */ "NHnn");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var _shared_analysis_amount_analysis_amount_analysis_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/analysis/amount-analysis/amount-analysis.component */ "33Nx");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _admin_organisation_registration_organisation_registration_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/organisation-registration/organisation-registration.component */ "aeB/");
/* harmony import */ var _shared_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shared/user-registration/user-registration.component */ "4TYO");
/* harmony import */ var _shared_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/user-edit/user-edit.component */ "bmWO");
/* harmony import */ var _shared_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shared/user-dashboard/user-dashboard.component */ "KZzQ");
/* harmony import */ var _shared_organisation_users_organisation_users_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./shared/organisation-users/organisation-users.component */ "Q1z1");
/* harmony import */ var _admin_procedure_edit_procedure_edit_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./admin/procedure-edit/procedure-edit.component */ "OT8l");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/selectbutton */ "5o1E");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./token.interceptor */ "Bx2m");



































































Object(_angular_common__WEBPACK_IMPORTED_MODULE_61__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_62___default.a, 'de');
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"], _auth_guard__WEBPACK_IMPORTED_MODULE_63__["AuthGuard"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useValue: 'de'
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_64__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_39__["DividerModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_51__["ChartModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_49__["CheckboxModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_40__["TableModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_41__["CalendarModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_42__["MultiSelectModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_46__["TooltipModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_38__["TreeModule"],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__["SelectButtonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_44__["InputTextModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_43__["ProgressBarModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]
                }
            }),
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_36__["SidebarModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_37__["ListboxModule"],
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_35__["PanelMenuModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_31__["MenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_21__["CardModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_52__["DynamicDialogModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_34__["ContextMenuModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_24__["AccordionModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_25__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_26__["MessageModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_30__["PasswordModule"],
            primeng_megamenu__WEBPACK_IMPORTED_MODULE_33__["MegaMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _admin_import_import_component__WEBPACK_IMPORTED_MODULE_11__["ImportComponent"],
        _shared_unauth_unauth_component__WEBPACK_IMPORTED_MODULE_13__["UnauthComponent"],
        _shared_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"],
        _shared_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
        _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_28__["AdminRegistrationComponent"],
        _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_29__["ResetPasswordComponent"],
        _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_32__["LayoutComponent"],
        _shared_sap_data_table_sap_data_table_component__WEBPACK_IMPORTED_MODULE_45__["SAPDataTableComponent"],
        _shared_reset_password_new_user_reset_password_new_user_component__WEBPACK_IMPORTED_MODULE_47__["ResetPasswordNewUserComponent"],
        _admin_procedure_registration_procedure_registration_component__WEBPACK_IMPORTED_MODULE_48__["ProcedureRegistrationComponent"],
        _shared_analysis_amount_analysis_amount_analysis_component__WEBPACK_IMPORTED_MODULE_50__["AmountAnalysisComponent"],
        _admin_organisation_registration_organisation_registration_component__WEBPACK_IMPORTED_MODULE_53__["OrganisationRegistrationComponent"],
        _shared_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_54__["UserRegistrationComponent"],
        _shared_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_55__["UserEditComponent"],
        _shared_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_56__["UserDashboardComponent"],
        _shared_organisation_users_organisation_users_component__WEBPACK_IMPORTED_MODULE_57__["OrganisationUsersComponent"],
        _admin_procedure_edit_procedure_edit_component__WEBPACK_IMPORTED_MODULE_58__["ProcedureEditComponent"],
        _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_60__["AdminDashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_39__["DividerModule"],
        primeng_steps__WEBPACK_IMPORTED_MODULE_12__["StepsModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_51__["ChartModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_49__["CheckboxModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_40__["TableModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_41__["CalendarModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_42__["MultiSelectModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_46__["TooltipModule"],
        primeng_tree__WEBPACK_IMPORTED_MODULE_38__["TreeModule"],
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_59__["SelectButtonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_44__["InputTextModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_43__["ProgressBarModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_36__["SidebarModule"],
        primeng_listbox__WEBPACK_IMPORTED_MODULE_37__["ListboxModule"],
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_35__["PanelMenuModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_31__["MenuModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_21__["CardModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_22__["ProgressSpinnerModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_52__["DynamicDialogModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_34__["ContextMenuModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_24__["AccordionModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_25__["MessagesModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_26__["MessageModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_30__["PasswordModule"],
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_33__["MegaMenuModule"]] }); })();


/***/ }),

/***/ "ZaBN":
/*!*******************************************************!*\
  !*** ./src/app/admin/service/role-service.service.ts ***!
  \*******************************************************/
/*! exports provided: RoleServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleServiceService", function() { return RoleServiceService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RoleServiceService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'admin';
    }
    getRoles() {
        return this._http.get(this._thisURL + '/roles');
    }
    getmanagerRoleId() {
        return this._http.get(this._thisURL + '/roles/getManagerId');
    }
    addProcedure(procedure) {
        return this._http.post(this._thisURL + '/procedures', procedure);
    }
    editProcedure(procedure) {
        return this._http.put(this._thisURL + '/procedures/edit', procedure);
    }
}
RoleServiceService.ɵfac = function RoleServiceService_Factory(t) { return new (t || RoleServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoleServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleServiceService, factory: RoleServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZiZ6":
/*!**************************************************!*\
  !*** ./src/app/shared/model/dataTableColumns.ts ***!
  \**************************************************/
/*! exports provided: dataTableColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTableColumns", function() { return dataTableColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class dataTableColumns {
    constructor(field, header) {
        this.field = field;
        this.header = header;
    }
    //   constructor(field: string, header: string, translateService: any) {
    //     this.field  = field;
    //     this.header = header;
    // }
    static getDataTableColumns(translateService) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = [];
            // await translateService.use(lang).toPromise();
            result.push(new dataTableColumns("client", yield translateService.get("Admin_Import.client").toPromise()));
            result.push(new dataTableColumns("companyCode", yield translateService.get("Admin_Import.companyCode").toPromise()));
            result.push(new dataTableColumns("documentNumber", yield translateService.get("Admin_Import.documentNumber").toPromise()));
            result.push(new dataTableColumns("documentDate", yield translateService.get("Admin_Import.documentDate").toPromise()));
            result.push(new dataTableColumns("accountType", yield translateService.get("Admin_Import.accountType").toPromise()));
            result.push(new dataTableColumns("contraAccountType", yield translateService.get("Admin_Import.contraAccountType").toPromise()));
            result.push(new dataTableColumns("accountNumber", yield translateService.get("Admin_Import.accountNumber").toPromise()));
            result.push(new dataTableColumns("accountName", yield translateService.get("Admin_Import.accountName").toPromise()));
            result.push(new dataTableColumns("contraAccountNumber", yield translateService.get("Admin_Import.contraAccountNumber").toPromise()));
            result.push(new dataTableColumns("contraAccountName", yield translateService.get("Admin_Import.contraAccountName").toPromise()));
            result.push(new dataTableColumns("balance", yield translateService.get("Admin_Import.balance").toPromise()));
            result.push(new dataTableColumns("debitAmount", yield translateService.get("Admin_Import.debitAmount").toPromise()));
            result.push(new dataTableColumns("creditAmount", yield translateService.get("Admin_Import.creditAmount").toPromise()));
            result.push(new dataTableColumns("stackNumber", yield translateService.get("Admin_Import.stackNumber").toPromise()));
            result.push(new dataTableColumns("recordNumber", yield translateService.get("Admin_Import.recordNumber").toPromise()));
            result.push(new dataTableColumns("fiscalYear", yield translateService.get("Admin_Import.fiscalYear").toPromise()));
            result.push(new dataTableColumns("taxAmount", yield translateService.get("Admin_Import.taxAmount").toPromise()));
            //result.push(new dataTableColumns("identificationNumber", await translateService.get("Admin_Import.identificationNumber").toPromise()));
            result.push(new dataTableColumns("executionDate", yield translateService.get("Admin_Import.executionDate").toPromise()));
            result.push(new dataTableColumns("dueDate", yield translateService.get("Admin_Import.dueDate").toPromise()));
            result.push(new dataTableColumns("ledgerId", yield translateService.get("Admin_Import.ledgerId").toPromise()));
            result.push(new dataTableColumns("assignment", yield translateService.get("Admin_Import.assignment").toPromise()));
            result.push(new dataTableColumns("reference", yield translateService.get("Admin_Import.reference").toPromise()));
            result.push(new dataTableColumns("documentType", yield translateService.get("Admin_Import.documentType").toPromise()));
            // result.push(new dataTableColumns("documentTypeNew", await translateService.get("Admin_Import.documentTypeNew").toPromise()));
            result.push(new dataTableColumns("postingDate", yield translateService.get("Admin_Import.postingDate").toPromise()));
            result.push(new dataTableColumns("GLAccountNumber", yield translateService.get("Admin_Import.GLAccountNumber").toPromise()));
            result.push(new dataTableColumns("GLAccountName", yield translateService.get("Admin_Import.GLAccountName").toPromise()));
            result.push(new dataTableColumns("debtorNumber", yield translateService.get("Admin_Import.debtorNumber").toPromise()));
            result.push(new dataTableColumns("debtorName", yield translateService.get("Admin_Import.debtorName").toPromise()));
            result.push(new dataTableColumns("creditorNumber", yield translateService.get("Admin_Import.creditorNumber").toPromise()));
            result.push(new dataTableColumns("creditorName", yield translateService.get("Admin_Import.creditorName").toPromise()));
            result.push(new dataTableColumns("contraAccountGLAccountNo", yield translateService.get("Admin_Import.contraAccountGLAccountNo").toPromise()));
            result.push(new dataTableColumns("contraAccountGLAccountName", yield translateService.get("Admin_Import.contraAccountGLAccountName").toPromise()));
            result.push(new dataTableColumns("contraAccountDebtorNo", yield translateService.get("Admin_Import.contraAccountDebtorNo").toPromise()));
            result.push(new dataTableColumns("contraAccountDebtorName", yield translateService.get("Admin_Import.contraAccountDebtorName").toPromise()));
            result.push(new dataTableColumns("contraAccountCreditorNo", yield translateService.get("Admin_Import.contraAccountCreditorNo").toPromise()));
            result.push(new dataTableColumns("contraAccountCreditorName", yield translateService.get("Admin_Import.contraAccountCreditorName").toPromise()));
            result.push(new dataTableColumns("debitCredit", yield translateService.get("Admin_Import.debitCredit").toPromise()));
            result.push(new dataTableColumns("balanceTransactionCurrency", yield translateService.get("Admin_Import.balanceTransactionCurrency").toPromise()));
            result.push(new dataTableColumns("documentNumber2", yield translateService.get("Admin_Import.documentNumber2").toPromise()));
            //  result.push(new dataTableColumns("bookingAmount", await translateService.get("Admin_Import.bookingAmount").toPromise()));
            result.push(new dataTableColumns("exchangeRate", yield translateService.get("Admin_Import.exchangeRate").toPromise()));
            result.push(new dataTableColumns("transactionCurrency", yield translateService.get("Admin_Import.transactionCurrency").toPromise()));
            result.push(new dataTableColumns("costCenter1", yield translateService.get("Admin_Import.costCenter1").toPromise()));
            result.push(new dataTableColumns("costCenter2", yield translateService.get("Admin_Import.costCenter2").toPromise()));
            result.push(new dataTableColumns("salesTaxKey", yield translateService.get("Admin_Import.salesTaxKey").toPromise()));
            result.push(new dataTableColumns("textPosting", yield translateService.get("Admin_Import.textPosting").toPromise()));
            result.push(new dataTableColumns("taxRate", yield translateService.get("Admin_Import.taxRate").toPromise()));
            result.push(new dataTableColumns("euTaxRate", yield translateService.get("Admin_Import.euTaxRate").toPromise()));
            // result.push(new dataTableColumns("costQuantityField", await translateService.get("Admin_Import.costQuantityField").toPromise()));
            result.push(new dataTableColumns("identifierBalanceCarryforward", yield translateService.get("Admin_Import.identifierBalanceCarryforward").toPromise()));
            result.push(new dataTableColumns("postingPeriod", yield translateService.get("Admin_Import.postingPeriod").toPromise()));
            //  result.push(new dataTableColumns("differentTaxationType", await translateService.get("Admin_Import.differentTaxationType").toPromise()));
            result.push(new dataTableColumns("documentLink", yield translateService.get("Admin_Import.documentLink").toPromise()));
            result.push(new dataTableColumns("cashDiscount", yield translateService.get("Admin_Import.cashDiscount").toPromise()));
            result.push(new dataTableColumns("textHeader", yield translateService.get("Admin_Import.textHeader").toPromise()));
            result.push(new dataTableColumns("postingKey", yield translateService.get("Admin_Import.postingKey").toPromise()));
            result.push(new dataTableColumns("taxAmountDebit", yield translateService.get("Admin_Import.taxAmountDebit").toPromise()));
            result.push(new dataTableColumns("taxAmountCredit", yield translateService.get("Admin_Import.taxAmountCredit").toPromise()));
            result.push(new dataTableColumns("applicationDocument", yield translateService.get("Admin_Import.applicationDocument").toPromise()));
            result.push(new dataTableColumns("applicationDate", yield translateService.get("Admin_Import.applicationDate").toPromise()));
            // result.push(new dataTableColumns("applicationDateNew", await translateService.get("Admin_Import.applicationDateNew").toPromise()));
            result.push(new dataTableColumns("generalReversal", yield translateService.get("Admin_Import.generalReversal").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation1", yield translateService.get("Admin_Import.typeDocumentInformation1").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation1", yield translateService.get("Admin_Import.contentDocumentInformation1").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation2", yield translateService.get("Admin_Import.typeDocumentInformation2").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation2", yield translateService.get("Admin_Import.contentDocumentInformation2").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation3", yield translateService.get("Admin_Import.typeDocumentInformation3").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation3", yield translateService.get("Admin_Import.contentDocumentInformation3").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation4", yield translateService.get("Admin_Import.typeDocumentInformation4").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation4", yield translateService.get("Admin_Import.contentDocumentInformation4").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation5", yield translateService.get("Admin_Import.typeDocumentInformation5").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation5", yield translateService.get("Admin_Import.contentDocumentInformation5").toPromise()));
            result.push(new dataTableColumns("typeDocumentInformation6", yield translateService.get("Admin_Import.typeDocumentInformation6").toPromise()));
            result.push(new dataTableColumns("contentDocumentInformation6", yield translateService.get("Admin_Import.contentDocumentInformation6").toPromise()));
            return result;
            // result.push(new dataTableColumns("client", "Mandant"));
            // result.push(new dataTableColumns("companyCode", "Buchungskreis"));
            // result.push(new dataTableColumns("documentNumber", "Belegnummer"));
            // result.push(new dataTableColumns("documentDate", "Belegdatum"));
            // result.push(new dataTableColumns("accountType","Kontotyp"));
            // result.push(new dataTableColumns("contraAccountType", "Gegenkontotyp"));
            // result.push(new dataTableColumns("accountNumber", "Kontonummer"));
            // result.push(new dataTableColumns("accountName", "Kontobezeichnung"));
            // result.push(new dataTableColumns("contraAccountNumber", "Kontonummer Gegenkonto"));
            // result.push(new dataTableColumns("contraAccountName", "Bezeichnung Gegenkonto"));
            // result.push(new dataTableColumns("balance", "Saldo EUR"));
            // result.push(new dataTableColumns("debitCredit", "Soll / Haben"));
            // result.push(new dataTableColumns("debitAmount", "Umsatz Soll EUR"));
            // result.push(new dataTableColumns("creditAmount", "Umsatz Haben EUR"));
            // result.push(new dataTableColumns("stackNumber", "Stapelnummer"));
            // result.push(new dataTableColumns("recordNumber", "Buchungssatznummer"));
            // result.push(new dataTableColumns("fiscalYear", "Geschäftsjahr"));
            // result.push(new dataTableColumns("identificationNumber", "identificationNumber"));
            // result.push(new dataTableColumns( "executionDate",  "Leistungsdatum"));
            // result.push(new dataTableColumns("dueDate", "Faelligkeitsdatum"));
            // result.push(new dataTableColumns("assignment", "Zuordnung"));
            // result.push(new dataTableColumns("reference", "Referenz"));
            // result.push(new dataTableColumns("documentType", "Belegart"));
            // result.push(new dataTableColumns("documentTypeNew", "Belegart angepasst"));
            // result.push(new dataTableColumns("postingDate", "Buchungsdatum"));
            // result.push(new dataTableColumns("GLAccountNumber", "Hauptbuchkonto"));
            // result.push(new dataTableColumns("GLAccountName", "Bezeichnung Hauptbuchkonto"));
            // result.push(new dataTableColumns("debtorNumber", "Debitorenkonto"));
            // result.push(new dataTableColumns("debtorName", "Bezeichnung Debitorenkonto"));
            // result.push(new dataTableColumns("creditorNumber", "Kreditorenkonto"));
            // result.push(new dataTableColumns("creditorName", "Bezeichnung Kreditorenkonto"));
            // result.push(new dataTableColumns("contraAccountGLAccountNo", "Sachkonto Gegenkonto"));
            // result.push(new dataTableColumns("contraAccountGLAccountName", "Bezeichnung Gegenkonto Sachkonto"));
            // result.push(new dataTableColumns("contraAccountDebtorNo", "Debitorenkonto Gegenkonto"));
            // result.push(new dataTableColumns("contraAccountDebtorName", "Bezeichnung Gegenkonto Debitor"));
            // result.push(new dataTableColumns("contraAccountCreditorNo", "Kreditorenkonto Gegenkonto"));
            // result.push(new dataTableColumns("contraAccountCreditorName", "Bezeichnung Gegenkonto Kreditor"));
            // result.push(new dataTableColumns("balanceTransactionCurrency","Saldo Belegwährung"));
            // result.push(new dataTableColumns("debitAmountTransactionCurrency", "Umsatz Soll Belegwährung"));
            // result.push(new dataTableColumns("creditAmountTransactionCurrency", "Umsatz Haben Belegwährung"));
            // result.push(new dataTableColumns("transactionCurrency", "Belegwährung"));
            // result.push(new dataTableColumns("documentNumber2", "Belegfeld 2"));
            // result.push(new dataTableColumns("bookingAmount", "bookingAmount"));
            // result.push(new dataTableColumns("exchangeRate", "Umrechnungskurs"));
            // result.push(new dataTableColumns("cashDiscount", "Skonto EUR"));
            // result.push(new dataTableColumns("costCenter1", "Kostenstelle 1"));
            // result.push(new dataTableColumns("costCenter2", "Kostenstelle 2"));
            // result.push(new dataTableColumns("salesTaxKey", "Umsatzsteuerschlüssel"));
            // result.push(new dataTableColumns("textPosting", "Buchungstext"));
            // result.push(new dataTableColumns("textHeader", "Belegkopftext"));
            // result.push(new dataTableColumns("postingKey", "Buchungsschlüssel"));
            // result.push(new dataTableColumns("taxRate", "Steuersatz"));
            // result.push(new dataTableColumns("euTaxRate", "EU Steuersatz"));
            // result.push(new dataTableColumns("taxAmount", "Steuerbetrag"));
            // result.push(new dataTableColumns("taxAmountDebit", "Steuerbetrag Soll"));
            // result.push(new dataTableColumns("taxAmountCredit", "Steuerbetrag Haben"));
            // result.push(new dataTableColumns("costQuantityField", "costQuantityField"));
            // result.push(new dataTableColumns("identifierBalanceCarryforward", "Kennung EB-Buchung"));
            // result.push(new dataTableColumns("postingPeriod", "Buchungsperiode"));
            // result.push(new dataTableColumns("differentTaxationType", "differentTaxationType"));
            // result.push(new dataTableColumns("applicationDocument", "Ausgleichsbeleg"));
            // result.push(new dataTableColumns("applicationDate", "Datum des Ausgleichs"));
            // result.push(new dataTableColumns("applicationDateNew", "Ausgleichsdatum angepasst"));
            // result.push(new dataTableColumns("ledgerId", "ID des Rechnungslegungsbereichs"));
            // result.push(new dataTableColumns("documentLink", "Beleglink"));
            // result.push(new dataTableColumns("generalReversal", "Generalumkehr (GU)"));
            // result.push(new dataTableColumns("typeDocumentInformation1", "Art der Beleginformation 1"));
            // result.push(new dataTableColumns("contentDocumentInformation1", "Inhalt der Beleginformation 1"));
            // result.push(new dataTableColumns("typeDocumentInformation2", "Art der Beleginformation 2"));
            // result.push(new dataTableColumns("contentDocumentInformation2", "Inhalt der Beleginformation 2"));
            // result.push(new dataTableColumns("typeDocumentInformation3", "Art der Beleginformation 3"));
            // result.push(new dataTableColumns("contentDocumentInformation3", "Inhalt der Beleginformation 3"));
            // result.push(new dataTableColumns("typeDocumentInformation4", "Art der Beleginformation 4"));
            // result.push(new dataTableColumns("contentDocumentInformation4", "Inhalt der Beleginformation 4"));
            // result.push(new dataTableColumns("typeDocumentInformation5", "Art der Beleginformation 5"));
            // result.push(new dataTableColumns("contentDocumentInformation5", "Inhalt der Beleginformation 5"));
            // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 6"));
            // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 6"));
            // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 7"));
            // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 7"));
            // result.push(new dataTableColumns("typeDocumentInformation6", "Art der Beleginformation 8"));
            // result.push(new dataTableColumns("contentDocumentInformation6", "Inhalt der Beleginformation 8"));
            // return result;
        });
    }
}


/***/ }),

/***/ "aI8T":
/*!*************************************************!*\
  !*** ./src/app/shared/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");








class LoginComponent {
    constructor(_messageService, _authService, _router, _translateService) {
        this._messageService = _messageService;
        this._authService = _authService;
        this._router = _router;
        this._translateService = _translateService;
        _translateService.addLangs(['de', 'en']);
        _translateService.setDefaultLang('de');
        const browserLang = _translateService.getBrowserLang();
        _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');
    }
    ngOnInit() {
        this._translateService.get('LOGIN.welcomeMsg').subscribe(elem => {
            // console.log(elem)
        });
    }
    login() {
        const data = {
            username: this.username,
            password: this.password
        };
        this._authService
            .login(data)
            .subscribe(res => {
            if (res && res.user.userinfo) {
                const userInfo = res.user.userinfo;
                const fullName = userInfo.firstname + ' ' + userInfo.lastname;
                const role = userInfo.Role;
                const username = userInfo.username;
                const OrganisationId = userInfo.OrganisationId;
                localStorage.setItem('username', username);
                localStorage.setItem('role', role);
                localStorage.setItem('full_name', fullName);
                localStorage.setItem('organisationId', OrganisationId);
                localStorage.setItem('token', res.token);
            }
            if (localStorage.getItem('role') === "Admin") {
                this._router.navigate(['/admin/dashboard']);
            }
            else {
                this._router.navigate(['/shared/user/procedures']);
            }
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    logout() {
        localStorage.clear();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 33, vars: 17, consts: [[1, "cardBody"], [1, "p-grid", "p-mt-6"], [1, "p-xs-10", "p-xs-offset-1", "p-md-4", "p-md-offset-4", "content"], [1, "pages-body", "login-page", "p-d-flex", "p-flex-column"], [1, "p-as-center", "p-mt-auto", "p-mb-auto"], [1, "pages-panel", "card", "p-d-flex", "p-flex-column"], [1, "pages-header", "p-px-3", "p-py-1", "loginLogoCss"], ["src", "assets/logo.jpg", "height", "100", "width", "100"], [1, "fontStyle"], [1, "pages-detail", "p-mb-6", "p-px-6", "fontStyle"], [1, "input-panel", "p-d-flex", "p-flex-column", "p-px-3"], [3, "ngSubmit"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-envelope"], [1, "p-float-label"], ["name", "username", "id", "email", "type", "text", "pinputText", "", "placeholder", "Email", 1, "p-inputtext", "p-component", "p-filled", 3, "ngModel", "ngModelChange"], [1, "p-inputgroup", "p-mt-5", "p-mb-6"], [1, "pi", "pi-lock"], ["name", "password", "id", "password", "type", "password", "pinputText", "", 1, "p-inputtext", "p-component", "p-filled", 3, "ngModel", "placeholder", "ngModelChange"], ["pButton", "", "type", "submit", 1, "fontStyle", "p-button-raised", "p-button-rounded", "buttonCss", "p-mb-4", "p-px-3", "p-button", "p-component", "p-ripple", "login-button", 3, "label"], [1, "linkCss", "p-mb-4", "fontStyle"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_16_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "LOGIN.welcomeWord"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "LOGIN.welcomeMsg"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, "LOGIN.passwordPlaceholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 13, "LOGIN.loginButton"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 15, "LOGIN.passowrdForgetLink"), "");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".p-grid[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.cardBody[_ngcontent-%COMP%] {\n  background-image: url('loginBackground1.jpg');\n  background-repeat: repeat-y;\n  background-size: cover;\n  display: block;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 700px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  border: 0 solid #f75123;\n  text-align: center;\n  margin-top: 9%;\n}\n\n.buttonCss[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.loginBackground[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n\n.linkCss[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: blue;\n  border: none;\n  opacity: 1;\n  color: #58585a;\n  float: right;\n}\n\n.linkCss[_ngcontent-%COMP%]:hover {\n  color: #313132 !important;\n}\n\n.logoCss[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n}\n\n.navbarCss[_ngcontent-%COMP%] {\n  background-color: #f75123;\n  height: 6rem;\n}\n\n.bodyColor[_ngcontent-%COMP%] {\n  background-color: #58585a;\n}\n\n.loginLogoCss[_ngcontent-%COMP%] {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n  margin-top: -3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.fontStyle[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFISjs7QUFLQTtFQUNJLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0kseUJBekRXO0VBMERYLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQTVEUTtBQWlFWjs7QUFIQTtFQUNJLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQU9KIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnlDb2xvcjogI2U3NTExM1xyXG4kcHJpbWFyeUhvdmVyOiAjZjc1MTIzXHJcbiRzZWNvbmRhcnk6ICM1ODU4NWFcclxuXHJcbi5wLWdyaWRcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudFxyXG5cclxuLmNhcmRCb2R5XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQxLmpwZycpXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXlcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIC8vIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIHRvcDogMFxyXG4gICAgbGVmdDogMFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIGJvdHRvbTogMFxyXG4gICAgbWluLWhlaWdodDogNzAwcHhcclxuXHJcbi5jb250ZW50XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIGJvcmRlcjogMCBzb2xpZCAjZjc1MTIzXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIG1hcmdpbi10b3A6IDklXHJcblxyXG4uYnV0dG9uQ3NzXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4ubG9naW5CYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBvcGFjaXR5OiAxXHJcblxyXG4ubGlua0Nzc1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICBjb2xvcjogYmx1ZVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgICBjb2xvcjogIzU4NTg1YVxyXG4gICAgZmxvYXQ6IHJpZ2h0XHJcblxyXG4ubGlua0Nzczpob3ZlclxyXG4gICAgY29sb3I6ICMzMTMxMzIgIWltcG9ydGFudFxyXG5cclxuLmxvZ29Dc3NcclxuICAgIHdpZHRoOiA1MCVcclxuICAgIGhlaWdodDogMTAwJVxyXG5cclxuLm5hdmJhckNzc1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlIb3ZlclxyXG4gICAgaGVpZ2h0OiA2cmVtXHJcblxyXG4uYm9keUNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5XHJcblxyXG4ubG9naW5Mb2dvQ3NzXHJcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtICFpbXBvcnRhbnRcclxuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW0gIWltcG9ydGFudFxyXG4gICAgbWFyZ2luLXRvcDogLTNyZW1cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuXHJcbi5mb250U3R5bGVcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC1zaXplOiAxNXB4Il19 */"] });


/***/ }),

/***/ "aeB/":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/organisation-registration/organisation-registration.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OrganisationRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationRegistrationComponent", function() { return OrganisationRegistrationComponent; });
/* harmony import */ var _shared_model_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/model/organisation */ "2eAT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/organisation.service */ "D6b3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");










function OrganisationRegistrationComponent_small_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.nameErrorMsg"));
} }
function OrganisationRegistrationComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.emailErrorMsg"), "");
} }
function OrganisationRegistrationComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.streetErrorMsg"));
} }
function OrganisationRegistrationComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.houseNrErrorMsg"));
} }
function OrganisationRegistrationComponent_small_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.cityErrorMsg"));
} }
function OrganisationRegistrationComponent_small_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.postcodeErrorMsg"));
} }
function OrganisationRegistrationComponent_small_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Organisation_Registration.countryErrorMsg"));
} }
function OrganisationRegistrationComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r14.organisation.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class OrganisationRegistrationComponent {
    constructor(_router, _messageService, _orgService, _translateService, _route) {
        this._router = _router;
        this._messageService = _messageService;
        this._orgService = _orgService;
        this._translateService = _translateService;
        this._route = _route;
        this.organisation = new _shared_model_organisation__WEBPACK_IMPORTED_MODULE_0__["Organisation"]();
    }
    ngOnInit() {
        this.id = +this._route.snapshot.paramMap.get('id');
        if (this.id > 0) {
            this._orgService
                .getOne(this.id)
                .subscribe(res => {
                if (res.length > 0) {
                    this.organisation = res[0];
                }
            }, err => {
                this._translateService.get("ErrorHandler").subscribe(elem => {
                    let errorMsg = "";
                    if (err.status === 400) {
                        errorMsg = elem.badRequest_400;
                    }
                    else if (err.status === 401) {
                        errorMsg = elem.unauthorized_401;
                    }
                    else if (err.status === 403) {
                        errorMsg = elem.forbidden_403;
                    }
                    else if (err.status === 404) {
                        errorMsg = elem.NotFound_404;
                    }
                    else if (err.status === 500) {
                        errorMsg = elem.internalServerError_500;
                    }
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR',
                        life: 10000,
                        detail: errorMsg
                    });
                });
            });
        }
    } // end of ngInit
    UploadHandler(event) {
        const selectedFiles = event.files;
        this.organisation.logo = selectedFiles[0];
    }
    submitHandler() {
        const formData = new FormData();
        formData.append('logo', this.organisation.logo);
        formData.append('data', JSON.stringify(this.organisation));
        // if organisation has an id value, then the action is update
        if (this.organisation && this.organisation.id > 0) {
            this._orgService
                .update(formData, this.organisation.id)
                .subscribe(res => {
                this._messageService.add({
                    severity: 'success',
                    summary: 'SUCCESS!',
                    detail: 'Organisation updated successfully!'
                });
            }, err => {
                this._translateService.get("ErrorHandler").subscribe(elem => {
                    let errorMsg = "";
                    if (err.status === 400) {
                        errorMsg = elem.badRequest_400;
                    }
                    else if (err.status === 401) {
                        errorMsg = elem.unauthorized_401;
                    }
                    else if (err.status === 403) {
                        errorMsg = elem.forbidden_403;
                    }
                    else if (err.status === 404) {
                        errorMsg = elem.NotFound_404;
                    }
                    else if (err.status === 500) {
                        errorMsg = elem.internalServerError_500;
                    }
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR',
                        life: 10000,
                        detail: errorMsg
                    });
                });
            });
        }
        else {
            this._orgService
                .insert(formData)
                .subscribe(res => {
                this.organisation = res;
                this._messageService.add({
                    severity: 'success',
                    summary: 'SUCCESS!',
                    detail: 'Organisation inserted successfully!'
                });
            }, err => {
                this._translateService.get("ErrorHandler").subscribe(elem => {
                    let errorMsg = "";
                    if (err.status === 400) {
                        errorMsg = elem.badRequest_400;
                    }
                    else if (err.status === 401) {
                        errorMsg = elem.unauthorized_401;
                    }
                    else if (err.status === 403) {
                        errorMsg = elem.forbidden_403;
                    }
                    else if (err.status === 404) {
                        errorMsg = elem.NotFound_404;
                    }
                    else if (err.status === 500) {
                        errorMsg = elem.internalServerError_500;
                    }
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR',
                        life: 10000,
                        detail: errorMsg
                    });
                });
            });
        } // end of if-else has an id
    } // end of submit handler function
    cancelHandle() {
        this._router.navigate(['/admin/dashboard']);
    }
}
OrganisationRegistrationComponent.ɵfac = function OrganisationRegistrationComponent_Factory(t) { return new (t || OrganisationRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_organisation_service__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
OrganisationRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrganisationRegistrationComponent, selectors: [["app-organisation-registration"]], decls: 83, vars: 52, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], ["for", "name", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["required", "", "name", "name", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "email", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "email", "type", "text", "pinputtext", "", "pattern", "^(\\D)+(\\w)*((\\.(\\w)+)?)+@(\\D)+(\\w)*((\\.(\\D)+(\\w)*)+)?(\\.)[a-z]{2,}$", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "street", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "street", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["for", "houseNr", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "houseNr", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["houseNr", "ngModel"], ["for", "city", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "city", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "postCode", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "postCode", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["postCode", "ngModel"], ["for", "country", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["required", "", "name", "country", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], ["for", "logo", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "logo", "name", "logo", "customUpload", "true", "mode", "basic", "accept", "image/*", "styleClass", "logoCss p-cancelButton ", 3, "chooseLabel", "auto", "uploadHandler"], [4, "ngIf"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], [1, "spanCss"], ["alt", "organisation logo", "width", "30", 3, "src"]], template: function OrganisationRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OrganisationRegistrationComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_13_listener($event) { return ctx.organisation.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OrganisationRegistrationComponent_small_15_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_21_listener($event) { return ctx.organisation.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OrganisationRegistrationComponent_small_23_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_29_listener($event) { return ctx.organisation.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OrganisationRegistrationComponent_small_31_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_37_listener($event) { return ctx.organisation.houseNr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OrganisationRegistrationComponent_small_39_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_45_listener($event) { return ctx.organisation.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, OrganisationRegistrationComponent_small_47_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_53_listener($event) { return ctx.organisation.postCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, OrganisationRegistrationComponent_small_55_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrganisationRegistrationComponent_Template_input_ngModelChange_61_listener($event) { return ctx.organisation.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, OrganisationRegistrationComponent_small_63_Template, 3, 3, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p-fileUpload", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("uploadHandler", function OrganisationRegistrationComponent_Template_p_fileUpload_uploadHandler_69_listener($event) { return ctx.UploadHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, OrganisationRegistrationComponent_div_71_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrganisationRegistrationComponent_Template_button_click_74_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 28, "Organisation_Registration.header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 30, "Organisation_Registration.name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 32, "Organisation_Registration.email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 34, "Organisation_Registration.street"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 36, "Organisation_Registration.houseNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.houseNr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 38, "Organisation_Registration.city"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 40, "Organisation_Registration.postcode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.postCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 42, "Organisation_Registration.country"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organisation.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.invalid && _r12.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 44, "Organisation_Registration.logo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("chooseLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 46, "Organisation_Registration.searchButton"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("auto", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.organisation.id && ctx.organisation.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 48, "Organisation_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 50, "Organisation_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_9__["FileUpload"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n\n.buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n\n.logoCss[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff0f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmdhbmlzYXRpb24tcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1EseUNBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQyw4QkFBQTtFQUNELDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUVKIiwiZmlsZSI6Im9yZ2FuaXNhdGlvbi1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhbkNzcyBcclxuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZjBmNCAgXHJcbiAgICAgICAgY29sb3I6ICNmNzUxMjMgICBcclxuICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnRcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcblxyXG4uYnV0dG9uQ3NzXHJcbiAgICB3aWR0aDogNDAlXHJcbiAgICBtYXJnaW4tbGVmdDogMzAlXHJcblxyXG4ubG9nb0Nzc1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwZjQgIl19 */"] });


/***/ }),

/***/ "bmWO":
/*!*********************************************************!*\
  !*** ./src/app/shared/user-edit/user-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _model_titles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/titles */ "JC4I");
/* harmony import */ var _model_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/users */ "VV3B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "HabH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "arFO");










class UserEditComponent {
    constructor(_router, _messageService, _userService, _translateService) {
        this._router = _router;
        this._messageService = _messageService;
        this._userService = _userService;
        this._translateService = _translateService;
        this.titles = _model_titles__WEBPACK_IMPORTED_MODULE_0__["Titles"].getTitles();
        this.roles = [{ name: 'Manager', value: 2 }, { name: 'User', value: 3 }];
    }
    ngOnInit() {
        this.userModel = new _model_users__WEBPACK_IMPORTED_MODULE_1__["Users"]();
        this.userModel.id = +localStorage.getItem('selectedUser_userId');
        this.userModel.RoleId = +localStorage.getItem('selectedUser_roleId');
        this.userModel.username = localStorage.getItem('selectedUser_username');
        this.userModel.email = localStorage.getItem('selectedUser_email');
        this.userModel.title = localStorage.getItem('selectedUser_title');
        this.userModel.firstname = localStorage.getItem('selectedUser_firstname');
        this.userModel.lastname = localStorage.getItem('selectedUser_lastname');
        this.userModel.mobileNumber = localStorage.getItem('selectedUser_mobileNr');
        this.userModel.street = localStorage.getItem('selectedUser_street');
        this.userModel.housenumber = parseFloat(localStorage.getItem('selectedUser_houseNr'));
        this.userModel.postCode = localStorage.getItem('selectedUser_postcode');
        this.userModel.city = localStorage.getItem('selectedUser_city');
        this.userModel.country = localStorage.getItem('selectedUser_country');
    }
    submitHandler() {
        this._userService.editUser(this.userModel)
            .subscribe(res => {
            // console.dir('done: ' + res);
            this._messageService.add({
                severity: 'success',
                summary: 'Updated successfully!',
                detail: 'Updated successfully'
            });
        }, err => {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                let errorMsg = "";
                if (err.status === 400) {
                    errorMsg = elem.badRequest_400;
                }
                else if (err.status === 401) {
                    errorMsg = elem.unauthorized_401;
                }
                else if (err.status === 403) {
                    errorMsg = elem.forbidden_403;
                }
                else if (err.status === 404) {
                    errorMsg = elem.NotFound_404;
                }
                else if (err.status === 500) {
                    errorMsg = elem.internalServerError_500;
                }
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR',
                    life: 10000,
                    detail: errorMsg
                });
            });
        });
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/users']);
        localStorage.removeItem("selectedUser_userId");
        localStorage.removeItem("selectedUser_roleId");
        localStorage.removeItem("selectedUser_username");
        localStorage.removeItem("selectedUser_email");
        localStorage.removeItem("selectedUser_title");
        localStorage.removeItem("selectedUser_firstname");
        localStorage.removeItem("selectedUser_lastname");
        localStorage.removeItem("selectedUser_mobileNr");
        localStorage.removeItem("selectedUser_street");
        localStorage.removeItem("selectedUser_houseNr");
        localStorage.removeItem("selectedUser_postcode");
        localStorage.removeItem("selectedUser_city");
        localStorage.removeItem("selectedUser_country");
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["app-user-edit"]], decls: 108, vars: 64, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card"], [1, "p-text-center"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], [1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], [1, "p-col-12", "p-md-10"], ["name", "role", "optionValue", "value", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "placeholder", "options", "showClear", "ngModel", "ngModelChange"], ["role", "ngModel"], [1, "ng-tns-c42-167", "p-dropdown", "p-component"], [1, "ng-tns-c42-167", "p-dropdown-label", "p-inputtext", "p-placeholder", "p-dropdown-label-empty", "ng-star-inserted"], ["name", "title", "optionValue", "name", "optionLabel", "name", 1, "ng-tns-c42-167", "ng-pristine", "ng-valid", "ng-touched", 3, "options", "showClear", "ngModel", "ngModelChange"], ["title1", "ngModel"], ["for", "firstname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "firstname", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], ["for", "lastname", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "lastname", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["for", "email", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "email", "type", "text", "pinputtext", "", "pattern", "^(\\D)+(\\w)*((\\.(\\w)+)?)+@(\\D)+(\\w)*((\\.(\\D)+(\\w)*)+)?(\\.)[a-z]{2,}$", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "username", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "username", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "mobileNumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "mobileNumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["for", "street", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "street", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["street", "ngModel"], ["for", "housenumber", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "housenumber", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["housenumber", "ngModel"], ["for", "city", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "city", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["for", "postCode", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "postCode", "type", "number", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["postCode", "ngModel"], ["for", "country", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0"], ["name", "country", "type", "text", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserEditComponent_Template_form_ngSubmit_6_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p-dropdown", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.userModel.RoleId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p-dropdown", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_p_dropdown_ngModelChange_23_listener($event) { return ctx.userModel.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_32_listener($event) { return ctx.userModel.firstname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_39_listener($event) { return ctx.userModel.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_46_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_53_listener($event) { return ctx.userModel.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_60_listener($event) { return ctx.userModel.mobileNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_67_listener($event) { return ctx.userModel.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_74_listener($event) { return ctx.userModel.housenumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_81_listener($event) { return ctx.userModel.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_88_listener($event) { return ctx.userModel.postCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_95_listener($event) { return ctx.userModel.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserEditComponent_Template_button_click_99_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 32, "User_Registration.editHeader"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 34, "User_Registration.role"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 36, "User_Registration.rolePlaceHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.roles)("showClear", true)("ngModel", ctx.userModel.RoleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 38, "User_Registration.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.titles)("showClear", true)("ngModel", ctx.userModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 40, "User_Registration.firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 42, "User_Registration.lastname"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 44, "User_Registration.email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](51, 46, "User_Registration.username"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 48, "User_Registration.mobileNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](65, 50, "User_Registration.street"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](72, 52, "User_Registration.houseNr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.housenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](79, 54, "User_Registration.city"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](86, 56, "User_Registration.postcode"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.postCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 58, "User_Registration.country"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](102, 60, "User_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](107, 62, "User_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".buttonCss[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: 30%;\n}\n\n.spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWVkaXQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNRLHlDQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0VBQ0MsOEJBQUE7RUFDRCwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6InVzZXItZWRpdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Dc3NcclxuICAgIHdpZHRoOiA0MCVcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCVcclxuXHJcbi5zcGFuQ3NzIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAjZmZmMGY0ICBcclxuICAgICAgICBjb2xvcjogI2Y3NTEyMyAgIFxyXG4gICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnRcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuIl19 */"] });


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    //baseUrl: 'http://localhost:8000/api/',
    baseUrl: 'http://217.160.71.196:8000/api/'
};


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "n8em":
/*!***************************************************!*\
  !*** ./src/app/shared/unauth/unauth.component.ts ***!
  \***************************************************/
/*! exports provided: UnauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthComponent", function() { return UnauthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class UnauthComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnauthComponent.ɵfac = function UnauthComponent_Factory(t) { return new (t || UnauthComponent)(); };
UnauthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthComponent, selectors: [["app-unauth"]], decls: 3, vars: 3, template: function UnauthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Unauth.errorMsg"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmF1dGguY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ "p/sU":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/data-filter.service.ts ***!
  \*******************************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataFilterService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'shared';
    }
    get(params) {
        return this._http.get(this._thisURL + '/posting', { params: params });
    }
    getFirstFilteredData(filterValue, filterField, offset, limit) {
        return this._http.get(this._thisURL + '/getFirstFilteredData/' + filterValue + "/" + filterField + "/" + offset + '/' + limit);
    }
    getSecondFilteredData(filterValue1, filterField1, filterValue2, filterField2, offset, limit) {
        return this._http.get(this._thisURL + '/getSecondFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + offset + '/' + limit);
    }
    getThirdFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, offset, limit) {
        return this._http.get(this._thisURL + '/getThirdFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + offset + '/' + limit);
    }
    getFirthFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, offset, limit) {
        return this._http.get(this._thisURL + '/getFirthFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + filterValue4 + "/" + filterField4 + "/" + offset + '/' + limit);
    }
    getFifthFilteredData(filterValue1, filterField1, filterValue2, filterField2, filterValue3, filterField3, filterValue4, filterField4, filterValue5, filterField5, offset, limit) {
        return this._http.get(this._thisURL + '/getFifthFilteredData/' + filterValue1 + "/" + filterField1 + "/" + filterValue2 + "/" + filterField2 + "/" + filterValue3 + "/" + filterField3 + "/" + filterValue4 + "/" + filterField4 + "/" + filterValue5 + "/" + filterField5 + "/" + offset + '/' + limit);
    }
}
DataFilterService.ɵfac = function DataFilterService_Factory(t) { return new (t || DataFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataFilterService, factory: DataFilterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rhDE":
/*!************************************************!*\
  !*** ./src/app/admin/service/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UsersService {
    constructor(_http) {
        this._http = _http;
        this._thisURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'admin';
    }
    getManagers() {
        return this._http.get(this._thisURL + '/getManagers');
    }
    getProcedures(userId) {
        return this._http.get(this._thisURL + '/users/' + userId + '/procedures');
    }
    getUsers(userId) {
        return this._http.get(this._thisURL + '/users/' + userId + '/users');
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "t/uz":
/*!********************************************!*\
  !*** ./src/app/shared/model/procedures.ts ***!
  \********************************************/
/*! exports provided: Procedures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Procedures", function() { return Procedures; });
class Procedures {
    constructor() {
        this.name = '';
        this.data = false;
        this.analysis = false;
        this.dataSource = '';
    }
    // constructor(organisationId: number, name: string, data: boolean,analysis: boolean,dataSource: string) {
    //     this.organisationId = organisationId;
    //     this.name = name;
    //     this.data = data;
    //     this.analysis = analysis;
    //     this.dataSource = dataSource;
    // }
    static setProcedure(procedureModel) {
        let result = procedureModel;
        return result;
    }
}


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(_authSrvc, _router) {
        this._authSrvc = _authSrvc;
        this._router = _router;
        this.authorized = false;
    }
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    canActivate(route) {
        this.authorized = false;
        if (this._authSrvc.isLoggedIn()) {
            const currentUserRole = this._authSrvc.getRole();
            if (route.data.roles) {
                for (let i = 0; i < route.data.roles.length; i++) {
                    if (route.data.roles[i] === currentUserRole) {
                        this.authorized = true;
                        break;
                    }
                }
                // console.log(this.authorized);
                if (this.authorized === false) {
                    // console.log('unauthorized from authGuard!');
                    this._router.navigate(['/unauthorized']);
                }
                return this.authorized;
            }
            else {
                return true;
            }
        }
        else {
            this._router.navigate(['/unauthorized']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _admin_import_import_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/import/import.component */ "OOXX");
/* harmony import */ var _shared_unauth_unauth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/unauth/unauth.component */ "n8em");
/* harmony import */ var _shared_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/notfound/notfound.component */ "KTia");
/* harmony import */ var _shared_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/login/login.component */ "aI8T");
/* harmony import */ var _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/reset-password/reset-password.component */ "5MAU");
/* harmony import */ var _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin-registration/admin-registration.component */ "H6R5");
/* harmony import */ var _admin_organisation_registration_organisation_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/organisation-registration/organisation-registration.component */ "aeB/");
/* harmony import */ var _shared_sap_data_table_sap_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/sap-data-table/sap-data-table.component */ "SZFj");
/* harmony import */ var _shared_reset_password_new_user_reset_password_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/reset-password-new-user/reset-password-new-user.component */ "xrWM");
/* harmony import */ var _admin_procedure_registration_procedure_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/procedure-registration/procedure-registration.component */ "NHnn");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _shared_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/user-registration/user-registration.component */ "4TYO");
/* harmony import */ var _shared_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/user-edit/user-edit.component */ "bmWO");
/* harmony import */ var _admin_procedure_edit_procedure_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/procedure-edit/procedure-edit.component */ "OT8l");
/* harmony import */ var _shared_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/user-dashboard/user-dashboard.component */ "KZzQ");
/* harmony import */ var _shared_organisation_users_organisation_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/organisation-users/organisation-users.component */ "Q1z1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _shared_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    // {
    //   path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    //     { path: 'import', component: ImportComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
    //   ]
    // },
    { path: 'admin/admin/add', component: _admin_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_7__["AdminRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/organisation/add', component: _admin_organisation_registration_organisation_registration_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/organisation/edit/:id', component: _admin_organisation_registration_organisation_registration_component__WEBPACK_IMPORTED_MODULE_8__["OrganisationRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/procedure/add', component: _admin_procedure_registration_procedure_registration_component__WEBPACK_IMPORTED_MODULE_11__["ProcedureRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/procedure/edit', component: _admin_procedure_edit_procedure_edit_component__WEBPACK_IMPORTED_MODULE_15__["ProcedureEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/dashboard', component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["AdminDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'admin/import', component: _admin_import_import_component__WEBPACK_IMPORTED_MODULE_2__["ImportComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin'] } },
    { path: 'shared/user/add', component: _shared_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_13__["UserRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin', 'Manager'] } },
    { path: 'shared/user/edit', component: _shared_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin', 'Manager'] } },
    { path: 'shared/user/procedures', component: _shared_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["UserDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin', 'Manager'] } },
    { path: 'shared/user/users', component: _shared_organisation_users_organisation_users_component__WEBPACK_IMPORTED_MODULE_17__["OrganisationUsersComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], data: { roles: ['Admin', 'Manager'] } },
    { path: 'shared/data', component: _shared_sap_data_table_sap_data_table_component__WEBPACK_IMPORTED_MODULE_9__["SAPDataTableComponent"] },
    { path: 'unauthorized', component: _shared_unauth_unauth_component__WEBPACK_IMPORTED_MODULE_3__["UnauthComponent"] },
    { path: 'resetPassword', component: _shared_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] },
    { path: 'reset/:token', component: _shared_reset_password_new_user_reset_password_new_user_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordNewUserComponent"] },
    { path: '**', component: _shared_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xrWM":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/reset-password-new-user/reset-password-new-user.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ResetPasswordNewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordNewUserComponent", function() { return ResetPasswordNewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResetPasswordNewUserComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Password_Reset.passwordErrorMsg"));
} }
function ResetPasswordNewUserComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Password_Reset.passwordConfirmErrorMsg"));
} }
class ResetPasswordNewUserComponent {
    constructor(_messageService, _authService, _router, _route, _translateService) {
        this._messageService = _messageService;
        this._authService = _authService;
        this._router = _router;
        this._route = _route;
        this._translateService = _translateService;
        this.passwordObj = {
            selectedPassword: "",
            confirmedPassword: "",
        };
    }
    ngOnInit() {
        this._translateService.setDefaultLang('de');
        this.token = this._route.snapshot.paramMap.get('token');
        // console.log(this.token)
    }
    submitHandle() {
        console.log(this.passwordObj);
        if (this.passwordObj.selectedPassword === this.passwordObj.confirmedPassword) {
            let password = this.passwordObj.selectedPassword;
            this._authService
                .resetPassword({ password: password, token: this.token })
                .subscribe(res => {
                // if(res.message === "successfully"){
                this._router.navigate(['/']);
                // } else {
                //   this._messageService.add({
                //     severity: 'error',
                //     summary: 'ERROR!',
                //     detail: "password could not be reset"
                //   });
                // }
            }, err => {
                this._translateService.get("ErrorHandler").subscribe(elem => {
                    let errorMsg = "";
                    if (err.status === 400) {
                        errorMsg = elem.badRequest_400;
                    }
                    else if (err.status === 401) {
                        errorMsg = elem.unauthorized_401;
                    }
                    else if (err.status === 403) {
                        errorMsg = elem.forbidden_403;
                    }
                    else if (err.status === 404) {
                        errorMsg = elem.NotFound_404;
                    }
                    else if (err.status === 500) {
                        errorMsg = elem.internalServerError_500;
                    }
                    this._messageService.add({
                        severity: 'error',
                        summary: 'ERROR',
                        life: 10000,
                        detail: errorMsg
                    });
                });
            });
        }
        else {
            this._translateService.get("ErrorHandler").subscribe(elem => {
                this._messageService.add({
                    severity: 'error',
                    summary: 'ERROR!',
                    detail: elem.passwordsMatch
                });
            });
        }
    }
    cancelHandle() {
        this._router.navigate(['/shared/user/procedures']);
    }
}
ResetPasswordNewUserComponent.ɵfac = function ResetPasswordNewUserComponent_Factory(t) { return new (t || ResetPasswordNewUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ResetPasswordNewUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordNewUserComponent, selectors: [["app-reset-password-new-user"]], decls: 36, vars: 19, consts: [[1, "p-xs-10", "p-xs-offset-1", "p-md-8", "p-md-offset-2"], [1, "card", "cardBody"], [1, "content"], [1, "p-text-center", "p-mt-6"], [1, "p-fluid", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field", "p-grid"], ["for", "selectedPassword", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0", "p-ml-2"], [1, "p-col-12", "p-md-8"], ["required", "", "name", "selectedPassword", "type", "password", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["selectedPassword", "ngModel"], ["class", "spanCss ", 4, "ngIf"], ["for", "confirmedPassword", 1, "p-col-12", "p-mb-2", "p-md-2", "p-mb-md-0", "p-ml-2"], ["required", "", "name", "confirmedPassword", "type", "password", "pinputtext", "", 1, "p-inputtext", "p-component", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngModel", "ngModelChange"], ["confirmedPassword", "ngModel"], [1, "p-xs-col-5", "p-mr-4"], ["pbutton", "", "pripple", "", "type", "button", "label", "cancel", 1, "p-mt-4", "p-ripple", "p-button", "p-component", "p-cancelButton", 3, "click"], [1, "p-button-label"], [1, "p-xs-col-5"], ["pbutton", "", "pripple", "", "type", "submit", "label", "Submit", 1, "p-mt-4", "p-ripple", "p-button", "p-component"], [1, "spanCss"]], template: function ResetPasswordNewUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordNewUserComponent_Template_form_ngSubmit_7_listener() { return ctx.submitHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordNewUserComponent_Template_input_ngModelChange_14_listener($event) { return ctx.passwordObj.selectedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetPasswordNewUserComponent_small_16_Template, 3, 3, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordNewUserComponent_Template_input_ngModelChange_22_listener($event) { return ctx.passwordObj.confirmedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ResetPasswordNewUserComponent_small_24_Template, 3, 3, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordNewUserComponent_Template_button_click_27_listener() { return ctx.cancelHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "Password_Reset.header"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "Password_Reset.password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordObj.selectedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, "Password_Reset.passwordConfirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordObj.confirmedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 15, "Organisation_Registration.cancelButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 17, "Organisation_Registration.confirmButton"), " ");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".cardBody[_ngcontent-%COMP%] {\n  background-image: url('loginBackground1.jpg');\n  background-size: cover;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  border: 0 solid #f75123;\n  text-align: center;\n  margin-top: 9%;\n  margin-left: 20%;\n  margin-right: 20%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 302px;\n  padding: 25px;\n}\n\n.submitButtonCss[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #ffffff;\n}\n\n.inputCss[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancelButtonCss[_ngcontent-%COMP%] {\n  background-color: #58585a !important;\n  width: 100%;\n  color: #ffffff;\n}\n\n.spanCss[_ngcontent-%COMP%] {\n  font-family: Georgia, Verdana, sans-serif;\n  font-style: italic;\n  color: #f75123;\n  color-padding: 10px !important;\n  border-radius: 0 !important;\n  position: relative;\n  display: inline-block !important;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNldC1wYXNzd29yZC1uZXctdXNlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNRLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0MsOEJBQUE7RUFDRCwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQU1SIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLW5ldy11c2VyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRCb2R5XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQxLmpwZycpXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBsZWZ0OiAwXHJcbiAgICByaWdodDogMFxyXG4gICAgYm90dG9tOiAwXHJcblxyXG4uY29udGVudFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICBib3JkZXI6IDAgc29saWQgI2Y3NTEyM1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBtYXJnaW4tdG9wOiA5JVxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCVcclxuICAgIGxlZnQ6IDBcclxuICAgIHJpZ2h0OiAwXHJcbiAgICBib3R0b206IDBcclxuICAgIG1pbi1oZWlnaHQ6IDMwMnB4XHJcbiAgICBwYWRkaW5nOiAyNXB4XHJcblxyXG4uc3VibWl0QnV0dG9uQ3NzXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgY29sb3I6ICNmZmZmZmZcclxuXHJcbi5pbnB1dENzc1xyXG4gICAgd2lkdGg6IDEwMCVcclxuXHJcbi5jYW5jZWxCdXR0b25Dc3NcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODU4NWEgIWltcG9ydGFudFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGNvbG9yOiAjZmZmZmZmXHJcblxyXG4uc3BhbkNzcyBcclxuICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICAgIGNvbG9yOiAjZjc1MTIzICAgXHJcbiAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map