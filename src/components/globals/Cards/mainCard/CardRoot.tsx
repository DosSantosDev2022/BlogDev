import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardRootProps {
  children: ReactNode
  className: string
  slug: string
}

export function CardRoot({ children, className, slug }: CardRootProps) {
  return (
    <Link
      href={{
        pathname: `/Posts/${slug}`,
      }}
      className={twMerge(
        ` w-full flex flex-col lg:flex-row gap-8 border p-2 items-center`,
        className,
      )}
    >
      {children}
    </Link>
  )
}
