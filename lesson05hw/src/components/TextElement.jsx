import React from 'react';

export default class TextElement extends React.Component {
    render() {
        return (<div>
            { this.props.text }
        </div>);
    }
}