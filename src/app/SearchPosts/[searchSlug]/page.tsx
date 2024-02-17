import { PaginationPosts } from '@/components/globals/paginationPosts'

import { CardAllPosts } from '@/components/Cards/CardAllPosts'
import { GET_POSTS_BY_SEARCH } from '@/GraphQl/querys'
import { Metadata } from 'next'

interface SearchPostResultProps {
  params: {
    searchSlug: string
  }
}

export async function generateMetadata({
  params,
}: SearchPostResultProps): Promise<Metadata> {
  await GET_POSTS_BY_SEARCH(params.searchSlug)
  return {
    title: `Resultado da busca para  ${params.searchSlug}`,
  }
}

export default async function SearchPostsResult({
  params,
}: SearchPostResultProps) {
  const { posts } = await GET_POSTS_BY_SEARCH(params.searchSlug)

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 container mx-auto">
      <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
          <h2 className="text-4xl font-semibold ">
            {`Resultado da busca para  ${params.searchSlug}`}
          </h2>
        </div>

        <div className="border  w-full p-2 ">
          {posts?.length === 0 ? (
            <div className="w-full h-screen text-center">
              <h1 className="font-bold text-3xl mt-3">
                Nenhum post encontrado !
              </h1>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-start gap-6 p-2">
                {posts.map((post) => (
                  <CardAllPosts
                    description={post.description}
                    key={post.id}
                    author={post.author}
                    coverImage={post.coverImage}
                    title={post.title}
                    tag={post.tag.tagName}
                    slug={post.slug}
                    createdAd={post.createdAt}
                  />
                ))}
              </div>
              <PaginationPosts />
            </>
          )}
        </div>
      </div>
      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
    </main>
  )
}
