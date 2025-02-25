import type { PostsGlobalTypes } from '@/@types/Iposts'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'

export const GET_ALL_POST = async (): Promise<PostsGlobalTypes> => {
	const query = `
  query GET_ALL_POST{
    posts(first: 100){
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
      likes
    }
    
  }
`

	return fetchHygraphQuery(query)
}
