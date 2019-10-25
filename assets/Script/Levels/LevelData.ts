import { ConstDefine } from "../ConstDefine"
import MonsterSnake from "../Monsters/MonsterSnake"
import { MonsterData } from "../Monsters/MonsterData"


export class LevelData {
    static CurData: LevelData = new LevelData()

    lv: number
    name: string
    monsters: MonsterData[] = []

    Parse(jsonObj: any) {
        this.lv = jsonObj.lv
        this.name = jsonObj.name
        for (let i = 0; i < jsonObj.monsters.length; i++) {
            let obj = jsonObj.monsters[i]
            let mons = new MonsterData()
            mons.type = jsonObj.type
            mons.hp = obj.hp
            mons.initX = obj.x
            mons.initY = obj.y
            this.monsters.push(mons)
        }
    }
}
