import React, { Component } from 'react';
import './styles/Main.scss';
import { ReactComponent as Cup } from './styles/images/cup.svg'
export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: ''
    };
  }

changeUserSelectedMood = (event) => {
    this.setState({
      selectedMood: event.target.value
    });
  }

updateUserSelectedMood = () => {
  this.props.filterTeaByMood(this.state.selectedMood)
  this.props.toggleSplash()
}

render() {
  return (
    <div className="splash-page-container">
    <div className="splash-page">
      <select className="user-selected-mood" onChange={this.changeUserSelectedMood}>
        <option>Select your mood</option>
        {
          this.props.moods.reduce((allDescriptors, mood) => {
            return allDescriptors.concat(mood.descriptors);
          }, []).map((mood, index) => {
            return <option key={index} value={mood}>{mood}</option>;
          })
        }
        
      </select>
      <Cup />
      <button onClick={this.updateUserSelectedMood}>Brew-Tea</button>
        </div>
    </div>
  );
}
}