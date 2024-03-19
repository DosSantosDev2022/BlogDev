import Link from 'next/link'
import { CMSIcon } from '../IconCms'
import { twMerge } from 'tailwind-merge'

interface AuthorLinksProps {
  Url: string
  icon: string
  className: string
}

export function AuthorLinks({ Url, icon, className }: AuthorLinksProps) {
  return (
    <Link href={Url}>
      <CMSIcon icon={icon} className={twMerge(`text-2xl`, className)} />
    </Link>
  )
}
