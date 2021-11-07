import { BehaviorSubject } from 'rxjs'
import { ballFactory } from './ball.factory'
import type { IBall } from './ball.interface'
import { writable } from 'svelte/store'

export const ballStore = new BehaviorSubject<IBall[]>(ballFactory());
export const ballHistoryStore = writable([]);
