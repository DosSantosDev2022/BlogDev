import Image from 'next/image'

interface CardImageProps {
  coverImage: string
  title: string
}

export function CardImage({ coverImage, title }: CardImageProps) {
  return (
    <div className="w-full h-full relative ">
      <Image
        className="rounded-md  "
        fill
        src={coverImage}
        alt={title}
        quality={100}
        style={{ objectFit: 'cover', position: 'absolute' }}
      />
    </div>
  )
}
