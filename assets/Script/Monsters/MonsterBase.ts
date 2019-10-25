import { ConstDefine } from "../ConstDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonsterBase extends cc.Component {

    Type:ConstDefine.MonsterType = ConstDefine.MonsterType.Snake

    @property(cc.Integer)
    HP = 100

    @property(cc.Float)
    MoveSpeed = 100

    @property(cc.Node)
    Obj:cc.Node = null

    TargetDirection: cc.Vec2 = cc.Vec2.ZERO


    start() {
        this.init()
        this.attack()
    }

    update(dt) {
        this.updatePosition(dt)
        this.updateFire(dt)
    }

    protected updateFire(dt){

    }

    protected updatePosition(dt){
        this.node.x += this.TargetDirection.x
        this.node.y += this.TargetDirection.y
    }

    moveByDirection(dire: cc.Vec2) {
        dire = dire.normalizeSelf().mul(this.MoveSpeed)
        this.TargetDirection = dire
        if (this.TargetDirection == cc.Vec2.ZERO)
            return
        let targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI
        if (dire.x < 0)
            targetAngel *= -1
        this.Obj.angle = targetAngel
    }

    lookAtPosition(obj:cc.Vec2){
        let dire = obj.sub(this.node.position)
        let targetAngel = -dire.angle(cc.Vec2.UP) * 180 / Math.PI
        if (dire.x < 0)
            targetAngel *= -1
        this.Obj.angle = targetAngel
    }

    protected init(){
        cc.log("MonsterBase init")
    }

    attack(){
        cc.log("MonsterBase attack")

    }
}
