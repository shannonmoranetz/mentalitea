import React, { Component } from 'react';
import './styles/Main.scss';

export default class TeaCard extends Component {
  constructor(){
    super();
    this.state = {
      toggleExpand: true
    }
  }
  render() {
    if(this.state.toggleExpand) {
    return (
      <div>
        <ul>
          {
            this.props.userSelectedTea.map((tea) => {
              return <li>{tea.tea}</li>
            })
          }
        </ul>
      </div>
    )} else {
      return (
        <div>
          <ul>
            {
              this.props.userSelectedTea.map((tea) => {
                return <li>{tea.tea} {tea.moodId}</li>
              })
            }
          </ul>
        </div>
      )
    };
  }
}