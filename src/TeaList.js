import React from 'react';
import './styles/Main.scss';
import TeaCard from './TeaCard.js';

export default function TeaList(props) {
  return (
    <div className="tea-list">
      <div className="tealist-heading-container">
        <h1 className="tealist-heading">Teas for when you're feeling <span className="selected-descriptor">{props.userSelectedMood}</span> :</h1>
      </div>
      <ul>
        {
          props.userSelectedTea.map((tea, index) => {
            return (
              <TeaCard key={index} teaName={tea.tea} filteredTeaList={tea}/>                                                                                                                      
            );
          })
        }
      </ul>
    </div>
  );
}