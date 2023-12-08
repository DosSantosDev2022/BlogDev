import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

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
}

export function CardPosts({
  author,
  coverImage,
  createdAd,
  slug,
  tag,
  title,
}: CardPostsProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
    >
      <div className=" w-[21rem] h-[24.75rem]  rounded-md  shadow-md">
        <div
          className="flex flex-col justify-end h-full p-4 gap-3 rounded-md bg-center bg-auto  bg-no-repeat"
          style={{ backgroundImage: `url(${coverImage.url})` }}
        >
          <div className="flex flex-col items-start gap-1">
            <span className="bg-slate-900 text-slate-50 text-[0.625rem] p-[0.375rem] rounded-lg">
              {tag}
            </span>
            <h2 className="text-base font-bold text-slate-50">{title}</h2>
            <p className="text-sm text-slate-100 font-normal">{''}</p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <Image
              width={100}
              height={100}
              quality={100}
              src={author.photo.url}
              alt={author.name}
              className="rounded-full w-12 h-12"
            />
            <div className="flex flex-col gap-1">
              <p className="text-slate-50">{author.name}</p>
              <p className="text-slate-50">
                {format(new Date(createdAd), "dd 'de' MMM 'de' yyyy", {
                  locale: ptBR,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
