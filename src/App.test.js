import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow({
      <App />
    });
  });

it('should have the proper default state', () => {
  expect(wrapper.state()).toEqual({ renderSplashPage: false })
})

}); 
