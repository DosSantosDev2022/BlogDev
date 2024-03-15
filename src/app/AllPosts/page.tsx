import { NavFilter } from './navFilter'
import { Metadata } from 'next'

import { CardAllPosts } from '@/components/globals/Cards/CardAllPosts'
import { Pagination } from '@/components/globals/Pagination/Pagination'

import { GET_PAGINATION_POSTS } from '../api/queries/GetPaginationPosts'

export const metadata: Metadata = {
  title: 'Blog Dev | Todos os posts',
  description: 'Um blog para desenvolvedores',
}

interface AllPostsPageProps {
  searchParams?: { page?: number; first?: number }
}

export default async function AllPostsPage({
  searchParams,
}: AllPostsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 10

  const { posts } = await GET_PAGINATION_POSTS(page, first)
  console.log(first)
  return (
    <main className="flex flex-col">
      <div className="container mx-auto grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
        <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5  ">
          <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
            <h2 className="text-4xl font-semibold">
              Aprenda o melhor do mundo da programação aqui no BlogDev.
            </h2>
          </div>
          <NavFilter />
          <div className="border  w-full p-2 ">
            <div className="flex flex-wrap justify-start gap-6 p-2">
              {posts?.map((post) => (
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

            <Pagination page={page} limit={first} total={50} />
          </div>
        </div>
        <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
      </div>
    </main>
  )
}
