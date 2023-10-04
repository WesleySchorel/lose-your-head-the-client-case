import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import getQueryPartner from '$lib/queries/partner';
import getQueryWebsite from '$lib/queries/website';

export async function load({ params }) {
	let { websiteUID } = params
	const queryPartner = getQueryPartner(gql);
	const queryWebsite = getQueryWebsite(gql, websiteUID);

	// const partnersData = await hygraph({
	// 	query: queryPartner,
	// 	fetch: fetch,
	// 	endpoint:
	// 		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	// });
    // return await hygraph.request(queryPartner)

	// const websitesData = await hygraph({
	// 	query: queryWebsite,
	// 	fetch: fetch,
	// 	endpoint:
	// 		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	// });

    // return await hygraph.request(queryWebsite)


	return {
		partnersData: hygraph.request(queryPartner),
		websitesData: hygraph.request(queryWebsite)
	};
}
