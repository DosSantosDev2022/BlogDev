import { GetAllPostsTypes } from '@/types/Iposts'
import { CardPosts } from '../Cards/Card'
import Link from 'next/link'

interface RecentPostsProps {
  posts: GetAllPostsTypes['posts']
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="lg:w-[43.75rem] h-12 rounded-[10px] md:w-full py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
        <h3 className=" text-slate-50 ">Posts Recentes</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 mb-10 items-center justify-center gap-4">
        {recentPosts.map((post) => (
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
      <div className="w-full lg:w-[43.75rem] flex items-center justify-end">
        <Link
          className="bg-slate-950 text-slate-50 px-4 py-2 rounded-md hover:bg-slate-800 duration-500 transition-all"
          href={''}
        >
          Ver todos...
        </Link>
      </div>
    </div>
  )
}
