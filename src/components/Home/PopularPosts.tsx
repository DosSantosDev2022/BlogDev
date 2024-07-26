import { PostsGlobalTypes } from '@/types/Iposts'
import SmallCard from '../globals/Cards/SmallCard'
import { TitleSection } from '../globals/TitleSection'

interface PopularPosts {
  posts: PostsGlobalTypes['posts']
}

export function PopularPosts({ posts }: PopularPosts) {
  return (
    <div className="w-full h-auto flex flex-col lg:items-start items-center justify-center gap-2 rounded-md">
      <div className="w-full flex items-start pl-5">
        <TitleSection.Root>
          <TitleSection.Highlight text="Posts" />
          <TitleSection.Span text="populares" />
        </TitleSection.Root>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 lg:flex lg:flex-col grid  justify-start gap-4 items-center w-full  mt-3">
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
