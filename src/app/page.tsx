import { fetchHygraphQuery } from './api/fetchHygraph'
import { GetAllPostsTypes } from '@/types/Iposts'
import { Metadata } from 'next'
import { AllAuthors } from '@/components/Authors/allAuthors'
import { NavCategorys } from '@/components/Home/navCategorys'
import { RecentPosts } from '@/components/Home/recentPosts'
import { MostViewedPost } from '@/components/Home/MostViewedPost'
import { PopularPosts } from '@/components/Home/PopularPosts'
import { BannerCarrousel } from '@/components/Banners/Carrousel'

export const metadata: Metadata = {
  title: 'Home | Blog Dev',
  description: 'Um blog para desenvolvedores',
}

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
      tag {
        tagName
      }
      destaque
    }
  }
   
   `
  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { posts } = await GetPageData()
  const featuredPosts = posts.filter((post) => post.destaque)

  return (
    <>
      <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
        <section className="flex flex-col items-center justify-start lg:col-span-8 gap-5 ">
          <div className=" flex items-center justify-center">
            {featuredPosts.length > 0 && (
              <BannerCarrousel featuredPosts={featuredPosts} />
            )}
          </div>
          <RecentPosts posts={posts} />
          {/* Componente de posts recentes */}

          <div className="lg:w-[43.75rem] bg-slate-300 h-36">publicidade</div>
          <MostViewedPost posts={posts} />
          {/* Componente de posts mais vistos */}
        </section>
        <section className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
          <PopularPosts posts={posts} /> {/* Componente de posts populares */}
          <NavCategorys />
          {/* Componente de navegação de categoria */}
          <AllAuthors />
          {/* Componente renderiza lista de todos autores do blog */}
          <div className="lg:w-[22.5rem] h-screen md:w-full rounded-[10px] bg-slate-200 ">
            publicidade
          </div>
        </section>
      </main>
    </>
  )
}
