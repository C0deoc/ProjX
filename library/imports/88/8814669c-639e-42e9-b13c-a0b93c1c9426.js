"use strict";
cc._RF.push(module, '88146acY55C6bE8oLk8HJQm', 'BoardComp');
// Script/BoardComp.ts

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
var BoardComp = /** @class */ (function (_super) {
    __extends(BoardComp, _super);
    function BoardComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TargetSpeedY = 0;
        _this.MonsContainer = null;
        _this.Monsters = [];
        return _this;
    }
    BoardComp.prototype.start = function () {
        this.initListeners();
    };
    BoardComp.prototype.update = function (dt) {
        this.node.y += this.TargetSpeedY;
    };
    BoardComp.prototype.registerController = function (controller) {
        this.controller = controller;
    };
    /// 创建战场
    BoardComp.prototype.setBoard = function (lData) {
        this.MonsContainer.removeAllChildren(true);
    };
    BoardComp.prototype.initListeners = function () {
        // this.node.on(ConstDefine.EventType.Event_Board_Move, this.onBoardMove, this);
    };
    BoardComp.prototype.initResources = function () {
    };
    BoardComp.prototype.moveBySpeedY = function (speedY) {
        this.TargetSpeedY = speedY;
    };
    __decorate([
        property(cc.Node)
    ], BoardComp.prototype, "MonsContainer", void 0);
    BoardComp = __decorate([
        ccclass
    ], BoardComp);
    return BoardComp;
}(cc.Component));
exports.default = BoardComp;

cc._RF.pop();