import { PostsTypes } from '@/types/Iposts'
import { TitleSection } from '../globals/TitleSection'
import { CardMain } from '../globals/Cards/mainCard'
import { TagsPost } from '../globals/Cards/tags'
import { Author } from '../globals/author'

interface RecentPostsProps {
  posts: PostsTypes['posts']
}

export function RecentPosts2({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 4)
  return (
    <div className="w-full flex p-10 items-start justify-between gap-2 border ">
      <div className="w-full">
        <TitleSection.Root>
          <TitleSection.Highlight text="Posts" />
          <TitleSection.Span text="recentes" />
        </TitleSection.Root>
        <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[250px] scrollbar-thin scrollbar-track-transparent ">
          {recentPosts.map((post) => (
            <CardMain.Root className="" slug={post.slug} key={post.id}>
              <CardMain.Image title={post.title} coverImage={post.coverImage} />
              <CardMain.Content>
                <TagsPost tagName={post.tag.tagName} />
                <CardMain.Title className="text-xs" title={post.title} />
                <Author.Root>
                  <Author.Avatar
                    className="w-8 h-8"
                    ImageProfile={post.author.photo.url}
                    name={post.author.name}
                  />
                  <div className="flex- flex-col gap-1">
                    <Author.Name
                      nome={post.author.name}
                      className="text-slate-900 text-xs"
                    />
                    <Author.CreateAd
                      CreateAd={post.createdAt}
                      className="text-slate-400 text-xs"
                    />
                  </div>
                </Author.Root>
                <CardMain.Description description={post.description} />
              </CardMain.Content>
            </CardMain.Root>
          ))}
        </div>
      </div>

      <div className="">
        <TitleSection.Root>
          <TitleSection.Highlight text="Posts" />
          <TitleSection.Span text="recentes" />
        </TitleSection.Root>

        <div className="flex flex-col gap-2">
          {recentPosts.map((post) => (
            <CardMain.Root className="" slug={post.slug} key={post.id}>
              <CardMain.Content>
                <TagsPost tagName={post.tag.tagName} />
                <CardMain.Title className="text-[12px] " title={post.title} />
                <Author.Root>
                  <Author.Avatar
                    className="w-5 h-5"
                    ImageProfile={post.author.photo.url}
                    name={post.author.name}
                  />
                  <div className="flex- flex-col gap-1">
                    <Author.Name
                      nome={post.author.name}
                      className="text-slate-900 text-xs"
                    />
                    <Author.CreateAd
                      CreateAd={post.createdAt}
                      className="text-slate-400 text-xs"
                    />
                  </div>
                </Author.Root>
              </CardMain.Content>
            </CardMain.Root>
          ))}
        </div>
      </div>
    </div>
  )
}
