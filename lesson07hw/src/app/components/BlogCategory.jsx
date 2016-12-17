import React from 'react';
import {Link} from 'react-router';

export default class BlogCategory extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let links = [];
        for (let i = 0; i < 4; i++) {
            links.push(
                <li key={`linkCategoryLi${i}`}>
                    <Link to="/" key={`linkCategory${i}`}>Category {i}</Link>
                </li>
            );
        }
        return (
            <div className={this.props.className}>
                <h4>{this.props.title}</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            {links}
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            {links}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }

    static PropTypes = {
        title: React.PropTypes.string.isRequired,
        className: React.PropTypes.string
    }

}