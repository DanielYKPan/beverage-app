import { Component } from '@angular/core';
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
export class AppComponent {

    public prepareRouteTransition( outlet: RouterOutlet ) {
        const animation = outlet.activatedRouteData['animation'];
        return animation || null;
    }
}
