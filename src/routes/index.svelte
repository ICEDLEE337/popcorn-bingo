<script lang="ts">    
    import {ballStore, ballHistoryStore} from '$lib/stores'; 
    import Ball from '$lib/ball.component.svelte'
    import {pick} from '$lib/pick';
    
    let ball = {};

    function pop (allBalls, pastBalls) {
        if (ball?.letter) {
            ballHistoryStore.set([ball, ...pastBalls])
        }
        
        ball = pick(allBalls, pastBalls);
    }
</script>

<article class="card hero">
    <div class="pop">
        {#if ball?.letter}            
            <h2> Freshly Popped</h2>
        {:else} 
            <h1> Welcome to pop corn bingo!</h1>
        {/if}        
        <button class:yellow={ball?.letter} on:click={() => pop($ballStore, $ballHistoryStore)}>
            {#if ball?.letter}            
                <Ball {ball} />
            {:else}
                Get it Poppin! <img src="/popcorn.png" />
            {/if}        
        </button>
    </div>

    {#if $ballHistoryStore?.length}            
        <h3>Past {$ballHistoryStore?.length} Pops</h3>        
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
    @import '@onivoro/browser-layout/headings';
    @import '@onivoro/browser-layout/scroll';

    .pop {
        background-image: url('/stripe.svg');
        background-size: 80px 80px;    
        background-position: 10px;
    }

    .past {
        max-height: 130px;          
        @extend .scroll;        
        @extend .card;        
    }

    .hero {                      
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

    .yellow {
        background-color: yellow;
    }
</style>