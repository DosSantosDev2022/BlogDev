import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface CardImageProps {
  coverImage: string
  title: string
  className?: string
}

export function CardImage({ coverImage, title, className }: CardImageProps) {
  return (
    <div
      className={twMerge(
        'w-full min-h-[150px] max-h-[150px]  relative ',
        className,
      )}
    >
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
