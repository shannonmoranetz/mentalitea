/* eslint-disable no-console */
import React, { Component } from 'react';
import './styles/Main.scss';
import Controls from './Controls.js';
import Splash from './Splash.js';
import TeaList from './TeaList.js';
import { ReactComponent as Title } from './styles/images/title.svg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderSplashPage: true,
      teaData: [],
      moodData: [],
      userSelectedMood: '',
      caffeineLevel: '',
      moodId: 0
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

getMoodFromDescriptor = (descriptor) => {
  if (descriptor === '') {
    this.setState({
      userSelectedMood: 'thirsty',
      moodId: 0,
      caffeineLevel: ''
    });
  } else {
    let matchingMood = this.state.moodData.filter((mood) => {
      return mood.descriptors.includes(descriptor);
    });

    this.setState({
      userSelectedMood: descriptor,
      moodId: matchingMood[0].moodId,
      caffeineLevel: ''
    });
  }
}

toggleSplash = () => {
  this.setState({
    renderSplashPage: !this.state.renderSplashPage
  });
}

updateCaffeineFilter = (caffeineLevel) => {
  this.setState({
    caffeineLevel
  });
}

getTeasFromMood() {
  if (this.state.userSelectedMood === 'thirsty') {
    let userSelectedTeas = this.state.teaData.map((tea) => {
      return tea;
    });

    return this.filterTeasByCaffeine(userSelectedTeas);
  } else {
    let userSelectedTeas = this.state.teaData.filter((tea) => {
      return this.state.moodId === tea.moodId;
    });

    return this.filterTeasByCaffeine(userSelectedTeas);
  }
}

filterTeasByCaffeine(userSelectedTeas) {
  if (this.state.caffeineLevel !== '') {
    userSelectedTeas = userSelectedTeas.filter((tea) => {
      return tea.caffeine === this.state.caffeineLevel;
    });
  }
  return userSelectedTeas;
}

render() {
  if (this.state.renderSplashPage) {
    return (
      <div className="App"> 
        <header className="heading-container">
          <Title className="title"/>
          <h2 className="subtitle">Find the perfect tea for your state of mind.</h2>
        </header>
        <section className="content-container">
          <Splash getMoodFromDescriptor={this.getMoodFromDescriptor}
            moods={this.state.moodData}
            toggleSplash={this.toggleSplash}/>
        </section>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="heading-container">
          <Title className="title" onClick={this.toggleSplash}/>
          <h2 className="subtitle">Find the perfect tea for your state of mind.</h2>
        </header>
        <section className="content-container">
          <div className="content-head-container">
            <img className="gutter-branch" src={require(`./styles/images/gutter-branch.png`)} alt=""/>
            <Controls toggleSplash={this.toggleSplash}
              getMoodFromDescriptor={this.getMoodFromDescriptor}
              teas={this.state.teaData}
              moods={this.state.moodData}
              updateCaffeineFilter={this.updateCaffeineFilter}/>
            <img className="gutter-branch branch-mirror" src={require(`./styles/images/gutter-branch.png`)} alt=""/>
          </div>
          <TeaList userSelectedTea={this.getTeasFromMood()}
            userSelectedMood={this.state.userSelectedMood}
            teas={this.state.teaData}/>
        </section>
      </div>
    );
  }
}
}


