import React from 'react';
import {Link, browserHistory} from 'react-router';

export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {       
        browserHistory.goBack();
    }

    render() {
        return (
            <div>
                <h1>Error!!<small>Page not found!</small>
                </h1>
                <div>
                    <a href="#" className="btn btn-primary btn-lg" onClick={this.handleClick}>Вернуться назад</a>
                </div>
            </div>
        );
    }

}