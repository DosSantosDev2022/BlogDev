import { fetchHygraphQuery } from '../fetchHygraph'
import { DetailsPostsType } from '@/types/Iposts'

export const SEARCH_DETAILS_POST = async (
  slug: string,
  tagName?: string,
): Promise<DetailsPostsType> => {
  const query = `
    query SEARCH_DETAILS_POST($slug: String!, tagName:String) {
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
      }
      posts(where: {tag: {tagName: $tagName}, NOT: {slug: $slug}}) {
        id
        title
        slug
        author {
          name
          photo {
            url
          }
        }
        coverImage {
          url
        }
        tag {
          tagName
        }
        createdAt
      }
    }
   `
  const variables = { slug, tagName }
  return fetchHygraphQuery(query, variables)
}
