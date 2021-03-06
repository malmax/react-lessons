import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };

        this.onLoginChangeHandler = this.onLoginChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    }

    onLoginChangeHandler(e) {
        let login = this.refs.login;
        this.setState({
            login: login.value
        });
    }

    onPasswordChangeHandler(e) {
        let password = this.refs.password;
        this.setState({
            password: password.value
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input type="text" className="form-control" id="login" ref="login" value={this.state.login} onChange={this.onLoginChangeHandler} placeholder="Enter login..." />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" className="form-control" id="password" ref="password" value={this.state.password} onChange={this.onPasswordChangeHandler} placeholder="Enter password..." />
                </div>
            </form>
        );
    }
}