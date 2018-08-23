import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { Product } from '../model/product';
import { productAnimations } from '../animations';
import * as fromProductRoot from '../reducers';
import * as productAction from '../actions/product';
import * as animationAction from '../actions/animation';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        productAnimations.contentFadeInOut,
    ]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    public product$: Observable<{ nextId: number, prevId: number, selected: Product }>;

    public animation$: Observable<boolean>;

    public offset$: Observable<{ offsetLeave: number, offsetEnter: number }>;

    private nextId: number;

    private actionsSubscription: Subscription;

    constructor( private route: ActivatedRoute,
                 private router: Router,
                 private store: Store<fromProductRoot.State> ) {
        this.actionsSubscription = this.route.params
            .pipe(map(params => {
                return {
                    select: new productAction.Select(+params.id),
                    animation: new animationAction.SetAnimationState(true),
                };
            }))
            .subscribe(( actions ) => {
                this.store.dispatch(actions.select);
                this.store.dispatch(actions.animation);
            });
    }

    public ngOnInit() {
        this.product$ = this.store.pipe(select(fromProductRoot.getSelectedProduct));
        this.animation$ = this.store.pipe(select(fromProductRoot.getProductAnimationAnimationState));
        this.offset$ = this.store.pipe(select(fromProductRoot.getProductAnimationOffset));
    }

    public ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }

    public handleClickOnNav( nextId: number, dir: 'left' | 'right', event: any ): void {
        this.nextId = nextId;
        const action = dir === 'left' ? new animationAction.MoveLeft() : new animationAction.MoveRight();
        this.store.dispatch(action);
        event.preventDefault();
    }

    public handleContentFadeInOutDone( event: AnimationEvent ): void {
        if (event.fromState && !event.toState) {
            this.router.navigate(['/product/details', this.nextId]);
        }
    }
}
