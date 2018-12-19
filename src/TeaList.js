import React from 'react';
import './styles/Main.scss';
import TeaCard from './TeaCard.js';


export default function TeaList(props) {
    return (
     <div className="tea-list">
        <TeaCard userSelectedTea={props.userSelectedTea}/>
     </div>
    );
}