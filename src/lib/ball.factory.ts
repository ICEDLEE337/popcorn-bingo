import type { IBall } from "./ball.interface";

export function ballFactory (): IBall[] {
    const letters = 'bingo'.split('');    
    const balls = [];
    letters.forEach((letter, letterIndex) => {
        let i = 1;
        while(i <= 15) {
            balls.push({letter, number: i + letterIndex * 15})
            i++;
        }
    });

    return balls;
}