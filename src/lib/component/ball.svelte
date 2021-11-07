<script lang="ts">
    export let ball;
    
</script>
    
<div class="ball">{ball?.letter?.toUpperCase()} {ball?.number} {ball?.tries} {ball?.elapsed}</div>

<style lang="scss">
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/text';
    .ball {
        background-image: url(ball.svg);
        @extend .hero;
        height: 120px;
        width: 120px;
        @extend .txt;
        font-size: 56px;
        font-size: 16px;
    }
</style>
