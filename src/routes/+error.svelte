<script>
	import { page } from '$app/stores';
</script>

<section>
	<h1>{$page.status}: {$page.error.message}</h1>
</section>

<div class="content-container">
	<h3><span>Oeps!</span> Er is iets mis gegaan.</h3>
	<br>
	<p>
		De pagina die je zoekt, is helaas niet gevonden. Misschien heb je een verkeerde afslag genomen
		of is er iets misgegaan tijdens het navigeren van onze tool. Probeer het opnieuw om op de juiste
		pagina te belanden.
	</p>
	<a href="/">Terug naar home</a>
</div>

<style>
	/* container heading 1 */
	section {
		display: flex;
		gap: 1rem;
		align-items: center;
		background-color: var(--c-container);
		padding: 2em;
		border-top: 12px solid var(--c-pink);
		margin: 1em 0.75em;
		border-radius: 0.5em;
	}

	h1 {
		padding-left: 0.25em;
	}

	span {
		color: var(--c-pink);
	}

	p {
		max-width: 60em;
	}

	/* content container */
	.content-container {
		gap: 1rem;
		background-color: var(--c-container);
		padding: 2em;
		margin: 1em 0.75em;
		border-radius: 0.5em;
	}

	a {
		display: inline-block;
        margin-top: 1.75em;
		padding: 1rem;
		font-size: 1rem;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		color: #fff;
		background-color: #636363;
		border-radius: 4px;
		transition: 0.3s;
	}

	a:hover {
        opacity: 0.75;
	}
</style>
