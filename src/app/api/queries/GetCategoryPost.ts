import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_POSTS_BY_CATEGORY = async (): Promise<PostsTypes> => {
  const query = `
  query GET_POSTS_BY_CATEGORY {
    posts {
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
        coverTag {
          url
        }
      }
    }
  }
  `
  return fetchHygraphQuery(query)
}
