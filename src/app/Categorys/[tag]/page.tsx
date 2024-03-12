import { GET_POSTS_BY_CATEGORY } from '@/app/api/queries/GetCategoryPost'
import { CardPosts } from '@/components/globals/Cards/Card'
import SmallCard from '@/components/globals/Cards/SmallCard'
import { PaginationPosts } from '@/components/globals/paginationPosts'
import { Metadata } from 'next'

type CategoryProps = {
  params: {
    tag: string
  }
}

export async function generateMetadata({
  params,
}: CategoryProps): Promise<Metadata> {
  const { posts } = await GET_POSTS_BY_CATEGORY()
  const post = posts.find((post) => post.tag.tagName === params.tag)

  return {
    title: `Categoria | ${post?.tag.tagName}`,
    description: post?.description,
  }
}

export default async function Category({ params }: CategoryProps) {
  const { posts } = await GET_POSTS_BY_CATEGORY()

  // Filtrar os posts pela tag fornecida nos parâmetros
  const filteredPosts = posts.filter((post) => post.tag.tagName === params.tag)
  const selectedCategory = posts.find((post) => post.tag.tagName === params.tag)

  const otherPosts = posts.filter((post) => post.tag.tagName === params.tag)

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 container mx-auto">
      <div className="flex flex-col items-center justify-start lg:col-span-8 gap-5 ">
        <div
          className="flex flex-col justify-end w-full lg:h-[320px] h-[220px] p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat"
          style={{
            backgroundImage: `url(${selectedCategory?.tag.coverTag?.url})`,
          }}
        ></div>
        <div className="w-full h-12 rounded-[10px] py-3   bg-primary flex items-center justify-center">
          <h3 className="text-slate-50 font">
            {`Posts da categoria ${params.tag}`}
          </h3>
        </div>
        {filteredPosts.length === 0 ? (
          <div className="w-full h-screen flex items-start justify-center mt-10">
            <h1 className="text-lg text-slate-900 font-bold">
              Nenhum post foi encontrado para essa categoria !
            </h1>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center flex-wrap gap-4 mt-12 p-2 ">
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
            </div>
            <PaginationPosts />
          </>
        )}
      </div>

      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
        <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-primary flex items-center justify-center">
          <h3 className="text-secondary font">Posts Relacionados</h3>
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
