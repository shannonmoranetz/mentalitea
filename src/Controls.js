import React, { Component } from 'react';
import './styles/Main.scss';

export default class Controls extends Component {

  reselectMood()

  render() {
    return (
      <div className="controls-container">
        <button onClick={this.props.toggleSplash}>Reset</button>
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