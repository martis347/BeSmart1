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
var http_1 = require("@angular/http");
var SalesService = (function () {
    function SalesService(http) {
        this.http = http;
    }
    SalesService.prototype.getOrders = function (pageNumber, pageSize, salesOrderNumber, customerName) {
        var url = "/api/Sales/Order?" +
            "pageNumber=" + (pageNumber ? pageNumber : 1) +
            "&pageSize=" + (pageSize ? pageSize : 10) +
            "&salesOrderNumber=" + (salesOrderNumber ? salesOrderNumber : "") +
            "&customerName=" + (customerName ? customerName : "");
        return this.http.get(url);
    };
    SalesService.prototype.getOrder = function (id) {
        return this.http.get("/api/Sales/Order/" + id);
    };
    return SalesService;
}());
SalesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map