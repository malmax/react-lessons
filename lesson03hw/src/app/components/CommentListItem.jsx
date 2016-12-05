import React from 'react';
import '../../style/components/CommentListItem';

export default class CommentListItem extends React.Component {
    constructor(props) {
        super(props);        
    }

// "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laud"

    render(){
        return(
            <div className="comment-item">
                <div className="comment-item-name">
                    {this.props.name}
                </div>
                <div className="comment-item-email">
                    {this.props.email}
                </div>
                <div className="comment-item-body">
                    {this.props.body}
                </div>
            </div>
        );
    }
}