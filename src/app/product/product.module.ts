import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';


import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module'


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductsComponent,
        ProductComponent
    ],
   imports: [
        CommonModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule {
    
}