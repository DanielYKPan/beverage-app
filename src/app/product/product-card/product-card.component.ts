import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { productAnimations } from '../animations';

@Component({
    selector: 'app-product-card',
    exportAs: 'productCard',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        productAnimations.scaleProduct,
        productAnimations.scaleRotateImg,
        productAnimations.scaleShadow,
    ],
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;

    @Input() scaled: boolean;

    @HostBinding('class.scaled')
    @HostBinding('@scaleProduct')
    get productCardScaledClass(): boolean {
        return this.scaled;
    }

    constructor( private router: Router ) {
    }

    ngOnInit() {
    }

    public handleClickOnProductAnchor( event: any ): void {

        this.router.navigate(['/product/details/', this.product.id]);
        event.preventDefault();
    }
}
