import { PostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_ALL_POST = async (): Promise<PostsTypes> => {
  const query = `
  query GET_ALL_POST{
    posts(first : 9999){
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
      }
      destaque
    }
  }
`

  return fetchHygraphQuery(query)
}
