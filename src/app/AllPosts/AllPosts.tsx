import { GET_ALL_POST } from '@/GraphQl/querys'
import { CardAllPosts } from '@/components/Cards/CardAllPosts'
import { PaginationPosts } from '@/components/globals/paginationPosts'

export async function AllPosts() {
  const { posts } = await GET_ALL_POST()
  const post = posts
  return (
    <div className="border  w-full p-2 ">
      <div className="flex flex-wrap justify-start gap-6 p-2">
        {post?.map((post) => (
          <CardAllPosts
            description={post.description}
            key={post.id}
            author={post.author}
            coverImage={post.coverImage}
            title={post.title}
            tag={post.tag.tagName}
            slug={post.slug}
            createdAd={post.createdAt}
          />
        ))}
      </div>

      <PaginationPosts />
    </div>
  )
}
