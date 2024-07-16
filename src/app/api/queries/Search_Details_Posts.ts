import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const SEARCH_DETAILS_POST = async (): Promise<PostsTypes> => {
  const query = `
    query SearchAllPosts {
      posts(stage: PUBLISHED) {
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
    }
   `

  return fetchHygraphQuery(query)
}
