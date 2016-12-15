import React from 'react';
import { Link, browserHistory } from 'react-router';
import userStore from '../stores/UsersStore';
import { ADD_USER } from '../constants/Users';

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = userStore.getState();
        this.addUser = this.addUser.bind(this);
        this.sub = null;
    }

    componentWillMount() {
        this.sub = userStore.subscribe(() => {
            this.setState(userStore.getState());
        });
    }

    componentWillUnmount() {
        this.sub();
    }

    addUser() {
        let user = {
            name: this.refs.name.value,
            login: this.refs.login.value
        };

        userStore.dispatch({
            type: ADD_USER,
            payload: user
        });
    }

    render() {
        const users = this.state.users.map((user, index) => {
            return (
                <div key={index}>
                    <div>{ user.name }</div>
                    <div>{ user.login }</div>
                </div>
            );
        });

        return (
            <div class="container-fluid">
                { users }
                <form>
                    <div class="form-group">
                        <label for="name">UserName</label>
                        <input type="text" ref="name" id="name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="login">Login</label>
                        <input type="text" ref="login" id="login" class="form-control" />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.addUser}>Create</button>
                </form>
            </div>
        );
    }
}