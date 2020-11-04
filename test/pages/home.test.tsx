import React from 'react';
import { mount } from 'enzyme';
import Header, { Para } from '../../src/pages/home';

it("should show text 'Your Warm Home!'", () => {
  const wrapper = mount(<Header />);

  expect(wrapper.find('p').at(0).text()).toBe('Your Warm Home!');
  mount(<Para />).html();
});
