<script context="module">
	let js = true;
</script>

<script>
	// https://kit.svelte.dev/docs/assets
	import logo from '$lib/assets/vervoerregio_amsterdam_logo.svg';
	import informationIcon from '$lib/assets/information_icon.svg';
	import darkmodeIcon from '$lib/assets/dark_mode_icon.svg';

	import { onMount } from 'svelte';

	export let params;
	export let partners;
	export let websites;

	const faviconAPI =
		'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=';

	$: selectedPartner = params.websiteUID
		? partners.websites.find(({ slug }) => slug === params.websiteUID)
		: '';
	$: selectedUrl = params.urlUID ? params.urlUID : '';
	let js = false;

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
			<div class="dropdown">
				<button>
					{#if selectedPartner}
						<img
							width="24"
							src="{faviconAPI}{selectedPartner.homepage}/&size=256"
							alt=""
						/>{selectedPartner.titel}
					{:else}
						Partners overzicht
					{/if}
				</button>
				<ul>
					<li>
						<a href="/">Partners overzicht</a>
					</li>
					{#each partners.websites as partner}
						<li>
							<a href="/{partner.slug}"
								><img
									width="24"
									src="{faviconAPI}{partner.homepage}/&size=256"
									alt=""
								/>{partner.titel}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			{#if websites}
				<span>/</span>
				<div class="dropdown">
					<button>
						{#if selectedUrl}
							{selectedUrl}
						{:else}
							Websites overzicht
						{/if}
					</button>
					<ul>
						<li>
							<a href="/{selectedPartner.slug}">Websites overzicht</a>
						</li>
						{#each websites.urls as website}
							<li>
								<a href="/{selectedPartner.slug}/{website.slug}">{website.slug}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>

		<section class="header-icons">
			<a href="/info">
				<img class="information-icon-img" src={informationIcon} alt="information icon" />
			</a>
			<img src={darkmodeIcon} alt="darkmode icon" />
		</section>
	</nav>
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

	span {
		font-size: 1.4rem;
	}

	button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		appearance: none;
		padding: 1em 0.6em;
		padding-right: 4em;
		border-radius: 0.5em;
		font-size: 1em;
		background-color: #2c2c2c;
		color: #ffffff;
		border: none;
		width: 100%;
		height: 3.5rem;
		text-align: left;
	}

	button::after {
		content: url('../assets/select_arrow_down.svg');
		position: absolute;
		right: 5%;
		scale: 1.3;
	}

	.dropdown {
		position: relative;
		display: inline-block;
		min-width: 19rem;
	}

	.dropdown img {
		border-radius: 4px;
		height: 24px;
		width: 24px;
	}

	ul {
		position: absolute;
		background-color: #2c2c2c;
		max-height: 0;
		width: 100%;
		border-radius: 0.5em;
		overflow: hidden;
	}

	ul a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #ffffff;
		background-color: #393939;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	ul a:hover {
		background-color: #606060;
	}

	.dropdown:hover ul {
		max-height: min-content;
		min-width: max-content;
	}

	.dropdown:hover button {
		background-color: #2c2c2c;
		transition: max-height 0.25s ease-in;
	}

	.dropdown:hover button::after {
		rotate: 180deg;
		top: 1.25rem;
	}

	.logo-select {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.logo-select a {
		display: flex;
	}

	.header-icons {
		display: flex;
		gap: 1em;
		align-items: center;
	}

	.information-icon-img {
		display: block;
	}
</style>
