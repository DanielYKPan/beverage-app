import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TileComponent } from './home/tile/tile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TileComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        LazyLoadImageModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
