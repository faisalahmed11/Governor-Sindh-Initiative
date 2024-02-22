var makeShirts = function (size, message) {
    message = message || "I Love Pakistan!";
    console.log();
    console.log("Shirt size: ".concat(size, "\nShirt message: ").concat(message));
};
makeShirts("large");
makeShirts("medium");
makeShirts("small", "Pakistan Zindabad!");
