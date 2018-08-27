import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { appAnimations } from '../animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        appAnimations.tileListWrapperAnimations,
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    public tiles: any[];
    public title: any;
    public backdrop: any;
    public routeDataSub: Subscription;

    constructor( private route: ActivatedRoute ) {
    }

    public ngOnInit() {
        this.routeDataSub = this.route.data.subscribe(( res ) => {
            this.tiles = res.tiles;
            this.title = res.title;
            this.backdrop = res.backdrop;
        });
    }

    public ngOnDestroy(): void {
        this.routeDataSub.unsubscribe();
    }
}
