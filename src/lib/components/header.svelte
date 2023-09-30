<script>
	// https://kit.svelte.dev/docs/assets
	import logo from '$lib/assets/vervoerregio_amsterdam_logo.svg';
	import informationIcon from '$lib/assets/information_icon.svg';
	import darkmodeIcon from '$lib/assets/dark_mode_icon.svg';

	export let params;
	export let partners;
	let selectedPartner = params.websiteUID ? params.websiteUID : '';

	function handleSubmit() {
		location = '/' + selectedPartner;
	}
</script>

<header>
	<section class="logo-select">
		<img src={logo} alt="logo vervoerregio" />
		<form on:change|preventDefault={handleSubmit}>
			<select bind:value={selectedPartner}>
				<option value="">Overzicht van partners</option>
				{#each partners.data as partner}
					<option value={partner.id}>{partner.titel}</option>
				{/each}
			</select>
		</form>
	</section>

	<section class="header-icons">
		<a href="/info"
			><img class="information-icon-img" src={informationIcon} alt="information icon" /></a
		>
		<img src={darkmodeIcon} alt="darkmode icon" />
	</section>
</header>

<style>
	header {
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

	.header-icons {
		display: flex;
		gap: 1em;
		align-items: center;
	}

	.information-icon-img {
		display: block;
	}
</style>
