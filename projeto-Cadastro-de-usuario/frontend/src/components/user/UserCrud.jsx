import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {
        name: '',
        email: ''
    }, 
    list: []
}

export default class UserCrud extends Component {

    state = {...initialState}

    claar() {

    }
    
    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }   
}