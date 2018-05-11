import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index.js";

describe("With Enzyme", () => {
  it("contains 1 p tag", () => {
    const app = shallow(<App />);
    expect(app.find("p").length).toEqual(1);
  });
});

// describe("With Snapshot Testing", () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
