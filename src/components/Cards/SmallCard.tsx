import Image from 'next/image'
import Link from 'next/link'
import { Author } from './author'
import { useContext } from 'react'
import { BlogContext, Post } from '@/context/blogContext'

export default function SmallCard({ post }: { post: Post }) {
  const { posts } = useContext(BlogContext)
  return (
    <Link href={''}>
      <div className=" lg:w-[360px] w-[360px] h-[96px] md:w-[768px] flex items-center justify-start gap-3 rounded-lg overflow-hidden shadow-md bg-white ">
        <Image src={post.coverImage} width={132} height={70} alt="" />
        <div className="flex flex-col gap-1 ">
          <h2 className="text-sm text-slate-950   font-semibold">
            {post.title}
          </h2>
          <Author
            titleColor="text-slate-900"
            titleSize="text-sm"
            dateColor="text-slate-700"
            dateSize="text-sm"
            showDate
            showImage
            post={post}
            imageSize={28}
          />
        </div>
      </div>
    </Link>
  )
}
