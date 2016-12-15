import React from 'react';

import { Link } from 'react-router';

export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Error!! Page not found</h1>
                <div>
                    <Link to="/">Main</Link>
                </div>
            </div>
        );
    }
}