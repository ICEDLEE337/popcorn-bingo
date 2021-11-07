<script lang="ts">    
    import {ballStore, ballHistoryStore} from '$lib/stores'; 
    import Ball from '$lib/component/ball.svelte'

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
        
        console.warn([randomBall, ...pastPicks])
        ballHistoryStore.set([randomBall, ...pastPicks])
        console.warn('ball', randomBall);
        ball = randomBall;
    }
    
    function wasUsed (pastPicks: IBall[], randomBall: IBall) {
        return !!(pastPicks?.find(
            past => past.number === randomBall.number && past.letter === randomBall.letter)
        );
    }
</script>

<article class="card hero">
    <div class="pop">
        {#if ball?.letter}            
            <h2> Freshly Popped</h2>
        {:else} 
            <h1> Welcome to pop corn bingo!</h1>
        {/if}
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
        </svg> -->
        <!-- {ball} -->
        <button on:click={() => pick($ballStore, $ballHistoryStore)}>
            {#if ball?.letter}            
                <Ball {ball} />
            {:else}
                Get it Poppin! <img src="https://image.pngaaa.com/175/3107175-middle.png" />
            {/if}        
        </button>
    </div>

    {#if $ballHistoryStore?.length}            
        <h2>Past Pops</h2>
        <div class="past">
            {#each $ballHistoryStore as past}
                    <Ball ball={past} />
            {/each}
        </div>
    {/if}
</article>

<style lang="scss">
    @import '@onivoro/browser-layout/padding';
    @import '@onivoro/browser-layout/card';
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/button';

    .pop {
        background-image: url(stripe.svg);
        background-size: 80px 80px;    
        background-position: 10px;
    }

    .past {
        overflow-x: scroll;        
        // overflow-y: hidden;        
        max-height: 80px;
        // @extend .flex;   
        // @extend .btn;     
        @extend .card;     
    
    }

    .hero {            
        // @extend .pad-3;    
        color: black;                    
        font-size: 3rem;
        height: 98vh;
        text-align: center;
    }

    .hero, .card {
        margin: 0;
        padding: 0;
    }

    button {
        font-size: 3rem;
        background-color: rgb(245,245,245);

        img {
            height: 48px;
            display: inline-block;
            position: relative;
            top: 4px;
        }
    }
</style>