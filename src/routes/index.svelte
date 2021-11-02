<script lang="ts">
let dark = 'dark';
let light = 'light'
let themes = [dark, light];
let theme;
$: hero = 'hero ' + theme;
function submit(a){
    const {srcElement} = a;
    const {elements} = srcElement;
    const {length} = elements;
    
    const value = Object.keys(srcElement.elements)
        .filter(k => !(/\d/.test(k)))
        .map(k => ({k, v: getValueFromElement(srcElement.elements[k])}))
        .reduce((acc, {k,v}) => ({...acc, [k]: v}), {});
    
    console.warn('value', value);

    a?.stopPropagation?.();
    a?.preventDefault?.();

    return false;
}

function getValueFromElement (target) {
    const type = target.getAttribute('type');
    if (type === 'submit') {
        return null;
    }
    
    return type === 'checkbox'
        ? target.checked
        : target.value;
    
}
</script>
<main class="card">
    <form on:submit={submit}>            
        <fieldset>
            <label for="theme">theme</label>
            <select name="theme" id="theme" bind:value={theme}>
                    {#each themes as t}                        
                    <option selected={theme === t} value={t}>{t}</option>
                    {/each}
            </select>
        </fieldset>            
        <fieldset><label for="cpus">cpus</label><input name="cpus" id="cpus" type="number"/></fieldset>
        <fieldset><label for="name">name</label><input name="name" id="name" type="text"/></fieldset>
        <fieldset>
            <label for="gender">gender</label>
            <select name="gender" id="gender">
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
        </fieldset>
        <fieldset><label for="description">description</label><textarea name="description" id="description"></textarea></fieldset>
        <input type="submit" />            
    </form>
</main>

<style lang="scss">
    @import '@onivoro/browser-layout/form';    
    @import '@onivoro/browser-layout/card';    
</style>