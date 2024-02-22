const describeCity = (city: string, country?: string) => {
  console.log(`${city} is in ${country || "Pakistan"}.`);
};

describeCity("Karachi");
describeCity("Larkana");
describeCity("Paris", "France");
