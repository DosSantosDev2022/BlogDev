import Image from 'next/image'
import { TagsPost } from './tags'
import { Author } from '../author'
import Link from 'next/link'

interface CardPostsProps {
  title: string
  tag: string
  slug: string
  createdAd: string
  description: string
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
  createdAd,
  author,
}: CardPostsProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
      className="lg:w-[700px] w-full flex flex-col lg:flex-row gap-8 border p-2 items-center"
    >
      <div className="w-full h-full relative ">
        <Image
          className="rounded-md "
          fill
          src={coverImage.url}
          objectFit='cover'
          alt={title}
          quality={100}
        />
      </div>
      <div className="flex flex-col items-start p-2 w-full space-y-2">
        <TagsPost tagName={tag} />
        <h4 className="font-semibold  w-full flex items-center mt-2">
          {title}
        </h4>
        <Author.Root>
          <Author.Avatar
            className="w-8 h-8"
            ImageProfile={author.photo.url}
            name={author.name}
          />
          <div className="flex- flex-col gap-1">
            <Author.Name nome={author.name} className="text-slate-900" />
            <Author.CreateAd CreateAd={createdAd} className="text-slate-400" />
          </div>
        </Author.Root>
        <p className="text-sm font-light  text-limit" >{description} </p>
      </div>
    </Link>
  )
}
