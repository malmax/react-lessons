import React from 'react';
import MenuItem from './MenuItem.jsx';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        
        this.classes = ['nav','nav-pills'];
        if(this.props.right) {
            this.classes.push('pull-right');
        }

        this.state = {
            "active": 0
        }

        // this.menuClickHandler = this.menuClickHandler.bind(this);
    }

    menuClickHandler(...args) {        
        this.setState({'active':args[0]});
    }

    render() {
        let menus = this.props.menus.map((item,num)=>{ 
            let classes = this.state.active == num ? 'active' : '';
            
            return <MenuItem href={item.href} text={item.text} key={num} click={this.menuClickHandler.bind(this,num)} classes = {classes} />
        });
        
        return(
            <nav>
                <ul className={this.classes.join(" ")}>
                    {menus}
                </ul>
            </nav>
        );
    }
}