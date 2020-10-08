import {
  trigger,
  state,
  style,
  animate,
  transition, query
} from '@angular/animations';

const rightToLeft = trigger('rtl', [
  state('show', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%' }),
    animate(1000)
  ])
])

const leftToRight = trigger('ltr', [
  state('show', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(100%)' }),
    animate(1000)
  ]),
])
const dropDown = trigger('dropdown', [
  state('true', style({ opacity: 1 })),
  transition('void => *', [
    style({ opacity: 0 }),

    animate(500)
  ]),

  state('false', style({ display: 'none' })),
])

export { rightToLeft, leftToRight, dropDown }
