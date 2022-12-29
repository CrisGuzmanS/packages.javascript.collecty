"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var src_1 = __importDefault(require("../src"));
var NumberCollection = /** @class */ (function (_super) {
    __extends(NumberCollection, _super);
    function NumberCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberCollection.prototype.item = function (item) {
        return new Number(item);
    };
    return NumberCollection;
}(src_1["default"]));
var Number = /** @class */ (function () {
    function Number(item) {
        this.item = item;
    }
    return Number;
}());
test('test one is one', function () {
    var collection = new NumberCollection([1, 2, 3, 4, 5]);
    expect(collection.count()).toBe(5);
});
