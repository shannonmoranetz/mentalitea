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
      userSelectedMood: ''
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
    userSelectedTeas: userSelectedTeas,
    userSelectedMood: descriptor
  });
}
toggleSplash = () => {
  this.setState({
    renderSplashPage: !this.state.renderSplashPage
  });
}






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
        <TeaList userSelectedTea={this.state.userSelectedTeas}
                 userSelectedMood={this.state.userSelectedMood}/>
      </div>
    )
  }
}
}


