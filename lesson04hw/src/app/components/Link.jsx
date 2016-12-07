import React from 'react';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a href={this.props.href} onClick={this.props.click} className={this.props.className}>{this.props.text}</a>
        );
    }

    static PropTypes = {
        href: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    }
}