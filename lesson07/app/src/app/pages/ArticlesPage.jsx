import React from 'react';
import Articles from '../components/Articles'
import { Link, browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { createArticle } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles
    };
})
export default class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);

        this.addArticle = this.addArticle.bind(this);
    }

    addArticle({ title, message, author }) {
        let article = { title, message, author };
        let toDispatch = createArticle(article);

        this.props.dispatch(toDispatch);
    }

    render() {
        return (
            <div class="container-fluid">
                <Articles articles={this.props.articles} addArticle={this.addArticle} />
            </div>
        );
    }
}