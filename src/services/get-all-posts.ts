import type { PostsGlobalTypes } from '@/@types/Iposts'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import next from 'next'

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
    }
    
  }
`
 const tag = 'all-posts'
 return fetchHygraphQuery(query, {
    next: { tags: [tag] }, // Adiciona a tag
    cache: 'force-cache', // Habilita o cache
  });
}
