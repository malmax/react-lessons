// Небоходимо разработать еще один компонент, на примере того, как это было сделано на уроке. Задача этого компонента - выводить какую то верстку, можете придумать сами :)

import React from 'react';
require('./productinlist.component.css');

export default class ProductInList extends React.Component {
    handleClick(event) {
        if(event.target.tagName == 'A' || event.target.parentNode.tagName == 'A') {
            event.preventDefault();            
            alert(new Date());
        }
        
    }

    render() {
        return (
            <div className="col-md-3 product-in-list text-center" onClick={this.handleClick}>
                <figure>
                    <img src={this.props.imgsrc} className="img-responsive img-product-in-list" />
                    <a href={`product/${this.props.id}`}>
                        <h4>{this.props.title}</h4>
                    </a>                    
                </figure>
                <footer>
                    <div className="col-md-4 price">{this.props.price}</div>
                    <div className="col-md-8">
                        <a href = {'addtocart.php?id=' + this.props.id} className="btn btn-default">
                            В корзину
                        </a>
                    </div>
                </footer>     
            </div>
        );
    }
}