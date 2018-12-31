import React from 'react';
import Splash from './Splash';
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

  const returnTeaListResultsMock = jest.fn();

describe('Splash', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Splash moods={moods}
              // getMoodFromDescriptor={getMoodFromDescriptor}
              // toggleSplash={toggleSplash}
              />
      );
  });

  it('should update the user\'s selected mood', () => {
    wrapper.find('.user-selected-mood').simulate('change', {target: {value: 'annoyed'}});
    expect(wrapper.state('selectedMood')).toEqual('annoyed')
  });

  it('should invoke toggleSplash and getMoodFromDescriptor when clicked', () => {
    wrapper.find('.splash-page-button').simulate('click');
    expect(returnTeaListResultsMock).toBeCalled();
  });
  
});