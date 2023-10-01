export default function getQueryWebsite(slug) {
	return `query Website {
        website(where: {slug: "${slug}"}) {
          titel
          urls {
            id
            url
            slug
          }
        }
      }`;
}
