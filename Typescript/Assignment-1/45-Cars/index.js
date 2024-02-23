var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model) {
    // const car: Car = {
    //   manufacturer,
    //   model,
    // };
    var optionalDetails = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalDetails[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    optionalDetails.forEach(function (obj) {
        var _a;
        car = __assign(__assign({}, car), (_a = {}, _a[obj.key] = obj.value, _a));
    });
    // Add optional details using spread operator
    // car. ...optionalDetails;
    return car;
}
// Example usage
var myCar = createCar("Toyota", "Camry", { key: "color", value: "red" }, { key: "feature", value: "sunroof" });
console.log(myCar);
