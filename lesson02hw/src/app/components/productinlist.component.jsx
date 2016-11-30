// Небоходимо разработать еще один компонент, на примере того, как это было сделано на уроке. Задача этого компонента - выводить какую то верстку, можете придумать сами :)

import React from 'react';

export default class ProductInList extends React.Component {
    
    render() {
        return (
            <div className="col-md-3 product-in-list">
                <figure>
                    <img src={this.props.imgsrc} />
                    <a href="{this.props.href}">
                        <h4>{this.props.title}</h4>
                    </a>                    
                </figure>
                <footer>
                    <div className="col-md-4 price">{this.props.price}</div>
                    <div className="col-md-8">
                        <a href="addtocart.php?id={this.props.id}" className="btn btn-default">
                            В корзину
                        </a>
                    </div>
                </footer>
                

            </div>
        );
    }
}