import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);      

        this.state = {
            active: false
        }  
    }
 
    static contextTypes = {
        router: React.PropTypes.object
    }
    // добавляем active если router.location.pathname = href
    componentWillReceiveProps() {        
        this.setState({
            active: this.context.router.location.pathname == this.props.href
        });
    }
 
    render() {        
        return (<li className={ this.state.active ? 'active' : '' }>
                    <Link to={this.props.href} onClick = {this.props.click}>
                        {this.props.text}
                    </Link>
                </li>);
    }

     static propTypes = {
         href: React.PropTypes.string.isRequired,
         text: React.PropTypes.string.isRequired
     }
     static defaultProps = {        
        href: '#',
        text: 'Login'        
    }
}