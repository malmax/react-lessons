import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.js';
import {ADD_ARTICLE} from '../constants/Articles.js';

class ArticlesStore extends EventEmitter {
    constructor() {
        super();

        this.articles = [];
        this.handleActions = this.handleActions.bind(this);
    }

    addArticle(article) {
        
        this.articles.push(article);
        this.emit('change');
    }

    getArticles() {
        return this.articles;
    }

    handleActions(action) {
        switch(action.type) {
            case ADD_ARTICLE: {
                this.addArticle(action.payload);
            }

        }
    }
}

const articlesStore = new ArticlesStore;

dispatcher.register(articlesStore.handleActions);

export default ArticlesStore;