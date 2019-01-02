import React, { Component } from 'react';
import './styles/Main.scss';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: '',
      buttonText: 'Show All'
    };
  }

  changeUserSelectedMood = (event) => {
    this.setState({
      selectedMood: event.target.value,
      buttonText: 'Brew Tea'
    });
  }

  updateUserSelectedMood = () => {
    this.props.getMoodFromDescriptor(this.state.selectedMood);
  }

  findCaffeineLevel = (newlevel) => {
    this.props.updateCaffeineFilter(newlevel);
  }

  render() {
    let levels = ['none', 'low', 'moderate', 'high'];
    let buttons = levels.map((level, index) => {
      return <button key={index} className="caffeine-buttons" onClick={() => this.findCaffeineLevel(level)}>{level.charAt(0).toUpperCase() + level.slice(1)}</button>;
    }); 

    return (
      <div className="controls-container">
        <h2 className="controls-heading">Adjust your tea!</h2>
        <span className="controls-subheadings">
          <h3 className="caffeine-subheading subheading">Caffeine Level:</h3>
          <h3 className="mood-subheading subheading">I'm feeling...</h3>        
        </span>
        <div className="controls-top">
          <div className="left-nested-options">
            {buttons}
          </div>
          <div className="right-nested-options">          
            <select className="user-reselected-mood" onChange={this.changeUserSelectedMood}>
              <option value="">Select another mood</option>
              {
                this.props.moods.reduce((allDescriptors, mood) => {
                  return allDescriptors.concat(mood.descriptors);
                }, []).map((mood, index) => {
                  return <option key={index} value={mood}>{mood}</option>;
                })
              }
            </select>
          </div>
        </div>
        <span className="divider"></span>
        <div className="controls-bottom">
          <h3 className="submit-subheading subheading">Show me!</h3>        
          <button className="rebrew-tea" onClick={this.updateUserSelectedMood}>{this.state.buttonText}</button>
          <h3 className="reset-subheading subheading">Start over:</h3>        
          <button className="reset-button" onClick={this.props.toggleSplash}>Reset</button>
        </div>
      </div>
    );
  }
}
