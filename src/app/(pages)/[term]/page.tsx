import { GET_POSTS_BY_SEARCH } from '@/app/api/queries/Get_Posts_By_Search'
import Image from 'next/image'
import { CardMain } from '@/components/globals/Cards/mainCard'
import { TagsPost } from '@/components/globals/Cards/tags'
import { Author } from '@/components/Authors/author'
import { Metadata } from 'next'

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { query?: string }
}): Promise<Metadata> {
  const query = searchParams?.query
  const title = `Resultado da busca para "${query}" | Blog Dev`
  const description = `Veja os resultados da busca para "${query}" no Blog Dev. Encontre artigos, tutoriais e mais conteúdo relevante para desenvolvedores.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://blog-dev-two.vercel.app/search?query=${query}`,
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

export default async function PostsBySearch({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''

  const { posts } = await GET_POSTS_BY_SEARCH(query)

  const postCover = posts.find(
    (post) => post.tag.tagName === searchParams?.query,
  )

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 container mx-auto">
      <div className="flex flex-col items-center justify-center lg:col-span-7 gap-5 ">
        {postCover ? (
          <div className=" relative w-full lg:h-[320px] h-[220px] p-4 gap-3 rounded-md">
            <Image
              fill
              className="object-cover"
              src={`${postCover?.tag.coverTag?.url}`}
              alt={postCover.title}
            />
          </div>
        ) : (
          <></>
        )}
        {posts.length === 0 ? (
          <></>
        ) : (
          <div className="py-2 border-b border-slate-900 flex items-start justify-start w-full ">
            <h2 className="text-2xl font-medium">
              {`Resultado da busca para  ${searchParams?.query}`}
            </h2>
          </div>
        )}

        <div className="flex flex-wrap justify-start gap-6 p-2">
          {posts.length === 0 ? (
            <>
              <div className="flex items-start justify-center w-full p-2 h-screen">
                <h1 className="text-4xl font-bold text-blumine-900">
                  Nenhum post foi encontrado.{' '}
                </h1>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      <div className=" lg:col-span-5 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
    </main>
  )
}
