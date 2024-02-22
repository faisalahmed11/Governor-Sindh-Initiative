var makeSandwich = function (sandwichItems) {
    console.log("your sandwich will have");
    sandwichItems.forEach(function (sandwichItem) {
        console.log(sandwichItem);
    });
};
makeSandwich(["bread", "egg", "lettuce", "cheese"]);
makeSandwich(["tomatos", "butter", "bread"]);
makeSandwich(["salad", "onion", "cheese"]);
