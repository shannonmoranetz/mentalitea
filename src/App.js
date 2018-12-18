import React, { Component } from 'react';
import './styles/Main.scss';
import Controls from './Controls.js';
import Splash from './Splash.js';
import TeaCard from './TeaCard.js';
import TeaList from './TeaList.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>MentaliTea</h1>
        <Controls />
        <Splash />
        <TeaCard />
        <TeaList />
      </div>
    );
  }
}


