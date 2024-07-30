import Image from 'next/image'

interface CardImageProps {
  coverImage: string
  title: string
}

export function CardImage({ coverImage, title }: CardImageProps) {
  return (
    <div className="w-full h-[250px]  relative ">
      <Image
        className="rounded-md object-cover "
        fill
        src={coverImage}
        alt={title}
        quality={100}
      />
    </div>
  )
}
