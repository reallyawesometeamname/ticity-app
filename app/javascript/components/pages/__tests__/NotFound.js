import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NotFound from "../NotFound.js";

Enzyme.configure({ adapter: new Adapter() });

it("Not found page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NotFound />, div);
});

it("Not Found page renders content", () => {
  const notFound = mount(<NotFound />);
  expect(notFound.find("h3").text()).toEqual("PAGE NOT FOUND!");
});
