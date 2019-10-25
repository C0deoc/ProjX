"use strict";
cc._RF.push(module, '1d4c71Q6gpNx7ztQQzC6aJb', 'ConstDefine');
// Script/ConstDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConstDefine;
(function (ConstDefine) {
    var EventType = /** @class */ (function () {
        function EventType() {
        }
        EventType.Event_Hand_TouchStart = "Event_Hand_TouchStart";
        EventType.Event_Hand_TouchMove = "Event_Hand_TouchMove";
        EventType.Event_Hand_TouchEnd = "Event_Hand_TouchEnd";
        EventType.Event_LevelData_LoadDone = "Event_LevelData_LoadDone";
        return EventType;
    }());
    ConstDefine.EventType = EventType;
    var MonsterType;
    (function (MonsterType) {
        MonsterType[MonsterType["Snake"] = 0] = "Snake";
    })(MonsterType = ConstDefine.MonsterType || (ConstDefine.MonsterType = {}));
})(ConstDefine = exports.ConstDefine || (exports.ConstDefine = {}));

cc._RF.pop();