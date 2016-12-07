import React from 'react';
import '../../style/components/BlogPost';

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            mounted: false,
            blogData: null
        };

        // {
        // "userId": 1,
        // "id": 1,
        // "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        // "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        // }

        let p = new Promise((resolve,reject)=>{
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts/'+this.props.blogId,
                method: 'GET',
                success: (data)=>{ setInterval(resolve(data), 1000) },
                error: (err) => { reject(err) }
            })
        }).then((data) => {
            this.setState({loaded: true, blogData: data})
        });
    }

    componentWillMount() {
        this.setState({mounted: true});
    }

    render() { 
        if(!(this.state.loaded && this.state.mounted))
            return <span>Loading data...</span>;

        const blogData = Object.assign({date: new Date(new Date().getTime() * Math.random()).toString()}, this.state.blogData);                       
        
        return(
            <div>
                
                <h1>{blogData.title} (id: {this.props.blogId})</h1>

                 
                <p className="lead">
                    by <a href="#">Start Bootstrap</a>
                </p>

                <hr />

                
                <p><span className="glyphicon glyphicon-time"></span> Posted on {blogData.date}</p>

                <hr />

                
                <img className="img-responsive" src="http://placehold.it/900x300" alt="" />

                <hr />

                
                <p>{blogData.body}</p>

                <hr />
               
            </div>
        );
    }

    static PropTypes = {
        blogId: React.PropTypes.number.isRequired
    }

} 