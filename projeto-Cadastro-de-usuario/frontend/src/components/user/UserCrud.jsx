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
        this.setState({ user:initialState.user })
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user) 
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState, list})
            })
    }

    getUpdateList(user){
        const list = this.state.list.filter(user => user.id !== user.id)
        list.unshift(user)
        return list
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }   
}