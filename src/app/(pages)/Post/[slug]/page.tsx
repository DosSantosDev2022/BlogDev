import { RichText } from '@/components/Posts/rich-text'
import Image from 'next/image'
import SmallCard from '@/components/globals/Cards/SmallCard'
import { ToShare } from '@/components/Posts/toShare'
import Link from 'next/link'
import { GET_DETAILS_POST } from '@/app/api/queries/GetDetailsPosts'
import { Author } from '@/components/Authors/author'
import { Metadata } from 'next'
import { TitleSection } from '@/components/globals/TitleSection'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { StaticPostsPageData } from '@/types/StaticData'

interface PagePostProps {
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
    authors: post?.author,

    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [{ url: post?.coverImage.url || '' }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.description,
      images: post?.coverImage.url,
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
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12  lg:px-4 px-2">
        <section className="flex flex-col items-center justify-start lg:col-span-8 px-2 ">
          <div className="w-full h-12 rounded-[10px] py-3 px-4 bg-primary flex gap-2 items-center">
            {Links.map((link) => (
              <Link
                className="text-blumine-50 font-light hover:text-blumine-100 duration-500 transition-all "
                href={link.Url}
                key={link.nome}
                prefetch
              >
                {`${link.nome}`}
              </Link>
            ))}
          </div>
          <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 ">
            <div className="flex flex-col items-start justify-center w-full gap-5">
              <h1 className="text-blumine-900 md:text-5xl text-3xl font-bold mb-3">
                {post?.title}
              </h1>

              <Author.Root>
                <Author.Avatar
                  className="w-20 h-20"
                  ImageProfile={post?.author.photo.url || ''}
                  name={post.author.name}
                />
                <div className="flex flex-col gap-1">
                  <Author.Name
                    nome={post.author.name}
                    className="text-blumine-900 text-lg"
                  />
                  <Author.CreateAd
                    CreateAd={post.createdAt}
                    className="text-blumine-900 text-md"
                  />
                </div>
              </Author.Root>
            </div>
            <div className="w-full">
              {post?.coverImage.url ? (
                <Image
                  width={1000}
                  height={1000}
                  alt={post.title}
                  src={post?.coverImage.url}
                  quality={100}
                  className="bg-cover w-full rounded-md"
                />
              ) : (
                <p>Imagem não disponível</p>
              )}
            </div>
            <div className="w-full p-2 text-blumine-600 space-y-5">
              <RichText
                content={post?.content.raw}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="text-blumine-950 font-bold text-4xl">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-blumine-950 font-bold text-2xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-blumine-900 font-bold text-xl">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-blumine-900 font-bold text-lg">
                      {children}
                    </h4>
                  ),
                  bold: ({ children }) => (
                    <b className="text-blumine-900 font-bold">{children} </b>
                  ),
                  p: ({ children }) => (
                    <p className="font-light mt-4 text-blumine-900">
                      {children}
                    </p>
                  ),
                  code_block: ({ children }) => (
                    <pre className="bg-blumine-950  p-4 rounded-md overflow-x-auto w-full scrollbar-thin scrollbar-track-blumine-900 scrollbar-thumb-blumine-50">
                      <code className="text-blumine-50">{children}</code>
                    </pre>
                  ),
                  ul: ({ children }) => <ul className=" p-2">{children}</ul>,
                  li: ({ children }) => (
                    <li className="mb-2 text-start font-light text-blumine-900 ">
                      {children}
                    </li>
                  ),
                }}
              />
            </div>
            <ToShare slug={params.slug} title={post.title} />
          </article>
        </section>
        <section className="lg:col-span-4 flex flex-col items-start justify-center px-2 gap-5 mt-5 lg:mt-0 ">
          <TitleSection.Root>
            <TitleSection.Highlight text="Posts" />
            <TitleSection.Span text="relacionados" />
          </TitleSection.Root>
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
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query PostsStaticParams() {
      posts(first: 50) {
        slug
      }
    }
  `
  const { posts } = await fetchHygraphQuery<StaticPostsPageData>(query)
  return posts
}
