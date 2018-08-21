import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as productAction from '../actions/product';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromProductRoot from '../reducers';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-product-details-content',
    templateUrl: './product-details-content.component.html',
    styleUrls: ['./product-details-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsContentComponent implements OnInit, OnDestroy {

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
        // this.store.dispatch(new productAction.Select(+this.route.snapshot.params.id));
        this.selected$ = this.store.pipe(select(fromProductRoot.getSelectedProduct));
    }

    public ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }
}
