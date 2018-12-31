import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'


const caffeineLevel = 'high';

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
})

}); 