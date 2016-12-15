import React from 'react';

export default class BlogSearch extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
          <div className={this.props.className}>
            <h4>{this.props.title}</h4>
            <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search"></span>
                </button>
                </span>
            </div>
          </div>  
        );
    }

    static PropTypes = {
        className: React.PropTypes.string,
        title: React.PropTypes.string.isRequired
    }
}