export default function getQueryPartner(gql, websiteSlug, urlSlug) {
	return gql`
		query checkedChecksOfUrl {
			website(where: { slug: "${websiteSlug}" }) {
				id
				slug
				urls(where: { slug: "${urlSlug}" }) {
					slug
					checks(first: 1) {
						id
					}
				}
			}
		}
	`;
}
