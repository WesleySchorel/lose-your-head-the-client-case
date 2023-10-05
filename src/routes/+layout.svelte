<script>
	import Header from '$lib/components/header.svelte';

	import { page } from '$app/stores';
	export let data;
	let params = $page.params;

	let partners = data.partnersData;
	let websites = data.websitesData ? data.websitesData.website : null;

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="../src/global.css" />
</svelte:head>

<Header {params} {partners} {websites} />
<main>
	<slot />
</main>
