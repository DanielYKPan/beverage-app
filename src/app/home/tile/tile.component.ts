import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {

    @Input() tile: any;

    public on: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    public handleMouseEnterOnAnchor( event: MouseEvent ): void {
        this.on = true;
        event.preventDefault();
    }

    public handleMouseLeaveOnAnchor( event: MouseEvent ): void {
        this.on = false;
        event.preventDefault();
    }
}
