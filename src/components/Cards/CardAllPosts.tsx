import Image from 'next/image'
import { TagsPost } from './tags'
import Link from 'next/link'
import { Button } from '../ui/button'

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
        <Button variant={'default'} asChild>
          <Link
            href={{
              pathname: `/Posts/${slug}`,
            }}
          >
            Ver Mais
          </Link>
        </Button>
      </div>
    </div>
  )
}
