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

//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

        UserService.getAllUsers().then((data) => {
            
            this.setState({loaded: true, usersData: data});
            
        });
    }

    componentWillMount() {
        this.setState({mounted: true});
    }

    render() { 
        if(!(this.state.loaded && this.state.mounted))
            return <span>Loading users...</span>;

        const users = this.state.usersData.reverse()
                        .map((item,i) => {
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title"><Link to={`/users/${item.id}`}>{item.name}</Link><small>{item.username}</small></h3>
                                    <p>Email: {item.email}</p>
                                </div>
                                <div class="panel-body">
                                    <p>Phone: {item.phone}</p>
                                    <p>Website: {item.website}</p>
                                    <p>Address: {item.address.toString()}</p>
                                    <p>Company: {item.company.toString()}</p>
                                </div>
                            </div>                                    
                        });                      
        
        return(
            <div className="user-list">
                {users}
            </div>
        );
    }

}