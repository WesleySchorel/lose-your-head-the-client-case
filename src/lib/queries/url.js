export default function getQueryUrl(gql, slug) {
	return gql`
  query Url {
    url(where: {slug: "${slug}"}) {
      id
      url
      slug
      website {
        slug
      }
    }
  }
  `;
}
