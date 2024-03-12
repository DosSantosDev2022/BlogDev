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
    <Image
      width={100}
      height={100}
      quality={100}
      src={ImageProfile}
      alt={name}
      className={twMerge('rounded-full w-12 h-12 ', className)}
    />
  )
}
