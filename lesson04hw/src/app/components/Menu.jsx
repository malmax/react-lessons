import React from 'react';
import Link from './Link';

import "../../../style/components/Menu.sass";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLink: null
        }        
    }

    clickFunc(elem) {
        this.setState({
            activeLink: elem
        });
    }

    render() {        
        
        if(this.props.links.length > 1) 
            return <ul className={this.props.className}>{
                this.props.links.map((obj, index)=>{
                    let activeLinkClass = null;
                    if(index === this.state.activeLink)
                        activeLinkClass = "active";
                    return <li key={index} className={activeLinkClass} ><Link {...obj} key={"navTopLink"+index} click={this.clickFunc.bind(this,index)} /></li>;
                }) 
            }</ul>;
        else
            return <Link {...this.props.links[0]} />;

    }

    static PropTypes = {
        links: React.PropTypes.array.isRequired,
        className: React.PropTypes.string
    }
}