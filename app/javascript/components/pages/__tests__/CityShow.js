import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CityShow from "../CityShow.js";

Enzyme.configure({ adapter: new Adapter() });

const payload = {
  _links: {
    curies: [
      {
        href:
          "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
        name: "location",
        templated: true,
      },
      {
        href:
          "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
        name: "city",
        templated: true,
      },
      {
        href:
          "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
        name: "ua",
        templated: true,
      },
      {
        href:
          "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
        name: "country",
        templated: true,
      },
      {
        href:
          "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
        name: "a1",
        templated: true,
      },
      {
        href:
          "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
        name: "tz",
        templated: true,
      },
    ],
    self: {
      href: "https://api.teleport.org/api/urban_areas/slug:san-diego/scores/",
    },
  },
  categories: [
    {
      color: "#f3c32c",
      name: "Housing",
      score_out_of_10: 2.9335,
    },
    {
      color: "#f3d630",
      name: "Cost of Living",
      score_out_of_10: 5.156000000000001,
    },
    {
      color: "#f4eb33",
      name: "Startups",
      score_out_of_10: 8.3505,
    },
    {
      color: "#d2ed31",
      name: "Venture Capital",
      score_out_of_10: 8.595,
    },
    {
      color: "#7adc29",
      name: "Travel Connectivity",
      score_out_of_10: 2.6220000000000003,
    },
    {
      color: "#36cc24",
      name: "Commute",
      score_out_of_10: 4.40975,
    },
    {
      color: "#19ad51",
      name: "Business Freedom",
      score_out_of_10: 8.671,
    },
    {
      color: "#0d6999",
      name: "Safety",
      score_out_of_10: 6.933,
    },
    {
      color: "#051fa5",
      name: "Healthcare",
      score_out_of_10: 8.767666666666665,
    },
    {
      color: "#150e78",
      name: "Education",
      score_out_of_10: 5.4575,
    },
    {
      color: "#3d14a4",
      name: "Environmental Quality",
      score_out_of_10: 7.26725,
    },
    {
      color: "#5c14a1",
      name: "Economy",
      score_out_of_10: 6.5145,
    },
    {
      color: "#88149f",
      name: "Taxation",
      score_out_of_10: 4.488,
    },
    {
      color: "#b9117d",
      name: "Internet Access",
      score_out_of_10: 5.999,
    },
    {
      color: "#d10d54",
      name: "Leisure & Culture",
      score_out_of_10: 8.21,
    },
    {
      color: "#e70c26",
      name: "Tolerance",
      score_out_of_10: 8.5395,
    },
    {
      color: "#f1351b",
      name: "Outdoors",
      score_out_of_10: 6.396000000000002,
    },
  ],
  summary:
    "<p>San Diego, California, is among the top cities with a <b>free business environment</b>.\n\n    \n        According to our city rankings, this is a good place to live with high ratings in <b>startups</b>, <b>venture capital</b> and <b>safety</b>.\n    \n\n    \n</p>\n\n\n    <p>San Diego is one of the top ten city matches for 1.4% of Teleport users.</p>\n",
  teleport_city_score: 64.59310810810813,
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue(JSON.stringify(payload));
});

it("Show page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CityShow search={{ id: 1 }} currentCity="San Diego" />, div);
});

// it("checks for text in a h3 tag", () => {
//   const cityShow = shallow(
//     <CityShow search={{ id: 1 }} currentCity="San Diego" />
//   );
//   expect(cityShow.find("h3").text()).toEqual("City Info");
// });
