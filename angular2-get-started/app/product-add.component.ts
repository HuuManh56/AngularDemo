import { Component, OnInit, OnDestroy } from '@angular/core';
import { listProduct } from './service/product.sevice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators}from '@angular/forms'

@Component({
    selector: 'product-add',
    templateUrl: './app/product-add.component.html'
})

export class ProductAdd implements OnDestroy, OnInit {
    formProduct: FormGroup;
    public _id: number;
    public subscription: any;
    public product: any;
    constructor(
        private router: Router,
        private fromBuider: FormBuilder,
        private activateRoute: ActivatedRoute,
        public list: listProduct
    ) {

    }
    ngOnDestroy() {
     
    }
    ngOnInit() {
        this.formProduct=this.fromBuider.group({
            name: this.fromBuider.control('', Validators.required),
            price: this.fromBuider.control(''),
            describe: this.fromBuider.control(''),
            image: this.fromBuider.control(''),
            category: this.fromBuider.control('')
        });
        this.product={};
       
    }

    SaveForm(){
        this.list.Add(this.product).subscribe(responser=>{
            if(responser){
                alert(" save success");
                this.router.navigate(['/product']);
            }
        })
    }
    GotoListProduct(){
        this.router.navigate(['/product']);
    }
    
}