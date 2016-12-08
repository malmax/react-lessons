import React from 'react';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {        
        return <li className={this.props.classes}><a href={this.props.href} onClick = {this.props.click}>{this.props.text}</a></li>;
    }

     static propTypes = {
         href: React.PropTypes.string.isRequired,
         text: React.PropTypes.string.isRequired
     }
     static defaultProps = {        
        href: '#',
        text: 'Login',
        classes: ''
    }
}