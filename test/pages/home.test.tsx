import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../src/pages/home';

Enzyme.configure({ adapter: new Adapter() });

it("should show text 'Your Warm Home!'", () => {
  const wrapper = mount(<Header />);

  expect(wrapper.find('p').at(0).text()).toBe('Your Warm Home!');
});
