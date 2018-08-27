import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('listWrapper') listWrapperElm: ElementRef;

    public readonly tileWidth = 380;
    public state = false;
    public offsetBottom = 0;
    public listLeft = 0;

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

    public ngAfterViewInit(): void {
        const listWrapperRect = this.listWrapperElm.nativeElement.getBoundingClientRect();
        this.offsetBottom = window.innerHeight - listWrapperRect.top - listWrapperRect.height;
    }

    public ngOnDestroy(): void {
        this.routeDataSub.unsubscribe();
    }

    public handleMouseEnterOnListWrapper( event: any ) {
        this.state = true;
        event.preventDefault();
    }

    public handleMouseLeaveOnListWrapper( event: any ) {
        this.state = false;
        event.preventDefault();
    }

    public handleMouseMoveOnListWrapper( event: MouseEvent ): void {
        const pageX = event.pageX;
        const currentProgress = pageX / window.innerWidth;
        const fromProgress = .1;
        const toProgress = 1 - fromProgress;
        const progressDiff = toProgress - fromProgress;
        const scrollPos = (Math.max(fromProgress, Math.min(toProgress, currentProgress)) - fromProgress) / progressDiff;
        this.listLeft = scrollPos * (this.tileWidth * this.tiles.length - window.innerWidth) * -1;
    }
}
