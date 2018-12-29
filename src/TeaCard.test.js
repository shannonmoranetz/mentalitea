import React from 'react';
import TeaCard from './TeaCard';
import { shallow } from 'enzyme';

const tea = [
  {
    tea: "Irish Breakfast",
    category: "Black",
    moodId: 5,
    caffeine: "high",
    tastes: [
      "citrus",
      "spice",
      "malty"
    ],
    link: "https://www.adagio.com/black/irish_breakfast.html"
  },
];

describe('TeaCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TeaCard filteredTeaList={tea}/>
      );
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({ toggleExpand: true })
  });

});