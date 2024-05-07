import { Metadata } from 'next'

import { Pagination } from '@/components/globals/Pagination/Pagination'

import { GET_PAGINATION_POSTS } from '../api/queries/GetPaginationPosts'
import { CardMain } from '@/components/globals/Cards/mainCard'
import { TagsPost } from '@/components/globals/Cards/tags'
import { Author } from '@/components/Authors/author'

export const metadata: Metadata = {
  title: 'Blog Dev | Todos os posts',
  description: 'Um blog para desenvolvedores',
}

interface AllPostsPageProps {
  searchParams?: { page?: number; first?: number; total: number }
}

export default async function AllPostsPage({
  searchParams,
}: AllPostsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 10

  const { posts, totalCount } = await GET_PAGINATION_POSTS(page, first)

  return (
    <main className="flex flex-col">
      <div className="container mx-auto grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
        <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5  ">
          <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
            <h2 className="text-4xl font-semibold">
              Aprenda o melhor do mundo da programação aqui no BlogDev.
            </h2>
          </div>

          <div className="  w-full p-2 ">
            <div className="flex flex-col justify-start gap-6  ">
              {posts.map((post) => (
                <CardMain.Root slug={post.slug} key={post.id}>
                  <CardMain.Image
                    title={post.title}
                    coverImage={post.coverImage.url}
                  />
                  <CardMain.Content>
                    <TagsPost tagName={post.tag.tagName} />
                    <CardMain.Title className="text-md" title={post.title} />
                    <Author.Root>
                      <Author.Avatar
                        className="w-8 h-8"
                        ImageProfile={post.author.photo.url}
                        name={post.author.name}
                      />
                      <div className="flex- flex-col gap-1">
                        <Author.Name
                          nome={post.author.name}
                          className="text-slate-900 text-xs"
                        />
                        <Author.CreateAd
                          CreateAd={post.createdAt}
                          className="text-slate-400 text-xs"
                        />
                      </div>
                    </Author.Root>
                    <CardMain.Description
                      className="text-md"
                      description={post.description}
                    />
                  </CardMain.Content>
                </CardMain.Root>
              ))}
            </div>

            <Pagination page={page} limit={first} total={totalCount} />
          </div>
        </div>
        <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
      </div>
    </main>
  )
}
