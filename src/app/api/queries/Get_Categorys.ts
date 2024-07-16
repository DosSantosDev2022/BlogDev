import { fetchHygraphQuery } from '../fetchHygraph'

interface CATEGORYS {
  tags: {
    tagName: string
    posts: {
      id: string
      title: string
    }[]
  }[]
}

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
