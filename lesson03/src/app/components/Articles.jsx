import React from 'react';
import Article from './Article.jsx';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.onArticleClick = this.onArticleClick.bind(this);
    }

    onArticleClick(event) {
        console.log(event.target);
    };

    render() {
         let that = this;
         const articles = this.props.articles.map(function(article,index){
            return (<Article ref={index+"_article"} onArticleClick={ that.onArticleClick } key={index} {...article} />);
        });

        return (
            <ul className="container">
                { articles }
            </ul>
        );
    }

    componentWillMount() {
        //console.log(this);
    }
}
