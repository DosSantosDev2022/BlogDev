import type { PostsGlobalTypes } from '@/@types/Iposts'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

export const GET_PAGINATED_POSTS = async (
	page: number,
	pageSize: number,
): Promise<PostsGlobalTypes> => {
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
	const { posts, postsConnection } =
		await fetchHygraphQuery<PostsGlobalTypes>(query, variables,{cache: 'no-cache'})

	return { posts, postsConnection }
}
