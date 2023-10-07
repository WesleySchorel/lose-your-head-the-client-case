export default function getQueryPrincipes(gql){
    return gql`
    query Principes {
        principes {
          beschrijving {
            text
          }
          titel
          index
          checklistItems {
            check
          }
        }
      }
      `
}