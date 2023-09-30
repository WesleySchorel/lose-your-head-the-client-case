export default function getQueryWebsite(id) {
	return `query Website {
        website(where: {id: "${id}"}) {
          titel
          urls {
            id
            url
          }
        }
      }`;
}
