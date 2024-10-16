import { Metadata } from 'next'
import {
  OurAuthors,
  NavCategorys,
  BannerCarrousel,
  HighlightPosts,
  MostViewedPost,
  PopularPosts,
  MostRecentandMostLiked,
  AdBanner,
} from '@/components/index'

import { GET_POSTS } from '@/utils/queries/GetPosts'

export const metadata: Metadata = {
  title: 'Home | Blog Dev',
  description: 'Um blog para desenvolvedores',
  openGraph: {
    title: 'Home | Blog Dev',
    description: 'Um blog para desenvolvedores',
    images: [
      {
        url: '/blogdev.png',
        width: 800,
        height: 600,
        alt: 'Blog Dev',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
    url: 'blog-dev-two.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BlogDev',
    title: 'Home | Blog Dev',
    description: 'Um blog para desenvolvedores',
    images: '/blogdev.png',
  },
}

export default async function Home() {
  /* const response = await GET_ALL_POST() */
  const { posts } = await GET_POSTS({})

  if (!posts) {
    return <div>Error:Could not load posts.</div>
  }

  const featuredPosts = posts.filter((post) => post.destaque)

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <BannerCarrousel featuredPosts={featuredPosts} />
      </div>
      <div className="lg:px-16 px-5 mt-10">
        <MostRecentandMostLiked posts={posts} />
        <div className="grid  lg:grid-cols-12 lg:gap-16 items-start justify-center  mt-12 mb-12">
          <section className="flex flex-col items-start justify-start lg:col-span-8 gap-2 px-4">
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <HighlightPosts posts={posts} />
            {/* Componente de posts em destaque */}
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <MostViewedPost posts={posts} />
            {/* Componente de posts mais vistos */}
          </section>
          <aside className="lg:col-span-4 px-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
            <PopularPosts posts={posts} /> {/* Componente de posts populares */}
            <NavCategorys />
            {/* Componente de navegação de categoria */}
            <OurAuthors />
            {/* Componente renderiza anuncios do google ads */}
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
          </aside>
        </div>
        <div className="p-4">
          <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
        </div>
      </div>
    </div>
  )
}
