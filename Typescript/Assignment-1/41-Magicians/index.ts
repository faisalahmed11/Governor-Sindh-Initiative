const magicianNames = ["magician1", "magician2", "magician3"];

const showMagicians = (magicians: string[]) => {
  magicians.forEach((magician) => {
    console.log(magician);
  });
};

showMagicians(magicianNames);
