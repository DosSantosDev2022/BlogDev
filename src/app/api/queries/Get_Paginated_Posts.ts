import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_PAGINATED_POSTS = async (
  page: number,
  pageSize: number,
): Promise<PostsTypes> => {
  const query = `
    query GET_PAGINATED_POSTS($first: Int, $skip: Int){
      posts(first: $first, skip: $skip){
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
        }
        destaque
      }
      postsConnection {
        aggregate {
          count
        }
      }
    }

  `

  const skip = (page - 1) * pageSize
  const variables = { first: pageSize, skip }
  const { posts, postsConnection } = await fetchHygraphQuery<PostsTypes>(
    query,
    variables,
  )

  return { posts, postsConnection }
}
