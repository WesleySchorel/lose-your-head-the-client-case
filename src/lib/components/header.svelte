<script>
	// https://kit.svelte.dev/docs/assets
	import logo from '$lib/assets/vervoerregio_amsterdam_logo.svg';
	import informationIcon from '$lib/assets/information_icon.svg';
	import darkmodeIcon from '$lib/assets/dark_mode_icon.svg';
</script>

<header>
	<nav>
		<section class="logo-select">
			<a href="/">
				<img src={logo} alt="logo vervoerregio" />
			</a>
			<select>
				<option value="/">Selecteer Partner</option>
				<option value="gvb">GVB</option>
			</select>
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
	header{
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
