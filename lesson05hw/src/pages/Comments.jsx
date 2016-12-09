// https://jsonplaceholder.typicode.com/comments

import React from 'react';
import CommentList from "../components/CommentList";

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            loaded: false
        }

        let p = new Promise((resolve,reject)=>{
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/comments',
                method: 'GET',
                success: (response) => {
                    resolve(response);
                },
                error: (err) => {
                    reject(err);
                }
            });
        }).then((data)=>{
            this.data = data;
            this.setState({loaded: true});
            // console.log(data);
        });
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    render() {
        return(
              
                <div className="container-fluid theme-showcase" role="main"> 
                {
                    this.state.loaded && this.state.mounted
                    ? <CommentList comments={this.data}></CommentList>
                    : <span> Loading data...</span>
                }     
                </div>
            
        );
    }
}