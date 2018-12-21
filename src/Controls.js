import React, { Component } from 'react';
import './styles/Main.scss';

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedMood: ''
    }
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
      <div className="controls-container">
          <button onClick={this.props.toggleSplash}>Reset</button>
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
          <button onClick={this.updateUserSelectedMood}>Brew-Tea</button>
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