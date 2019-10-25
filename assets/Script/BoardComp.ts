const { ccclass, property } = cc._decorator;

import GameController from "./GameController";
import { ConstDefine } from "./ConstDefine";
import MonsterBase from "./Monsters/MonsterBase";
import { LevelData } from "./Levels/LevelData";


@ccclass
export default class BoardComp extends cc.Component {

    controller: GameController

    TargetSpeedY: number = 0

    @property(cc.Node)
    MonsContainer: cc.Node = null

    Monsters: MonsterBase[] = []




    start() {
        this.initListeners()
    }

    update(dt) {
        this.node.y += this.TargetSpeedY
    }

    registerController(controller: GameController) {
        this.controller = controller
    }

    /// 创建战场
    setBoard(lData: LevelData) {
        this.MonsContainer.removeAllChildren(true)
        
    }

    private initListeners() {
        // this.node.on(ConstDefine.EventType.Event_Board_Move, this.onBoardMove, this);
    }

    private initResources() {
    }

    moveBySpeedY(speedY: number) {
        this.TargetSpeedY = speedY
    }
}
