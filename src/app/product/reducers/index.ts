/**
 * index
 */
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProducts from './product';
import * as fromCoreRoot from '../../core/reducers';

export interface ProductsState {
    products: fromProducts.State;
}

export interface State extends fromCoreRoot.State {
    products: ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    products: fromProducts.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// Products Entity State
export const getProductEntityState = createSelector(
    getProductsState,
    (state: ProductsState) => state.products
);

export const {
    selectIds: getProductIds,
    selectEntities: getProductEntities,
    selectAll: getAllProducts,
    selectTotal: getTotalProducts,
} = fromProducts.adapter.getSelectors(getProductEntityState);

export const getSelectedProductId = createSelector(
    getProductEntityState,
    fromProducts.getSelectedId,
);

export const getSelectedProduct = createSelector(
    getProductEntities,
    getSelectedProductId,
    ( products, selectedIds ) => {
        return selectedIds && products[selectedIds];
    }
);
