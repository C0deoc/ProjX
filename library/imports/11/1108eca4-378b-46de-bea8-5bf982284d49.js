"use strict";
cc._RF.push(module, '1108eykN4tG3r6oW/mCKE1J', 'LevelData');
// Script/Levels/LevelData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MonsterData_1 = require("../Monsters/MonsterData");
var LevelData = /** @class */ (function () {
    function LevelData() {
        this.monsters = [];
    }
    LevelData.prototype.Parse = function (jsonObj) {
        this.lv = jsonObj.lv;
        this.name = jsonObj.name;
        for (var i = 0; i < jsonObj.monsters.length; i++) {
            var obj = jsonObj.monsters[i];
            var mons = new MonsterData_1.MonsterData();
            mons.type = jsonObj.type;
            mons.hp = obj.hp;
            mons.initX = obj.x;
            mons.initY = obj.y;
            this.monsters.push(mons);
        }
    };
    LevelData.CurData = new LevelData();
    return LevelData;
}());
exports.LevelData = LevelData;

cc._RF.pop();