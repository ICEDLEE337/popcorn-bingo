import type { IBall } from './ball.interface';

export function pick(balls: IBall[], pastPicks: IBall[]) {
    let unUsed = balls.filter(b => !wasUsed(pastPicks, b));
    const index = (+new Date()) % unUsed.length;
    return unUsed[index];    
}

function wasUsed(pastPicks: IBall[], randomBall: IBall) {
    return !!(pastPicks?.find(
        past => past.number === randomBall.number && past.letter === randomBall.letter)
    );
}