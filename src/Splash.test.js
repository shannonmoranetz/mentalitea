import React from 'react';
import Splash from './Splash';
import { shallow } from 'enzyme';

const value = 'annoyed';
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

describe('Splash', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Splash moods={moods}/>
      );
  });

  it('should update the user\'s selected mood', () => {
    wrapper.find('.user-selected-mood').simulate('change', {target: {value: 'annoyed'}});
    expect(wrapper.state('selectedMood')).toEqual('annoyed')
  });
});