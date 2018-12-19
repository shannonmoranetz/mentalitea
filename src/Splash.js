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


changeUserSelectedMood = (event) => {
  this.setState({
    selectedMood: event.target.value
  });
}

updateUserSelectedMood = () => {
  this.props.filterTeaByMood(this.state.selectedMood)
}


render() {
  return (
    <div className="splash-page-container">
    <div className="splash-page">
      <select onChange={this.changeUserSelectedMood}>
        <option>Select your mood</option>
        {
          this.props.moods.reduce((allDescriptors, mood) => {
            return allDescriptors.concat(mood.descriptors);
          }, []).map((mood, index) => {
            return <option key={index} value={mood}>{mood}</option>;
          })
        }
        
      </select>
      <button onClick={this.updateUserSelectedMood}>Brew-Tea</button>
        </div>
    </div>
  );
}
}