<script>
	import Heading from '$lib/components/heading.svelte';
	export let data;

	$: heading = {
		titel: data.websitesData.website.titel,
		homepage: data.urlData.url.url,
		url: data.urlData.url.slug
	};
	const toolboardData = data.toolboardData;
	const richtlijnen = toolboardData.principe.richtlijnen;

	const checkedSuccescriteria = toolboardData.url.checks[0]
		? toolboardData.url.checks[0].succescriteria
		: [];

	console.log(data);
</script>

<Heading {heading} />
<div class="content">
	<section class="principe-intro">
		<h2>
			{toolboardData.principe.titel}. Principe {@html toolboardData.principe.beschrijving.html}
		</h2>
	</section>
	<form action="">
		{#each richtlijnen as richtlijn}
			<section>
				<span>Richtlijn {richtlijn.index}</span>
				<h2>{richtlijn.titel}</h2>
				{#each richtlijn.succescriteria as succescriterium}
					<details>
						<summary>
							<label>
								<div class="titel">
									<span>Criteria {succescriterium.index}</span>
									<h3>{succescriterium.titel}. Niveau {succescriterium.niveau}</h3>
								</div>
								<input
									type="checkbox"
									checked={checkedSuccescriteria.find((e) => e.id === succescriterium.id)}
								/>
							</label>
						</summary>
						<p>Uitleg over succescriterium {succescriterium.index}</p>
					</details>
				{/each}
			</section>
		{/each}
	</form>
</div>

<style>
	.content {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 3rem 0;
		background-color: var(--c-container);
		margin: 1em;
		padding: 1em;
	}
	.principe-intro {
		grid-column: span 2;
	}
	details {
		padding: 0.5em;
		border-bottom: 1px solid gray;
	}
	label {
		display: flex;
		gap: 1rem;
	}
	label * {
		font-size: 1em;
	}
	label .titel {
		display: flex;
		flex-direction: column;
	}
	label input {
		margin-left: auto;
	}
</style>
