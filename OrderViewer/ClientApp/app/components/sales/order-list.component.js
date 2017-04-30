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
var sales_service_1 = require("../../services/sales.service");
var OrderListComponent = (function () {
    function OrderListComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    OrderListComponent.prototype.search = function () {
        var _this = this;
        this.service
            .getOrders(this.pageNumber, this.pageSize, this.salesOrderNumber, this.customerName)
            .subscribe(function (result) {
            _this.result = result.json();
        });
    };
    OrderListComponent.prototype.details = function (order) {
        this.router.navigate(["/order-detail/", order.salesOrderID]);
    };
    return OrderListComponent;
}());
OrderListComponent = __decorate([
    core_1.Component({
        selector: "order-list",
        template: require("./order-list.component.html")
    }),
    __metadata("design:paramtypes", [router_1.Router, sales_service_1.SalesService])
], OrderListComponent);
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map