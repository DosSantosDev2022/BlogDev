import { Metadata } from 'next'
import { GET_BY_CATEGORYS_POSTS } from '@/app/api/queries/Get_By_Categorys_Posts'
import Image from 'next/image'
import {
  AdBanner,
  Author,
  CardMain,
  Pagination,
  TagsPost,
} from '@/components/index'

interface PostsByCategoryProps {
  params: {
    tagName: string
  }
  searchParams: {
    page?: number
    first?: number
    total?: number
  }
}

export async function generateMetadata({
  params,
}: {
  params?: { tagName?: string }
}): Promise<Metadata> {
  const category = params?.tagName
  const title = `Resultado da busca para "${category}" | Blog Dev`
  const description = `Veja os resultados da busca para "${category}" no Blog Dev. Encontre artigos, tutoriais e mais conteúdo relevante para desenvolvedores.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://blog-dev-two.vercel.app/Categorys/query=${category}`,
      images: [
        {
          url: 'blogdev.png',
          width: 800,
          height: 600,
          alt: 'Blog Dev',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@BlogDev',
      title,
      description,
      images: '/blogdev.png',
    },
  }
}

export default async function PostsByCategory({
  params,
  searchParams,
}: PostsByCategoryProps) {
  const tagName = params?.tagName || ''
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 1
  const { posts, postsConnection } = await GET_BY_CATEGORYS_POSTS(
    tagName,
    page,
    first,
  )
  const categoryCoverImage = posts.find((post) => post.tag.tagName === tagName)
  const totalCount = postsConnection.aggregate.count

  return (
    <>
      <div
        className="w-full absolute h-96 opacity-90 -z-30 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${categoryCoverImage?.tag.backgroundTag.url || ''})`,
        }}
      />
      <main className="grid relative lg:grid-cols-12 gap-4 items-start justify-center px-2 py-3 lg:px-16 md:px-10">
        <div className="flex mt-12 flex-col items-center justify-center lg:col-span-7 gap-5">
          <div className="flex flex-col items-start w-full">
            <span className="text-mycolor-100 font-light uppercase">
              Categoria
            </span>
            <h4 className="text-mycolor-50 font-bold text-5xl">
              {categoryCoverImage?.tag.tagName}
            </h4>
          </div>
          <div className="relative w-full lg:h-[380px] h-[220px] top-20 lg:top-0 p-2  gap-3 rounded-md">
            {categoryCoverImage?.tag.coverTag ? (
              <Image
                fill
                className="object-cover rounded-lg"
                src={`${categoryCoverImage?.tag.coverTag?.url}`}
                alt={categoryCoverImage?.title || ''}
              />
            ) : null}
          </div>
          <div className="flex flex-wrap justify-start gap-6 top-20 mb-32 lg:mb-10 relative lg:static px-2 py-3">
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            {posts.length === 0 ? (
              <div className="flex items-start justify-center w-full p-2 h-screen">
                <h1 className="text-4xl font-bold text-blumine-900">
                  Nenhuma categoria foi encontrada.
                </h1>
              </div>
            ) : (
              posts.map((post) => (
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
                      <div className="flex flex-col gap-1">
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
              ))
            )}
          </div>
          <div className=" w-full flex justify-between px-2 py-3">
            <Pagination
              path={`/Categorys/${tagName}?page=`}
              page={page}
              limit={first}
              total={totalCount}
            />
          </div>
        </div>
      </main>
    </>
  )
}
