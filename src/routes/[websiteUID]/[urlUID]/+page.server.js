import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import getQueryUrl from '$lib/queries/url';

export const load = async ({ params }) => {
	const { websiteUID } = params;
	const { urlUID } = params;
	const queryUrl = getQueryUrl(gql, urlUID);
	const urlData = await hygraph.request(queryUrl);

	if (urlData.url.website.slug === websiteUID) return urlData;
	throw error(404, {
		message: 'Not found'
	});
};
