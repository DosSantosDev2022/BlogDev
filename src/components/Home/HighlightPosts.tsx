import { PostsTypes } from '@/types/Iposts'
import { CardPosts } from '../globals/Cards/Card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { TitleSection } from '../globals/TitleSection'

interface RecentPostsProps {
  posts: PostsTypes['posts']
}

export function HighlightPosts({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-center">
      <TitleSection.Root>
        <TitleSection.Highlight text="Posts" />
        <TitleSection.Span text="em destaque" />
      </TitleSection.Root>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-3 mb-10 items-center justify-center gap-4">
        {recentPosts.map((post, index) => (
          <CardPosts
            key={post.id}
            author={post.author}
            coverImage={post.coverImage}
            title={post.title}
            tag={post.tag.tagName}
            slug={post.slug}
            createdAd={post.createdAt}
            className={index === 0 ? 'col-span-2 ' : ''}
          />
        ))}
      </div>
      <div className="lg:w-[41rem] flex items-center justify-end">
        <Button
          variant="primary"
          className="w-24 h-10 flex items-center justify-center"
          asChild
        >
          <Link href={'AllPosts?page=1&limit=10'}>Ver todos ...</Link>
        </Button>
      </div>
    </div>
  )
}
