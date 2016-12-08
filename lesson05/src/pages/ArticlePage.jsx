import React from 'react';
import Articles from "../components/Articles.jsx";
import TextBlocksContainer from "../components/TextBlocksContainer";
import TextBlock from "../components/TextBlock";
import TextElement from "../components/TextElement";
import {browserHistory} from 'react-router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.articles = [
            {id: 1, author: 'Reorter', header: 'Batman comming', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.'},
            {id: 2, author: 'Joker', header: 'Superman comming', text: 'consectetur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.'},
            {id: 3, author: 'None', header: 'Fishman comming', text: 'tur adipisicing elit. Eveniet consequatur, voluptate sint hic tempore sunt ipsa, velit impedit cum, fuga earum quod placeat accusamus veritatis. Commodi expedita ea veniam ex.', publishDate: new Date(2015,11,5)}
        ];

        this.handleClick = this.handleClick.bind(this);    
    }

    handleClick() {
        browserHistory.goBack();
    }

    render() {       
        return (    
            <div>  
            <button onClick={this.handleClick} type="button">Go Back</button>

                <div className="container-fluid theme-showcase" role="main">           
                    <TextBlocksContainer articles={this.articles}>
                        <TextBlock>
                            <TextElement text="TextBlock"></TextElement>
                        </TextBlock>
                    </TextBlocksContainer>
                    

                    {this.props.children
                        ? this.props.children
                        : <Articles articles={this.articles} />}
                </div>
            </div>
        );
    }
}
