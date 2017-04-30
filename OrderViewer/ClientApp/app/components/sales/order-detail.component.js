"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var sales_service_1 = require("../../services/sales.service");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(route, location, router, service) {
        this.route = route;
        this.location = location;
        this.router = router;
        this.service = service;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    OrderDetailComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params["id"];
            _this.service.getOrder(id).subscribe(function (result) {
                _this.result = result.json();
            });
        });
    };
    OrderDetailComponent.prototype.backToList = function () {
        this.router.navigate(["/order"]);
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    core_1.Component({
        selector: "order-detail",
        template: require("./order-detail.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, common_1.Location, router_1.Router, sales_service_1.SalesService])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map