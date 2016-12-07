import React from 'react';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        // {
        //     "postId": 1,
        //     "id": 1,
        //      "date" : date,
        //     "name": "id labore ex et quam laborum",
        //     "email": "Eliseo@gardner.biz",
        //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        // }

        return (
            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" src="http://placehold.it/64x64" alt="" />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.name}
                        <small>{this.props.date}</small>
                    </h4>
                    {this.props.body}
                </div>
            </div>
        );
    }
}