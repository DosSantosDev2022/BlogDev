import Link from 'next/link'
import { CMSIcon } from '@/components/globals/IconCms'
import { twMerge } from 'tailwind-merge'

interface AuthorLinksProps {
  Url: string
  icon: string
  className: string
}

export function AuthorLinks({ Url, icon, className }: AuthorLinksProps) {
  return (
    <Link
      href={Url}
      aria-label="link da rede social do autor do blog dev"
      title="Visite o perfil social do autor do Blog Dev"
      prefetch
    >
      <CMSIcon icon={icon} className={twMerge(`text-2xl`, className)} />
    </Link>
  )
}
