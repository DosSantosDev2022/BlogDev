import Image from 'next/image'
import Link from 'next/link'
import { Author } from '@/components/Authors/author'

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
  slug,
  title,
}: SmallCardProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
    >
      <div className=" w-[360px] h-[96px] flex items-center justify-start gap-3 rounded-lg overflow-hidden shadow-md bg-white p-2 hover:scale-105 duration-300 transition-all ">
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
          <Author.Root>
            <Author.Avatar
              className="w-8 h-8"
              ImageProfile={author.photo.url}
              name={author.name}
            />

            <Author.Name nome={author.name} className="text-slate-900" />
          </Author.Root>
        </div>
      </div>
    </Link>
  )
}
