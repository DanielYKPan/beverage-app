import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { HeaderComponent } from './header/header.component';
import { reducers } from './reducers';
import { GestureConfig } from './gesture/gesture-config';
import { TileListComponent } from './tile-list/tile-list.component';
import { TileComponent } from './tile/tile.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LazyLoadImageModule,

        // ngrx
        StoreModule.forRoot(reducers),
    ],
    exports: [
        HeaderComponent,
        TileListComponent,
        BannerComponent,
    ],
    declarations: [
        HeaderComponent,
        TileListComponent,
        TileComponent,
        BannerComponent,
    ],
    providers: [
        {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
    ],
})
export class CoreModule {
}
