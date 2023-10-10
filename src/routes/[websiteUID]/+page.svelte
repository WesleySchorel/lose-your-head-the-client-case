<script>
	import Heading from '$lib/components/heading.svelte';
	import Websites from '$lib/components/websites.svelte';
	import { page } from '$app/stores';

	export let data;

	$: heading = {
		titel: data.websitesData.website.titel,
		homepage: data.websitesData.website.homepage
	};

	// data voor websites component
	let websites = data.websitesData.website.urls
	let overzicht = data.websitesData.website
	let params = $page.params.websiteUID
</script>

<Heading {heading} />

<form>
	<label for="partner-search">Zoek een partner</label>
	<input
		type="search"
		id="partner-search"
		placeholder="Connexxion"
		on:input={(e) => console.log(e)}
	/>
</form>

<ul>
	{#each websites as website}
	<Websites {website} {overzicht} {params}/>
	{/each}
</ul>

<style>
/* form */
form {
		margin: 0 0.75em;
		margin-bottom: 1em;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
		font-weight: 600;
	}

	input {
		padding: 0.5em;
		border: 2px solid var(--c-border);
		background-color: var(--c-container);
		border-radius: 0.25em;
		color: var(--c-white);
		width: 8.5em;
		font-size: 1em;
		font-weight: 600;
		padding-left: 0.75em;
	}
	/* form end */
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 0.75em;
		
		list-style-type: none;
		margin: 0 0.75em;
	}
</style>
