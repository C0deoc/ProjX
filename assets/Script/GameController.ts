import HeroComp from "./HeroComp";
import HandComp from "./HandComp";
import { ConstDefine } from "./ConstDefine";
import BoardComp from "./BoardComp";
import { LevelDataLoader } from "./Levels/LevelDataLoader";
import { LevelData } from "./Levels/LevelData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameController extends cc.Component {

    @property(HeroComp)
    Hero: HeroComp = null

    @property(HandComp)
    Hand: HandComp = null

    @property(BoardComp)
    Board: BoardComp = null


    start() {
        this.initListeners()
        LevelDataLoader.instance.loadLevelData(1001, this.onLevelDataLoadDone, this)
    }

    /// 关卡数据加载完成，传递给 BoardComp 加载关卡场景
    onLevelDataLoadDone(lData:LevelData) {
        LevelData.CurData = lData
        this.Board.setBoard(lData)
    }

    private initListeners() {
        this.Hand.registerController(this)
        this.node.on(ConstDefine.EventType.Event_Hand_TouchStart, this.onHandTouchStart, this);
        this.node.on(ConstDefine.EventType.Event_Hand_TouchEnd, this.onHandTouchEnd, this);
        this.node.on(ConstDefine.EventType.Event_Hand_TouchMove, this.onHandTouchMove, this);

    }

    private onHandTouchStart() {
    }

    private onHandTouchEnd() {
        cc.log("fire !!!")
        this.moveHeroByDirection(cc.Vec2.ZERO)
    }

    private onHandTouchMove(dire: cc.Vec2) {
        this.moveHeroByDirection(dire)
    }


    public moveHeroByDirection(dire: cc.Vec2) {
        this.Hero.moveByDirection(dire)
        this.Board.moveBySpeedY(-this.Hero.TargetDirection.y)
    }
}
