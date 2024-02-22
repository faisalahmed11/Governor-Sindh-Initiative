const magicianNames = ["magician1", "magician2", "magician3"];

const showMagicians = (magicians: string[]): void => {
  magicians.forEach((magician) => {
    console.log(magician);
  });
};

const makeGreat = (magicians: string[]): void => {
  magicians.forEach((magician, index, array) => {
    array[index] = `great ${magician}`;
  });
};
makeGreat(magicianNames);
showMagicians(magicianNames);
