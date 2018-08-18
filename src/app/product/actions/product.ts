/**
 * product
 */
import { Action } from '@ngrx/store';
import { Product } from '../model/product';

export enum ProductActionTypes {
    Select = '[Product] Select',
    LoadListComplete = '[Product] Load',
}

export class Select implements Action {
    readonly type = ProductActionTypes.Select;

    constructor( public payload: number ) {
    }
}

export class LoadListComplete implements Action {
    readonly type = ProductActionTypes.LoadListComplete;

    constructor( public payload: Product[] ) {
    }
}

export type ProductActions =
    Select |
    LoadListComplete;
