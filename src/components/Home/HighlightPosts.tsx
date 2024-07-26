import { PostsGlobalTypes } from '@/types/Iposts'
import { CardPosts } from '../globals/Cards/Card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { TitleSection } from '../globals/TitleSection'

interface RecentPostsProps {
  posts: PostsGlobalTypes['posts']
}

export function HighlightPosts({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-center px-4">
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
      <div className="w-full px-2 py-2.5  flex items-center justify-end">
        <Button
          variant="mycolor"
          className="w-28 h-10 flex font-normal items-center justify-center"
          asChild
        >
          <Link href={'/Posts?page=1'}>Ver todos</Link>
        </Button>
      </div>
    </div>
  )
}
