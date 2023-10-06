<script>
	import Heading from '$lib/components/heading.svelte';

	$: heading = { titel: 'Informatie' };
</script>

<Heading {heading} />

<div class="content-container-top">
	<section class="topLeft">
		<h3><span>Vervoerregio Amsterdam.</span> HvA</h3>
		<br />
		<p>
			Wij hebben samen met studenten van de Hogeschool van Amsterdam een checklist ontwikkeld waarin
			op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en welke stappen u kunt nemen om
			uw website en app toegankelijk te maken.
		</p>
	</section>

	<section class="topRight">
		<h3>is uw website al toegankelijk?</h3>
		<br />
		<p>
			Dat moet al of moet binnen 2 jaar! Voor overheden is dit al verplicht. En vanaf 2025 mo et
			iedere nieuwe website en app digitaal toegankelijk zijn.
		</p>
	</section>
</div>

<div class="content-container-bot">
	<section class="botLeft">
		<h3>Wat kunt u doen om uw website toegankelijk te maken?</h3>
		<br />
		<p>
			De Vervoerregio Amsterdam heeft samen met studenten van de Hogeschool van Amsterdam een
			checklist ontwikkeld waarin op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en
			welke stappen u kunt nemen om uw website en app toegankelijk te maken.
		</p>
	</section>

	<section class="botRight">
		<h3>Wat is de wettelijke achtergrond?</h3>
		<br />
		<p>
			In Nederland zijn er ca. 2 miljoen mensen met een beperking. Als deze mensen uw website of app
			niet kunnen gebruiken, dan zorgt dat dat deze mensen worden uitgesloten van de samenleving.
			Medio 2025 wordt om die reden door.
			<br /><br />
			De Europese Unie de European Accessibility Act (EAA) of Europese Toegankelijkheidswet ingevoerd.
			De wet zorgt ervoor dat digitale barrières worden verwijderd voor mensen met een beperking. De
			eisen zijn gebaseerd op de Web Content Accessibility Guidelines (WCAG) van het World Wide Web Consortium
		</p>
	</section>
</div>

<style>
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

	.content-container-top,
	.content-container-bot {
		display: flex;
		flex-direction: row;
	}

	.topLeft,
	.topRight,
	.botLeft,
	.botRight {
		padding: 2em;
		width: 50%;
		background-color: var(--c-container);
		/* border-top: 12px solid var(--c-pink); */
		margin: 0.75em;
		border-radius: 0.5em;
	}

	span {
		color: var(--c-pink);
	}

	@media only screen and (max-width: 1000px) {
		.content-container-top,
		.content-container-bot {
			flex-direction: column;
		}

		.topLeft,
		.topRight,
		.botLeft,
		.botRight {
			width: 90%;
		}
	}
</style>
