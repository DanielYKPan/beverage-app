import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromProductRoot from '../reducers';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

    public list$: Observable<Product[]>;

    constructor( private store: Store<fromProductRoot.State> ) {
    }

    public ngOnInit() {
        this.list$ = this.store.pipe(select(fromProductRoot.getAllProducts));
    }

}
