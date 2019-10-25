"use strict";
cc._RF.push(module, 'f8156YcPAhC/Zwiwt+34yV7', 'HeroComp');
// Script/HeroComp.ts

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
var HeroComp = /** @class */ (function (_super) {
    __extends(HeroComp, _super);
    function HeroComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HP = 100;
        _this.MoveSpeed = 100;
        _this.HeroObj = null;
        _this.TargetDirection = cc.Vec2.ZERO;
        return _this;
    }
    HeroComp.prototype.start = function () {
        this.initListeners();
    };
    HeroComp.prototype.update = function (dt) {
        this.node.x += this.TargetDirection.x;
        // this.node.y += this.TargetDirection.y
    };
    HeroComp.prototype.initListeners = function () {
        // this.btn.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    HeroComp.prototype.moveByDirection = function (dire) {
        if (dire.equals(cc.Vec2.ZERO)) {
            this.TargetDirection = cc.Vec2.ZERO;
            return;
        }
        dire = dire.normalizeSelf().mul(this.MoveSpeed);
        this.TargetDirection = dire;
        var targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI;
        if (dire.x < 0)
            targetAngel *= -1;
        this.HeroObj.angle = targetAngel;
    };
    HeroComp.prototype.lookAtPosition = function (obj) {
        var dire = obj.sub(this.node.position);
        var targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI;
        if (dire.x < 0)
            targetAngel *= -1;
        this.HeroObj.angle = targetAngel;
    };
    __decorate([
        property(cc.Integer)
    ], HeroComp.prototype, "HP", void 0);
    __decorate([
        property(cc.Float)
    ], HeroComp.prototype, "MoveSpeed", void 0);
    __decorate([
        property(cc.Node)
    ], HeroComp.prototype, "HeroObj", void 0);
    HeroComp = __decorate([
        ccclass
    ], HeroComp);
    return HeroComp;
}(cc.Component));
exports.default = HeroComp;

cc._RF.pop();