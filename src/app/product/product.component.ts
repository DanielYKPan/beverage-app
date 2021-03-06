import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { productAnimations } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        productAnimations.routerAnimations
    ]
})
export class ProductComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    public prepareRouteTransition( outlet: RouterOutlet ) {
        const animation = outlet.activatedRouteData['animation'];
        return animation || null;
    }
}
