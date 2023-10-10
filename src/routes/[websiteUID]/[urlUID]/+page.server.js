import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import getQueryUrl from '$lib/queries/url';
import getQueryPrincipes from '$lib/queries/principes';

export const load = async ({ params }) => {
	const { websiteUID } = params;
	const { urlUID } = params;
	const queryUrl = getQueryUrl(gql, urlUID);
	const queryPrincipes = getQueryPrincipes(gql)
	const urlData = await hygraph.request(queryUrl);
	const principesData = await hygraph.request(queryPrincipes);

	if (urlData.url.website.slug === websiteUID) return {
		principesData,
		urlData,
	}; 
	throw error(404, {
		message: 'Not found'
	});
};
