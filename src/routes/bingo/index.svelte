<script lang="ts">    
    import {ballStore, ballHistoryStore} from '$lib/stores'; 

    let ball = {};
    
    function pick (balls: IBall[], pastPicks: IBall[]) {
        let randomBall;
        let maxIterations = 1000;
        let i = 0;

        while (i++ < maxIterations && (!randomBall || wasUsed(pastPicks, randomBall))) {
            const now = new Date().valueOf();
            const index = now % balls.length;
            randomBall = balls[index];        
        }    
        
        ballHistoryStore.set([randomBall, ...pastPicks])
        console.warn('ball', randomBall);
        ball = randomBall;
    }
    
    function wasUsed (pastPicks: IBall[], randomBall: IBall) {
        return !!(pastPicks?.find(
            past => past.number === randomBall.number && past.letter === random.letter)
        );
    }
</script>

<article class="card hero">
    <div class="pop">
        <h1> Welcome to pop corn bingo!</h1>
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
        </svg> -->
        <!-- {ball} -->
        <button on:click={() => pick($ballStore, $ballHistoryStore)}>
            {#if ball?.letter}
                {ball?.letter?.toUpperCase()} {ball?.number}
            {:else}
                Get it Poppin! <img style="height: 32px; display: inline-block;" src="https://image.pngaaa.com/175/3107175-middle.png" />
            {/if}        
        </button>
    </div>
</article>

<style lang="scss">
    @import '@onivoro/browser-layout/padding';
    @import '@onivoro/browser-layout/card';
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/button';

    .pop {
        background-image: url(stripe.svg);
        background-size: 80px 80px;    
    }

    .hero {            
        // @extend .pad-3;    
        color: black;                    
        font-size: 3rem;
        height: 100vh;
    }

    .hero, .card {
        margin: 0;
        padding: 0;
    }

    button {
        font-size: 3rem;
        background-color: white;
    }
</style>