import React, { Component } from 'react';
import './styles/Main.scss';
import Controls from './Controls.js';
import Splash from './Splash.js';
import TeaList from './TeaList.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderSplashPage: true,
      teaData: [],
      moodData: [],
      userSelectedTeas: [],
      allDescriptors: []
    };
  }



  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/tea')
      .then(response => response.json())
      .then(data => {
        this.setState({
          teaData: data.tea
        });
      })
      .catch(error => console.log(error));

    fetch('https://whateverly-datasets.herokuapp.com/api/v1/moods')
      .then(response => response.json())
      .then(data => {
        this.setState({
          moodData: data.moods
        });
      })
      .catch(error => console.log(error));
  }

filterTeaByMood = (descriptor) => {
  let matchingMood = this.state.moodData.filter((mood) => {
    return mood.descriptors.includes(descriptor);
  });

  let userSelectedTeas = this.state.teaData.filter((currentTea) => {
    return matchingMood[0].moodId === currentTea.moodId;
  });
  
  this.setState({
    userSelectedTeas: userSelectedTeas
  });
}
toggleSplash = () => {
  this.setState({
    renderSplashPage: !this.state.renderSplashPage
  })
}

///^^^^^^splash page user input will pass back  up descriptor for findTea function


// filterTeaByCaffeine = (caffeineLevel) => {
//   let userSelectedCaffeineLevel = tea.filter((currentTea) => {
//     return currentTea.caffeine === caffeineLevel;
//   });

//   return userSelectedCaffeineLevel;
// }

//^^^^^^^controls component radio button with caffeine level as the argument 



// createAllDescriptors = () => {
//   const allDescriptors = this.state.moodData.reduce((allDescriptors, mood) => {
//     return allDescriptors.concat(mood.descriptors);
//   }, []);

//   this.setState({
//     allDescriptors: allDescriptors
//   });
// }

// ^^^^^^^^ array values for drop-down descriptor input



render() {
  if (this.state.renderSplashPage) {
    return (
      <div>
        <h1>MentaliTea</h1>
        <Splash filterTeaByMood={this.filterTeaByMood}
                moods={this.state.moodData}
                toggleSplash={this.toggleSplash}/>
      </div>
    );
  }else {
    return (
      <div>
        <h1>MentaliTea</h1>
        <Controls /> 
        <TeaList userSelectedTea={this.state.userSelectedTeas}/>
      </div>
    )
  }
}
}


