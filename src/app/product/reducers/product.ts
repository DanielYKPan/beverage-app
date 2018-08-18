/**
 * product
 */
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../model/product';
import { ProductActions, ProductActionTypes } from '../actions/product';

export interface State extends EntityState<Product> {
    selectedProductId: number | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: product => product.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedProductId: null,
});

export function reducer( state = initialState, action: ProductActions ): State {
    switch (action.type) {
        case ProductActionTypes.Load:
            return adapter.addOne(action.payload, {
                ...state,
                selectedProductId: state.selectedProductId
            });

        case ProductActionTypes.Select:
            return {
                ...state,
                selectedProductId: action.payload
            };

        default:
            return state;
    }
}

export const getSelectedId = ( state: State ) => state.selectedProductId;
