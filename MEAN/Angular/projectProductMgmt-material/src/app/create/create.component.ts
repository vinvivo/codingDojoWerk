import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = {
    name: null,
    price: null,
    url: null
  };

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("onSubmit() ", this.product);
    this._productService.createItem(this.product)
  }

}
