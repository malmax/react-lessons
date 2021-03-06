import React from 'react';
import Articles from "../components/Articles.jsx";
import TextBlocksContainer from "../components/TextBlocksContainer";
import TextBlock from "../components/TextBlock";
import TextElement from "../components/TextElement";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.articles = [
            {author: 'Reorter', header: 'Batman comming', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.'},
            {author: 'Joker', header: 'Superman comming', text: 'consectetur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.'},
            {author: 'None', header: 'Fishman comming', text: 'tur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.', publishDate: new Date(2015,11,5)}
        ];
    }

    render() {       
        return (    
            <div>  
                <div className="container-fluid theme-showcase" role="main">           
                    <TextBlocksContainer articles={this.articles}>
                        <TextBlock>
                            <TextElement text="TextBlock"></TextElement>
                        </TextBlock>
                    </TextBlocksContainer>
                    <Articles articles={this.articles} />
                </div>
            </div>
        );
    }
}
