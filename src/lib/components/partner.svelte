<script>
	export let website;

	import logoPartner from '$lib/assets/gvb.png';
	import arrowRight from '$lib/assets/arrow_right.svg';

	import { onMount } from 'svelte';

	let labelValue;
	let progressbar;

	// runs after the component is first rendered to the DOM.
	onMount(() => {
		let random = Math.floor(Math.random() * 100);
		
		progressbar.value = random;
		labelValue.innerHTML = random + '%'
	});
</script>

<li>
	<a href={website.slug}>
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
				<progress id="progress-partner" max="100" value="0" bind:this={progressbar} />
				<label class="progress-percentage" for="progress-partner" bind:this={labelValue}>0%</label>
			</div>
		</section>
	</a>
</li>

<style>
	li {
		display: flex;
	}

	li a {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.25em;
		color: var(--c-text);
		text-decoration: none;
		background-color: var(--c-container);
		padding: 1em;
		border-radius: 0.5em;
		border: solid 1px var(--c-container-stroke);
		width: 100%;
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
		transition: 2s ease-out;
	}

	.progress-percentage {
		height: 85%;
	}
</style>
