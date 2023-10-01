export default function getQueryPartner(){
    return `
    query Program {
        websites {
            id
            titel
            slug
        }
    }`
}