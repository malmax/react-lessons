import React from 'react';
import {Link, browserHistory } from 'react-router';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        browserHistory.push(`/articles`);
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <button onClick={this.handleClick} type="button">Go To Blogs</button>
                <Link to="/aaa">Test</Link>
                <Link to="/blog">Blog</Link>
            </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}