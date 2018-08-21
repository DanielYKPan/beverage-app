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
    ( state: ProductsState ) => state.products
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

export const getSelectedProductNav = createSelector(
    getProductIds,
    getSelectedProductId,
    ( ids: number[], selectedId: number ) => {
        if (ids) {
            const productIndex = ids.indexOf(selectedId);
            const nextIndex = productIndex + 1 >= ids.length ? 0 : productIndex + 1;
            const prevIndex = productIndex - 1 <= 0 ? ids.length - 1 : productIndex - 1;
            return {
                nextId: ids[nextIndex],
                prevId: ids[prevIndex]
            };
        }

        return null;
    }
);
