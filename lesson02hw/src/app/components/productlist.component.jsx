import React from 'react';
import ProductInList from './app/components/productinlist.component.jsx';

export default class ProductList extends React.Component {
    render() {
        return (
            <div className="product-list row">
                <ProductInList id="1" title="Роза обыкновенная" href="product/1" imgsrc="http://placehold.it/150x250" price="250" />
                <ProductInList id="2" title="Хризантемма" href="product/2" imgsrc="http://placehold.it/150x250" price="150" />
                <ProductInList id="3" title="Роза дикая" href="product/3" imgsrc="http://placehold.it/150x250" price="190" />
                <ProductInList id="4" title="Лютик" href="product/4" imgsrc="http://placehold.it/150x250" price="50" />
                <ProductInList id="5" title="Букет С днем рождения" href="product/5" imgsrc="http://placehold.it/150x250" price="990" />
                <ProductInList id="6" title="Орхидея" href="product/6" imgsrc="http://placehold.it/150x250" price="390" />            
            </div>
        );
    }
}
