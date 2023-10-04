import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

import getQueryUrl from '$lib/queries/url';

export const load = async ({ params }) => {
	const { urlUID } = params;
	const queryUrl = getQueryUrl(gql, urlUID);

	

	return await hygraph.request(queryUrl)
};
