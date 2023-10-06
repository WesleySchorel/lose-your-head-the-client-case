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
		<li>
			<div class="principe">
				<h3><span>Waarneembaar. </span> Principe 1</h3>
				<p>
					Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers
					op voor hen waarneembare wijze.
				</p>
				<div class="progress-container">
					<progress id="progress-partner" max="25" value="8" />
					<label for="progress-partner">8/25</label>
				</div>
			</div>
		</li>
		<li>
			<div class="principe">
				<h3><span>Waarneembaar. </span> Principe 2</h3>
				<p>
					Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers
					op voor hen waarneembare wijze.
				</p>
				<div class="progress-container">
					<progress id="progress-partner" max="25" value="23" />
					<label for="progress-partner">23/25</label>
				</div>
			</div>
		</li>
		<li>
			<div class="principe">
				<h3><span>Waarneembaar. </span> Principe 3</h3>
				<p>
					Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers
					op voor hen waarneembare wijze.
				</p>
				<div class="progress-container">
					<progress id="progress-partner" max="25" value="18" />
					<label for="progress-partner">18/25</label>
				</div>
			</div>
		</li>
		<li>
			<div class="principe">
				<h3><span>Waarneembaar. </span> Principe 4</h3>
				<p>
					Informatie en componenten van de gebruikersinterface moeten toonbaar zijn aan gebruikers
					op voor hen waarneembare wijze.
				</p>
				<div class="progress-container">
					<progress id="progress-partner" max="25" value="3" />
					<label for="progress-partner">3/25</label>
				</div>
			</div>
		</li>
	</ul>
</section>

<style>
	h2 {
		font-size: 1.5em;
		padding-left: 1em;
		margin-top: 1rem;
	}

    /* VOORTGANG */

	.container-voortgang-1 {
		background-color: var(--c-container);
		padding: 1em 1em;
		margin: 0.75em;
		border-radius: 0.5em;
	}

	.container-voortgang-2 {
		display: flex;
		flex-wrap: wrap;
		margin: 0.75em;
		border-radius: 0.5em;
	}

    .container-voortgang-2 p {
		font-size: 1.25em;
		padding-left: 0.25em;
		max-width: 16rem;
	}

	.container-voortgang-2 ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75em;
		margin: 0.75em;
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
		font-size: 1.25em;
		padding-left: 0.25em;
	}

	.tip {
		color: var(--c-orange);
		font-size: 1.25em;
		padding-left: 0.25em;
	}



    /* PRINCIPES */

	.container-principes {
		display: flex;
		flex-wrap: wrap;
		border-radius: 0.5em;
	}

    .container-principes  ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
	}

	.container-principes  li {
		border-radius: 0.5em;
		max-width: 50%;
	}

	span {
		color: var(--c-pink);
	}

	.principe p {
		font-size: 1.25em;
		margin-bottom: 2rem;
        width: 80%;
	}

	.principe {
		padding: 2.5em;
		background-color: var(--c-container);
		/* border-top: 12px solid var(--c-pink); */
		margin: 0.75em;
		border-radius: 0.5em;
	}

	.progress-container {
		display: flex;
		justify-content: space-between;
		gap: 1em;
		margin-top: 0.25em;
	}

	progress {
		width: 80%;
	}
</style>
