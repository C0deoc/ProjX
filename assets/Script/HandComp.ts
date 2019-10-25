const { ccclass, property } = cc._decorator;

import Utils from "./Utils";
import GameController from "./GameController";
import { ConstDefine } from "./ConstDefine";


@ccclass
export default class HandComp extends cc.Component {

    @property(cc.Button)
    btn: cc.Button = null;

    @property(cc.Node)
    handBg: cc.Node = null;

    @property(cc.Node)
    hand: cc.Node = null;

    @property(cc.Integer)
    distance = 100

    @property(cc.Integer)
    stayX = 0
    @property(cc.Integer)
    stayY = -400

    controller: GameController

    start() {
        this.initListeners()
    }

    registerController(controller: GameController) {
        this.controller = controller

    }

    private initListeners() {
        this.btn.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.btn.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private onTouchStart(param: cc.Event.EventTouch) {
        let location = this.node.convertToNodeSpaceAR(param.getLocation())
        this.handBg.position = location
        this.hand.position = location

        if (this.controller)
            this.controller.node.emit(ConstDefine.EventType.Event_Hand_TouchStart);
    }

    private onTouchEnd(param: cc.Event.EventTouch) {
        if (this.controller)
            this.controller.node.emit(ConstDefine.EventType.Event_Hand_TouchEnd);
        this.handBg.x = this.stayX
        this.handBg.y = this.stayY
        this.hand.x = this.stayX
        this.hand.y = this.stayY
    }

    private onTouchMove(param: cc.Event.EventTouch) {
        let location = this.node.convertToNodeSpaceAR(param.getLocation())
        let direct = location.sub(this.handBg.position)
        if (direct.mag() > this.distance)
            direct = direct.normalizeSelf().mul(this.distance)
        location = direct.add(this.handBg.position)
        this.hand.position = location
        if (this.controller)
            this.controller.node.emit(ConstDefine.EventType.Event_Hand_TouchMove, direct);
    }
}
