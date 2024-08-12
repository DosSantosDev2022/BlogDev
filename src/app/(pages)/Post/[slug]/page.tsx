import Image from 'next/image'
import { SEARCH_DETAILS_POST } from '@/app/api/queries/Search_Details_Posts'
import { Metadata } from 'next'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { notFound } from 'next/navigation'
import {
  AdBanner,
  Author,
  LikeandShare,
  RichText,
  SmallCard,
  TitleSection,
} from '@/components/index'
import { SEARCH_RELATED_POSTS } from '@/app/api/queries/Get_Relatead_Post'

interface PagePostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: PagePostProps): Promise<Metadata> {
  const { post } = await SEARCH_DETAILS_POST(params.slug)

  return {
    title: post?.title,
    description: post?.subtitle,
    category: post?.tag?.tagName,
    authors: post?.author,

    openGraph: {
      title: post?.title,
      description: post?.subtitle,
      images: [{ url: post?.coverImage?.url || '' }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      description: post?.subtitle,
      images: post?.coverImage?.url,
    },
    metadataBase: new URL('https://blog-dev-two.vercel.app'), // Definindo a base
  }
}

export default async function PagePost({ params }: PagePostProps) {
  const { post } = await SEARCH_DETAILS_POST(params.slug)

  if (!post) {
    notFound()
  }

  const { posts } = await SEARCH_RELATED_POSTS(post.tag.tagName, params.slug)

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12  lg:px-4 px-2">
        <section className="flex flex-col items-center justify-start lg:col-span-8 px-2 ">
          <article className="mt-4 flex flex-col items-center justify-start w-full gap-10 ">
            <div className="flex flex-col items-start justify-center w-full gap-5">
              <h1 className="text-mycolor-900 md:text-5xl text-3xl font-bold mb-3">
                {post?.title}
              </h1>

              <Author.Root>
                <Author.Avatar
                  className="lg:w-20 lg:h-20 w-16 h-16"
                  ImageProfile={post?.author.photo.url || ''}
                  name={post.author.name}
                />
                <div className="flex flex-col gap-1">
                  <Author.Name
                    nome={post.author.name}
                    className="text-mycolor-900 text-lg"
                  />
                  <Author.CreateAd
                    CreateAd={post.createdAt}
                    className="text-mycolor-900 text-md"
                  />
                </div>
              </Author.Root>
            </div>
            <div className="w-full">
              {post?.coverImage?.url ? (
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
            <div className="w-full p-2 text-mycolor-600 space-y-5">
              <RichText
                content={post?.content.raw}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="text-mycolor-950 font-bold text-4xl">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-mycolor-950 font-bold text-2xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-mycolor-900 font-bold text-xl">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-mycolor-900 font-bold text-lg">
                      {children}
                    </h4>
                  ),
                  bold: ({ children }) => (
                    <b className="text-mycolor-900 font-bold">{children} </b>
                  ),
                  p: ({ children }) => (
                    <p className="font-light mt-4 text-mycolor-950">
                      {children}
                    </p>
                  ),
                  code_block: ({ children }) => (
                    <pre className="bg-mycolor-950  p-4 rounded-md overflow-x-auto w-full scrollbar-thin scrollbar-track-mycolor-900 scrollbar-thumb-mycolor-50">
                      <code className="text-mycolor-50">{children}</code>
                    </pre>
                  ),
                  ul: ({ children }) => <ul className=" p-2">{children}</ul>,
                  li: ({ children }) => (
                    <li className="mb-2 text-start font-light text-mycolor-900 ">
                      {children}
                    </li>
                  ),
                }}
              />
            </div>
            <div className="flex w-full justify-between items-start px-2 py-3 mb-10 ">
              <LikeandShare
                postId={post.id}
                slug={params.slug}
                title={post.title}
                initialLikes={post.likes}
              />
            </div>
          </article>
          <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
        </section>
        <section className="lg:col-span-4 flex flex-col items-start justify-center px-2 gap-5 mt-5 lg:mt-0 ">
          <TitleSection.Root>
            <TitleSection.Highlight text="Posts" />
            <TitleSection.Span text="relacionados" />
          </TitleSection.Root>
          <div className="flex flex-wrap justify-start  gap-4 items-center w-full">
            {posts?.map((post) => (
              <SmallCard
                slug={post.slug}
                key={post.id}
                author={post.author}
                coverImage={post.coverImage}
                title={post.title}
                createdAd={post.createdAt}
              />
            ))}

            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
          </div>
        </section>
      </div>
    </>
  )
}

type StaticPostsPageData = {
  posts: {
    slug: string
  }[]
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
