import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListExistGuard } from './guards/product-list-exist.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        canActivateChild: [ProductListExistGuard],
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: ProductListComponent},
            {path: 'details/:id', component: ProductDetailsComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProductListExistGuard]
})
export class ProductRoutingModule {
}
