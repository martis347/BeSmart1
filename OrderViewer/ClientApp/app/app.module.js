"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_universal_1 = require("angular2-universal");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var order_list_component_1 = require("./components/sales/order-list.component");
var order_detail_component_1 = require("./components/sales/order-detail.component");
var product_subcategory_list_component_1 = require("./components/production/product-subcategory-list.component");
var sales_service_1 = require("./services/sales.service");
var production_service_1 = require("./services/production.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
            navmenu_component_1.NavMenuComponent,
            order_list_component_1.OrderListComponent,
            order_detail_component_1.OrderDetailComponent,
            product_subcategory_list_component_1.ProductSubcategoryListComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: "", redirectTo: "home", pathMatch: "full" },
                { path: "home", component: home_component_1.HomeComponent },
                { path: "order", component: order_list_component_1.OrderListComponent },
                { path: "order-detail/:id", component: order_detail_component_1.OrderDetailComponent },
                { path: "productSubcategory", component: product_subcategory_list_component_1.ProductSubcategoryListComponent },
                { path: "**", redirectTo: "home" }
            ])
        ],
        providers: [
            sales_service_1.SalesService,
            production_service_1.ProductionService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map