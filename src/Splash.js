import React, { Component } from 'react';
import './styles/Main.scss';
import { ReactComponent as Cup } from './styles/images/cup.svg';
import { ReactComponent as SelectMood } from './styles/images/selectMood.svg';


export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: '',
      buttonText: 'Show All'
    };
  }

setUserSelectedMood = (event) => {
    this.setState({
      selectedMood: event.target.value,
      buttonText: 'Brew Tea'
    })
  }

returnTeaListResults = () => {
  this.props.getMoodFromDescriptor(this.state.selectedMood)
  this.props.toggleSplash()
}

render() {
  return (
    <div className="splash-page-container">
      <div className="instructions-container">
        <h2 className="instructions-heading">Instructions</h2>
          <p className="instructions-body"><span className="instruction-number">1)</span> Tell us how you're feeling at this moment.</p>
          <p className="instructions-body"><span className="instruction-number">2)</span> Click the "Brew Tea" button, and we will recommend teas accordingly.</p>
          <p className="instructions-body"><span className="instruction-number">3)</span> Feel free to click a tea to show more information about it.</p>
          <p className="instructions-body"><span className="instruction-number">4)</span> You can make adjustments or select a new mood at any time.</p>
      </div>
      <div className="select-mood-content">
        <SelectMood className="select-mood"/>
        <select className="user-selected-mood" onChange={this.setUserSelectedMood}>
          <option>Select your mood</option>
          {
            this.props.moods.reduce((allDescriptors, mood) => {
              return allDescriptors.concat(mood.descriptors);
            }, []).map((mood, index) => {
              return <option key={index} value={mood}>{mood}</option>;
            })
          }
          
        </select>
      </div>
      <div className="cup-container">
        <Cup className="cup"/>
        <button className="splash-page-button" onClick={this.returnTeaListResults}>
          {this.state.buttonText}
        </button>
      </div>
    </div>
  );
}
}