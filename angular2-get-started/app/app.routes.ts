import { RouterModule, Routes } from '@angular/router';
import { Login1 } from './login1.component';
import { product } from './product.component';
import { ProductDetail } from './product-detail.component';
import {ProductEdit} from './product-edit.component';
import {ProductAdd} from './product-add.component';


const routing: Routes = [
    { path: '', component: Login1 },
    { path: 'product', component: product },
    { path: 'product-detail/:id', component: ProductDetail },
    { path: 'product-edit/:id', component: ProductEdit },
    { path: 'product-add', component: ProductAdd }

]

export const appRoutes = RouterModule.forRoot(routing);