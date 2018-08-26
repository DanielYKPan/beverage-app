/**
 * animations
 */
import { animate, AnimationTriggerMetadata, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { detailsFadeOut, listFadeOut } from './product/animations';

export const appAnimations: {
    readonly routerAnimations: AnimationTriggerMetadata;
    readonly tileListWrapperAnimations: AnimationTriggerMetadata;
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
    ]),

    tileListWrapperAnimations: trigger('tileListWrapperAnimations', [
        transition('0 => 1', [
            group([
                style({opacity: 0}),
                animate('100ms', style('*')),
                query('.tile', [
                    style({transform: 'translateY(0)'}),
                    stagger(50, [
                        animate('300ms', style('*'))
                    ])
                ])
            ]),
        ]),
        transition('1 => 0', [
            style({opacity: 1, bottom: '0', 'pointer-events': 'none'}),
            query('.tile-list', style({transform: 'translateY({{offsetPlus}}px)'})),
            group([
                query('.tile', [
                    style({transform: 'translateY({{offsetMinus}}px)'}),
                    stagger(50, [
                        animate('300ms', style('*'))
                    ])
                ])
            ]),
            animate('100ms', style({opacity: '*', bottom: '0'})),
        ])
    ]),
};
