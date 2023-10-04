<script>
	import Header from '$lib/components/header.svelte';
	import global from '../global.css';

	import { page } from '$app/stores';
	export let data;
	let params = $page.params;

	let partners = data.partnersData;
	let websites = data.websitesData;


    import { onNavigate } from '$app/navigation'

    onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
        document.startViewTransition(async () => {
            resolve()
            await navigation.complete
        })
    })
	})

</script>


<Header {params} {partners} {websites}/>
<main>
	<slot />
</main>
