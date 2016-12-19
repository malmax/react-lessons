import React from 'react';
import {browserHistory, Link} from 'react-router';

import { loadBlogs } from '../actions/blogsActions';
import { loadUsers } from '../actions/usersActions';
import { connect } from 'react-redux';

import '../../style/components/BlogPost';

@connect(store => {
    return {
        blogs: store.blogs.blogs,
        isLoaded: store.blogs.isLoaded,
        users: store.users.users,
        isLoadedUsers: store.users.isLoaded
    };
})
export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);

        // { "userId": 1, "id": 1, "title": "sunt ...", "body": "quia ..." }
        
        this.handleBack = this.handleBack.bind(this);

        // если блоги еще не были загружены
        if(! this.props.isLoaded)
            this.props.dispatch(loadBlogs());
        // загружаем юзеров
        if(! this.props.isLoadedUsers) {
            this.props.dispatch(loadUsers());
            this.user = 'loading user';
        }

        this.blogData = this.props.blogs.filter(blogIn => blogIn == this.props.blogId)[0] || {};
    }

    handleBack() {
        browserHistory.goBack();
    }

    render() {
  
        if (! this.props.isLoaded) 
            return <span>Loading data...</span>;

        this.blogData = this.props.blogs.filter(blogIn => blogIn.id == this.props.blogId)[0];

        if(! this.props.isLoadedUsers)
            this.user = {};
        else
            this.user = this.props.users.filter(userIn => userIn.id == this.blogData.userId)[0];
        
        return (
            <div>
                <button onClick={this.handleBack} type="button" className="btn btn-primary">Вернуться назад</button>

                <h1>{this.blogData.title}
                    <small>(id: {this.blogData.id})</small></h1>

                <p className="lead">
                    by <Link to={`/users/${this.user.id}`}>{this.user.name}</Link>
                </p>

                <hr/>

                <p>
                    <span className="glyphicon glyphicon-time"></span>
                    Posted on {new Date(new Date().getTime() * Math.random()).toString()}</p>

                <hr/>

                <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>

                <hr/>

                <p>{this.blogData.body}</p>

                <hr/>

            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }

}