import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [
        CommonModule,
        LazyLoadImageModule,
        ProductRoutingModule
    ],
    declarations: [ProductComponent, ProductListComponent]
})
export class ProductModule {
}
