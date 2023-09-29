<script>
	import Header from '$lib/components/header.svelte';
	import global from '../global.css';

	import { page } from '$app/stores';
	export let data;
	let params = $page.params;

	let partners = data;
</script>

<main>
	<Header {params} {partners} />
	<slot />
</main>
