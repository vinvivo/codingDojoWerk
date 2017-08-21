import { trigger,
    state,
    style,
    transition,
    animate,
    keyframes, AnimationEntryMetadata } from '@angular/core';

    export const routerTransition: AnimationEntryMetadata = 

trigger('routerTransition', [

    // end state of a potential animation (hence, "void" is first argument)
    state( 'void', style({ position: 'absolute', width: '100%', height: '100%', opacity: 0}) ),
    // any state
    state( '*', style({position: 'absolute', width: '100%', height: '100%', opacity: 1}) ),

    // transition on enter
    transition(':enter', [
        style({ transform: 'translateY(20%)', opacity: 0}),     // starting at 0% opacity and 20% below where it will end up
        animate('0.8s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
    ]),

    transition(':leave', [
        style({ transform: 'translateY(0%)' }),     // starting at 0% opacity and 20% below where it will end up
        animate('0.8s ease-in-out', style({transform: 'translateY(-20%)', opacity: 0}))
    ]),

]);