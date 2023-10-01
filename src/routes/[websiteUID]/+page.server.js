import { client } from '$lib/utils/client';
import getQueryWebsite from '$lib/queries/website';

export const load = async ({ params }) => {
	const { websiteUID } = params;
	const queryWebsite = getQueryWebsite(websiteUID);

	const dataWebsite = await client({
		query: queryWebsite,
		variables: { slug: websiteUID },
		fetch: fetch,
		endpoint:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	});

	return { data: dataWebsite.website };
};
