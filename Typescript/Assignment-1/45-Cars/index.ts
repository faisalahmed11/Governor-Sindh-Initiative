interface Car {
  manufacturer: string;
  model: string;
}

function createCar(
  manufacturer: string,
  model: string,
  ...optionalDetails: { key: string; value: any }[]
): {} {
  let car = { manufacturer, model };
  optionalDetails.forEach((obj) => {
    car = { ...car, ...{ [obj.key]: obj.value } };
  });

  return car;
}

// Example usage
const myCar = createCar(
  "Toyota",
  "Camry",
  { key: "color", value: "red" },
  { key: "feature", value: "sunroof" }
);
console.log(myCar);
