export default function getQueryPartner(gql, websiteSlug, urlSlug, firstCheckId, succescriteriumId) {
	return gql`
		mutation addCheck {
			updateWebsite(
				where: { slug: "${websiteSlug}" }
				data: {
					urls: {
						update: {
							where: { slug: "${urlSlug}" }
							data: {
								checks: {
									upsert: {
										where: { id: "${firstCheckId}" }
										data: {
											create: { succescriteria: { connect: { id: "${succescriteriumId}" } } }
											update: {
												succescriteria: { connect: { where: { id: "${succescriteriumId}" } } }
											}
										}
									}
								}
							}
						}
					}
				}
			) {
				id
			}
		}
	`;
}
