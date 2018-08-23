/**
 * animation
 */
import { ProductAnimationActions, ProductAnimationActionTypes } from '../actions/animation';

const offset = 1000;

export interface State {
    offsetLeave: number;
    offsetEnter: number;
    animationState: boolean;
}

const initialState: State = {
    offsetLeave: 0,
    offsetEnter: 0,
    animationState: true
};

export function reducer( state = initialState, action: ProductAnimationActions ): State {
    switch (action.type) {
        case ProductAnimationActionTypes.MoveRight:
            return {
                offsetLeave: offset,
                offsetEnter: -offset,
                animationState: false,
            };

        case ProductAnimationActionTypes.MoveLeft:
            return {
                offsetLeave: -offset,
                offsetEnter: offset,
                animationState: false,
            };

        case ProductAnimationActionTypes.SetAnimationState:
            return {
                ...state,
                animationState: action.payload
            };

        default:
            return state;
    }
}

export const getOffsetLeave = ( state: State ) => state.offsetLeave;
export const getOffsetEnter = ( state: State ) => state.offsetEnter;
export const getAnimationState = ( state: State ) => state.animationState;
