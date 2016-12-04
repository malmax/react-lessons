import React from 'react';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li class={ this.props.class }>
                <a href={ this.props.href }>
                    { this.props.text }
                </a>
            </li>
        );
    }

    static propTypes = {
        class: React.PropTypes.string,
        text: React.PropTypes.string,
        href: React.PropTypes.string
    }

    static defaultProps = {
        class: '',
        href: '#',
        text: ''
    }
}