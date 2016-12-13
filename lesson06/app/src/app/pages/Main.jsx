import React from 'react';
import {Link, browserHistory } from 'react-router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        browserHistory.push(`/articles`);
    }

    render() {
        return (
            
            <div className="jumbotron">
                <h1>Главная страница!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste doloremque harum dolore! Repudiandae soluta, ducimus dolorum iure ipsa consequatur possimus ab rem, at deserunt est. Minima iusto, dolore, provident illo aliquam impedit quod asperiores qui voluptate praesentium aspernatur nemo. Necessitatibus, quasi consequatur iusto, amet tempora accusamus non id voluptatum, accusantium velit asperiores. Earum praesentium laborum fugit facere nihil, recusandae voluptates dolore culpa totam nesciunt blanditiis odio sunt necessitatibus obcaecati et aliquam atque perspiciatis suscipit libero facilis quae officiis. Porro accusantium quod deleniti quos enim pariatur placeat sequi vel, excepturi ullam rem quo dolores. Nihil, nostrum, eveniet? Id, qui, saepe!</p>
                <ul className="list-inline">
                    <li><button onClick={this.handleClick} type="button" className="btn btn-primary btn-lg">Go To Blogs</button></li>
                    <li><Link to="/aaa" className="btn btn-primary btn-lg">Go to Test</Link></li>
                    <li><Link to="/blog" className="btn btn-primary btn-lg">Go to Blog</Link></li>
                </ul>
                
            </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}