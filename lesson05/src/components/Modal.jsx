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
            <div className="modal fade" tabIndex="-1" role="dialog" id="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <h4 className="modal-title">
                                { this.props.title }
                            </h4>
                        </div>
                        <div className="modal-body">
                            { this.props.children }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={this.onLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}