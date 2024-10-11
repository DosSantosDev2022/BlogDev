import { fetchHygraphQuery } from '@/app/api/posts/fetchHygraph'
import { PostsGlobalTypes } from '@/types/Iposts'

type QueryFilters = {
  page?: number
  pageSize?: number
  tagName?: string
  search?: string
  slug?: string
  orderBy?: 'createdAt_ASC' | 'createdAt_DESC'
}

export const GET_POSTS = async ({
  page = 1,
  pageSize = 10,
  tagName,
  search,
  slug,
  orderBy = 'createdAt_DESC',
}: QueryFilters): Promise<PostsGlobalTypes> => {
  // Construção do objeto `where` combinando os filtros
  const where: any = {}

  // Filtra por tagName
  if (tagName) {
    where.tag = { tagName }
  }

  // Filtra por termo de pesquisa (no título ou descrição)
  if (search) {
    where.OR = [{ title_contains: search }, { description_contains: search }]
  }

  // Filtra por post específico (pelo slug)
  if (slug) {
    where.slug = slug
  }

  // Construção da query principal com os filtros e ordenação aplicados
  const query = `
    query GET_FILTERED_POSTS($first: Int, $skip: Int, $orderBy: PostOrderByInput, $where: PostWhereInput) {
      posts(first: $first, skip: $skip, orderBy: $orderBy, where: $where) {
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
          coverTag {
            url
          }
          backgroundTag {
            url
          }
        }
        content {
          raw
        }
        destaque
        likes
      }
      postsConnection(orderBy: $orderBy, where: $where) {
        aggregate {
          count
        }
      }
    }
  `

  const skip = (page - 1) * pageSize
  const variables = { first: pageSize, skip, orderBy, where }

  const { posts, postsConnection } = await fetchHygraphQuery<PostsGlobalTypes>(
    query,
    variables,
  )

  return { posts, postsConnection }
}
