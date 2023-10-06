<script>
    import Heading from '$lib/components/heading.svelte';
	export let data;

    $: heading = {titel: data.websitesData.website.titel, homepage: data.websitesData.website.homepage, url: data.url.slug}
</script>

<Heading {heading} />
<pre>
    {JSON.stringify(data.url, null, 2)}
</pre>
