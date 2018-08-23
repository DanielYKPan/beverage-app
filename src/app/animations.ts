/**
 * animations
 */
import { animate, AnimationTriggerMetadata, query, style, transition, trigger } from '@angular/animations';
import { detailsFadeOut, listFadeOut } from './product/animations';

export const appAnimations: {
    readonly routerAnimations: AnimationTriggerMetadata;
} = {
    routerAnimations: trigger('routerAnimations', [
        transition('product => home', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), {optional: true}),
            query(':leave', style({zIndex: 2, opacity: 1}), {optional: true}),
            query(':enter', style({opacity: 0}), {optional: true}),

            query(':leave', [
                ...detailsFadeOut,
                ...listFadeOut,
                animate('200ms 100ms', style({opacity: 0}))
            ], {optional: true}),
            query(':enter', [
                animate('250ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
            ], {optional: true})
        ])
    ])
};
