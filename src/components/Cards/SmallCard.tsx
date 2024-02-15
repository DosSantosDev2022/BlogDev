import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

interface SmallCardProps {
  title: string
  subtitle?: string
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

export default function SmallCard({
  author,
  coverImage,
  createdAd,
  slug,
  title,
}: SmallCardProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
    >
      <div className=" lg:w-[360px] w-[360px] h-[96px] md:w-[768px] flex items-center justify-start gap-3 rounded-lg overflow-hidden shadow-md bg-white p-2 ">
        <Image
          src={coverImage.url}
          width={132}
          height={70}
          quality={100}
          alt={title}
          className="rounded-md"
        />
        <div className="flex flex-col items-start gap-1 ">
          <h2 className="text-xs text-slate-950 font-semibold">{title}</h2>
          <div className="flex items-start justify-center gap-2">
            <Image
              width={100}
              height={100}
              quality={100}
              src={author.photo.url}
              alt={author.name}
              className="rounded-full w-7 h-7"
            />
            <div className="flex flex-col gap-1">
              <p className="text-slate-950 text-xs">{author.name}</p>
              <p className="text-slate-900 text-xs">
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
