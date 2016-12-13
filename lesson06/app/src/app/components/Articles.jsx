import React from 'react';
import Article from './Article.jsx';

import articlesActions from '../actions/Articles.js';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.addButtonClick = this.addButtonClick.bind(this);
    }

    addButtonClick(event) {
        articlesActions.addArticle({
            title: this.refs.title.value,
            message: this.refs.message.value,
            author: this.refs.author.value
        })
    };

    render() {
         let that = this;
         const articles = this.props.articles.map(function(article,index){
            return (<Article ref={index+"_article"} key={index} {...article} />);
        });

        return (
            <ul className="container">
                { articles }
            </ul>
            <div>
                <label for="title">Заголовок</label>
                <input type="text" id="title" ref="title" value="">
            </div>
            <div>
                <label for="message">Текст</label>
                <input type="text" id="message" ref="message" value="">
            </div>
            <div>
                <label for="author">Автор</label>
                <input type="text" id="author" ref="author" value="">
            </div>
            <div><button type="button" onClick={this.addButtonClick}>Добавить</button></div>
        );
    }

    componentWillMount() {
        //console.log(this);
    }
}
