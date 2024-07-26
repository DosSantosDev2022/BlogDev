import { Metadata } from 'next'
import { OurAuthors } from '@/components/Authors/OurAuthors'
import { NavCategorys } from '@/components/Home/navCategorys'
import { HighlightPosts } from '@/components/Home/HighlightPosts'
import { MostViewedPost } from '@/components/Home/MostViewedPost'
import { PopularPosts } from '@/components/Home/PopularPosts'
import { BannerCarrousel } from '@/components/Banners/Carrousel'
import { GET_ALL_POST } from './api/queries/Get_All_Posts'
import { PostsRecentes } from '@/components/Home/PostsRecentes'
import { AdBanner } from '@/components/globals/Google/AdBanner'

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
  const { posts } = await GET_ALL_POST()

  const featuredPosts = posts.filter((post) => post.destaque)

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <BannerCarrousel featuredPosts={featuredPosts} />
      </div>
      <div className="px-2 lg:px-4">
        <PostsRecentes posts={posts} />
        <div className="grid  lg:grid-cols-12 gap-1 items-start justify-center  mt-12 mb-12">
          <section className="flex flex-col items-start justify-start lg:col-span-8 gap-5">
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <HighlightPosts posts={posts} />
            {/* Componente de posts em destaque */}
            <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
            <MostViewedPost posts={posts} />
            {/* Componente de posts mais vistos */}
          </section>
          <aside className="lg:col-span-4 flex flex-col items-center justify-center gap-5 p-2 mt-5 lg:mt-0 ">
            <PopularPosts posts={posts} /> {/* Componente de posts populares */}
            <NavCategorys />
            {/* Componente de navegação de categoria */}
            <OurAuthors />
            {/* Componente renderiza anuncios do google ads */}
            <AdBanner dataAdFormat="auto" dataAdSlot="8436188632" />
          </aside>
        </div>
        <div className="p-4">
          <AdBanner dataAdFormat="auto" dataAdSlot="2166293754" />
        </div>
      </div>
    </div>
  )
}
