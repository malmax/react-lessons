import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul class={ this.props.class }>
                { this.props.children }
            </ul>
        );
    }

    static propTypes = {
        class: React.PropTypes.string
    }

    static defaultProps = {
        class: 'nav navbar-nav'
    }
}