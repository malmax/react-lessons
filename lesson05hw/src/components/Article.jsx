import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class Article extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            clicked: false,
        };
    }
    onClickHandler(e) {
        this.setState({
            clicked: !this.state.clicked
        })

        this.props.onArticleClick(e);

        var p = this.refs.authorDiv; //ссылка на компонент
        var DomElement = ReactDOM.findDOMNode(p); //получаем именно Дом элемент
        //console.log(p);
    }
    render() {
        return (
            <li className={this.state.clicked ? 'row active' : 'row'} onClick={this.onClickHandler} >
                <div ref="authorDiv">{ this.props.author }</div>
                <div>{ this.props.header }</div>
                <div>{ this.props.text }</div>
                <div>{ this.props.publishDate.toString() }</div>
                <div>
                    <Link to={`/articles/${this.props.id}`}> More </Link>
                </div>
            </li>
        );
    }
    static PropTypes = {
        author: React.PropTypes.string.isRequired,
        header: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        publishDate: React.PropTypes.object,
        someObject: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired
        })
    }
    static defaultProps = {
        someObject: {name: 'asadvsvs'},
        publishDate: new Date()
    }
}
