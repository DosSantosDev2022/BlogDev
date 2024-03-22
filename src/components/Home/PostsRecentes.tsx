import { PostsTypes } from "@/types/Iposts"
import { CardAllPosts } from "../globals/Cards/CardAllPosts"
import { TitleSection } from "../globals/TitleSection"

interface RecentPostsProps {
  posts: PostsTypes['posts']
}

export  function RecentPosts2({posts} : RecentPostsProps) {

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex p-10 items-start justify-between gap-2 border ">
        
            <div className="w-full">
            <TitleSection.Root>
              <TitleSection.Highlight text='Posts'  />
              <TitleSection.Span text='recentes'/>
            </TitleSection.Root>
              <div className="flex flex-wrap gap-2">
              {recentPosts.map((post) => (
                <CardAllPosts
                    className="lg:w-[400px] lg:flex-col "
                    key={post.id}
                    title={post.title}
                    tag={post.tag.tagName}
                    slug={post.slug}
                    description={post.description}
                    createdAd={post.createdAt}
                    coverImage={post.coverImage}
                    author={post.author}
                />
              ))}
              </div>
            </div>
          
            <div className="" >
              <TitleSection.Root>
                <TitleSection.Highlight text='Posts'  />
                <TitleSection.Span text='recentes'/>
              </TitleSection.Root>
            </div>
        
    </div>
  )
} 