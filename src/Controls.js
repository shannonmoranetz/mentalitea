import React, { Component } from 'react';
import './styles/Main.scss';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      refreshSelectedMood: ''
    }
  }

  refreshSelectedMood = (event) => {
    this.setState({
      refreshSelectedMood: event.target.value
    });
    this.props.filterTeaByMood(this.state.refreshSelectedMood)
  }

  render() {
    return (
      <div className="controls-container">
        <button onClick={this.props.toggleSplash}>Reset</button>
        <select className="user-refresh-mood" onChange={this.refreshSelectedMood}>
        <option>Change your mood</option>
        {
          this.props.moods.reduce((allDescriptors, mood) => {
            return allDescriptors.concat(mood.descriptors);
          }, []).map((mood, index) => {
            return <option key={index} value={mood}>{mood}</option>;
          })
        }
      </select>
      </div>
    );
  }
}


// filterTeaByCaffeine = (caffeineLevel) => {
//   let userSelectedCaffeineLevel = tea.filter((currentTea) => {
//     return currentTea.caffeine === caffeineLevel;
//   });

//   return userSelectedCaffeineLevel;
// }

//^^^^^^^controls component radio button with caffeine level as the argument 