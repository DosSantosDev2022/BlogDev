import type { PostsGlobalTypes } from '@/@types/Iposts'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

export const GET_POSTS_BY_SEARCH = async (
	term: string,
	page: number,
	pageSize: number,
): Promise<PostsGlobalTypes> => {
	const query = `
    query SearchPosts($term: String!, $first: Int, $skip: Int) {
    posts(where: {_search: $term}, first: $first, skip: $skip) {
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
    postsConnection(where: {_search: $term}) {
      aggregate {
        count
      }
    }
  }
`
	const skip = (page - 1) * pageSize
	const variables = { term, first: pageSize, skip }
	const { posts, postsConnection } =
		await fetchHygraphQuery<PostsGlobalTypes>(query, variables, {cache:'no-cache'})

	return { posts, postsConnection }
}
