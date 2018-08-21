import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromProductRoot from '../reducers';
import { productAnimations } from '../animations';
import { map } from 'rxjs/operators';
import * as productAction from '../actions/product';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';

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

    public selected$: Observable<Product>;

    private actionsSubscription: Subscription;

    constructor( private route: ActivatedRoute,
                 private store: Store<fromProductRoot.State> ) {
        this.actionsSubscription = this.route.params
            .pipe(map(params => {
                return new productAction.Select(+params.id);
            }))
            .subscribe(this.store);
    }

    public ngOnInit() {
        this.nav$ = this.store.pipe(select(fromProductRoot.getSelectedProductNav));
        this.selected$ = this.store.pipe(select(fromProductRoot.getSelectedProduct));
    }

    public ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }
}
