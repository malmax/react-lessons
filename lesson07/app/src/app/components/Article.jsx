import React from 'react';

import { Link } from 'react-router';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div>{ this.props.author }</div>
                <div>{ this.props.title }</div>
                <div>{ this.props.message }</div>
            </li>
        );
    }

    static propTypes = {
        author: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired
    }
}