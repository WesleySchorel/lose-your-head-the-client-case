<script>
	import Header from '$lib/components/header.svelte';
	import global from '../global.css'


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

<Header />
<main>
	<slot />
</main>
