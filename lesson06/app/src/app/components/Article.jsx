import React from 'react';

export default class Article extends React.Component {
    constructor(props) {
        super(props);

       
    }
    
    render() {
        return (
            <li>                
                <div>{ this.props.title }</div>
                <div>{ this.props.message }</div>
                <div>{ this.props.author }</div>
            </li>
            
        );
    }
   
}
