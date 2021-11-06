<article class="card hero">
<h1 class=pop>Welcome to pop corn bingo!</h1>

{#each balls as ball}
{ball.letter}{ball.number} <br/>
{/each}
</article>

<script lang="ts">
    let balls;
    import {bingo} from './_bingo';
    $: balls = bingo();
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/padding';
    @import '@onivoro/browser-layout/card';
    @import '@onivoro/browser-layout/hero';
.pop {
    @extend .pad-3;    
    color: black;    
    background-image: url(stripe.svg);
    background-size: 40px 40px;
}

.hero {
    font-size: 1.2rem;
}
    </style>