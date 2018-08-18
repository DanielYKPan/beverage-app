import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;

    constructor() {
    }

    ngOnInit() {
    }

}
