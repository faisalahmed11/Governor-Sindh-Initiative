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
};
makeGreat(magicianNames);
showMagicians(magicianNames);
