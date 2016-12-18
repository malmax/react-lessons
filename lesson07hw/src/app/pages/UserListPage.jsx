import React from 'react';
import UserService from '../services/UserService.js';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/usersActions';

@connect(store => {
    return {
        users: store.users.users,
        isLoaded: store.users.isLoaded
    };
})
export default class UserListPage extends React.Component {
    constructor(props) {
        super(props);

        //   {     "id": 1,     "name": "Leanne Graham",     "username": "Bret",
        // "email": "Sincere@april.biz",     "address": {       "street": "Kulas Light",
        //       "suite": "Apt. 556",       "city": "Gwenborough",       "zipcode":
        // "92998-3874",       "geo": {         "lat": "-37.3159",         "lng":
        // "81.1496"       }     },     "phone": "1-770-736-8031 x56442",     "website":
        // "hildegard.org",     "company": {       "name": "Romaguera-Crona",
        // "catchPhrase": "Multi-layered client-server neural-net",       "bs": "harness
        // real-time e-markets"     }   },

        this.props.dispatch(loadUsers());

    }

    

    render() {
        if (!this.props.isLoaded) 
            return <span>Loading users...</span>;
        
        const users = this.props.users.reverse().map((item, i) => {
                return (
                    <div className="panel panel-default" key={`user${item.id}`}>
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <Link to={`/users/${item.id}`}>{item.name}</Link>
                                <small> ({item.username})</small>
                            </h3>
                            <p>Email: {item.email}</p>
                        </div>
                        <div className="panel-body">
                            <p>Phone: {item.phone}</p>
                            <p>Website: {item.website}</p>
                            <p>Address: {Object.values(item.address).toString()}</p>
                            <p>Company: {Object.values(item.company).toString()}</p>
                        </div>
                    </div>
                );
            });

        return (
            <div className="user-list">
                {this.props.children || users}
            </div>
        );
    }

}