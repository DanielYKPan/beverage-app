/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent, data: {animation: 'home'}},
    {path: 'product', loadChildren: 'src/app/product/product.module#ProductModule', data: {animation: 'product'}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
