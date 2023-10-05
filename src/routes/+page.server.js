import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

import getQueryPartner from '$lib/queries/partner'

export async function load() {
    let query = getQueryPartner(gql)
    
    return await hygraph.request(query)
}