import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        // ngrx
        StoreModule.forRoot(reducers),
    ],
    exports: [
        HeaderComponent,
    ],
    declarations: [
        HeaderComponent
    ]
})
export class CoreModule {
}
