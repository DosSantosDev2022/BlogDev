import { CATEGORYS } from '@/types/Icategorys'
import { fetchHygraphQuery } from '../fetchHygraph'

export const GET_CATEGORYS = async (): Promise<CATEGORYS> => {
  const query = `
    query Category {
      tags {
        tagName
        posts {
          id
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}
