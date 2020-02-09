import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../../src/page/home";

Enzyme.configure({ adapter: new Adapter() });

it("should show text 'Your Warm Home!'", () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find("p")).toHaveText("Your Warm Home!");
});
