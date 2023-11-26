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
							src="{faviconAPI}{selectedPartner.homepage}/&size=128"
							alt=""
						/>{selectedPartner.titel}
					{:else}
						<span>Partners overzicht</span>
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
				<span class="seperator">/</span>
				<div class="dropdown">
					<button>
						{#if selectedUrl}
							{selectedUrl}
						{:else}
							<span>Websites overzicht</span>
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
		position: sticky;
		top: 0;
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

	.seperator {
		font-size: 1.5rem;
	}

	button {
		position: relative;
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
		box-shadow: 0px -20px 0px 0px #202020;
		transition: 0.2s;
	}

	button::after {
		content: url('../assets/select_arrow_down.svg');
		position: absolute;
		right: 5%;
		scale: 1.3;
		transition: 0.2s;
	}

	button span {
		opacity: 0.6;
	}

	.dropdown {
		position: relative;
		display: inline-block;
		min-width: 19rem;
		height: max-content;
		z-index: 1;
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
		border-radius: 0 0 0.5em 0.5em;
		overflow: hidden;
		transform: translateY(-100%);
		transition: 0.2s;
		z-index: -1;
	}

	ul li:first-child {
		border-bottom: 1px solid;
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

	ul:has(a:focus) {
		max-height: min-content;
		min-width: max-content;
		transform: translateY(0);
	}

	ul a:hover {
		background-color: #525252;
	}

	ul a:hover img {
		transform: translateY(-3px);
	}

	.dropdown:hover ul {
		max-height: min-content;
		min-width: max-content;
		transform: translateY(0);
	}

	.dropdown:hover button {
		background-color: #2c2c2c;
		border-radius: 0.5em 0.5em 0 0;
	}

	button:has(a:focus) {
		background-color: #2c2c2c;
		border-radius: 0.5em 0.5em 0 0;
	}

	.dropdown:hover button::after {
		transform: scale(-1, -1);
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

	/* media queries for mobile */
	@media (max-width: 640px) {
		nav{
			padding: 1.55em 1em;
		}
		.dropdown {
			display: none;
		}
	}
</style>
