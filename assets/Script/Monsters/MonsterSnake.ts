import MonsterBase from "./MonsterBase"

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonsterSnake extends MonsterBase{

    start() {
    }

    init(){
        cc.log("MonsterSnake init")
    }

    attack(){
        cc.log("MonsterSnake attack")

    }

    protected updateFire(dt){
        
    }
}
