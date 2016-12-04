import React from 'react';
import Articles from '../components/Articles'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.articles = [
            { author: 'Batman', header: 'About Gotham', text: 'asaaaa', publishDate: new Date() },
            { author: 'Superman', header: 'About Newyork', text: 'bbbbb', publishDate: new Date() },
            { author: 'Spiderman', header: 'About Newyork', text: 'asdasdsadsa', publishDate: new Date() }
        ];
    }

    render() {
        return (
            <div>
                <div class="container-fluid">
                    <Articles articles={this.articles} />
                </div>
            </div>
        );
    }
}