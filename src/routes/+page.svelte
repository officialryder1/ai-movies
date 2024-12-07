<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import MovieCard from "$lib/components/MovieCard.svelte";

    import { fade, fly } from "svelte/transition";
	import { backOut } from "svelte/easing";

    let movie = $state("")
    let suggestions = $state([])
    let isLoading = $state(false)
    let error = $state("")

    
    

    // $inspect(suggestions)
    const getMovieSuggestions = async () => {
        if(!movie.trim()){
            error = "Please enter a movie name."
            return
        }

        isLoading = true
        error = ""
        try{
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    movie: movie
                })
            })

            if(response.ok){
                suggestions = await response.json()
            } else {
                throw new Error("Failed to fetch movie suggestions")
            }
        } catch (error) {
            error = error.message
            console.error(error)
        } finally {
            isLoading=false
        }
        
    }
</script>


<ThemeToggle/>
<h1>AI Movie Suggester</h1>
<div class="typing-container">
    <p class="typing-animation">
        we suggest a similar movie to your input.
    </p>
</div>

<input type="text" placeholder="movie name" bind:value={movie}>
<button
    onclick={getMovieSuggestions}
    disabled={isLoading}
>{isLoading ? "Loading..." : "Get Suggestions"}</button>
<br>
{#if error}
    <p class="error">{error}</p>
{/if}
<div in:fade={{delay: 300, easing: backOut, duration:300}}>
    <MovieCard {suggestions}/>
</div>
<!-- <ul class="suggestions">
    {#each suggestions as suggestion, i}
        <li class="suggestion-item">{suggestion}</li>
    {/each}
</ul> -->

<style>
    h1{
        letter-spacing: 2px;
        font-weight: bolder;
        line-height: -1;
    }
    input {
        width: 250px;
        height: 35px;
        border-radius: 5px;
        text-align: center;
        border: none;
        box-shadow: 2px 8px rgba(0,0,0,0.3);
        margin-right: 10px;
        transition: box-shadow 0.5s ease, border-top 0.5s ease-in-out;
    }
    input:focus{
        outline: none;
        box-shadow: 4px 9px rgba(0, 0, 0, 0.5);
        border-right: 1px solid orangered;
        border-top: 1px solid orangered;
    }
    button {
        padding: 10px;
        height: 43px;
        border-radius: 5px;
        border: none;
        box-shadow: 4px 8px rgba(0, 0, 0, 0.3);
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .typing-container{
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid orangered;
        animation: typing 5s steps(60, end), blink 0.6s step-end infinite;
    }
    .typing-animation{
        color: #021526;
        transition: animation 2s ease-in-out;
        letter-spacing: 2px;
    }

    .error{
        color: red;
        margin-top: 10px;
        font-weight: bold;
    }
    /* .suggestions {
        margin-top: 20px;
        list-style: none;
        padding: 0;
    }
    .suggestion-item {
        font-size: 18px;
        padding: 5px;
    } */

    @keyframes typing{
        from {
            width: 0;
        }
        to {
            width: 45%;
        }
    }

    @keyframes blink {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: orangered ;
        }
    }
</style>