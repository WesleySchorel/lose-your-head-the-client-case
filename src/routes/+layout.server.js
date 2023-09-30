import { client } from '$lib/utils/client';
import getQueryPartner from '$lib/queries/partner';
import getQueryWebsite from '$lib/queries/website';

export async function load({ params }) {
	let { websiteUID } = params
	const queryPartner = getQueryPartner();
	const queryWebsite = getQueryWebsite(websiteUID);

	const partnersData = await client({
		query: queryPartner,
		fetch: fetch,
		endpoint:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	});
	const websitesData = await client({
		query: queryWebsite,
		fetch: fetch,
		endpoint:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	});

	return {
		partnersData: partnersData.websites,
		websitesData: websitesData.website
	};
}
