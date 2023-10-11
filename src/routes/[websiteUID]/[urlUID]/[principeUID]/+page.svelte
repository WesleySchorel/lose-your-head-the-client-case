<script>
	import Heading from '$lib/components/heading.svelte';
	export let data;

	$: heading = {
		titel: data.websitesData.website.titel,
		homepage: data.websitesData.website.homepage,
		url: data.urlData.url.slug
	};

	const toolboardData = data.toolboardData;
	const richtlijnen = toolboardData.principe.richtlijnen

	const succescriteria = toolboardData.url.checks[0]
		? toolboardData.url.checks[0].succescriteria
		: [];

	console.log(richtlijnen);
</script>

<Heading {heading} />
<form action="">
	{#each richtlijnen as richtlijn}
		<section>
			<h2>{richtlijn.titel}</h2>
			{#each richtlijn.succescriteria as succescriterium}
			<label>

				<h3>{succescriterium.titel}</h3>
				<p>{succescriterium.index}</p>
				<p>{succescriterium.id}</p>
				<input type="checkbox" id={succescriterium.id}>
			</label>
			{/each}
		</section>
	{/each}
</form>


<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 3rem 0;
	}
	label {
		display: flex;
		gap: 1rem;
	}
	label * {
		font-size: 1em;
	}
</style>