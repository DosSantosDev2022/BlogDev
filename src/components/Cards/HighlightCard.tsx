import Link from 'next/link'
import { TagsPost } from './tags'
import { Author } from '@/components/index'
import { twMerge } from 'tailwind-merge'

interface CardPostsProps {
  title: string
  tag: string
  slug: string
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
  className?: string
}

export function HighlightCard({
  author,
  coverImage,
  createdAd,
  slug,
  tag,
  title,
  className,
}: CardPostsProps) {
  return (
    <Link
      href={{
        pathname: `/Post/${slug}`,
      }}
    >
      <div
        className={twMerge(
          `max-w-full min-w-full lg:h-[18rem] h-[14rem] rounded-md  shadow-md overflow-hidden`,
          className,
        )}
      >
        <div
          className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat hover:scale-105 transition-all duration-500 "
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${coverImage.url})`,
          }}
        >
          <div className="flex flex-col items-start gap-1">
            <TagsPost tagName={tag} />
            <h2 className="text-base font-bold text-mycolor-50">{title}</h2>
          </div>
          <Author.Root>
            <Author.Avatar ImageProfile={author.photo.url} name={author.name} />
            <div className="flex- flex-col gap-1">
              <Author.Name nome={author.name} className="text-mycolor-50" />
              <Author.CreateAd
                CreateAd={createdAd}
                className="text-mycolor-100"
              />
            </div>
          </Author.Root>
        </div>
      </div>
    </Link>
  )
}
