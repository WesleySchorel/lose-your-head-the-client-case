<script>
	export let heading;

	const faviconAPI =
		'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=';
</script>

<section>
	{#if heading.homepage}
		<img width="60" src="{faviconAPI}{heading.homepage}/&size=128" alt="" />
	{/if}
	<h1>
		{heading.titel}{#if heading.url}/{heading.url}{/if}
	</h1>
</section>

<style>
	/* container heading 1 */
	section {
		display: flex;
		gap: 1rem;
		align-items: center;
		background-color: var(--c-container);
		padding: 2em;
		border-top: 12px solid var(--c-pink);
		margin: 1em 1em;
		border-radius: 0.5em;
	}

	section img {
		/* padding: .5rem; */
		box-shadow: 0px 0px 0px 8px #202020;
		border-radius: 0.3rem;
		background-color: #202020;
	}
</style>
