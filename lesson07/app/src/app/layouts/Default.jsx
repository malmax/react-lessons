import React from 'react';
import { Link } from 'react-router';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pathname: this.props.location.pathname
        };

        this.routeChanged = this.routeChanged.bind(this);
        this.checkPath = this.checkPath.bind(this);

        this.props.router.listen(this.routeChanged);
    }

    routeChanged(route) {
        this.setState({ pathname: route.pathname });
    }

    checkPath(path) {
        return this.state.pathname == path ? 'active' : '';
    }

    render() {
        return (
            <div class="main-container">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <Link class="navbar-brand" to="/">
                                Brand
                            </Link>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class={this.checkPath('/')}>
                                    <Link to="/">
                                        Main
                                    </Link>
                                </li>
                                <li class={this.checkPath('/articles')}>
                                    <Link to="/articles">
                                        Articles
                                    </Link>
                                </li>
                                <li class={this.checkPath('/users')}>
                                    <Link to="/users">
                                        Users
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="main-content container-fluid">
                    { this.props.children }
                </div>
            </div>
        );
    }
}