import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {

    @ViewChild('listWrapper') listWrapperElm: ElementRef;

    public readonly tileWidth = 380;
    public state = false;
    public offsetBottom = 0;
    public listLeft = 0;

    public tiles = [
        {
            title: {
                type: 'product',
                content: 'MTN DEW® BLACK LABEL®'
            },
            img: '66447-thumb06_blacklabel.jpg',
            cta: 'Launch Website',
            page: 'latest'
        },
        {
            title: {
                type: 'product',
                content: 'Russell Westbrook Cans'
            },
            img: '59031-87800-pod_tile_3.jpg',
            cta: 'Launch Website',
            page: 'latest'
        },
        {
            title: {
                type: 'product',
                content: 'MTN DEW® Kickstart™'
            },
            img: '6888-thumb05_kickstart.jpg',
            cta: 'Launch Website',
            page: 'latest'
        },
        {
            title: {
                type: 'product',
                content: 'MTN DEW® DEWshine™'
            },
            img: '6404-thumb04_dewshine.jpg',
            cta: 'Launch Website',
            page: 'latest'
        },
        {
            title: {
                type: 'product',
                content: 'MTN DEW® Baja Blast®'
            },
            img: '6605-thumb03_bajablast.jpg',
            cta: 'Launch Website',
            page: 'latest'
        },
        {
            title: {
                type: 'Green Label® Films',
                content: 'We Are Blood'
            },
            img: '7993-thumb01_weareblood.jpg',
            cta: 'Read More',
            page: 'latest'
        },
        {
            title: {
                type: 'game',
                content: 'FUEL UP FOR BATTLE'
            },
            img: '87800-pod_tile.jpg',
            cta: 'See Rewards',
            page: 'latest'
        },
        {
            title: {
                type: 'VR Experiences',
                content: 'Dew® VR Snow'
            },
            img: '5358-thumb01_vrsnow.jpg',
            cta: 'Read More',
            page: 'latest'
        },
        {
            title: {
                type: 'VR Experiences',
                content: 'Dew® VR Skate'
            },
            img: '5457-thumb02_vrskate.jpg',
            cta: 'Read More',
            page: 'latest'
        }
    ];

    constructor() {
    }

    public ngOnInit() {
    }

    public handleMouseEnterOnListWrapper( event: any ) {
        this.state = true;
        event.preventDefault();
    }

    public handleMouseLeaveOnListWrapper( event: any ) {
        this.state = false;
        event.preventDefault();
    }

    public ngAfterViewInit(): void {
        const listWrapperRect = this.listWrapperElm.nativeElement.getBoundingClientRect();
        this.offsetBottom = window.innerHeight - listWrapperRect.top - listWrapperRect.height;
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
