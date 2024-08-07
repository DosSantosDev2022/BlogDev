import { RelatedPostsType } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const SEARCH_RELATED_POSTS = async (
  tagName: string,
  slug: string,
): Promise<RelatedPostsType> => {
  const query = `
    query SEARCH_RELATED_POSTS($tagName: String!, $slug: String!) {
      posts(where: { tag: { tagName: $tagName }, NOT: { slug: $slug } }, first: 5) {
        id
        slug
        title
        author {
          name
          photo {
            url
          }
        }
        coverImage {
          url
        }
        createdAt
      }
    }
  `
  const variables = { tagName, slug }
  return fetchHygraphQuery(query, variables)
}
