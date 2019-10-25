import { LevelData } from "./LevelData";

export class LevelDataLoader {
    static instance: LevelDataLoader = new LevelDataLoader()

    loadLevelData(levelId: number, callback: Function, callbackObj) {
        cc.loader.loadRes('level' + levelId, function (err, jsonAsset) {
            if(err){
                cc.log("loadLevel data error , reason : " + err.message)
            }
            let obj = jsonAsset.json
            let lData = new LevelData()
            lData.Parse(obj)
            callback.call(callbackObj, lData)
        });
    }
}