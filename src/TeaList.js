import React from 'react';
import './styles/Main.scss';
import TeaCard from './TeaCard.js';


export default function TeaList(props) {
    return (
     <div className="tea-list">
        <ul>
        {
            props.userSelectedTea.map((tea, index) => {
                return (
                    <TeaCard key={index} userSelectedTeaList={tea}/>
                )
            }) 
        }
        </ul>
     </div>
    );
}