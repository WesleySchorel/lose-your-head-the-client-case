import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

import getQueryWebsite from '$lib/queries/website'

export async function load({params}) {
    const { websiteUID } = params;
    let query = getQueryWebsite(gql, websiteUID)
    
    return await hygraph.request(query).websitesData
}
