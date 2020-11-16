import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchResults from "../SearchResults.js";

Enzyme.configure({ adapter: new Adapter() });

// it("Home page renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<SearchResults />, div);
// });
//
// it("Home page renders content", () => {
//   const results = shallow(<SearchResults />);
//   expect(results.find("h3").text()).toEqual("Your top TICities are...");
// });
