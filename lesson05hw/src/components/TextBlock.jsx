import React from 'react';

export default class TextBlock extends React.Component {
    render() {
        return (<div>
            { this.props.children }
        </div>);
    }
}