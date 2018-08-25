import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    public readonly tileWidth = 320;

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

}
