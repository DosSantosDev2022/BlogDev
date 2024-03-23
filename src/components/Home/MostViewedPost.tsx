import { PostsTypes } from '@/types/Iposts'
import { CardPosts } from '../globals/Cards/Card'
import Link from 'next/link'
import { CardSkeleton } from '../Loading/CardSkeleton'
import { Button } from '../ui/button'
import { TitleSection } from '../globals/TitleSection'

interface MostViewedPostProps {
  posts: PostsTypes['posts']
}

export function MostViewedPost({ posts }: MostViewedPostProps) {
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-center">
      <TitleSection.Root>
        <TitleSection.Highlight text="Posts" />
        <TitleSection.Span text="mais vistos" />
      </TitleSection.Root>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-3 mb-10 items-center justify-center gap-4">
        {posts ? (
          posts.map((post) => (
            <CardPosts
              key={post.id}
              author={post.author}
              coverImage={post.coverImage}
              title={post.title}
              tag={post.tag.tagName}
              slug={post.slug}
              createdAd={post.createdAt}
            />
          ))
        ) : (
          <>
            <CardSkeleton />
          </>
        )}
      </div>
      <div className="lg:w-[43.75rem] flex items-center justify-end">
        <Button asChild>
          <Link href={'/AllPosts'}>Ver todos...</Link>
        </Button>
      </div>
    </div>
  )
}
