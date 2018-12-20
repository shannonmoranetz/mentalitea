import React from 'react';
import TeaList from './TeaList';
import { shallow } from 'enzyme';

const userSelectedTeas = [{
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
  {
  tea: "Earl Grey Bravo",
  category: "Black",
  moodId: 5,
  caffeine: "high",
  tastes: [
  "citrus",
  "zesty",
  "sweet"
  ],
  link: "https://www.adagio.com/black/earl_grey_bravo.html"
  },
  {
  tea: "Black Dragon Pearls",
  category: "Black",
  moodId: 5,
  caffeine: "high",
  tastes: [
  "chocolate",
  "sweet",
  "earthy"
  ],
  link: "https://www.adagio.com/black/black_dragon_pearls.html"
  }];

  const userSelectedMood = [];

  describe('teaList', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <TeaList userSelectedTea={userSelectedTeas}
                 userSelectedMood={userSelectedMood}
        />);
    });

    it('should display all tea cards', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });