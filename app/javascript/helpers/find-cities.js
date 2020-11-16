const findCities = (cityData, form) => {
  const chosenCities = cityData.filter(
    (city) =>
      city.housing >= form.housing &&
      city.costofliving >= form.costofliving &&
      city.startups >= form.startups &&
      city.capital >= form.capital &&
      city.travel >= form.travel &&
      city.commute >= form.commute &&
      city.business >= form.business &&
      city.safety >= form.safety &&
      city.healthcare >= form.healthcare &&
      city.education >= form.education &&
      city.environment >= form.environment &&
      city.economy >= form.economy &&
      city.taxation >= form.taxation &&
      city.internetaccess >= form.internetaccess &&
      city.leisure >= form.leisure &&
      city.tolerance >= form.tolerance &&
      city.outdoors >= form.outdoors
  );

  const sortedCities = chosenCities.sort((a, b) => {
    return b.cityscore - a.cityscore;
  });

  sortedCities[0] != null ? (form["city1"] = sortedCities[0].name) : "";
  sortedCities[1] != null ? (form["city2"] = sortedCities[1].name) : "";
  sortedCities[2] != null ? (form["city3"] = sortedCities[2].name) : "";

  return form;
};

export default findCities;
