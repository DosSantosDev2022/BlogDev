import { PostsTypes } from '@/types/Iposts'
import SmallCard from '../globals/Cards/SmallCard'
import { TitleSection } from '../globals/TitleSection'

interface PopularPosts {
  posts: PostsTypes['posts']
}

export function PopularPosts({ posts }: PopularPosts) {
  return (
    <div className="w-full h-auto flex flex-col lg:items-start items-center justify-center gap-2">
      <TitleSection.Root>
        <TitleSection.Highlight text='Posts'  />
        <TitleSection.Span text='recentes'/>
      </TitleSection.Root>
      <div className="flex flex-col justify-center space-y-5 mt-3">
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
