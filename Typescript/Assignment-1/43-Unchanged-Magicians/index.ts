const magicianNames = ["magician1", "magician2", "magician3"];

const showMagicians = (magicians: string[]): void => {
  magicians.forEach((magician) => {
    console.log(magician);
  });
};

const makeGreat = (magicians: string[]): string[] => {
  magicians.forEach((magician, index, array) => {
    array[index] = `great ${magician}`;
  });
  return magicians;
};
const greatMagicians = makeGreat([...magicianNames]);
showMagicians(magicianNames);
showMagicians(greatMagicians);
