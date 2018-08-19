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

export const productAnimations: {
    readonly listFadeInOut: AnimationTriggerMetadata;
    readonly accordion: AnimationTriggerMetadata;
    readonly moveProduct: AnimationTriggerMetadata;
    readonly scaleProduct: AnimationTriggerMetadata;
    readonly scaleRotateImg: AnimationTriggerMetadata;
    readonly scaleShadow: AnimationTriggerMetadata;
} = {
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
    ])
};
