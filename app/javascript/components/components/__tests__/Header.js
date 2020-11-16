import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "../Header.js";

Enzyme.configure({ adapter: new Adapter() });

it("Header page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

it("Header page renders content", () => {
  const header = mount(<Header />);
  expect(header.find("h2").text()).toEqual("T(he) I(deal) City ");
});
