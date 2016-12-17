import React from 'react';
import UserService from '../services/UserService.js';
import {Link} from 'react-router';

export default class UserListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            mounted: false,
            usersData: null
        };

        //   {     "id": 1,     "name": "Leanne Graham",     "username": "Bret",
        // "email": "Sincere@april.biz",     "address": {       "street": "Kulas Light",
        //       "suite": "Apt. 556",       "city": "Gwenborough",       "zipcode":
        // "92998-3874",       "geo": {         "lat": "-37.3159",         "lng":
        // "81.1496"       }     },     "phone": "1-770-736-8031 x56442",     "website":
        // "hildegard.org",     "company": {       "name": "Romaguera-Crona",
        // "catchPhrase": "Multi-layered client-server neural-net",       "bs": "harness
        // real-time e-markets"     }   },

        UserService
            .getUserById(this.props.userId)
            .then((data) => {
                this.setState({loaded: true, userData: data});
            });
    }

    componentWillMount() {
        this.setState({mounted: true});
    }

    render() {
        if (!(this.state.loaded && this.state.mounted)) 
            return <span>Loading users...</span>;
        
        return (
            <Link to={`/users/${this.state.userData.id}`}>{this.state.userData.name}</Link>
        );
    }

}