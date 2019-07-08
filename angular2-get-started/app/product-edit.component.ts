import { Component, OnInit, OnDestroy } from '@angular/core';
import { listProduct } from './service/product.sevice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators}from '@angular/forms'
import { CategoryService } from './service/category.service';

@Component({
    selector: 'product-edit',
    templateUrl: './app/product-edit.component.html'
})

export class ProductEdit implements OnDestroy, OnInit {
    formProduct: FormGroup;
    public _id: number;
    public subscription: any;
    public product: any;
    public cate: any;

    constructor(
        private router: Router,
        private fromBuider: FormBuilder,
        private activateRoute: ActivatedRoute,
        public list: listProduct,
        public categoryService:CategoryService
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

        this.subscription = this.activateRoute.params.subscribe(
            params => {
                this._id = params['id'];
                
            }
        );
        this.list.GetDetail(this._id).subscribe((data)=>{
            this.product=data;
        });
        this.categoryService.GetCategory().subscribe((response: any)=>{
            this.cate=response;
        })
    }

    SaveForm(){
        this.list.Update(this._id,this.product).subscribe(responser=>{
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