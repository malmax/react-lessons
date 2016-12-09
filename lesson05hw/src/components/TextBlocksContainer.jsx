import React from 'react';

export default class TextBlocksContainer extends React.Component {
    render() {
        return (<div>
            { this.props.children }
        </div>);
    }
}