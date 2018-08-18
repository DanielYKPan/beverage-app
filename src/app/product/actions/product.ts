/**
 * product
 */
import { Action } from '@ngrx/store';
import { Product } from '../model/product';

export enum ProductActionTypes {
    Select = '[Product] Select',
    Load = '[Product] Load',
}

export class Select implements Action {
    readonly type = ProductActionTypes.Select;

    constructor( public payload: number ) {
    }
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;

    constructor( public payload: Product ) {
    }
}

export type ProductActions =
    Select |
    Load;
