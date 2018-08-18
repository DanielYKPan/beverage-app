import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;

    constructor( private router: Router ) {
    }

    ngOnInit() {
    }

    public handleClickOnProductAnchor( event: any ): void {

        this.router.navigate(['../details/', this.product.id]);
        event.preventDefault();
    }
}
