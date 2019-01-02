import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

const caffeineLevel = 'high';
const userSelectedMood = 'sad';
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


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

it('should have the proper default state', () => {
  expect(wrapper.state()).toEqual({
    renderSplashPage: true,
    teaData: [],
    moodData: [],
    userSelectedTeas: [],
    userSelectedMood: '',
    caffeineLevel: '',
    moodId: 0
  });
});

it('should update renderSplashPage when toggleSplash is called', () => {
  expect(wrapper.state('renderSplashPage')).toEqual(true);
  wrapper.instance().toggleSplash();
  expect(wrapper.state('renderSplashPage')).toEqual(false);
});

it('should update caffeineLevel when updateCaffeineFilter is called', () => {
  wrapper.instance().updateCaffeineFilter(caffeineLevel);
  expect(wrapper.state('caffeineLevel')).toEqual('high');
});

// it('should update userSelectedTeas to include all teas if mood is selected', () => {
//   wrapper.setState({
//     teaData: userSelectedTeas,
//     userSelectedMood: userSelectedMood,
//     moodId: 5,
//     caffeineLevel: ''
//   })
//   console.log(wrapper.state())
//   wrapper.instance().getTeasFromMood(userSelectedMood);
//   expect(wrapper.state().userSelectedTeas).toHaveLength(3);
// })

it('should update the selectedMood if no mood is selected', () => {
  expect(wrapper.state('userSelectedMood')).toEqual('');
  wrapper.instance().getMoodFromDescriptor('');
  expect(wrapper.state('userSelectedMood')).toEqual('thirsty');
});

}); 