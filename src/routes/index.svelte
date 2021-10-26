<script lang="ts">
let dark = true;
let theme;
$: theme = 'hero ' + (dark ? 'dark' : 'light');
function submit(a){
    const {srcElement} = a;
    const {elements} = srcElement;
    const {length} = elements;
    
    const value = Object.keys(srcElement.elements)
        .filter(k => !(/\d/.test(k)))
        .map(k => ({k, v: getValueFromElement(srcElement.elements[k])}))
        .reduce((acc, {k,v}) => ({...acc, [k]: v}), {});
    
console.warn(value);

    a?.stopPropagation?.();
    a?.preventDefault?.();

    return false;
}

function getValueFromElement (thing) {
    console.warn(thing.value);
    
    console.warn(thing.getAttribute('checked'));
    console.warn(thing.getAttribute('name'));
    console.warn(thing.getAttribute('type'));
    return thing.value;
}
</script>

<div class={theme}>
    <div>
        <h1 class="txt">Welcome to SvelteKit</h1>
        <form class="col txt pad-3 justify-content-space-between align-items-center" style="height: 100%;" on:submit={submit}>
            <div class="row justify-content-space-between align-items-center"><input name="dark" class="btn-1" type="checkbox" bind:checked={dark} id="dark" on:change={v => console.warn(v.target.getAttribute('checked'))}/><label class="btn-1" for="dark">Dark? {dark}</label></div>            
            <div class="row"><input name="age" required type="number"/><label>age</label></div>
            <div class="row"><input name="name" type="text"/><label>name</label></div>
            <input class="btn-1" type="submit" />
            
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

    .btn-1 {
        background-color: hotpink;
        @extend .blackice;
    }

    form {
        @extend .pad-3;
    }
</style>