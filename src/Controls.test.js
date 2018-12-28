import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

const moods = [{
  mood: "Stressed",
  descriptors: [
    "agitated",
    "on-edge",
    "worried",
    "tense"
  ],
  moodId: 1
}];

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls moods={moods}/>
      );
  });

  it('should start off with the correct default states ', () => {
    expect(wrapper.state()).toEqual({
      selectedMood: '',
      buttonText: 'Show All'
    })
  });

});