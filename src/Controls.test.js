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

const getMoodFromDescriptorMock = jest.fn();
const updateCaffeineFilterMock = jest.fn();

describe('Controls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Controls moods={moods}
        getMoodFromDescriptor={getMoodFromDescriptorMock}
        updateCaffeineFilter={updateCaffeineFilterMock}/>
    );
  });

  it('should start off with the correct default states ', () => {
    expect(wrapper.state()).toEqual({
      selectedMood: '',
      buttonText: 'Show All'
    });
  });

  it('should invoke the updateUserSelectedMood method when clicked', () => {
    wrapper.find('.rebrew-tea').simulate('click');
    expect(getMoodFromDescriptorMock).toBeCalled();
  });

  it('should invoke the findCaffeineLevel method when clicked', () => {
    wrapper.find('.caffeine-buttons').first().simulate('click');
    expect(updateCaffeineFilterMock).toBeCalled();
  });

  it('should change the selected mood and button text when clicked', () => {
    wrapper.find('.user-reselected-mood').simulate('change', { target: { value: 'sad' } });
    expect(wrapper.state('selectedMood')).toEqual('sad');
    expect(wrapper.state('buttonText')).toEqual('Brew Tea');
  });
});