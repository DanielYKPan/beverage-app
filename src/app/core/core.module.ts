import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { HeaderComponent } from './header/header.component';
import { reducers } from './reducers';
import { GestureConfig } from './gesture/gesture-config';
import { TileListComponent } from './tile-list/tile-list.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        // ngrx
        StoreModule.forRoot(reducers),
    ],
    exports: [
        HeaderComponent,
        TileListComponent,
    ],
    declarations: [
        HeaderComponent,
        TileListComponent,
        TileComponent,
    ],
    providers: [
        {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
    ],
})
export class CoreModule {
}
