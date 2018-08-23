/**
 * animations
 */

import {
    animate,
    animateChild,
    AnimationTriggerMetadata,
    group,
    query,
    stagger,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const detailsFadeIn = [
    query('.product-details-img-wrapper', style({opacity: 0, transform: 'translateY(-300px)'})),
    query('.product-details-description, .product-details-close', style({opacity: 0, transform: 'translateX(-100px)'})),
    query('a.product-details-description', style({opacity: 0, transform: 'translateX(100px)'})),
    query('.product-details-nav a', style({transform: 'translateX(100%)'})),
    group([
        query('.product-details-img-wrapper, .product-details-close', animate('300ms 200ms', style('*'))),
        query('.product-details-description, .product-details-nav a', [
            stagger(50, [
                animate('200ms 200ms', style('*'))
            ])
        ])
    ])
];

export const detailsFadeOut = [
    group([
        query('.product-details-img-wrapper', animate(300, style({opacity: 0, transform: 'translateY(300px)'}))),
        query('.product-details-description-wrapper', animate(300, style({opacity: 0}))),
        query('.product-details-close', animate(300, style({opacity: 0}))),
        query('.product-details-nav a', stagger(50, [
            animate(250, style({transform: 'translateX(100%)'}))
        ]))
    ])
];

export const productAnimations: {
    readonly routerAnimations: AnimationTriggerMetadata;
    readonly listFadeInOut: AnimationTriggerMetadata;
    readonly accordion: AnimationTriggerMetadata;
    readonly moveProduct: AnimationTriggerMetadata;
    readonly scaleProduct: AnimationTriggerMetadata;
    readonly scaleRotateImg: AnimationTriggerMetadata;
    readonly scaleShadow: AnimationTriggerMetadata;
    readonly contentFadeInOut: AnimationTriggerMetadata;
} = {
    routerAnimations: trigger('routerAnimations', [
        transition('list => details', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), {optional: true}),
            query(':leave', style({zIndex: 2, opacity: 1}), {optional: true}),
            query(':enter', style({opacity: 0}), {optional: true}),

            query(':leave', [
                query('.product-list-item', [
                    stagger(30, [
                        animate(150, style({opacity: 0, transform: 'translateY(-100px)'}))
                    ])
                ]),
                animate(100, style({opacity: 0}))
            ], {optional: true}),
            query(':enter', group([
                animate('250ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
                ...detailsFadeIn
            ]), {optional: true})
        ]),
        transition('details => list', [
            query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0}), {optional: true}),
            query(':leave', style({zIndex: 2, opacity: 1}), {optional: true}),
            query(':enter', style({opacity: 0}), {optional: true}),

            query(':leave', [
                ...detailsFadeOut,
                animate('200ms 100ms', style({opacity: 0}))
            ], {optional: true}),
            query(':enter', [
                animate('250ms cubic-bezier(.35,0,.25,1)', style({opacity: 1})),
                query('@listFadeInOut', animateChild({delay: -100}))
            ], {optional: true})
        ])
    ]),

    listFadeInOut: trigger('listFadeInOut', [
        transition(':enter', [
            query('.product-list-item', [style({transform: 'translate(300px, 100px)', opacity: 0})]),
            query('.product-shadow', style({visibility: 'hidden', opacity: 0})),
            query('.product-list-item', [
                stagger(50, [
                    animate(400, style('*'))
                ])
            ]),
            query('.product-shadow', [
                animate(200, style({visibility: 'visible', opacity: 1}))
            ]),
        ])
    ]),

    accordion: trigger('accordion', [
        transition('0 => 1', [
            group([
                query('.product-list-item-right', [
                    stagger(50, [
                        animateChild()
                    ])
                ], {optional: true}),
                query('.product-list-item-left', [
                    stagger(-50, [
                        animateChild()
                    ])
                ], {optional: true}),
                query('@scaleProduct', [
                    animateChild()
                ], {optional: true})
            ])
        ]),
        transition('1 => 0', [
            group([
                query('.product-list-item-right', [
                    stagger(50, [
                        animateChild()
                    ])
                ], {optional: true}),
                query('.product-list-item-left', [
                    stagger(-50, [
                        animateChild()
                    ])
                ], {optional: true}),
                query('@scaleProduct', [
                    animateChild()
                ], {optional: true})
            ])
        ]),
    ]),

    moveProduct: trigger('moveProduct', [
        state('right', style({transform: 'translateX(50px)'})),
        state('left', style({transform: 'translateX(-50px)'})),
        state('still', style({transform: 'translateX(0px)'})),
        transition('still <=> right, still <=> left, right <=> left', animate(200))
    ]),

    scaleProduct: trigger('scaleProduct', [
        transition('0 => 1', [
            group([
                query('@scaleRotateImg, @scaleShadow', [
                    animateChild()
                ]),
                query('.product-cta', [
                    style({transform: 'scale(0)', opacity: 0, visibility: 'visible'}),
                    animate('200ms 100ms', style({transform: 'scale(1)', opacity: 1}))
                ]),
                query('.product-cta-label, .product-label', [
                    style({opacity: 0}),
                    animate('200ms 100ms', style({opacity: 1}))
                ]),
                query('.product-cta-stroke', [
                    style({transform: 'scale(0)'}),
                    animate('200ms 300ms', style({transform: 'scale(1)'}))
                ]),
            ])
        ]),
        transition('1 => 0', [
            group([
                query('@scaleRotateImg, @scaleShadow', [
                    animateChild({delay: 100})
                ]),
                query('.product-cta', [
                    style({transform: 'scale(1)', opacity: 1, visibility: 'visible'}),
                    animate('200ms 100ms', style({transform: 'scale(0)', opacity: 0, visibility: 'visible'}))
                ]),
                query('.product-cta-label, .product-label', [
                    animate('200ms', style({opacity: 0}))
                ]),
                query('.product-cta-stroke', [
                    animate('200ms', style({transform: 'scale(0)', opacity: 0}))
                ]),
            ])
        ])
    ]),

    scaleRotateImg: trigger('scaleRotateImg', [
        state('1', style({transform: 'scale(1.4) rotate(-0.2rad)'})),
        state('0', style({transform: 'scale(1) rotate(0)'})),
        transition('0 <=> 1', animate(200)),
    ]),

    scaleShadow: trigger('scaleShadow', [
        state('1', style({width: '200%', transform: 'translate(50px, 50px)'})),
        state('0', style({width: '100%', transform: 'translate(0)'})),
        transition('0 <=> 1', animate(200)),
    ]),

    contentFadeInOut: trigger('contentFadeInOut', [
        transition('0 => 1', [
            query('.product-details-img-wrapper', style({opacity: 0, transform: 'translateX({{ offsetEnter }}px)', visibility: 'hidden'})),
            query('.product-details-description-wrapper', style({opacity: 0, visibility: 'hidden'})),
            group([
                query('.product-details-img-wrapper', animate('500ms 100ms cubic-bezier(.35,0,.25,1)', style({
                    opacity: 1,
                    transform: 'translateX(0px)',
                    visibility: 'visible'
                }))),
                query('.product-details-description-wrapper', animate('300ms 400ms cubic-bezier(.35,0,.25,1)', style({
                    opacity: 1,
                    visibility: 'visible'
                }))),
            ])
        ], {params: {offsetEnter: 0}}),
        transition('1 => 0', [
            query('.product-details-img-wrapper', style({opacity: 1, transform: 'translateX(0px)', visibility: 'visible'})),
            query('.product-details-description-wrapper', style({opacity: 1, visibility: 'visible'})),
            group([
                query('.product-details-img-wrapper', animate('500ms 300ms cubic-bezier(.35,0,.25,1)', style({
                    opacity: 0,
                    transform: 'translateX({{ offsetLeave }}px)',
                    visibility: 'hidden'
                }))),
                query('.product-details-description-wrapper', animate('300ms cubic-bezier(.35,0,.25,1)', style({
                    opacity: 0,
                    visibility: 'hidden'
                }))),
            ])
        ], {params: {offsetLeave: 0}})
    ])
};
