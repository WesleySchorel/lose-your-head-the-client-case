export default function getQueryPartner(gql){
    return gql`
    query Program {
        websites {
            id
            titel
            slug
            homepage
        }
    }`
}