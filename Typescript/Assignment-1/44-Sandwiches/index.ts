const makeSandwich = (sandwichItems: string[]) => {
  console.log(`your sandwich will have`);
  sandwichItems.forEach((sandwichItem) => {
    console.log(sandwichItem);
  });
};

makeSandwich(["bread", "egg", "lettuce", "cheese"]);
makeSandwich(["tomatos", "butter", "bread"]);
makeSandwich(["salad", "onion", "cheese"]);
