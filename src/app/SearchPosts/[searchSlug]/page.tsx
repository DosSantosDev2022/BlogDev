import { PaginationPosts } from '@/components/globals/paginationPosts'

import { CardAllPosts } from '@/components/Cards/CardAllPosts'
import { GET_POSTS_BY_SEARCH } from '@/GraphQl/querys'
import { Metadata } from 'next'

interface SearchPostResultProps {
  params: {
    searchSlug: string
  }
}

interface Props {
  params: {
    slug: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { posts } = await GET_POSTS_BY_SEARCH()
  const post = posts.find((post) => post.slug === params.slug)
  return {
    title: post?.slug,
  }
}

export default async function SearchPostsResult({
  params,
}: SearchPostResultProps) {
  const { posts } = await GET_POSTS_BY_SEARCH()
  const searchTerm = params.searchSlug.toLowerCase()
  const post = posts.filter((post) =>
    post.slug.toLowerCase().includes(searchTerm),
  )

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
      <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
          <h2 className="text-4xl font-semibold uppercase">
            {`Resultados para ${params.searchSlug}`}
          </h2>
        </div>

        <div className="border  w-full p-2 ">
          {post?.length === 0 ? (
            <div className="w-full h-screen text-center">
              <h1 className="font-bold text-3xl mt-3">
                Nenhum post encontrado !
              </h1>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-start gap-6 p-2">
                {post.map((post) => (
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
