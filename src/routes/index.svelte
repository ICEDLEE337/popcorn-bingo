<script lang="ts">
let dark = true;
let theme;
$: theme = 'hero ' + (dark ? 'dark' : 'light');
function submit () {
    console.warn(dark)
}
</script>

<div class={theme}>
    <div>
        <h1 class="txt">Welcome to SvelteKit</h1>
        <form class="col txt justify-content-space-between align-items-center" style="height: 100%;">
            <div class="row justify-content-space-between align-items-center"><input type="checkbox" bind:checked={dark} id="dark" /><label for="dark">Dark?</label></div>
            <div><button class="btn-1" on:click|preventDefault={submit}>Submit</button></div>
        </form>
    </div>
</div>

<style lang="scss">
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/button';
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/padding';

    .hero {
        background-image: url('http://localhost:4443/assets/logo.svg');
        height: 90vh;        
    }

    form {
        @extend .pad-3;
    }
</style>