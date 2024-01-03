import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { CardPosts } from '@/components/Cards/Card'
import { GetAllPostsTypes } from '@/types/Iposts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Categoria | Blog Dev',
}

const GET_POSTS_BY_CATEGORY = async (): Promise<GetAllPostsTypes> => {
  const query = `
    query GetAllPosts {
      posts {
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
      }
    }
  `

  return fetchHygraphQuery(query)
}

export default async function Category({
  params,
}: {
  params: { tag: string }
}) {
  const { posts } = await GET_POSTS_BY_CATEGORY()

  // Filtrar os posts pela tag fornecida nos parâmetros
  const filteredPosts = posts.filter((post) => post.tag.tagName === params.tag)

  return (
    <div className="flex flex-col items-center justify-center py-6 gap-4">
      <h1 className="text-3xl font-bold text-slate-900">{params.tag}</h1>
      {filteredPosts.length === 0 ? (
        <div className="w-full h-screen flex items-start justify-center mt-10">
          <h4 className="text-lg text-slate-900 font-bold">
            Nenhum post foi encontrado para essa categoria !
          </h4>
        </div>
      ) : (
        <ul className="flex items-center justify-center flex-wrap gap-4">
          {filteredPosts.map((post) => (
            <CardPosts
              key={post.id}
              author={post.author}
              coverImage={post.coverImage}
              title={post.title}
              tag={post.tag.tagName}
              slug={post.slug}
              createdAd={post.createdAt}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
