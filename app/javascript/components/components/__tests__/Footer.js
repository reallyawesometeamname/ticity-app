import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Footer from "../Footer.js";

Enzyme.configure({ adapter: new Adapter() });

it("Header page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

// it("Header page renders content", () => {
//   const foot = mount(<Footer />);
//   expect(foot.find("a").text()).toEqual("Home");
// });
