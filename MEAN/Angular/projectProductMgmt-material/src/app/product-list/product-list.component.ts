import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  myData: Array<any>;   // for Material demo

  constructor(private _productService: ProductService, private _http: Http) {
    this.products = this._productService.getAllProducts();
    this._http.get(`https://jsonplaceholder.typicode.com/photos`)
    .map(response => response.json())
    .subscribe(res => this.myData = res);
  }

  ngOnInit() {
  }

  deleteThis(index) {
    this._productService.delete(index);
  }
}
