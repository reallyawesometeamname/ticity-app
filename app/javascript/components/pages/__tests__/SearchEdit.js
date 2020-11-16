import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchEdit from "../SearchEdit.js";

Enzyme.configure({ adapter: new Adapter() });

it("Edit page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchEdit />, div);
});

it("Edit page renders content", () => {
  const home = mount(<SearchEdit />);
  expect(home.find("h3").text()).toEqual("Edit Categories");
});
