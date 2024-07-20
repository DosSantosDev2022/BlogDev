import { fetchHygraphQuery } from '../fetchHygraph'
import { DetailsPostsType } from '@/types/Iposts'

export const SEARCH_DETAILS_POST = async (
  slug: string,
): Promise<DetailsPostsType> => {
  const query = `
    query SEARCH_DETAILS_POST($slug: String!) {
      post(where: {slug: $slug}) {
        id
        slug
        subtitle
        title
        createdAt
        coverImage {
          url
        }
        author {
          name
          photo {
            url
          }
        }
        content {
          raw
        }
        tag {
          tagName
        }
        likes
      }
    }
   `
  const variables = { slug }
  return fetchHygraphQuery(query, variables)
}
