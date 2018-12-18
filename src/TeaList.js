import React, { Component } from 'react';
import './styles/Main.scss';

const test = ["black tea", "chai tea", "green tea", "goodbye"]

export default function TeaList() {
    return (
     <ul>
         {
             test.map((greet) => {
                 return <li>{greet}</li>
             })
         }
     </ul>
    );
}