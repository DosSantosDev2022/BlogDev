import { NavFilter } from './navFilter'
import { Metadata } from 'next'
import { GET_ALL_POST } from '@/GraphQl/querys'
import { CardAllPosts } from '@/components/Cards/CardAllPosts'
import { PaginationPosts } from '@/components/globals/paginationPosts'

export const metadata: Metadata = {
  title: 'Blog Dev | Todos os posts',
  description: 'Um blog para desenvolvedores',
}

const backgroundImage = {
  background: 'url("/bg-programaçao.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export default async function AllPostsPage() {
  const { posts } = await GET_ALL_POST()
  const post = posts
  return (
    <main className="flex flex-col">
      <div className="w-full h-screen relative " style={backgroundImage}></div>
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
              {post?.map((post) => (
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

            <PaginationPosts perPage="" pageIndex="" totalCount="" />
          </div>
        </div>
        <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
      </div>
    </main>
  )
}
