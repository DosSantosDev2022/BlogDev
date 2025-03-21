import type { DetailsPostsType } from '@/@types/Iposts'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

export const SEARCH_DETAILS_POST = async (
	slug: string,
): Promise<DetailsPostsType> => {
	const query = `
    query SEARCH_DETAILS_POST($slug: String!) {
      post(where: {slug: $slug}) {
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
        content {
          raw
        }
        tag {
          tagName
        }
      }
    }
   `
	const variables = { slug }
	return fetchHygraphQuery(query, variables, {
		cache: 'force-cache',
		revalidate: 60 * 60 * 24,
	})
}
