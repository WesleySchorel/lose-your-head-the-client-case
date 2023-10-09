import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import getQueryUrl from '$lib/queries/url';
import getQueryToolboard from '$lib/queries/toolboard';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { websiteUID } = params;
	const { urlUID } = params;
	const {principeUID} = params;
	const slugUrl = urlUID;
	const principeSlug = principeUID;
	const queryUrl = getQueryUrl(gql, urlUID);
	const queryToolboard = getQueryToolboard(gql, slugUrl, principeSlug)
	const urlData = await hygraph.request(queryUrl);
	const toolboardData = await hygraph.request(queryToolboard);
	
	if (urlData.url.website.slug === websiteUID) {
		// Your existing condition
		if (toolboardData.principe === null) {
			throw error(404, {
				message: 'Principe bestaat niet',
			  });
		}	
		return {
		  toolboardData,
		  urlData,
		};
	  }
	  throw error(404, {
		message: 'Not found',
	  });
	};