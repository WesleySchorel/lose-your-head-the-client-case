<script>
	import Heading from '$lib/components/heading.svelte';
    import walking from '$lib/assets/walking_together.svg';
    import knowledge from '$lib/assets/sharing_knowledge.svg'

	$: heading = { titel: 'Informatie' };
</script>

<Heading {heading} />

<div class="content-container">
    <section class="top-container">
        <section class="text-container">
            <h3><span>Vervoerregio Amsterdam.</span> HvA</h3><br>
            <p>
                Wij hebben samen met studenten van de Hogeschool van Amsterdam een checklist ontwikkeld waarin op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en welke stappen u kunt nemen om uw website en app toegankelijk te maken.
            </p>
        </section>
        <section class="image-container">
            <img src={walking} class="text-image" alt="darkmode icon" />
        </section>
    </section>

    <section class="left-container">
        <h3>is uw website al toegankelijk?</h3><br>
        <p>
            Binnen 2025 moet dit al! Voor overheden is dit al verplicht. En vanaf 2025 moet iedere nieuwe website en app digitaal toegankelijk zijn.
            Dit moet volgens het EAA (European Accessibility Act). Dit zou er mee moeten helpen dat iedereen elke website zou kunnen bezoeken, niet uitmakende dat iemand een beperking heeft
        </p>
    </section>

    <section class="right-container">
        <h3>Wat kunt u doen om uw website toegankelijk te maken?</h3><br>
        <p>
            De Vervoerregio Amsterdam heeft samen met studenten van de Hogeschool van Amsterdam een checklist ontwikkeld
            waarin op eenvoudige wijze wordt uitgelegd wat hierbij komt kijken en welke stappen u kunt nemen om uw website
            en app toegankelijk te maken.
        </p>
    </section>

    <section class="bot-container">
        <section class="text-container">
            <h3>Wat is de wettelijke achtergrond?</h3><br>
        <p>
            In Nederland zijn er ca. 2 miljoen mensen met een beperking. Als deze mensen uw website of app niet kunnen
            gebruiken, dan zorgt dat dat deze mensen worden uitgesloten van de samenleving. Medio 2025 wordt om die reden door.
            <br><br>
            De Europese Unie de European Accessibility Act (EAA) of Europese Toegankelijkheidswet ingevoerd. De wet zorgt
            ervoor dat digitale barrières worden verwijderd voor mensen met een beperking. De eisen zijn gebaseerd op de Web
            Content Accessibility Guidelines (WCAG) van het World Wide Web Consortium
        </p>
        </section>
        <section class="image-container">
            <img src={knowledge} class="text-image" alt="Sharing Knowledge" />
        </section>
    </section>
</div>

<style>

.top-container {
    grid-area: top;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.left-container {
    grid-area: left;
}

.right-container {
    grid-area: right;
}

.bot-container {
    grid-area: bot;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "top top"
    "left right"
    "bot bot";
    margin: 1em 1em;
    gap: 1em;
}

.text-image {
    height: 13em;
}

.top-container, .left-container, .right-container, .bot-container {
    padding: 2em;
    background-color: var(--c-container);
	/* border-top: 12px solid var(--c-pink); */
	border-radius: 0.5em;
}

span {
    color: var(--c-pink);
}

/* .text-container {
    max-width: 50em;
} */

.image-container {
    margin-left: auto;
    align-self: center;
}

@media only screen and (max-width: 800px) {
  .content-container{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "top"
    "left"
    "right"
    "bot";
  }

  .text-image {
    height: 10em;
    }
}

</style>