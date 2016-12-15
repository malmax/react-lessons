import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        browserHistory.push(`/blog`);
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
}