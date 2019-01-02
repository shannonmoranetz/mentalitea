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

const getMoodFromDescriptorMock = jest.fn();
const toggleSplashMock = jest.fn();

describe('Splash', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Splash moods={moods}
        getMoodFromDescriptor={getMoodFromDescriptorMock}
        toggleSplash={toggleSplashMock}
      />
    );
  });

  it('should update the user\'s selected mood', () => {
    wrapper.find('.user-selected-mood').simulate('change', {target: {value: 'annoyed'}});
    expect(wrapper.state('selectedMood')).toEqual('annoyed');
  });

  it('should invoke toggleSplash and getMoodFromDescriptor when clicked', () => {
    wrapper.find('.splash-page-button').simulate('click');
    expect(getMoodFromDescriptorMock).toBeCalled();
    expect(toggleSplashMock).toBeCalled();
  });

  it('should display buttons, instructions, and svgs', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});