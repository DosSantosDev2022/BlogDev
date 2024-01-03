import { CardPosts } from '@/components/Cards/Card'
import SmallCard from '@/components/Cards/SmallCard'
import Link from 'next/link'
import { fetchHygraphQuery } from './api/fetchHygraph'
import { GetAllPostsTypes } from '@/types/Iposts'
import { Metadata } from 'next'
import { Banner } from '@/components/Banners/Banner'
import { AllAuthors } from '@/components/global/allAuthors'

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
    }
  }
   
   `
  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { posts } = await GetPageData()
  const post = posts[3]

  const categorys = [
    { label: 'JavaScript', href: '/Categorys/JavaScript' },
    { label: 'React Js', href: '/Categorys/React-Js' },
    { label: 'Next Js', href: '/Categorys/Next-Js' },
    { label: 'Front End', href: '/Categorys/Front-End' },
    { label: 'Carreira', href: '/Categorys/Carreira' },
  ]

  return (
    <>
      <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
        <section className="flex flex-col items-center justify-start lg:col-span-8 gap-5 ">
          <div className="w-full h-full flex items-center justify-center">
            <Banner
              author={post.author}
              coverImage={post.coverImage}
              createdAd={post.createdAt}
              slug={post.slug}
              tag={post.tag.tagName}
              title={post.title}
            />
          </div>

          <div className="lg:w-[43.75rem] h-12 rounded-[10px] md:w-full py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts Recentes</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 mb-10 items-center justify-center gap-4">
            {posts.map((post) => (
              <CardPosts
                key={post.id}
                author={post.author}
                coverImage={post.coverImage}
                title={post.title}
                tag={post.tag.tagName}
                slug={post.slug}
                createdAd={post.createdAt}
              />
            ))}
          </div>

          <div className="lg:w-[43.75rem] h-12 rounded-[10px] md:w-full py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
            <h3 className=" text-slate-50 ">Posts mais vistos</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 mb-10 items-center justify-center gap-4">
            {posts.map((post) => (
              <CardPosts
                key={post.id}
                author={post.author}
                coverImage={post.coverImage}
                title={post.title}
                tag={post.tag.tagName}
                slug={post.slug}
                createdAd={post.createdAt}
              />
            ))}
          </div>
        </section>
        <section className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
          <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
            <div className="lg:w-[22.5rem] h-12 rounded-[10px] md:w-full py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
              <h3 className=" text-slate-50 ">Posts Populares</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5">
              {posts.map((post) => (
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
          </div>
          <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
            <div className="lg:w-[22.5rem] h-12 md:w-full rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
              <h3 className=" text-slate-50 ">Posts Categorias</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-5">
              {categorys.map((category) => (
                <ul key={category.label}>
                  <li className=" cursor-pointer border w-[22.5rem] rounded-md shadow-sm p-2 text-center hover:bg-slate-100 transition-all">
                    <Link href={category.href}>{category.label}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <AllAuthors />
          {/* Componente renderiza lista de todos autores do blog */}
        </section>
      </main>
    </>
  )
}
