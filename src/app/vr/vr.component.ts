import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-vr',
    templateUrl: './vr.component.html',
    styleUrls: ['./vr.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VrComponent implements OnInit, OnDestroy {

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
