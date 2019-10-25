"use strict";
cc._RF.push(module, '04f89YQr1hDXLEVNaSgnKYK', 'Utils');
// Script/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.GetObjectString = function (myObject) {
        var s = "";
        if (typeof (myObject) == "object") {
            for (var property in myObject) {
                if (typeof (myObject[property]) == "function")
                    s = s + "\n " + property + ":【func】";
                else
                    s = s + "\n " + property + ":" + myObject[property];
            }
        }
        else
            s = myObject;
        return s;
    };
    Utils.dump = function (myObject, name) {
        if (name === void 0) { name = ""; }
        console.log(name + ":{" + this.GetObjectString(myObject) + "\n}");
    };
    return Utils;
}());
exports.default = Utils;
;

cc._RF.pop();