import { Component, OnInit } from '@angular/core';
import { appAnimations } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        appAnimations.routerAnimations
    ]
})
export class AppComponent implements OnInit {

    private index: number;

    constructor() {
    }

    public ngOnInit() {
    }

    public prepareRouteTransition( outlet: RouterOutlet ) {
        const animation = outlet.activatedRouteData['animation'];
        const index = outlet.activatedRouteData['index'];
        const offset = index > this.index ? -100 : 100;
        this.index = index;
        return {
            value: animation || null,
            params: {
                offsetLeave: offset + '%',
                offsetEnter: -offset + '%'
            }
        };
    }
}
