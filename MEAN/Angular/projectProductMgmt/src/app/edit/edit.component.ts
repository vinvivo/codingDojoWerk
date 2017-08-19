import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product;
  index;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this._activatedRoute.paramMap
      .switchMap( params => {
        console.log("EditComponent loaded and URL id given is: ", params.get('id'));
        this.index = params.get('id');
        return this._productService.findOne(params.get('id'));
    })
    .subscribe( data => { this.product = data });
  }

  ngOnInit() {
  }

  confirmEdit() {
    this.product.updateOne(this.product, this.index);
  };

  deleteThis() {
    this._productService.delete(this.index);
  }

}
