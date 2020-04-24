import React from 'react'
import ReactDOM from 'react-dom'
//import Primary from './components/Primary'
//import Sencond from './components/Second'
import { PrimaryComponent, SecondComponent } from './components/Multiple'

ReactDOM.render(
    <div>
        <PrimaryComponent nome="Componente 1" />
        <SecondComponent nome="Componente 2" />
    </div>
    , document.getElementById('root'))