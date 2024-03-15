import { RichText } from '@/components/Posts/rich-text'
import Image from 'next/image'
import SmallCard from '@/components/globals/Cards/SmallCard'
import { ToShare } from '@/components/Posts/toShare'
import Link from 'next/link'

import { GET_DETAILS_POST } from '@/app/api/queries/GetDetailsPosts'
import { Author } from '@/components/globals/author'
import { Metadata } from 'next'

type PagePostProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PagePostProps): Promise<Metadata> {
  const { posts } = await GET_DETAILS_POST()
  const post = posts.find((post) => post.slug === params.slug)

  return {
    title: post?.title,
    description: post?.description,
    category: post?.tag.tagName,
    openGraph: {
      images: `${post?.coverImage.url}`,
    },
  }
}

export default async function PagePost({ params }: PagePostProps) {
  const { posts } = await GET_DETAILS_POST()
  const post = posts.find((post) => post.slug === params.slug)
  if (!post) {
    return <p>Post não encontrado !</p>
  }

  const relatedPost = posts.filter(
    (p) => p.tag.tagName === post?.tag.tagName && p.slug !== post.slug,
  )

  const Links = [
    { nome: 'Home', Url: '/' },
    { nome: `${post.tag.tagName}`, Url: `/Categorys/${post.tag.tagName}` },
  ]

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 container mx-auto">
      <section className="flex flex-col items-center justify-start lg:col-span-8 px-2 ">
        <div className="w-full h-12 rounded-[10px] py-3 px-4 bg-primary text-start">
          {Links.map((link) => (
            <Link
              className="text-slate-50 font-light"
              href={link.Url}
              key={link.nome}
            >
              {` ${link.nome}`}
            </Link>
          ))}
        </div>
        <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 p-2">
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <h1 className="text-primary md:text-5xl text-3xl font-bold mb-3">
              {post?.title}
            </h1>

            <Author.Root>
              <Author.Avatar
                ImageProfile={post?.author.photo.url || ''}
                name={post.author.name}
              />
              <div className="flex flex-col gap-1">
                <Author.Name
                  nome={post.author.name}
                  className="text-slate-900 text-lg"
                />
                <Author.CreateAd
                  CreateAd={post.createdAt}
                  className="text-slate-900 text-md"
                />
              </div>
            </Author.Root>
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
          <ToShare />
        </article>
      </section>
      <section className="lg:col-span-4 flex flex-col items-center justify-center px-2 gap-5 mt-5 lg:mt-0 ">
        <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-primary flex items-center justify-center">
          <h3 className="text-secondary font">Posts Relacionados</h3>
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
