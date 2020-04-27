import React from 'react'
import ReactDOM from 'react-dom'
//import Primary from './components/Primary'
//import Sencond from './components/Second'
//import { PrimaryComponent, SecondComponent } from './components/Multiple'
import { Saudacao } from './components/Saudacao'


ReactDOM.render(
    <div>
        <Saudacao tipo="Ola" nome="Mundo"/>
    </div>
    , document.getElementById('root'))