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
        <li className='expand-card' onClick={this.toggleExpandFunction}>
          <p className="tea-name">{this.props.filteredTeaList.tea}</p>
        </li>
    )} else {
      return (
          <li  className="full-tea-info" onClick={this.toggleExpandFunction}>
            <h1>{this.props.filteredTeaList.tea}</h1> 
            <h2>{this.props.filteredTeaList.category}</h2>
              <p>{this.props.filteredTeaList.caffeine}</p>
              {
                this.props.filteredTeaList.tastes.map((taste, index) => {
                  return (
                    <p key={index} value={taste}>{taste}</p>
                  )
                })
              }
            <a href={this.props.filteredTeaList.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
          </li>
      )
    }
  }
}