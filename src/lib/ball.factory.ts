import type { IBall } from "./ball.interface";

export function ballFactory (): IBall[] {
    const letters = 'BINGO'.split('');
    const balls = [];
    letters.forEach((letter, letterIndex) => {
        let i = 0;
        while(i < 15) {
            balls.push({letter, number: i})
            i++;
        }
    });

    return balls;
}