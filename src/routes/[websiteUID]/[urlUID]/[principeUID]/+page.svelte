<script>
	import Heading from '$lib/components/heading.svelte';
	export let data;

    $: heading = {titel: data.websitesData.website.titel, homepage: data.urlData.url.url, url: data.urlData.url.slug}
	const toolboardData = data.toolboardData;
</script>

<Heading {heading} />

<pre>
	{JSON.stringify(data, null, 2)}
</pre>