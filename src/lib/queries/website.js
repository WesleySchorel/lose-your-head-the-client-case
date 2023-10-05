export default function getQueryWebsite(gql, slug){
    return gql`
    query Website {
        website(where: {slug: "${slug}"}) {
          titel
          urls {
            url
          }
        }
      }`
}