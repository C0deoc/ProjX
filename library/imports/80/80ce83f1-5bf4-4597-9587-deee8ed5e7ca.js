"use strict";
cc._RF.push(module, '80ce8PxW/RFl5WH3u6O1efK', 'LevelDataLoader');
// Script/Levels/LevelDataLoader.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LevelData_1 = require("./LevelData");
var LevelDataLoader = /** @class */ (function () {
    function LevelDataLoader() {
    }
    LevelDataLoader.prototype.loadLevelData = function (levelId, callback, callbackObj) {
        cc.loader.loadRes('level' + levelId, function (err, jsonAsset) {
            if (err) {
                cc.log("loadLevel data error , reason : " + err.message);
            }
            var obj = jsonAsset.json;
            var lData = new LevelData_1.LevelData();
            lData.Parse(obj);
            callback.call(callbackObj, lData);
        });
    };
    LevelDataLoader.instance = new LevelDataLoader();
    return LevelDataLoader;
}());
exports.LevelDataLoader = LevelDataLoader;

cc._RF.pop();