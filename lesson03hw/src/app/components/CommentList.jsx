import React from 'react';
import CommentListItem from "../components/CommentListItem";
import '../../style/components/CommentListItem';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return(
            <div className="comment-list-container">
            {
                this.props.comments.map((comment,index)=>{
                    return <CommentListItem key={index} {...comment} />
                })
            }
            </div>
        );
    }
}