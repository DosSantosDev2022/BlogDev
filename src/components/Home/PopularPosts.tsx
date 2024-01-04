import { GetAllPostsTypes } from '@/types/Iposts'
import SmallCard from '../Cards/SmallCard'

interface PopularPosts {
  posts: GetAllPostsTypes['posts']
}

export function PopularPosts({ posts }: PopularPosts) {
  return (
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
  )
}
