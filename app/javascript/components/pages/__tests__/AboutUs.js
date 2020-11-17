import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUs from "../AboutUs.js";

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {});

it("About page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AboutUs />, div);
});

it("checks for first img tag and its properties", () => {
  const renderHome = shallow(<AboutUs />);
  expect(renderHome.find("img").first().props()).toEqual({
    alt: "Picture of Brian's adorable face",
    className: "about-pics",
    src: "test-file-stub",
  });
});

it("checks for third img tag and its properties", () => {
  const renderHome = shallow(<AboutUs />);
  expect(renderHome.find("img").last().props()).toEqual({
    alt: "Picture of Matt's face looking downward",
    className: "about-pics",
    src: "test-file-stub",
  });
});
