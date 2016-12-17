import React from 'react';
import MenuItem from '../components/MenuItem';
import {Link} from 'react-router';

export default class Default extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        
        return (
            <div>
            <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <Link className="navbar-brand" to="/">
                        My Blog
                    </Link>

                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  
                   
                    <ul className="nav navbar-nav">
                        <MenuItem href="/" text = "Главная страница" />                        
                        <MenuItem href="/blogs" text = "Блоги" />
                        <MenuItem href="/comments" text = "Комментарии" />                                                  
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <MenuItem href="/users" text = "Пользователи" />  
                    </ul>
                    </div>
                </div>
            </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}