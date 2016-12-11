import React from 'react';
import BlogInList from "../components/BlogInList.jsx";
import {browserHistory} from 'react-router';
import BlogService from '../services/BlogService.js';

export default class BlogListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'loaded': false,
            'mounted': false,
            'messages': []
        };

        this.blogs = Promise
            .all(BlogService.getBlogs())
            .then(data => {
                this.setState({'loaded': true, 'messages': data});
            });

    }

    componentWillMount() {
        this.setState({'mounted': true});
    }

    render() {
// console.log(this.props.children);
        return (
            <div>
                <div className="container" role="main">

                    {this.state.loaded && this.state.mounted
                        ? this.props.children || this
                            .state
                            .messages
                            .map((item, i) => <BlogInList key={`blog${i}`} {...item}/>)
                        : <span>Loading data...</span>
}
                </div>
            </div>
        );
    }
}
