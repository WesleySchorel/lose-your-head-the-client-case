import { client } from '$lib/utils/client';
import getQueryUrl from '$lib/queries/url';

export const load = async ({ params }) => {
	const { urlUID } = params;
	const queryUrl = getQueryUrl(urlUID);
console.log(urlUID)
	const dataUrl = await client({
		query: queryUrl,
		variables: { id: urlUID },
		fetch: fetch,
		endpoint:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	});

	return { data: dataUrl };
};
