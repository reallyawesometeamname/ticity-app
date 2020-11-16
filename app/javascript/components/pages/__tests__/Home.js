import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "../Home.js";

Enzyme.configure({ adapter: new Adapter() });

it("Home page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
});

it("Home page renders content", () => {
  const home = mount(<Home />);
  expect(home.find("h1").text()).toEqual("Welcome to TICity!");
});
