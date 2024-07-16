import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_BY_CATEGORYS_POSTS = async (
  category: string,
  page: number,
  pageSize: number,
): Promise<PostsTypes> => {
  const query = `
   query GET_BY_CATEGORYS_POSTS($category:String!){
      posts(where: {tag: {tagName: $category}}) {
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
  }
`

  const skip = (page - 1) * pageSize
  const variables = { category, first: pageSize, skip }
  const { posts, postsConnection } = await fetchHygraphQuery<PostsTypes>(
    query,
    variables,
  )

  return { posts, postsConnection }
}
