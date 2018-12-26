import React, { Component } from 'react';
import './styles/Main.scss';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: '',
      buttonText: 'Show All'
    }
  }

  changeUserSelectedMood = (event) => {
    this.setState({
      selectedMood: event.target.value,
      buttonText: 'Brew Tea'
    });
  }

  updateUserSelectedMood = () => {
    this.props.filterTeaByMood(this.state.selectedMood)
  }

  findCaffeineLevel = (newlevel) => {
    this.props.updateCaffeineFilter(newlevel)
  }

  render() {
    return (
      <div className="controls-container">
          <button className="reset-button" onClick={this.props.toggleSplash}>Reset</button>
          <button onClick={() => this.findCaffeineLevel('none')}>None</button>
          <button onClick={() => this.findCaffeineLevel('low')}>Low</button>
          <button onClick={() => this.findCaffeineLevel('moderate')}>Moderate</button>
          <button onClick={() => this.findCaffeineLevel('high')}>High</button>
          <select className="user-reselected-mood" onChange={this.changeUserSelectedMood}>
            <option>Select your mood</option>
            {
              this.props.moods.reduce((allDescriptors, mood) => {
                return allDescriptors.concat(mood.descriptors);
              }, []).map((mood, index) => {
                return <option key={index} value={mood}>{mood}</option>;
              })
            }
          </select>
          <button className="rebrew-tea" onClick={this.updateUserSelectedMood}>{this.state.buttonText}</button>
      </div>
    );
  }
}
