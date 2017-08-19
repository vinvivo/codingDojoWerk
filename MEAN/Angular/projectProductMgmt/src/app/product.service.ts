import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ProductService {
  products = [
    {name: "Concept Board Game", price: 39.35, url: "https://images-na.ssl-images-amazon.com/images/I/816P1YUoX3L._SY450_.jpg"},
    {name: "Funny Quotes Throw Pillow", price: 3.92, url: "https://images-na.ssl-images-amazon.com/images/I/61-PIM3oCTL._SX425_.jpg"},
    {name: "Zen Art", price: 4.99, url: "https://images-na.ssl-images-amazon.com/images/I/41jTlAAE16L.jpg"},
  ];

  constructor(private _http: Http) { }

  createItem(product) {
    this.products.push(product);
  };

  getAllProducts() {
    return this.products;
  };

  findOne(index) {
    return [this.products[index]];
  };

  updateOne(product, index){
    this.products[index] = product;
  };

  delete(index){
    this.products.splice(index,1);
    return this.products;
  };

}
