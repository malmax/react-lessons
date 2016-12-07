import React from 'react';
import Menu from './Menu';

export default class BlogCategory extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let links = [];
        for(let i = 0; i < 4; i++) {
            links.push({href:"#", text: 'Category Name'});
        }
        return (
            <div className={this.props.className}>
                <h4>{this.props.title}</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <Menu className="list-unstyled" links={links} />                        
                    </div>
                    <div className="col-lg-6">
                        <Menu className="list-unstyled" links={links} />
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