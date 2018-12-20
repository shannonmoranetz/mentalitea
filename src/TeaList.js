import React from 'react';
import './styles/Main.scss';
import TeaCard from './TeaCard.js';


export default function TeaList(props) {
    return (
     <div className="tea-list">
        <h1>Teas for when you're feeling <span className="selected-descriptor">{props.userSelectedMood}</span>:</h1>
        <ul>
        {
            props.userSelectedTea.map((tea, index) => {
                return (
                    <TeaCard key={index} filteredTeaList={tea}/>
                )
            }) 
        }
        </ul>
     </div>
    );
}