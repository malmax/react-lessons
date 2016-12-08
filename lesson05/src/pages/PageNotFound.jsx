import React from 'react';
import {Link} from 'react-router';

export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h1>Error!!<small>Page not found!</small></h1>
                <div>
                    <Link to="/">Main</Link>
                </div>
            </div>
        );
    }
    
    static PropTypes = {
    
    }
    
    static defaultProps = {
    
    }
}