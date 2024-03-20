import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface AuthorAvatarProps {
  ImageProfile: string
  name: string
  className?: string
}

export function AuthorAvatar({
  ImageProfile,
  name,
  className,
}: AuthorAvatarProps) {
  return (
    <div className={twMerge(`relative w-8 h-8`, className)}>
      <Image
        fill
        quality={100}
        src={ImageProfile}
        alt={name}
        className={twMerge('rounded-full object-cover', className)}
      />
    </div>
  )
}
