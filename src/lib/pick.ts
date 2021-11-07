import type { IBall } from './ball.interface';
import { ballHistoryStore } from './stores';

export function pick(balls: IBall[], pastPicks: IBall[]) {
    let randomBall;
    let unUsed = balls.filter(b => !wasUsed(pastPicks, b));
    const index = (+new Date()) % unUsed.length;
    randomBall = unUsed[index];
    // ballHistoryStore.set([randomBall, ...pastPicks])
    return randomBall;
}

function wasUsed(pastPicks: IBall[], randomBall: IBall) {
    return !!(pastPicks?.find(
        past => past.number === randomBall.number && past.letter === randomBall.letter)
    );
}