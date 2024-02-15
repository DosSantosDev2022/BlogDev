import Image from 'next/image'
import { TagsPost } from './tags'
import Link from 'next/link'

interface CardPostsProps {
  title: string
  tag: string
  slug: string
  description: string
  createdAd: string
  coverImage: {
    url: string
  }
  author: {
    name: string
    photo: {
      url: string
    }
  }
}

export function CardAllPosts({
  coverImage,
  slug,
  tag,
  title,
  description,
}: CardPostsProps) {
  return (
    <div className="w-[372px] h-[450] flex flex-col items-start justify-start border rounded-sm shadow-sm space-y-2 ">
      <Image
        src={coverImage.url}
        alt={title}
        width={400}
        height={400}
        quality={100}
      />
      <div className="flex flex-col items-start p-2 w-full">
        <TagsPost tagName={tag} />
        <h4 className="font-semibold h-14 w-full flex items-center mt-2">
          {title}
        </h4>
        <p className="text-sm font-light w-full">{description} </p>
        <Link
          className="hover:bg-slate-900 border hover:text-slate-50 p-2 mt-2 rounded-sm duration-500"
          href={{
            pathname: `/Posts/${slug}`,
          }}
        >
          Ver Mais
        </Link>
      </div>
    </div>
  )
}
