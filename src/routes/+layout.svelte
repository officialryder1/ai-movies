<script>
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import { dev } from '$app/environment';
    import '../app.css'
    import "@fontsource/open-sans"
    let { children } = $props()

    injectAnalytics({mode: dev ? 'development' : 'production'})
</script>

<svelte:head>
    <title>theDiscova</title>
    <meta name="description" content="Let's help you find similar movies to your favorite">
    <meta name="keywords" content="movie suggestions, AI recommendations, popular movies">
    <meta name="author" content="Officialryder">
    <meta property="og:title" content="TheDiscova">
    <meta property="og:description" content="Let's help you find similar movies to your favorite">
    <meta property="og:image" content="/images/Element_Geo.webp/">
    <meta property="og:url" content="">

</svelte:head>

<main>
    {@render children()}
</main>
<footer>
    <p>made with 💖 by <a href="https://x.com/official_ryder0">official_ryder0</p>
</footer>
<style>
    :global(body){
        display: grid;
        grid-template-areas: "main main" "footer footer";
        min-height: 100vh;
        grid-template-columns: 1fr 300px;
        grid-template-rows:1fr auto;

    }
    main{
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        grid-area: main;
    }
    footer{
        padding: 1em;
        color: #fff;
        background-color: #021526;
        grid-area: footer;
    }
    footer p {
        text-align: center;
        
    }
    a{
        text-decoration: none;
        font-weight: bold;
        color: #fff;
    }
</style>