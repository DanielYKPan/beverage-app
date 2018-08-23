/**
 * index
 */
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProducts from './product';
import * as fromAnimation from './animation';
import * as fromCoreRoot from '../../core/reducers';

export interface ProductsState {
    products: fromProducts.State;
    animation: fromAnimation.State;
}

export interface State extends fromCoreRoot.State {
    products: ProductsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
    products: fromProducts.reducer,
    animation: fromAnimation.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// Animation State
export const getProductAnimationState = createSelector(
    getProductsState,
    ( state: ProductsState ) => state.animation
);

export const getProductAnimationOffsetLeave = createSelector(
    getProductAnimationState,
    fromAnimation.getOffsetLeave
);

export const getProductAnimationOffsetEnter = createSelector(
    getProductAnimationState,
    fromAnimation.getOffsetEnter
);

export const getProductAnimationOffset = createSelector(
    getProductAnimationOffsetLeave,
    getProductAnimationOffsetEnter,
    (offsetLeave, offsetEnter) => {
        return {offsetLeave, offsetEnter};
    }
);

export const getProductAnimationAnimationState = createSelector(
    getProductAnimationState,
    fromAnimation.getAnimationState,
);

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
    getProductIds,
    getSelectedProductId,
    ( products, ids: any[], selectedId ) => {
        if (ids && products) {
            const productIndex = ids.indexOf(selectedId);
            const nextIndex = productIndex + 1 >= ids.length ? 0 : productIndex + 1;
            const prevIndex = productIndex - 1 <= 0 ? ids.length - 1 : productIndex - 1;

            return {
                nextId: ids[nextIndex],
                prevId: ids[prevIndex],
                selected: selectedId && products[selectedId] ? products[selectedId] : null
            };
        } else {
            return {
                nextId: null,
                prevId: null,
                selected: null
            };
        }
    }
);
