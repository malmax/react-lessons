import React from 'react';
import Article from './Article';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const articles = this.props.articles.map((article, index) => {
            return (<Article key={index} {...article} />);
        });

        return (
            <ul class="container">
                { articles }
            </ul>
        );
    }
}