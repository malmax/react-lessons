import React from 'react';

import Comment from './Comment';
import "../../style/components/CommentList";

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

        let p = new Promise((resolve,reject)=>{ 
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/comments?postId='+this.props.blogId,
                method: 'GET',
                success: (data)=>{  setInterval(resolve.bind(this,data), 6000) },
                error: (err) => { reject(err) }
            })
        }).then((data) => {
            
            this.setState({loaded: true, commentData: data});
            
        });
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