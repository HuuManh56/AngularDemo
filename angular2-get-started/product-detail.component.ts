import { Component, OnInit, OnDestroy } from '@angular/core';
import { listProduct } from './app/service/product.sevice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './app/product-detail.component.html'
})

export class ProductDetail implements OnDestroy, OnInit {
    public _id: number;
    public subscription: any;
    public productDetail: any;
    constructor(
        private activateRoute: ActivatedRoute,
        public list: listProduct
    ) {

    }
    ngOnDestroy() {
     
    }
    ngOnInit() {
        this.subscription = this.activateRoute.params.subscribe(
            params => {
                this._id = params['id'];
                
            }
        );
        this.list.GetDetail(this._id).subscribe((data)=>{
            this.productDetail=data;
        })
    }

}