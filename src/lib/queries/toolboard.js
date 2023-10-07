export default function getQueryToolboard(gql, slugUrl, principeSlug){
    return gql`
    query Toolboard {
        url(where: {slug: "${slugUrl}"}) {
          id
          url
          slug
        }
        principe(where: {slug: "${principeSlug}"}) {
          titel
          richtlijnen {
            titel
            succescriteria {
              titel
              index
            }
            index
            slug
          }
          checklistItems {
            check
          }
          index
        }
        principes {
          titel
          id
          checklistItems {
            check
          }
          index
          slug
        }
      }
      `
}