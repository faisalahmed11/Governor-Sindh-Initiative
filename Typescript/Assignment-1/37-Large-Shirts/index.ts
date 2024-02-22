type Size = "small" | "medium" | "large" | "extra large";

const makeShirts = (size: Size, message?: string) => {
  message = message || "I Love Pakistan!";
  console.log();
  console.log(
    `Shirt size: ${size}
Shirt message: ${message}`
  );
};

makeShirts("large");
makeShirts("medium");
makeShirts("small", "Pakistan Zindabad!");
