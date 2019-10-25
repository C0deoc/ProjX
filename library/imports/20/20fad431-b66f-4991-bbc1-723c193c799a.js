"use strict";
cc._RF.push(module, '20fadQxtm9JkbvBcjwZPHma', 'HandComp');
// Script/HandComp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConstDefine_1 = require("./ConstDefine");
var HandComp = /** @class */ (function (_super) {
    __extends(HandComp, _super);
    function HandComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        _this.handBg = null;
        _this.hand = null;
        _this.distance = 100;
        _this.stayX = 0;
        _this.stayY = -400;
        return _this;
    }
    HandComp.prototype.start = function () {
        this.initListeners();
    };
    HandComp.prototype.registerController = function (controller) {
        this.controller = controller;
    };
    HandComp.prototype.initListeners = function () {
        this.btn.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    };
    HandComp.prototype.onTouchStart = function (param) {
        var location = this.node.convertToNodeSpaceAR(param.getLocation());
        this.handBg.position = location;
        this.hand.position = location;
        if (this.controller)
            this.controller.node.emit(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchStart);
    };
    HandComp.prototype.onTouchEnd = function (param) {
        if (this.controller)
            this.controller.node.emit(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchEnd);
        this.handBg.x = this.stayX;
        this.handBg.y = this.stayY;
        this.hand.x = this.stayX;
        this.hand.y = this.stayY;
    };
    HandComp.prototype.onTouchMove = function (param) {
        var location = this.node.convertToNodeSpaceAR(param.getLocation());
        var direct = location.sub(this.handBg.position);
        if (direct.mag() > this.distance)
            direct = direct.normalizeSelf().mul(this.distance);
        location = direct.add(this.handBg.position);
        this.hand.position = location;
        if (this.controller)
            this.controller.node.emit(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchMove, direct);
    };
    __decorate([
        property(cc.Button)
    ], HandComp.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], HandComp.prototype, "handBg", void 0);
    __decorate([
        property(cc.Node)
    ], HandComp.prototype, "hand", void 0);
    __decorate([
        property(cc.Integer)
    ], HandComp.prototype, "distance", void 0);
    __decorate([
        property(cc.Integer)
    ], HandComp.prototype, "stayX", void 0);
    __decorate([
        property(cc.Integer)
    ], HandComp.prototype, "stayY", void 0);
    HandComp = __decorate([
        ccclass
    ], HandComp);
    return HandComp;
}(cc.Component));
exports.default = HandComp;

cc._RF.pop();