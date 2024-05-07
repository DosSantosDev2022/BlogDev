import { PostsTypes } from '@/types/Iposts'
import { TitleSection } from '../globals/TitleSection'
import { CardMain } from '../globals/Cards/mainCard'
import { TagsPost } from '../globals/Cards/tags'
import { Author } from '@/components/Authors/author'

interface RecentPostsProps {
  posts: PostsTypes['posts']
}

export function PostsRecentes({ posts }: RecentPostsProps) {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  const recentPosts = sortedPosts.slice(0, 6)
  return (
    <div className="w-full flex lg:flex-row flex-col lg:p-10 p-5 items-start justify-between gap-2 bg-slate-50  ">
      <div className="w-full">
        <TitleSection.Root>
          <TitleSection.Highlight text="Posts" />
          <TitleSection.Span text="recentes" />
        </TitleSection.Root>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-2 overflow-y-auto max-h-[380px] scrollbar-thin scrollbar-track-transparent ">
          {recentPosts.map((post) => (
            <CardMain.Root slug={post.slug} key={post.id}>
              <CardMain.Image
                title={post.title}
                coverImage={post.coverImage.url}
              />
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
                <CardMain.Description
                  className="text-xs"
                  description={post.description}
                />
              </CardMain.Content>
            </CardMain.Root>
          ))}
        </div>
      </div>

      <div className="lg:w-[400px] w-full ">
        <TitleSection.Root>
          <TitleSection.Highlight text="Posts" />
          <TitleSection.Span text="mais curtidos" />
        </TitleSection.Root>

        <div className="flex flex-col gap-2 overflow-y-auto bg-slate-50 p-2 max-h-[380px] scrollbar-thin scrollbar-track-transparent ">
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
