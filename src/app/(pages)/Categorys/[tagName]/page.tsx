import { Metadata } from 'next'
import Image from 'next/image'
import {
  AdBanner,
  Author,
  CardMain,
  Pagination,
  TagsPost,
} from '@/components/index'
import { GET_POSTS } from '@/utils/queries/GetPosts'

interface PostsByCategoryProps {
  params: {
    tagName: string
  }
  searchParams: {
    page?: number
    pageSize?: number
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
  const tagName = params.tagName || ''
  const page = Number(searchParams?.page) || 1
  const pageSize = Number(searchParams?.pageSize) || 10
  const { posts, postsConnection } = await GET_POSTS({
    tagName,
    page,
    pageSize,
  })
  console.log(tagName)
  if (!posts) {
    return <p>Post não encontrado</p>
  }

  const categoryCoverImage = posts.find((post) => post.tag.tagName === tagName)
  const totalCount = postsConnection.aggregate.count

  return (
    <>
      {/* Ajuste de altura para diferentes tamanhos de tela */}
      <div
        className="w-full absolute h-64 md:h-80 lg:h-96 opacity-90 -z-30 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${categoryCoverImage?.tag.backgroundTag.url || ''})`,
        }}
      />
      <main className="grid relative grid-cols-1 lg:grid-cols-12 gap-4 items-start justify-center px-4 md:px-8 lg:px-16 py-5">
        <div className="flex flex-col mt-12 items-center justify-center lg:col-span-7 gap-5">
          <div className="flex flex-col items-start w-full">
            {/* Ajuste de fontes */}
            <span className="text-mycolor-100 font-light uppercase text-sm md:text-base">
              Categoria
            </span>
            <h4 className="text-mycolor-50 font-bold text-3xl md:text-4xl lg:text-5xl">
              {categoryCoverImage?.tag.tagName}
            </h4>
          </div>
          {/* Ajuste de altura e largura da imagem */}
          <div className="relative w-full h-48 md:h-64 lg:h-[380px] top-10 lg:top-0 p-2 gap-3 rounded-md">
            {categoryCoverImage?.tag.coverTag ? (
              <Image
                fill
                className="object-cover rounded-lg"
                src={`${categoryCoverImage?.tag.coverTag?.url}`}
                alt={categoryCoverImage?.title || ''}
              />
            ) : null}
          </div>
          <div className="flex flex-wrap justify-start gap-4 top-10 lg:top-0 mb-32 lg:mb-10 relative px-2 py-3">
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            {posts.length === 0 ? (
              <div className="flex items-center justify-center w-full p-2 h-screen">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blumine-900">
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
                    <CardMain.Title
                      className="text-md md:text-lg"
                      title={post.title}
                    />
                    <Author.Root>
                      <Author.Avatar
                        className="w-6 h-6 md:w-8 md:h-8"
                        ImageProfile={post.author.photo.url}
                        name={post.author.name}
                      />
                      <div className="flex flex-col gap-1">
                        <Author.Name
                          nome={post.author.name}
                          className="text-slate-900 text-xs md:text-sm"
                        />
                        <Author.CreateAd
                          CreateAd={post.createdAt}
                          className="text-slate-400 text-xs md:text-sm"
                        />
                      </div>
                    </Author.Root>
                    <CardMain.Description
                      className="text-sm md:text-md"
                      description={post.description}
                    />
                  </CardMain.Content>
                </CardMain.Root>
              ))
            )}
          </div>
          <div className="w-full flex justify-between px-2 py-3">
            <Pagination
              path={`/Categorys/${tagName}?page=`}
              page={page}
              limit={pageSize}
              total={totalCount}
            />
          </div>
        </div>
      </main>
    </>
  )
}
