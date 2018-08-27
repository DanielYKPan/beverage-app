import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { appAnimations } from '../../animations';

@Component({
    selector: 'app-tile-list',
    templateUrl: './tile-list.component.html',
    styleUrls: ['./tile-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        appAnimations.tileListWrapperAnimations,
    ]
})
export class TileListComponent implements OnInit, AfterViewInit {

    @Input() tiles: any[];

    @ViewChild('listWrapper') listWrapperElm: ElementRef;

    public readonly tileWidth = 380;
    public offsetBottom = 0;
    public listLeft = 0;
    public state = false;

    constructor() {
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
        const listWrapperRect = this.listWrapperElm.nativeElement.getBoundingClientRect();
        this.offsetBottom = window.innerHeight - listWrapperRect.top - listWrapperRect.height;
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
