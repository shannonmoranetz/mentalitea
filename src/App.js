import React, { Component } from 'react';
import './styles/Main.scss';
import Controls from './Controls.js';
import Splash from './Splash.js';
import TeaList from './TeaList.js';
import { ReactComponent as Title } from './styles/images/title.svg'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderSplashPage: true,
      teaData: [],
      moodData: [],
      userSelectedTeas: [],
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

filterTeaByMood = (descriptor) => {
  let matchingMood = this.state.moodData.filter((mood) => {
    return mood.descriptors.includes(descriptor);
  });

  this.setState({
    userSelectedMood: descriptor,
    moodId: matchingMood[0].moodId
  });
}

toggleSplash = () => {
  this.setState({
    renderSplashPage: !this.state.renderSplashPage
  });
}

  updateCaffeineFilter = (caffeineLevel) => {
    this.setState({
      caffeineLevel: caffeineLevel
    });
  }

getFilteredTeas() {
  let userSelectedTeas = this.state.teaData.filter((currentTea) => {
    return this.state.moodId === currentTea.moodId;
  });
  if (this.state.caffeineLevel !== '') {
    userSelectedTeas = userSelectedTeas.filter((tea) => {
      return tea.caffeine === this.state.caffeineLevel;
    })

  }
    return userSelectedTeas;
}

render() {
  if (this.state.renderSplashPage) {
    return (
      <div className="App"> 
        <header>
          <Title className="title" />
        </header>
        <Splash filterTeaByMood={this.filterTeaByMood}
                moods={this.state.moodData}
                toggleSplash={this.toggleSplash}/>
      </div>
    );
  }else {
    return (
      <div className="App">
        <header>
          <Title className="title" />
        </header>
        <Controls toggleSplash={this.toggleSplash}
                  filterTeaByMood={this.filterTeaByMood}
                  moods={this.state.moodData}
                  updateCaffeineFilter={this.updateCaffeineFilter}
                  selectedTeas={this.state.userSelectedTeas}
                  updateDescriptor={this.updateDescriptor} />
        <TeaList userSelectedTea={this.getFilteredTeas()}
                 userSelectedMood={this.state.userSelectedMood}/>
      </div>
    )
  }
}
}


