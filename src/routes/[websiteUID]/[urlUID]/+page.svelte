<script>
	import Heading from '$lib/components/heading.svelte';
	export let data;

	console.log(data)

    $: heading = {titel: data.websitesData.website.titel, homepage: data.urlData.url.url, url: data.urlData.url.slug}
	const principes = data.principesData.principes
</script>

<Heading {heading} />
<section class="container-voortgang-1">
	<h2>Voortgang</h2>
	<div class="container-voortgang-2">
		<ul>
			<li>
				<section>
					<div>
						<span class="goed-bezig">Goed bezig!</span>
						<p>Je hebt al grote stappen gemaakt met principe Begrijpelijk!</p>
					</div>
				</section> 
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Kijk ook eens naar succescriteria 1.5.2. Deze is namelijk eenvoudig toe te passen!
						</p>
					</div>
				</section>
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Succescriteria 1.2.3 zal de toegankelijkheid op je website sterk verbeteren door het
							contrast gebruik.
						</p>
					</div>
				</section>
			</li>
		</ul>
	</div>
</section>

<section class="container-principes">
	<ul>
		{#each principes as principe (principe.index)}
		<li>
			<div class="principe">
				<h3><span>{principe.titel}. </span> Principe {principe.index}</h3>
				<p>
					{principe.beschrijving.text}
				</p>
				<div class="progress-container">
					<progress id="progress-partner" max="100" value="70" />
					<label class="progress-percentage" for="progress-partner">70%</label>
				</div>
			</div>
		</li>
		{/each}
	</ul>
</section>

<style>

	:global(*) {
		box-sizing: border-box;
	}

	h2 {
		font-size: 1.5em;
		padding-left: 1em;
		margin-top: 1rem;
	}

    /* VOORTGANG */

	.container-voortgang-1 {
		background-color: var(--c-container);
		padding: 1em 1em;
		margin: 1em;
		border-radius: 0.5em;
	}

	.container-voortgang-2 {
		display: flex;
		flex-wrap: wrap;
		margin: 0.75em;
		border-radius: 0.5em;
	}

    .container-voortgang-2 p {
		font-size: 1em;
		max-width: 16rem;
	}

	.container-voortgang-2 ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		margin: 1em;
	}

	.container-voortgang-2 li {
		background-color: var(--c-container-stroke);
		padding: 1em;
		border-radius: 0.5em;
		min-width: 16em;
	}

    /* VOORTGANG PRESTATIES */
	.goed-bezig {
		color: var(--c-green);
		font-size: 1em;
	}

	.tip {
		color: var(--c-orange);
		font-size: 1em;
	}



    /* PRINCIPES */

	h3 {
		font-size: 1.5em;
	}

    .container-principes  ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(40em, 1fr));
		gap: 1em;

		list-style-type: none;
		margin: 0 1em;
	}

	.container-principes  li {
		border-radius: 0.5em;
	}

	span {
		color: var(--c-pink);
	}

	.principe p {
		font-size: 1em;
		margin-bottom: 2rem;
        width: 80%;
	}

	.principe {
		padding: 1.5em;
		background-color: var(--c-container);

		border-radius: 0.5em;
		height: 100%;
		border: solid 1px var(--c-container-stroke);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.progress-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1em;
    	margin-top: 0.25em;
	}

	/* progress */
	progress {
		width: 100%;
	}

	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;
		height: 60%;
	}

	/* chrome/safari */
	progress[value]::-webkit-progress-bar {
		background-color: var(--c-container-stroke);
		border-radius: 0.5em;
	}

	progress[value]::-webkit-progress-value {
		background-color: var(--c-pink);
		border-radius: 0.5em;
	}

	.progress-percentage {
		height: 85%;
	}
</style>
