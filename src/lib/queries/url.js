export default function getQueryUrl(slug) {
	return `
  query Url {
    url(where: {slug: "${slug}"}) {
      id
      url
      slug
    }
  }
  `;
}
