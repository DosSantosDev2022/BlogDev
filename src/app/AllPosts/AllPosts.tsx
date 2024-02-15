'use client'
import { GET_ALL_POST_PAGINATION } from '@/GraphQl/querys'
import { CardAllPosts } from '@/components/Cards/CardAllPosts'
import { PaginationPosts } from '@/components/globals/paginationPosts'
import { PostsTypes } from '@/types/Iposts'
import { useQuery } from '@apollo/client'

export function AllPosts() {
  const { data } = useQuery<PostsTypes>(GET_ALL_POST_PAGINATION, {})
  return (
    <div className="border  w-full p-2 ">
      <div className="flex flex-wrap justify-start gap-6 p-2">
        {data?.posts.map((post) => (
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
