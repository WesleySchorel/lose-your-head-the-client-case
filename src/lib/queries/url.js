export default function getQueryUrl(id) {
	return `
    query Url {
        url(where: {id: "${id}"}) {
          id
          url
        }
    }
      `;
}
