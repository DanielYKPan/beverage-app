import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        LazyLoadImageModule,
        ProductRoutingModule,

        StoreModule.forFeature('products', reducers),
    ],
    declarations: [ProductComponent, ProductListComponent, ProductDetailsComponent]
})
export class ProductModule {
}
