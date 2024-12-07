<script>
    import { theme } from "$lib/utils/theme";

    let currentTheme = $state('')

    if(typeof window !== 'undefined'){
        theme.subscribe((value) => (currentTheme = value))
    }

    function toggleTheme(){
        theme.set(currentTheme === 'light' ? 'dark' : 'light')
    }
</script>

<button onclick={toggleTheme}>
    {#if currentTheme === 'light'}
        🌙 switch to dark Mode
    {:else}
        🌞 switch to light Mode
    {/if}
</button>
<style>
    button{
        border: none;
        height: 50px;
        box-shadow: 6px 3px rgba(0,0,0,0.3);
        padding: 5px 15px;
        border-radius: 5px;
        font-weight: bold;
        border-top: 1px solid orangered;
        transition: transform 0.5s ease-in-out, box-shadow 0.4s ease-in-out;
        cursor: pointer;
    }
    button:hover{
        transform: translateY(-5px);
        box-shadow: 6px 6px rgba(0, 0, 0, 0.4);
    }
</style>