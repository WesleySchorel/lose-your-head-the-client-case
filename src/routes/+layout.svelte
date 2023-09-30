<script>
	import Header from '$lib/components/header.svelte';
	import global from '../global.css';

	import { page } from '$app/stores';
	export let data;
	let params = $page.params;

	let partners = data.partnersData;
	let websites = data.websitesData;
</script>

<main>
	<Header {params} {partners} {websites}/>
	<slot />
</main>
