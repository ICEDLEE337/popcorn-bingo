import type { IBall } from './ball.interface';
import { ballHistoryStore } from './stores';

export function pick(balls: IBall[], pastPicks: IBall[]) {
    let randomBall;
    let maxIterations = 10_000;
    let tries = 0;
    let start = new Date().valueOf();
    let elapsed;

    while (tries++ < maxIterations && (!randomBall || wasUsed(pastPicks, randomBall))) {
        const now = new Date().valueOf();
        const index = now % balls.length;
        elapsed = now - start;
        randomBall = {...balls[index], elapsed, tries};
    }
    ballHistoryStore.set([randomBall, ...pastPicks])
    console.warn('ball', randomBall);
    return randomBall;
}

function wasUsed (pastPicks: IBall[], randomBall: IBall) {
    return !!(pastPicks?.find(
        past => past.number === randomBall.number && past.letter === randomBall.letter)
    );
}