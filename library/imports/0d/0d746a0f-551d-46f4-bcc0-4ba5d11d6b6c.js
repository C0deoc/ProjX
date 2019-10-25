"use strict";
cc._RF.push(module, '0d746oPVR1G9LzAS6XRHWts', 'MonsterBase');
// Script/Monsters/MonsterBase.ts

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
var ConstDefine_1 = require("../ConstDefine");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MonsterBase = /** @class */ (function (_super) {
    __extends(MonsterBase, _super);
    function MonsterBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Type = ConstDefine_1.ConstDefine.MonsterType.Snake;
        _this.HP = 100;
        _this.MoveSpeed = 100;
        _this.Obj = null;
        _this.TargetDirection = cc.Vec2.ZERO;
        return _this;
    }
    MonsterBase.prototype.start = function () {
        this.init();
        this.attack();
    };
    MonsterBase.prototype.update = function (dt) {
        this.updatePosition(dt);
        this.updateFire(dt);
    };
    MonsterBase.prototype.updateFire = function (dt) {
    };
    MonsterBase.prototype.updatePosition = function (dt) {
        this.node.x += this.TargetDirection.x;
        this.node.y += this.TargetDirection.y;
    };
    MonsterBase.prototype.moveByDirection = function (dire) {
        dire = dire.normalizeSelf().mul(this.MoveSpeed);
        this.TargetDirection = dire;
        if (this.TargetDirection == cc.Vec2.ZERO)
            return;
        var targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI;
        if (dire.x < 0)
            targetAngel *= -1;
        this.Obj.angle = targetAngel;
    };
    MonsterBase.prototype.lookAtPosition = function (obj) {
        var dire = obj.sub(this.node.position);
        var targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI;
        if (dire.x < 0)
            targetAngel *= -1;
        this.Obj.angle = targetAngel;
    };
    MonsterBase.prototype.init = function () {
        cc.log("MonsterBase init");
    };
    MonsterBase.prototype.attack = function () {
        cc.log("MonsterBase attack");
    };
    __decorate([
        property(cc.Integer)
    ], MonsterBase.prototype, "HP", void 0);
    __decorate([
        property(cc.Float)
    ], MonsterBase.prototype, "MoveSpeed", void 0);
    __decorate([
        property(cc.Node)
    ], MonsterBase.prototype, "Obj", void 0);
    MonsterBase = __decorate([
        ccclass
    ], MonsterBase);
    return MonsterBase;
}(cc.Component));
exports.default = MonsterBase;

cc._RF.pop();