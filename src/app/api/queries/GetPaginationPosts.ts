import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_PAGINATION_POSTS = async (
  page: number,
  first: number,
): Promise<PostsTypes> => {
  const query = `
  query GET_PAGINATION_POSTS($page: Int!, $first : Int!){
    posts(page: $page, first: $first){
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
      tag {
        tagName
      }
      destaque
    }
  }
`
  const variables = { first, page }
  return fetchHygraphQuery(query, variables)
}
