import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchNew from "../SearchNew.js";

Enzyme.configure({ adapter: new Adapter() });

// it("New search page renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<SearchNew />, div);
// });
//
// it("New search page renders content", () => {
//   const newSearch = mount(<SearchNew />);
//   expect(newSearch.find("h3").text()).toEqual(
//     "Rank your most important category"
//   );
// });
