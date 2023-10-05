<script>
	export let data;

	import logoPartner from '$lib/assets/gvb.png';
	import arrowRight from '$lib/assets/arrow_right.svg';
</script>

<form>
	<label for="partner-search">Zoek een partner</label>
	<input type="search" id="partner-search" placeholder="Connexxion">
</form>

<ul>
	{#each data.websites as website}
		<li>
			<section class="logo-partner-section">
				<div>
					<img src={logoPartner} alt="logo partner" />
					<h2>{website.titel}</h2>
				</div>
				<img src={arrowRight} alt="arrow right" />
			</section>

			<section class="more-info-section">
				<span>Website: {website.homepage}</span>
				<span>Laatst bewerkt: 12 min. geleden</span>

				<div class="progress-container">
					<progress id="progress-partner" max="100" value="70" />
					<label for="progress-partner">70%</label>
				</div>
			</section>
		</li>
	{/each}
</ul>

<style>
	/* form */
	form{
		margin-bottom: 1em;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1em;
		font-weight: 600;
	}

	input{
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
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75em;
	}

	li {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.25em;

		background-color: var(--c-container);
		padding: 1em;
		border-radius: 0.5em;
		border: solid 1px var(--c-container-stroke);
		min-width: 20.7em;
	}

	.logo-partner-section {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	h2 {
		font-size: 1.5em;
		margin-top: 0.05em;
	}

	.more-info-section {
		display: flex;
		flex-direction: column;
		font-size: 0.9em;
	}

	/* progress bar */
	.progress-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1em;
		margin-top: 0.25em;
	}

	progress {
		width: 100%;
	}

	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;
		height: 50%;
	}

	/* chrome/safari */
	progress[value]::-webkit-progress-bar {
		background-color: var(--c-container);
		border: 1px solid var(--c-container-stroke);
		border-radius: 0.5em;
	}

	progress[value]::-webkit-progress-value {
		background-color: var(--c-pink);
		border-radius: 0.5em;
	}
</style>
