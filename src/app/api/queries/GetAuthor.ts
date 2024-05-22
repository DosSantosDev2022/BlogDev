import { author } from '@/types/Iauthors'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_AUTHOR = async (): Promise<author> => {
  const query = `
    query MyQuery {
      author(where: {id: "clpsxoo3o0ari0bkl1pxgn4mu"}) {
        name
        id
        photo {
          url
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}
