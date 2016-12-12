import React from 'react';
import UserService from '../services/UserService.js';
import {Link, browserHistory} from 'react-router';
import CommentList from '../components/CommentList.jsx';
import BlogListPage from '../pages/BlogListPage.jsx';

import '../style/pages/UserPage.sass';

export default class UserPage extends React.Component {
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
            .getUserById(this.props.params.userId)
            .then((data) => {
                this.setState({loaded: true, usersData: data});
            });

        this.handleBack = this.handleBack.bind(this);
    }

    componentWillMount() {
        this.setState({mounted: true});
    }

    handleBack() {
        browserHistory.goBack();
    }

    render() {
        if (!(this.state.loaded && this.state.mounted)) 
            return <span>Loading users...</span>;
        
        let item = this.state.usersData            
        const userInfo = (<div className="panel panel-default" key={`user${item.id}`}>
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
            

        return (
            <div className="user-list">
                <button onClick={this.handleBack} type="button" className="btn btn-primary">Вернуться назад</button>
                {userInfo}
                <div className="row">
                    <div className="col-md-6">
                        <h3>Блоги пользователя:</h3>
                        <BlogListPage userId = {this.props.params.userId} />
                    </div>
                    <div className="col-md-6">
                        <h3>Комментарии пользователя:</h3>
                        <CommentList userId = {this.props.params.userId} />
                    </div>
                </div>
            </div>
        );
    }

}