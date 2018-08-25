import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {

    @Input() tile: any;

    constructor() {
    }

    ngOnInit() {
    }

}
