import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import getQueryPartner from '$lib/queries/partner';
import getQueryWebsite from '$lib/queries/website';

export async function load({ params }) {
	let { websiteUID } = params;
	const queryPartner = getQueryPartner(gql);
	const queryWebsite = getQueryWebsite(gql, websiteUID);

	const partnersData = hygraph.request(queryPartner);
	const websitesData = websiteUID ? hygraph.request(queryWebsite) : null;

	return {
		partnersData: partnersData,
		websitesData: websitesData
	};
}
