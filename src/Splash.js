import React, { Component } from 'react';
import './styles/Main.scss';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: '',
      splashPageVisible: true
    };
  }


updateSelectedMood = (event) => {
  this.setState({
    selectedMood: event.target.value
  });
}


render() {
  return (
    <div>
      <select onChange={this.updateSelectedMood}>
        <option>Select your mood</option>
        {
          this.props.moods.reduce((allDescriptors, mood) => {
            return allDescriptors.concat(mood.descriptors);
          }, []).map((mood, index) => {
            return <option key={index} value={mood}>{mood}</option>;
          })
        }
        
      </select>
      <button>Brew-Tea</button>
        
    </div>
  );
}
}