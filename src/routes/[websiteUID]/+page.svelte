<script>
	import Heading from '$lib/components/heading.svelte';
	export let data;

	let heading = {
		titel: data.websitesData.website.titel,
		homepage: data.websitesData.website.homepage
	};
</script>

<Heading {heading} />
<pre>
    {JSON.stringify(data.websitesData, null, 2)}
</pre>
