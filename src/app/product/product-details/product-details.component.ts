import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromProductRoot from '../reducers';
import { productAnimations } from '../animations';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        productAnimations.detailsFadeIn,
    ]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    public nav$: Observable<{ nextId: number, prevId: number }>;

    constructor( private store: Store<fromProductRoot.State> ) {
    }

    public ngOnInit() {
        this.nav$ = this.store.pipe(select(fromProductRoot.getSelectedProductNav));
    }

    public ngOnDestroy(): void {
    }
}
