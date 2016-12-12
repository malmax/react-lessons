import React from 'react';
import Comment from './Comment';
import "../style/components/CommentList";
import CommentService from '../services/CommentService.js';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            mounted: false,
            commentData: null
        };

        // {
        //     "postId": 1,
        //     "id": 1,
        //     "name": "id labore ex et quam laborum",
        //     "email": "Eliseo@gardner.biz",
        //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        // }

        if(this.props.blogId) { // если задан номер блога
            CommentService.getCommentsByBlogId(this.props.blogId).then((data) => {            
                this.setState({loaded: true, commentData: data});            
            });
        }
        else if(this.props.userId) { // если задан пользователь
            CommentService.getCommentsByUserId(this.props.userId).then((data) => {            
                this.setState({loaded: true, commentData: data});            
            });
        }
        else { // если ничего не задано то выводим последние 50 комментов
            CommentService.getAllComments().then((data) => {            
                this.setState({loaded: true, commentData: data.reverse().slice(1,50)});            
            });
        }
        
    }

    componentWillMount() {
        this.setState({mounted: true});
    }

    render() { 
        if(!(this.state.loaded && this.state.mounted))
            return <span>Loading comments...</span>;

        let comments = this.state.commentData.map((item) => {
                                    return <Comment {...item} date={new Date(new Date().getTime() * Math.random()).toISOString()} key={'commentId' + item.id} />                                    
                                });                      
        
        return(
            <div className="comment-list">
                {comments}
            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }
}