import { GetAllPostsTypes } from '@/types/Iposts'
import { fetchHygraphQuery } from '../api/fetchHygraph'

import { PaginationPosts } from '@/components/globals/paginationPosts'
import { NavFilter } from './navFilter'
import { CardAllPosts } from '@/components/Cards/CardAllPosts'

const GetPageData = async (): Promise<GetAllPostsTypes> => {
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
      destaque
      description
    }
  }
   
   `
  return fetchHygraphQuery(query)
}

export default async function AllPosts() {
  const { posts } = await GetPageData()

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
      <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
          <h2 className="text-4xl font-semibold">
            Describe what your blog is about
          </h2>
        </div>
        <NavFilter />
        <div className="border  w-full p-2 ">
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
        </div>
      </div>
      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
    </main>
  )
}