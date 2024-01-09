import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { CardPosts } from '@/components/Cards/Card'
import SmallCard from '@/components/Cards/SmallCard'
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
        coverTag {
          url
        }
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
  const selectedCategory = posts.find((post) => post.tag.tagName === params.tag)

  const otherPosts = posts.filter((post) => post.tag.tagName === params.tag)

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
      <div className="flex flex-col items-center justify-start lg:col-span-8 gap-5 ">
        <div
          className="flex flex-col justify-end w-full h-[320px] p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat"
          style={{
            backgroundImage: `url(${selectedCategory?.tag.coverTag?.url})`,
          }}
        ></div>

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
      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
        <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-slate-900 flex items-center justify-center">
          <h3 className="text-slate-50 font">Posts Relacionados</h3>
        </div>
        {otherPosts.map((post) => (
          <SmallCard
            slug={post.slug}
            key={post.id}
            author={post.author}
            coverImage={post.coverImage}
            title={post.title}
            createdAd={post.createdAt}
          />
        ))}
      </div>
    </main>
  )
}
