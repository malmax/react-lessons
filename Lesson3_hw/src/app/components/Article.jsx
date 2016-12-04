import React from 'react';
import ReactDOM from 'react-dom';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div>{ this.props.author }</div>
                <div>{ this.props.header }</div>
                <div>{ this.props.text }</div>
                <div>{ this.props.publishDate.toString() }</div>
            </li>
        );
    }

    static propTypes = {
        author: React.PropTypes.string.isRequired,
        header: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        publishDate: React.PropTypes.object.isRequired,
        someObject: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired
        })
    }

    static defaultProps = {
        someObject: { name: 'asdasda' }
    }
}