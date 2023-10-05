<script context="module">
	let js = true;
</script>

<script>
	// https://kit.svelte.dev/docs/assets
	import logo from '$lib/assets/vervoerregio_amsterdam_logo.svg';
	import informationIcon from '$lib/assets/information_icon.svg';
	import darkmodeIcon from '$lib/assets/dark_mode_icon.svg';

	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let params;
	export let partners;
	export let websites;
	$: selectedPartner = params.websiteUID ? params.websiteUID : '';
	$: selectedUrl = params.urlUID ? params.urlUID : '';
	let js = false;

	$: console.log(params.websiteUID);

	onMount(() => {
		js = true;
	});
</script>

<header>
	<nav>
		<section class="logo-select">
			<a href="/">
				<img src={logo} alt="logo vervoerregio" />
			</a>
			<p>{selectedPartner}</p>
			<p>{selectedUrl}</p>
			{#each partners.websites as partner}
				<a href=/{partner.slug}>{partner.titel}</a>
			{/each}

			{#if websites}
				{#each websites.urls as website}
					<a href=/{selectedPartner}/{website.slug}>{website.slug}</a>
				{/each}
			{/if}
		</section>

		<section class="header-icons">
			<a href="/info">
				<img class="information-icon-img" src={informationIcon} alt="information icon" />
			</a>
			<img src={darkmodeIcon} alt="darkmode icon" />
		</section>
	</nav>

	<section class="container-heading-1">
		<h1>Partners</h1>
	</section>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
	}

	nav {
		display: flex;
		justify-content: space-between;
		background-color: #202020;
		padding: 1em;
		border-bottom: 2px solid #454545;
	}

	.logo-select {
		display: flex;
		gap: 1.5em;
	}

	form {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo-select a {
		display: flex;
	}

	select {
		background-image: url('$lib/assets/select_arrow_down.svg');
		background-repeat: no-repeat;
		background-size: 0.8em;
		background-position: center right 0.6em;

		appearance: none;
		padding: 1em 0.6em;

		padding-right: 4em;
		border-radius: 0.5em;
		font-size: 1em;
		background-color: #2c2c2c;
		color: #ffffff;
		border: none;
	}

	span {
		color: #ffffff;
		font-size: 1.8rem;
	}

	.header-icons {
		display: flex;
		gap: 1em;
		align-items: center;
	}

	.information-icon-img {
		display: block;
	}

	/* container heading 1 */
	.container-heading-1 {
		background-color: var(--c-container);
		padding: 2em 1em;
		border-top: 12px solid var(--c-pink);
		margin: 0.75em;
		border-radius: 0.5em;
	}

	h1 {
		padding-left: 0.25em;
	}
</style>
