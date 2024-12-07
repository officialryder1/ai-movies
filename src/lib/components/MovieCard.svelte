<script>
    let {suggestions} = $props()

    let card = $derived(suggestions?.suggestions || [])
    $inspect(card)
    $inspect(suggestions)
</script>
<div class="container">
    {#if card.length > 0}
    {#each card as cards (cards.imdbID)}
        <div class="card">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src={cards.Poster !== "N/A" ? cards.Poster : "https://via.placeholder.com/150"} alt="Card Image" class="card-image" loading="lazy" />
            <div class="card-content">
                <h2 class="card-title">{cards.Title}</h2>
                <p class="card-description">{cards.Plot}.</p>
                <div class="badge">
                    <span>{cards.imdbRating}</span>
                </div>
                <a href={`https://www.google.com/search?q=${cards.Title}`} target="_blank" rel="noopener noreferrer" class="card-button">Learn More</a>
            </div>
        </div>
    {/each}
    {/if}
    
</div>

<style>
      /* General card styling */
.card {
    width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    background: #fff;
}

/* Image styling */
.card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

/* Content styling */
.card-content {
    padding: 15px;
    text-align: center;
}

.card-title {
    font-size: 1.5rem;
    color: #333;
    margin: 10px 0;
}

.card-description {
    font-size: 0.9rem;
    color: #555;
    margin: 10px 0 20px;
    line-height: 1.5;
}

/* Button styling */
.card-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: orangered;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card-button:hover {
    background-color: #d73716;
}

/* Hover effect for card */
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
.container{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.badge{
    display: inline-block;
    background-color: #282202;
    color: #fff;
    font-weight: bold;
    font-size: 0.9rem;
        padding: 5px 10px;
        border-radius: 12px; /* Rounded corners */
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

/* Hover effect for badge */
.badge:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
a{
    text-decoration: none;
}
</style>