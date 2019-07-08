import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DemoComponent } from './demo.component';
import { Login1} from './login1.component';
import {appRoutes} from './app.routes';
import {product} from './product.component';
import {ProductDetail} from './product-detail.component';
import {ProductEdit} from './product-edit.component';
import {ProductAdd} from './product-add.component';
import {HttpModule} from '@angular/http';
import {listProduct} from './service/product.sevice';
import {CategoryService} from './service/category.service'

@NgModule({ 
  imports: [
     BrowserModule,
     FormsModule ,
     ReactiveFormsModule,
     appRoutes ,
     HttpModule
    ],
  declarations: [ 
    AppComponent,
     DemoComponent,
     Login1,
     product,
     ProductDetail,
     ProductEdit,
     ProductAdd
    ],
    providers:[listProduct,CategoryService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
