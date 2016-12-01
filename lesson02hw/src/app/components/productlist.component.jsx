import React from 'react';
import ProductInList from './productinlist.component.jsx';

export default class ProductList extends React.Component {
    getProducts() {
        let data = require('./products.json'); //нужно подключить json-loader для обработки json
        
        return(data);
        // TODO: как лучше читать json: через json-loader или как-то копировать в dist и читать через ajax?

        //читаем данные из файла
        // let xmlhttp = new XMLHttpRequest();
        // xmlhttp.open('GET', `./products.json`, true);
        // xmlhttp.onreadystatechange = function() {
        //     if (xmlhttp.readyState == 4) {
        //         console.log(`Done loading`);
        //         return(JSON.parse(xmlhttp.responseText));
        //     }};
        // xmlhttp.send(null);
    }
    render() {
        let products = this.getProducts();
        
        products = products.map(function(item){
            return <ProductInList id={item.id} title={item.title} imgsrc={item.imgsrc} price={item.price} key={item.id} />
        });
        
        return (
            <div className="product-list row">
                {products}                  
            </div>
        );
    }
}
