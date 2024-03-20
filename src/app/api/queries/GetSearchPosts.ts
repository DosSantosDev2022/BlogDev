import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_POSTS_BY_SEARCH = async (
  term: string,
): Promise<PostsTypes> => {
  const query = `
  query SearchPosts($term: String!) {
    posts(where:{_search: $term}) {
      id
      slug
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
        coverTag {
          url
        }
      }
      description
    }
  }
`
  const variables = { term }
  return fetchHygraphQuery(query, variables)
}
