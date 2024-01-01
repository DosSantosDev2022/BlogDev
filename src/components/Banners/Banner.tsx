import Link from 'next/link'
import { TagsPost } from '../Cards/tags'
import { Author } from '../Posts/author'

interface BannerProps {
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
}

export function Banner({
  author,
  coverImage,
  createdAd,
  slug,
  tag,
  title,
}: BannerProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
    >
      <div className=" lg:w-[43.75rem] w-full h-[320px]  rounded-md  shadow-md ">
        <div
          className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center  bg-cover  bg-no-repeat "
          style={{ backgroundImage: `url(${coverImage.url})` }}
        >
          <div className="flex flex-col items-start gap-1">
            <TagsPost tagName={tag} />
            <h2 className="text-base font-bold text-slate-50">{title}</h2>
          </div>
          <Author
            CreateAd={createdAd}
            ImageProfile={author.photo.url}
            Name={author.name}
            nameStyles="text-slate-50 text-sm"
            dataStyles="text-slate-50 text-sm font-"
          />
        </div>
      </div>
    </Link>
  )
}
