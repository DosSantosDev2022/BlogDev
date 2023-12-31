import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { GetAllPostsTypes } from '@/types/Iposts'
import { RichText } from '@/components/Posts/rich-text'
import Image from 'next/image'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import SmallCard from '@/components/Cards/SmallCard'
import { ToShare } from '@/components/Posts/toShare'

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
      content {
        raw
      }
      tag {
        tagName
      }
    }
  }
   
   `
  return fetchHygraphQuery(query)
}

export default async function PagePost({
  params,
}: {
  params: { slug: string }
}) {
  const { posts } = await GetPageData()
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return <p>Post não encontrado !</p>
  }
  const relatedPost = posts.filter(
    (p) => p.tag.tagName === post?.tag.tagName && p.slug !== post.slug,
  )

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
      <section className="flex flex-col items-center justify-start lg:col-span-8 px-2 ">
        <div className="w-full h-12 rounded-[10px] py-3 px-4 bg-slate-900 text-start">
          <p className="text-slate-50">{/* Renderiza o caminho do post */}</p>
        </div>
        <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 p-2">
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <h1 className="text-slate-900 md:text-5xl text-3xl font-bold mb-3">
              {post?.title}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Image
                width={100}
                height={100}
                quality={100}
                src={post?.author.photo.url || ''}
                alt={post?.author.name || ''}
                className="rounded-full w-12 h-12"
              />
              <div className="flex flex-col gap-1">
                <p className="text-slate-950 font-semibold">
                  {post?.author.name}
                </p>
                <p className="text-slate-950">
                  {post?.createdAt
                    ? format(
                        new Date(post.createdAt),
                        "dd 'de' MMM 'de' yyyy",
                        { locale: ptBR },
                      )
                    : 'Data não disponível'}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border">
            {post?.coverImage.url ? (
              <Image
                width={2000}
                height={2000}
                alt={post.title}
                src={post?.coverImage.url}
                quality={100}
                className="bg-contain w-full rounded-md"
              />
            ) : (
              <p>Imagem não disponível</p>
            )}
          </div>
          <div className="w-full p-2 text-slate-600 space-y-5">
            <RichText content={post?.content.raw} />
          </div>
          <ToShare url="" />
        </article>
      </section>
      <section className="lg:col-span-4 flex flex-col items-center justify-center px-2 gap-5 mt-5 lg:mt-0 ">
        <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-slate-900 flex items-center justify-center">
          <h3 className="text-slate-50 font">Posts Relacionados</h3>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          {relatedPost.map((post) => (
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
      </section>
    </main>
  )
}
