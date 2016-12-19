import React from 'react';
import Comment from './Comment';
import "../../style/components/CommentList";
import { connect } from 'react-redux';

import { loadCommentsForPost, loadAllComments } from '../actions/commentsActions';

@connect(store => {
    return {
        comments: store.comments.comments,
        isAllLoaded: store.comments.isAllLoaded   
    };
})
export default class CommentList extends React.Component {
    constructor(props) {
        super(props);

        // {
        //     "postId": 1,
        //     "id": 1,
        //     "name": "id labore ex et quam laborum",
        //     "email": "Eliseo@gardner.biz",
        //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        // }

        this.comments = [];
        if(this.props.blogId) { // если задан номер блога
            this.props.dispatch(loadCommentsForPost(this.props.blogId));
        }
        else if(this.props.userId) { // если задан пользователь
            if(! this.props.isAllLoaded)
                this.props.dispatch(loadAllComments());
            // this.comments = this.props.comments.filter(commentIn => parseInt(Math.random()*20) == 5);
        }
        else { // если ничего не задано то выводим последние 50 комментов
            if(! this.props.isAllLoaded)
                this.props.dispatch(loadAllComments());
            // this.comments = this.props.comments.reverse().slice(0,49);
        }
        
    }

    render() { 
        if(this.props.blogId) { // если задан номер блога
                this.comments = this.props.comments.filter(commentIn => commentIn.postId == this.props.blogId);
        }
        else if(this.props.userId) { // если задан пользователь
            this.comments = this.props.comments.filter(commentIn => { 
                return parseInt(Math.random()*20) == 5;});
        }
        else { // если ничего не задано то выводим последние 50 комментов
            this.comments = this.props.comments.reverse().slice(0,49);
        }


        
        if(! this.comments.length)
            return <span>Loading comments...</span>;

        const comments = this.comments.map((item) => {
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