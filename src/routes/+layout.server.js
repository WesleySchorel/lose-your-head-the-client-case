import { client } from '$lib/utils/client';
import getQueryPartner from '$lib/queries/partner';

export const load = async () => {
	const queryProgram = getQueryPartner();

	const partnersData = await client({
		query: queryProgram,
		fetch: fetch,
		endpoint:
			'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbe0zp4u2fkz01uj486xdza4/master'
	});

	return {
		partnersData: partnersData.websites
	};
};
