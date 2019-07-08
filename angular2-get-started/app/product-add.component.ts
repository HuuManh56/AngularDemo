import { Component, OnInit, OnDestroy } from '@angular/core';
import { listProduct } from './service/product.sevice';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './service/category.service';
import { randomBytes } from 'crypto';


@Component({
    selector: 'product-add',
    templateUrl: './app/product-add.component.html'
})

export class ProductAdd implements OnDestroy, OnInit {
    formProduct: FormGroup;
    public _id: number;
    public subscription: any;
    public product: any;
    public cate: any
    constructor(
        private router: Router,
        private fromBuider: FormBuilder,
        private activateRoute: ActivatedRoute,
        public list: listProduct,
        public categoryService: CategoryService,
    ) {

    }
    ngOnDestroy() {

    }
    ngOnInit() {
        this.formProduct = this.fromBuider.group({
            name: this.fromBuider.control('', Validators.required),
            price: this.fromBuider.control(''),
            describe: this.fromBuider.control(''),
            image: this.fromBuider.control(''),
            category: this.fromBuider.control('')
        });
        this.product = {};

        this.categoryService.GetCategory().subscribe((response: any) => {
            this.cate = response;
        })

    }

    SaveForm() {
        this.list.Add(this.product).subscribe(responser => {
            if (responser) {
                alert(" save success");
                this.router.navigate(['/product']);
            }
        })
    }
    GotoListProduct() {
        this.router.navigate(['/product']);
    }

    url: string;
    onSelectFile(event) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.url = event.target.result;
            }
        }
    }
}