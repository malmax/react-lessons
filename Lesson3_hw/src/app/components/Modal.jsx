import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        this.props.onLogin();
    }

    render() {
        return (
            <div class="modal fade" tabIndex="-1" role="dialog" id="modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <h4 class="modal-title">
                                { this.props.title }
                            </h4>
                        </div>
                        <div class="modal-body">
                            { this.props.children }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary" onClick={this.onLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}