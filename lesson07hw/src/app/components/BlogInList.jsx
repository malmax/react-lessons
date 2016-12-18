import React from 'react';
import {Link} from 'react-router';

import { toggleModalForm, removeBlog } from '../actions/blogsActions';

import { connect } from 'react-redux';

@connect(store => {
    return {
        isLoaded: store.blogs.isLoaded
    };
})
export default class BlogInList extends React.Component {
    constructor(props) {
        super(props);

    }

    editBlogClick = () => {
        this.props.dispatch(toggleModalForm(this.props.id));
    }

    deleteBlogClick = () => {
        this.props.dispatch(removeBlog(this.props.id));
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4>
                        <Link to={`/blogs/${this.props.id}`}>{this.props.title}</Link>
                        <small>  Блог №{this.props.id}</small>
                    </h4>
                    <div className="text-right btn-group" role="group">
                        <button type="button" className = "btn btn-default btn-xs" data-toggle="modal" data-target="#myModal" onClick = {this.editBlogClick}>
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <button type="button" className="btn btn-danger btn-xs" onClick = {this.deleteBlogClick}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>  
                    </div>
                </div>  
                <div className="panel-body">
                    {this.props.body}
                </div>
            </div>
        );
    }

}
