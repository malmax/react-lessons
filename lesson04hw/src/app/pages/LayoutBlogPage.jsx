import React from 'react';
import BlogPost from '../components/BlogPost';
import CommentList from '../components/CommentList';
import BlogSearch from '../components/BlogSearch';
import BlogCategory from '../components/BlogCategory';

export default class LayoutBlogPage extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">                    
                    <div className="col-lg-8">
                        <BlogPost blogId={this.props.blogId} />

                        <CommentList blogId={this.props.blogId} />                        
                    </div>

                    
                    <div className="col-md-4">                                            
                        
                        <BlogSearch title="Blog Search" className="well" /> 
                        
                        <BlogCategory title="Blog Category" className="well" />                        

                        <div className="well">
                            <h4>Side Widget Well</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                        </div>

                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }
}