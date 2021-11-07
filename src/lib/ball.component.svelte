<script lang="ts">
    export let ball;
    
</script>
    
<div class="ball">{ball?.letter?.toUpperCase()} {ball?.number}</div>

<style lang="scss">
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/text';
    .ball {
        background-image: url('/ball.svg');
        @extend .hero;
        height: 130px;
        width: 130px;
        @extend .txt;
        font-size: 54px;
        font-weight: bold;
    }
</style>
