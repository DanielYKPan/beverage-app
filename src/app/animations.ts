/**
 * animations
 */
import { animate, animateChild, AnimationTriggerMetadata, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { detailsFadeOut, listFadeOut } from './product/animations';

export const appAnimations: {
    readonly routerAnimations: AnimationTriggerMetadata;
    readonly tileListWrapperAnimations: AnimationTriggerMetadata;
} = {
    routerAnimations: trigger('routerAnimations', [
        transition('product => *', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}), {optional: true}),
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
        ]),
        transition('* => product', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}), {optional: true}),
            query(':leave', style({zIndex: 2, opacity: 1}), {optional: true}),
            query(':enter', style({opacity: 0}), {optional: true}),

            query(':leave', [
                animate('200ms cubic-bezier(.35,0,.25,1)', style({opacity: 0}))
            ], {optional: true}),
            query(':enter', [
                animate('250ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
                query('@routerAnimations', animateChild()),
            ], {optional: true})
        ]),

        transition('home <=> sports, home <=> vr, sports <=> vr', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}), {optional: true}),
            query(':leave', style({zIndex: 2}), {optional: true}),
            query(':enter', [
                query('.banner', style({transform: 'translateX({{offsetEnter}})'})),
                query('.tile-list-wrapper', style({opacity: 0, transform: 'translateY(100%)'}))
            ]),

            group([
                query(':leave', group([
                    query('.banner', animate('500ms', style({transform: 'translateX({{offsetLeave}})'}))),
                    query('.tile-list-wrapper', animate('250ms', style({opacity: 0, transform: 'translateY(100%)'}))),
                ])),
                query(':enter', group([
                    query('.banner', animate('500ms', style({transform: 'translateX(0px)'}))),
                    query('.tile-list-wrapper', animate('250ms 250ms', style({opacity: 1, transform: 'translateY(0px)'})))
                ])),
            ])
        ], {params: {offsetLeave: '-100%', offsetEnter: '100%'}})
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
