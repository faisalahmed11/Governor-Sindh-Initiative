var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames = ["magician1", "magician2", "magician3"];
var showMagicians = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var makeGreat = function (magicians) {
    magicians.forEach(function (magician, index, array) {
        array[index] = "great ".concat(magician);
    });
    return magicians;
};
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
showMagicians(magicianNames);
showMagicians(greatMagicians);
