import Image from 'next/image'

interface CardImageProps {
  coverImage: {
    url: string
  }
  title: string
}

export function CardImage({ coverImage, title }: CardImageProps) {
  return (
    <div className="w-full h-full relative ">
      <Image
        className="rounded-md "
        fill
        src={coverImage.url}
        objectFit="cover"
        alt={title}
        quality={100}
      />
    </div>
  )
}
