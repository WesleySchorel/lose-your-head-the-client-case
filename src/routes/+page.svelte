<script>
	import Heading from '$lib/components/heading.svelte';
	import Partner from '$lib/components/partner.svelte';
	export let data;

	let heading = { titel: 'Partners overzicht' };
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
	{#each data.websites as website}
		<Partner {website} />
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
		border: 1px solid var(--c-modal-button);
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
