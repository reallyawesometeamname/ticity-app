import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MySearchIndex from "../MySearchIndex.js";

Enzyme.configure({ adapter: new Adapter() });

// it("My searches page renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<MySearchIndex />, div);
// });
//
// it("My searches page renders content", () => {
//   const mySearch = mount(<MySearchIndex />);
//   expect(mySearch.find("h3").text()).toEqual("Saved TICities");
// });
