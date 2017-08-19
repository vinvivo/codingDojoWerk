import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private _productService: ProductService) {
    this.products = this._productService.getAllProducts();
  }

  ngOnInit() {
  }

  deleteThis(index) {
    this._productService.delete(index);
  }
}
