import React from 'react';
import {Link} from 'react-router';

export default class Default extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <Link className="navbar-brand" to="/">
                        Brand
                    </Link>

                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  
                   
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/" activeClassName="active">Main</Link>
                        </li>
                        <li>
                            <Link to="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link to="/comments">Comments</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                    {this.props.children}
                </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}