import React from 'react';
import BlogPost from '../components/BlogPost';
import CommentList from '../components/CommentList';

export default class LayoutBlogPage extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-8">
                        <BlogPost blogId={this.props.blogId} />

                        <CommentList blogId={this.props.blogId} />                        
                    </div>
                </div>
            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }
}