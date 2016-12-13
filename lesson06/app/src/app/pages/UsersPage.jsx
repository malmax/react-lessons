import React from 'react';
import userStore from '../stores/UsersStore';

import articlesActions from '../actions/Articles.js';

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = userStore.getState();
        this.addUser = this.addUser.bind(this);
        this.sub= null;
    }

    addUser(event) {
        let user = {
            name: this.refs.name.value,
            login: this.refs.login.value};
        userStore.dispatch({
            type: ADD_USER,
            payload: user   
        })
    };
    componentWillMount(){
        userStore.subscribe(() => {
            this.setState(userStore.getState());
        });
    }

    componentWillUnmount(){
        this.sub();
    }

    render() {
         let that = this;
         const users = this.state.users.map(function(user,index){
            return (<div key={index}><div>Name: {user.name}</div><div>Login: {user.login}</div><div>);
        });

        return (
            <div className="container">
                { users }
            </div>
            <div className="form-group">
                <label for="name">Заголовок</label>
                <input type="text" id="name" ref="name" value="">
            </div>
            <div className="form-group">
                <label for="login">Текст</label>
                <input type="text" id="login" ref="login" value="">
            </div>
            
            <div><button type="button" onClick={this.addUser}>Добавить</button></div>
        );
    }

    componentWillMount() {
        //console.log(this);
    }
}
