import React from 'react';
import BlogService from '../services/BlogService.js';
import {browserHistory} from 'react-router';
import UserLink from '../components/UserLink.jsx';

import '../../style/components/BlogPost';

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            mounted: false,
            blogData: null
        };

        // { "userId": 1, "id": 1, "title": "sunt ...", "body": "quia ..." }
        BlogService.getBlogById(this.props.blogId).then(data => this.setState({blogData: data,loaded: true }));

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
            return <span>Loading data...</span>;
        
        const blogData = Object.assign({
            date: new Date(new Date().getTime() * Math.random()).toString()
        }, this.state.blogData);

        
        return (
            <div>
                <button onClick={this.handleBack} type="button" className="btn btn-primary">Вернуться назад</button>

                <h1>{blogData.title}
                    <small>(id: {blogData.id})</small></h1>

                <p className="lead">
                    by <UserLink userId = {blogData.userId} />
                </p>

                <hr/>

                <p>
                    <span className="glyphicon glyphicon-time"></span>
                    Posted on {blogData.date}</p>

                <hr/>

                <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>

                <hr/>

                <p>{blogData.body}</p>

                <hr/>

            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }

}