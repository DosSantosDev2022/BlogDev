import { AllPosts } from './AllPosts'
import { NavFilter } from './navFilter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Dev | Todos os posts',
  description: 'Um blog para desenvolvedores',
}

export default function AllPostsPage() {
  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12">
      <div className="flex flex-col items-center justify-center lg:col-span-8 gap-5 ">
        <div className="flex flex-col items-center justify-center gap-2 py-2 px-3 mt-7 ">
          <h2 className="text-4xl font-semibold">
            Describe what your blog is about
          </h2>
        </div>
        <NavFilter />
        <AllPosts />
      </div>
      <div className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 "></div>
    </main>
  )
}
