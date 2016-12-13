import React from 'react';
import Articles from "../components/Articles.jsx";

import articlesActions from '../actions/Articles';
import articlesStore from '../stores/ArticlesStore';


export default class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: articlesStore.getArticles()
        };

        this.refresh = this.refresh.bind(this);
        this.addArticle = this.addArticle.bind(this);
    }

    componentWillMount() {
        articlesStore.addListener('change', this.refresh);
    }

    componentWillUnmount() {
        articlesStore.removeListener('change', this.refresh);
    }

    refresh() {
        this.setState({
            articles: articlesStore.getArticles()
        })
    }

    addArticle(article) {
        articlesActions.addArticle(article);
    }

    render() {

        return (
            <div>
                   <Articles articles={this.state.articles} addArticle={this.addArticle} />
            </div>
        );
    }
}
