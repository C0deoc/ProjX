const { ccclass, property } = cc._decorator;

@ccclass
export default class HeroComp extends cc.Component {

    @property(cc.Integer)
    HP = 100

    @property(cc.Float)
    MoveSpeed = 100

    @property(cc.Node)
    HeroObj: cc.Node = null

    TargetDirection: cc.Vec2 = cc.Vec2.ZERO


    start() {
        this.initListeners()
    }

    update(dt) {
        this.node.x += this.TargetDirection.x
        // this.node.y += this.TargetDirection.y
    }

    private initListeners() {
        // this.btn.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    moveByDirection(dire: cc.Vec2) {
        if (dire.equals(cc.Vec2.ZERO)) {
            this.TargetDirection = cc.Vec2.ZERO
            return
        }
        dire = dire.normalizeSelf().mul(this.MoveSpeed)
        this.TargetDirection = dire
        let targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI
        if (dire.x < 0)
            targetAngel *= -1
        this.HeroObj.angle = targetAngel
    }

    lookAtPosition(obj: cc.Vec2) {
        let dire = obj.sub(this.node.position)
        let targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI
        if (dire.x < 0)
            targetAngel *= -1
        this.HeroObj.angle = targetAngel
    }
}
