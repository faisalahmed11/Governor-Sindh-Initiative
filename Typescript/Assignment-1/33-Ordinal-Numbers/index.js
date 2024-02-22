[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (number) {
    //   switch (number) {
    //     case 1:
    //       console.log(number, `st`);
    //       break;
    //     case 2:
    //       console.log(number, `nd`);
    //       break;
    //     case 3:
    //       console.log(number, `rd`);
    //       break;
    //     case 4:
    //     case 5:
    //     case 6:
    //     case 7:
    //     case 8:
    //     case 9:
    //       console.log(number, `th`);
    //       break;
    //   }
    number === 1
        ? console.log("1st")
        : number === 2
            ? console.log("2nd")
            : number === 3
                ? console.log("3rd")
                : console.log(number, "th");
});
