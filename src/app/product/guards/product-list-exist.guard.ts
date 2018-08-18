import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import * as fromProductRoot from '../reducers';
import * as layoutActions from '../../core/layout-store/actions';
import * as productActions from '../actions/product';
import { ProductService } from '../product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductListExistGuard implements CanActivateChild {

    constructor( private store: Store<fromProductRoot.State>,
                 private productService: ProductService ) {
    }

    public canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
        return this.hasBookList();
    }

    private hasBookList(): Observable<boolean> {
        return this.hasBookListInStore().pipe(
            switchMap(( inStore: boolean ) => {
                if (inStore) {
                    return of(inStore);
                }

                return this.hasBookListInApi();
            })
        );
    }

    private hasBookListInStore(): Observable<boolean> {
        return this.store.pipe(select(fromProductRoot.getAllProducts))
            .pipe(map(products => products && products.length > 0));
    }

    private hasBookListInApi(): Observable<boolean> {
        this.store.dispatch(new layoutActions.ShowLoader());

        return this.productService.getProducts().pipe(
            map(res => new productActions.LoadListComplete(res)),
            tap(action => this.store.dispatch(action)),
            map(res => res.payload && res.payload.length > 0)
        );
    }
}
