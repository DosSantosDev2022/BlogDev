import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_POSTS_BY_CATEGORY = async (
  tag: string,
): Promise<PostsTypes> => {
  const query = `
  query GET_POSTS_BY_CATEGORY($tag: String) {
    posts(where: {tag : {_search: $tag}}) {
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
  const variables = { tag }

  return fetchHygraphQuery(query, variables)
}
