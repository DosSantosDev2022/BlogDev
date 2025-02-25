import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

interface POST_TYPE {
	id: string
	likes: number
}

interface GET_POSTS_LIKED_TYPE {
	posts: POST_TYPE[]
}

export const GET_POSTS_LIKED = async (
	id?: string,
): Promise<GET_POSTS_LIKED_TYPE> => {
	const query = `
    query GetPost($id: ID!) {
      posts(where: { id: $id }) {
        id
        likes
      }
    }
  `
	const variables = id ? { id } : {}
	return fetchHygraphQuery(query, variables)
}
