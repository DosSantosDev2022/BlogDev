import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_BY_CATEGORYS_POSTS = async (
  category: string,
  page: number,
  first: number,
): Promise<PostsTypes> => {
  const query = `
    query GET_BY_CATEGORYS_POSTS($category: String!, $first: Int, $skip: Int) {
      posts(where: { tag: { tagName: $category } }, first: $first, skip: $skip) {
        id
        slug
        subtitle
        description
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
          backgroundTag {
            url
          }
        }
      }
      postsConnection(where: { tag: { tagName: $category } }) {
        aggregate {
          count
        }
      }
    }
  `

  const skip = (page - 1) * first
  const variables = { category, first, skip }
  const { posts, postsConnection } = await fetchHygraphQuery<PostsTypes>(
    query,
    variables,
  )

  return { posts, postsConnection }
}
