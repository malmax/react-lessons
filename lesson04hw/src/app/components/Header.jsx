import React from 'react';
import Menu from './Menu';
import '../../style/components/Header';

export default class Header extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Menu links={[{text: this.props.title, href:"/", className: "navbar-brand"}]} className="" />                       
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <Menu links={[{
                            text: "About",
                            href: "#"
                        },
                        {
                            text: "Services",
                            href: "#"
                        },
                        {
                            text: "Contact",
                            href: "#"
                        }]} className="nav navbar-nav" />
                        
                    </div>
                    
                </div>
                
            </nav>
        );
    }
}