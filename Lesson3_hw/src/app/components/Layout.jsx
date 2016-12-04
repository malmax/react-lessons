import React from 'react';

import LoginForm from './LoginForm';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Modal from './Modal';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.showModal = this.showModal.bind(this);
        this.onLogin = this.onLogin.bind(this);
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
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                                Blog
                            </a>
                        </div>

                        <Menu>
                            <MenuItem href="#" text="Main" />
                        </Menu>

                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" class="btn btn-success" onClick={this.showModal}>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    { this.props.children }
                </div>
                <Modal title="Login form" onLogin={this.onLogin} ref="modal">
                    <LoginForm ref="loginForm" />
                </Modal>
            </div>
        );
    }
}