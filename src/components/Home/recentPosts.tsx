import { PostsTypes } from '@/types/Iposts'
import { CardPosts } from '../globals/Cards/Card'
import Link from 'next/link'
import { CardSkeleton } from '../Loading/CardSkeleton'
import { Button } from '../ui/button'
import { TitleSection } from '../globals/TitleSection'

interface RecentPostsProps {
  posts: PostsTypes['posts']
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-center">
      <TitleSection.Root>
        <TitleSection.Highlight text='Posts'  />
        <TitleSection.Span text='recentes'/>
      </TitleSection.Root>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-3 mb-10 items-center justify-center gap-4">
        {recentPosts ? (
          recentPosts.map((post) => (
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
      <div className="lg:w-[41rem] flex items-center justify-end">
        <Button asChild>
          <Link href={'/AllPosts'}>Ver todos...</Link>
        </Button>
      </div>
    </div>
  )
}
