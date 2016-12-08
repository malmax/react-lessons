import React from 'react';

import Menu from './Menu.jsx';
import Modal from "./Modal.jsx";
import "./Layout.css";
import LoginForm from "./LoginForm";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.menus = [{
                href:"#",
                text:"Home"
            },
            {
                href:"#",
                text:"About"
            },
            {
                href:"#",
                text: "Login",
                click: this.showModal.bind(this)
            }];

        this.showModal = this.showModal.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.hideModal();
    }

    showModal() {
        $('#modal').modal('show');
    }

    hideModal() {
        $('#modal').modal('hide');
    }

    onLogin() {
        let loginForm = this.refs.loginForm;
        console.log(loginForm.state.login, loginForm.state.password);

        this.hideModal();
    }

    render() {
        
        return(
            <div className="container">
                <div className="header clearfix">
                    <Menu right menus={this.menus} />
                    
                    <h3 className="text-muted">My Blog</h3>
                </div>

                <div>
                    {this.props.children}
                </div>

                <footer className="footer">
                    <p>&copy; 2016 Company, Inc.</p>
                </footer>

                <Modal title="Login form" ref="modal" onLogin={this.onLogin}>
                    <LoginForm ref="loginForm" />
                </Modal>
            </div>

            
        );
    }
}