import findCities from './find-cities.js'
import cityData from "../components/TicityCities.js"

let form = [
{
    city1: "",
    city2: "",
    city3: "",
    housing: 0,
    costofliving: 0,
    startups: 0,
    venturecapital: 0,
    travel: 0,
    commute: 0,
    business: 0,
    safety: 0,
    healthcare: 0,
    education: 0,
    environment: 0,
    economy: 0,
    taxation: 0,
    internetaccess: 0,
    leisure: 0,
    tolerance: 0,
    outdoors: 0,
    user_id: 1,
}]

describe("search for top housing cities", () => {
  test("search for cities where housing is greater than 5", () => {
    expect(findCities(cityData, form, "travel", 5)).toEqual(expect.objectContaining({city1: 'New York'}))
  })
})

describe("search for top cost of living cities", () => {
  test("search for cities where cost of living is greater than 5", () => {
    expect(findCities(cityData, form, "costofliving", 5)).toEqual(expect.objectContaining({city1: 'San Antonio'}))
  })
})

describe("search for top startup cities", () => {
  test("search for cities where startup is greater than 5", () => {
    expect(findCities(cityData, form, "startups", 5)).toEqual(expect.objectContaining({city1: 'Los Angeles'}))
  })
})

describe("search for top venture cap cities", () => {
  test("search for cities where venture capital is greater than 5", () => {
    expect(findCities(cityData, form, "venturecapital", 5)).toEqual(expect.objectContaining({city1: 'Boston'}))
  })
})

describe("search for top commute cities", () => {
  test("search for cities where commute is greater than 5", () => {
    expect(findCities(cityData, form, "commute", 5)).toEqual(expect.objectContaining({city1: 'Boulder'}))
  })
})

describe("search for top safety cities", () => {
  test("search for cities where safety is greater than 5", () => {
    expect(findCities(cityData, form, "safety", 5)).toEqual(expect.objectContaining({city1: 'San Luis Obispo'}))
  })
})

describe("search for top healthcare cities", () => {
  test("search for cities where healthcare is greater than 5", () => {
    expect(findCities(cityData, form, "healthcare", 5)).toEqual(expect.objectContaining({city1: 'Madison'}))
  })
})

describe("search for top education cities", () => {
  test("search for cities where education is greater than 5", () => {
    expect(findCities(cityData, form, "education", 5)).toEqual(expect.objectContaining({city1: 'Boston'}))
  })
})

describe("search for top environmental cities", () => {
  test("search for cities where environmental is greater than 5", () => {
    expect(findCities(cityData, form, "environment", 5)).toEqual(expect.objectContaining({city1: 'Fort Collins'}))
  })
})

describe("search for top taxation cities", () => {
  test("search for cities where taxation is greater than 5", () => {
    expect(findCities(cityData, form, "taxation", 5)).toEqual(expect.objectContaining({city1: 'Birmingham, AL'}))
  })
})

describe("search for top internet access cities", () => {
  test("search for cities where internet access is greater than 5", () => {
    expect(findCities(cityData, form, "internetaccess", 5)).toEqual(expect.objectContaining({city1: 'Austin'}))
  })
})

describe("search for top leisure & culture cities", () => {
  test("search for cities where leisure is greater than 5", () => {
    expect(findCities(cityData, form, "leisure", 5)).toEqual(expect.objectContaining({city1: 'New York'}))
  })
})

describe("search for top tolerant cities", () => {
  test("search for cities where tolerance is greater than 5", () => {
    expect(findCities(cityData, form, "tolerance", 5)).toEqual(expect.objectContaining({city1: 'San Luis Obispo'}))
  })
})

describe("search for top outdoors activities cities", () => {
  test("search for cities where outdoors is greater than 5", () => {
    expect(findCities(cityData, form, "outdoors", 5)).toEqual(expect.objectContaining({city1: 'Denver'}))
  })
})
