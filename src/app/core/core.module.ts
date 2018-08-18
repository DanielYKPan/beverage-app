import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { reducers } from './reducers';
import { GestureConfig } from './gesture/gesture-config';

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
    ],
    providers: [
        {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
    ],
})
export class CoreModule {
}
