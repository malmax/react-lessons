import React from 'react';
import Article from './Article';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.addArticle = this.addArticle.bind(this);
    }

    addArticle() {
        let article = {
            title: this.refs.title.value,
            message: this.refs.message.value,
            author: this.refs.author.value
        };

        this.props.addArticle(article);
    }

    render() {
        const articles = this.props.articles.map((article, index) => {
            return (<Article key={index} {...article} />);
        });

        return (
            <div>
                <ul class="container">
                    { articles }
                </ul>
                <form>
                    <div class="form-group">
                        <label for="title">Article Titlte</label>
                        <input type="text" ref="title" id="title" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="message">Article Message</label>
                        <input type="text" ref="message" id="message" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="author">Article Author</label>
                        <input type="text" ref="author" id="author" class="form-control" />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.addArticle}>Create</button>
                </form>
            </div>
        );
    }
}