// import {writable} from 'svelte';
import {BehaviorSubject} from 'rxjs'
import { ballFactory } from './ball.factory'
import type { IBall } from './ball.interface'

export const ballStore = new BehaviorSubject<IBall[]>(ballFactory());