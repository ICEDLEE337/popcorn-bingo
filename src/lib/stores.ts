import { ballFactory } from './ball.factory'
import { writable } from 'svelte/store'

export const ballStore = writable(ballFactory());
export const ballHistoryStore = writable([]);
