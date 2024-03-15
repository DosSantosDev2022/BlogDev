/* import { Pagination } from '@/components/globals/Pagination/Pagination' */
import { CardAllPosts } from '@/components/globals/Cards/CardAllPosts'
import { GET_POSTS_BY_SEARCH } from '@/app/api/queries/GetSearchPosts'
import { CardAllPostSkeleton } from '@/components/Loading/CardAllPostSkeleton'

export default async function SearchPostsResult({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''

  const currentPage = Number(searchParams?.page) || 1

  const { posts } = await GET_POSTS_BY_SEARCH(query)

  const startIndex = (currentPage - 1) * 10
  const post = posts.slice(startIndex, startIndex + 10)

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 container mx-auto">
      <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
          <h2 className="text-4xl font-semibold ">
            {`Resultado da busca para  ${searchParams?.query}`}
          </h2>
        </div>

        <div className="flex flex-wrap justify-start gap-6 p-2">
          {post.length === 0 ? (
            <>
              <div className="flex flex-wrap justify-start gap-6 p-2">
                <CardAllPostSkeleton />
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        {/* <Pagination /> */}
      </div>
      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
    </main>
  )
}
