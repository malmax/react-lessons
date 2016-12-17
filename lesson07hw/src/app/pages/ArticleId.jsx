import React from 'react';
import {Link} from 'react-router';

export default class ArticleId extends React.Component {
    constructor(props) {
        super(props);


        this.blogId = this.props.params.blogId;
    }

    render() {
        return (
            <div>            
                {this.blogId}
                <Link to="/articles">Back</Link>
            </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}