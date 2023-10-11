export default function getQueryPartner(gql, websiteSlug, urlSlug, succescriteriumId) {
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
										where: { id: "cli1dqkqkzm4l0bw4qu6wzfma" }
										data: {
											create: { succescriteria: { connect: { id: "clf14drxw1ba60bw8d9w46te8" } } }
											update: {
												succescriteria: { connect: { where: { id: "clf14drxw1ba60bw8d9w46te8" } } }
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
