export default class Utils {
    
    public static GetObjectString(myObject: any) {
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
    }

    public static dump(myObject: Object, name: string = "") {
        console.log(name + ":{" + this.GetObjectString(myObject) + "\n}");
    }
};
