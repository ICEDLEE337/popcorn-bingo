<script lang="ts">
let dark = false;
let theme;
$: theme = 'hero ' + (dark ? 'dark' : 'light');
function submit(a){
    console.warn('is this the form', a.target);

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
<main>
<div class={theme}>       
        <form class="col" on:submit={submit}>
            <fieldset>
                <label for="dark">dark</label>
                <input name="dark" type="checkbox" bind:checked={dark} id="dark" />
            </fieldset>            
            <fieldset><label for="age">age</label><input name="age" id="age" required type="number"/></fieldset>
            <fieldset><label for="name">name</label><input name="name"  id="name" type="text"/></fieldset>
            <fieldset>
                <label for="gender">gender</label>
                <select name="gender" id="gender">
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            </fieldset>
            <input type="submit" />            
        </form>
</div>
</main>

<style lang="scss">
    @import '@onivoro/browser-layout/hero';
    @import '@onivoro/browser-layout/button';
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/text';
    @import '@onivoro/browser-layout/padding';

    form, fieldset, input, label, select {
        box-sizing: border-box;
    }
    
    form {
        @extend .txt;
        display: flex;
        flex-direction: column;
        width: 100%;
        fieldset {
            border: none;
        }

        & > fieldset {
            display: flex;
            flex-direction: row;
            width: 100%;   
            justify-content: center;         

            & > label {              
                width: 25%;
            }

            & > input, & > select {
                width: 75%;
            }
        }

        label, input, select {
            @extend .btn;
        }
    }

    
    .hero {
        background-image: url('data:image/jpg;base64,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');
        height: 90vh;        
    }

    .dark {
        color: $frost;
    }

    .light {
        color: $blackice;
    }  
     
</style>