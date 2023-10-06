<script>
	import Header from '$lib/components/header.svelte';
	import '../global.css';

	import { page } from '$app/stores';
	export let data;
	$: params = $page.params;

	let partners = data.partnersData;
	$: websites = data.websitesData.website;

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

<Header {params} {partners} {websites} />
<main>
	<slot />
</main>
