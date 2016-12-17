import React from 'react';
import { Link, browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { loadUsers } from '../actions/usersActions';

@connect((store) => {
    return {
        users: store.users.users,
        isLoading: store.users.isLoading,
        isLoaded: store.users.isLoaded,
        error: store.users.error.message
    };
})
export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        let toDispatch = loadUsers();

        this.props.dispatch(toDispatch);
    }

    render() {
        let users = (this.props.users || []).map((user) => {
            return (
                <div>{user.id} {user.name}</div>
            );
        });

        return (
            <div class="container-fluid">
                { users.length ? users : "No users!" }
            </div>
        );
    }
}