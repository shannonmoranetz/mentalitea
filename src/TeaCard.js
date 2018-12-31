import React, { Component } from 'react';
import './styles/Main.scss';

export default class TeaCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleExpand: true
    }
  }

  toggleExpandFunction = () => {
    this.setState({
      toggleExpand: !this.state.toggleExpand
    })
  }
  
  render(props) {
    if(this.state.toggleExpand) {
    return (
        <li className="tea-card" onClick={this.toggleExpandFunction}>
          <h2 className="tea-name-unexpanded">{this.props.filteredTeaList.tea}</h2>
            <img className="tea-image-unexpanded" src={require(`./styles/images/card-photos/${this.props.id}.png`)} alt=""/>
        </li>
    )} else {
      return (
          <li  className="full-tea-info" onClick={this.toggleExpandFunction}>
            <h1 className="tea-name-expanded">❁ {this.props.filteredTeaList.tea} ❁</h1> 
            <div className="tea-info-container">
              <div className="category-container">
                <h3 className="info-subheading">Category:</h3>
                <h2 className="tea-category">{this.props.filteredTeaList.category}</h2>
              </div>
              <div className="caffeine-container">
                <h3 className="info-subheading">Caffeine Level:</h3>
                <h3 className="tea-caffeine">{this.props.filteredTeaList.caffeine}</h3>
              </div>
              <div className="tastes-container">
                <h3 className="info-subheading">Tastes included:</h3>
                {
                  this.props.filteredTeaList.tastes.map((taste, index) => {
                    return (
                      <p className="tea-tastes" key={index} value={taste}>✿  {taste}</p>
                      )
                    })
                  }
              </div>
              <div className="image-link-container">
                <img className="tea-image-expanded" src={require(`./styles/images/card-photos/tea-card-${this.props.id}.png`)} alt=""/>
                <a className="buy-link" href={this.props.filteredTeaList.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>
          </li>
      )
    }
  }
}