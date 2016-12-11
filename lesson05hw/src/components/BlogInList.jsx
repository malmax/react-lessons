import React from 'react';
import {Link} from 'react-router';

export default class BlogInList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4>
                        <Link to={`/blogs/${this.props.id}`}>{this.props.title}</Link>
                        <small>  Блог №{this.props.id}</small>
                    </h4>
                </div>  
                <div className="panel-body">
                    {this.props.body}
                </div>
            </div>
        );
    }

}
