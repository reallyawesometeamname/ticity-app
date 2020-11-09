const findCities = (cityData, form, searchKey, searchValue) => {
  let topCity = "";
  let secondCity = "";
  let thirdCity = "";
  let topValue = 0.0;
  let secondValue = 0.0;
  let thirdValue = 0.0;
  // traversing through the cityData array of hashes
  cityData.filter((value) => {
    // for each hash table in the array, check all the key:value pairs
    for (var key in value) {
      // if the hash key matches our score category
      if (key == searchKey) {
        // then check the hash value vs our expected score value, if the hash value is greater, then we have a valid city, begin the sort routine of the top 3 cities
        if (value[key] > searchValue) {
          if (value[key] > topValue) {
            thirdValue = secondValue;
            secondValue = topValue;
            topValue = value[key];
            thirdCity = secondCity;
            secondCity = topCity;
            topCity = value.name;
          } else if (value[key] > secondValue) {
            thirdValue = secondValue;
            secondValue = value[key];
            thirdCity = secondCity;
            secondCity = value.name;
          } else if (value[key] > thirdValue) {
            thirdValue = value[key];
            thirdCity = value.name;
          }
        }
      }
    }
  });
  form["city1"] = topCity;
  form["city2"] = secondCity;
  form["city3"] = thirdCity;
  return form;
};

export default findCities;
