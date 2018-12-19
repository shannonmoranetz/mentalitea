import React, { Component } from 'react';
import './styles/Main.scss';

export default class TeaCard extends Component {
  constructor(){
    super();
    this.state = {
      toggleExpand: true
    }
  }

  toggleExpandFunction = () => {
    this.setState({
      toggleExpand: !this.state.toggleExpand
    })
  }
  render() {
    if(this.state.toggleExpand) {
    return (
        <li onClick={this.toggleExpandFunction}>
          {this.props.userSelectedTeaList.tea}
        </li>
    )} else {
      return (
          <li  className="full-tea-info" onClick={this.toggleExpandFunction}>
            {this.props.userSelectedTeaList.tea} {this.props.userSelectedTeaList.caffeine}
          </li>
      )
    }
  }
}