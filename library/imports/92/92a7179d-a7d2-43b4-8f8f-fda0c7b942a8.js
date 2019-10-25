"use strict";
cc._RF.push(module, '92a71edp9JDtI+P/aDHuUKo', 'GameController');
// Script/GameController.ts

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
var HeroComp_1 = require("./HeroComp");
var HandComp_1 = require("./HandComp");
var ConstDefine_1 = require("./ConstDefine");
var BoardComp_1 = require("./BoardComp");
var LevelDataLoader_1 = require("./Levels/LevelDataLoader");
var LevelData_1 = require("./Levels/LevelData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Hero = null;
        _this.Hand = null;
        _this.Board = null;
        return _this;
    }
    GameController.prototype.start = function () {
        this.initListeners();
        LevelDataLoader_1.LevelDataLoader.instance.loadLevelData(1001, this.onLevelDataLoadDone, this);
    };
    /// 关卡数据加载完成，传递给 BoardComp 加载关卡场景
    GameController.prototype.onLevelDataLoadDone = function (lData) {
        LevelData_1.LevelData.CurData = lData;
        this.Board.setBoard(lData);
    };
    GameController.prototype.initListeners = function () {
        this.Hand.registerController(this);
        this.node.on(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchStart, this.onHandTouchStart, this);
        this.node.on(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchEnd, this.onHandTouchEnd, this);
        this.node.on(ConstDefine_1.ConstDefine.EventType.Event_Hand_TouchMove, this.onHandTouchMove, this);
    };
    GameController.prototype.onHandTouchStart = function () {
    };
    GameController.prototype.onHandTouchEnd = function () {
        cc.log("fire !!!");
        this.moveHeroByDirection(cc.Vec2.ZERO);
    };
    GameController.prototype.onHandTouchMove = function (dire) {
        this.moveHeroByDirection(dire);
    };
    GameController.prototype.moveHeroByDirection = function (dire) {
        this.Hero.moveByDirection(dire);
        this.Board.moveBySpeedY(-this.Hero.TargetDirection.y);
    };
    __decorate([
        property(HeroComp_1.default)
    ], GameController.prototype, "Hero", void 0);
    __decorate([
        property(HandComp_1.default)
    ], GameController.prototype, "Hand", void 0);
    __decorate([
        property(BoardComp_1.default)
    ], GameController.prototype, "Board", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();