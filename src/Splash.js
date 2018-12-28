import React, { Component } from 'react';
import './styles/Main.scss';
import { ReactComponent as Cup } from './styles/images/cup.svg';
import { ReactComponent as SelectMood } from './styles/images/selectMood.svg';
import { ReactComponent as Arrow } from './styles/images/arrow.svg';


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
      <p>
        Instructions<br/>
          - select how your feeling<br/>
          - click on brew tea after selection<br/>
          - click on the tea that sounds amazing to you <br/>
          - buy the tea
      </p>
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
      <Arrow className="arrow"/>
      <div className="cup-container">
        <Cup className="cup"/>
        <button onClick={this.returnTeaListResults}>
          {this.state.buttonText}
          <img src={ require('./styles/images/tea-spill.png') }/>
        </button>
      </div>
    </div>
  );
}
}