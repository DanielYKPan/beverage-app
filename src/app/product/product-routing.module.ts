import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListExistGuard } from './guards/product-list-exist.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsContentComponent } from './product-details-content/product-details-content.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        canActivateChild: [ProductListExistGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: ProductListComponent, data: {animation: 'list'}},
            {
                path: 'details',
                component: ProductDetailsComponent,
                data: {animation: 'details'},
                children: [
                    {path: '', redirectTo: '/product/list', pathMatch: 'full'},
                    {path: ':id', component: ProductDetailsContentComponent}
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProductListExistGuard],
})
export class ProductRoutingModule {
}
