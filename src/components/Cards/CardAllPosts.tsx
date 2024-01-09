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
        alt=""
        width={400}
        height={400}
        quality={100}
      />
      <div className="flex flex-col items-start justify-start space-y-2 p-2 w-full">
        <TagsPost tagName={tag} />
        <h4>{title} </h4>
        <p className="text-sm font-light">{description} </p>
        <Link
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
