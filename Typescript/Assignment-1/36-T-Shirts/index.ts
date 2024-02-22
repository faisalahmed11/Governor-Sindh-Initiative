type Size = "small" | "medium" | "large" | "extra large";

const makeShirts = (size: Size, message: string) => {
  console.log(
    `Shirt size: ${size}
Shirt message: ${message}`
  );
};

makeShirts("medium", "Pakistan Zindabad!");
