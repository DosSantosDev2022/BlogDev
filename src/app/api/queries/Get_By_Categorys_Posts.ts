import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_BY_CATEGORYS_POSTS = async (
  tagName: string,
  page: number,
  pageSize: number,
): Promise<PostsTypes> => {
  const query = `
    query GET_BY_CATEGORYS_POSTS($tagName: String!, $first: Int, $skip: Int) {
      posts(where: { tag: { tagName: $tagName } }, first: $first, skip: $skip) {
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
      postsConnection(where: { tag: { tagName: $tagName } }) {
        aggregate {
          count
        }
      }
    }
  `

  const skip = (page - 1) * pageSize
  const variables = { tagName, first: pageSize, skip }
  const { posts, postsConnection } = await fetchHygraphQuery<PostsTypes>(
    query,
    variables,
  )

  return { posts, postsConnection }
}
