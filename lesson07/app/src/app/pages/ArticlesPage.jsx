import React from 'react';
import Articles from '../components/Articles'
import { Link, browserHistory } from 'react-router';
import articlesActions from '../actions/Articles';
import articlesStore from '../stores/ArticlesStore';

import {connect} from 'react-redux';

@connect((store) =>{
    return {
        articles: store.articles
    };
});
export default class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: articlesStore.getArticles()
        };

        this.addArticle = this.addArticle.bind(this);
        this.refresh = this.refresh.bind(this);
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
        });
    }

    addArticle({ title, message, author }) {
        articlesActions.addArticle({title, message, author});
    }

    render() {
        return (
            <div class="container-fluid">
                <Articles articles={this.state.articles} addArticle={this.addArticle} />
            </div>
        );
    }
}