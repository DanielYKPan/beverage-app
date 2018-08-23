/**
 * animation
 */

import { Action } from '@ngrx/store';

export enum ProductAnimationActionTypes {
    MoveRight = '[Product Animation] Move Right',
    MoveLeft = '[Product Animation] Move Left',
    SetAnimationState = '[Product Animation] Set Animation State',
}

export class MoveRight implements Action {
    readonly type = ProductAnimationActionTypes.MoveRight;

    constructor() {
    }
}

export class MoveLeft implements Action {
    readonly type = ProductAnimationActionTypes.MoveLeft;

    constructor() {
    }
}

export class SetAnimationState implements Action {
    readonly type = ProductAnimationActionTypes.SetAnimationState;

    constructor( public payload: boolean ) {
    }
}

export type ProductAnimationActions =
    MoveRight |
    MoveLeft |
    SetAnimationState;
