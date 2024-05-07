import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface AuthorRootProps {
  children: ReactNode
  className?: string
}

export function AuthorRoot({ children, className }: AuthorRootProps) {
  return (
    <div
      className={twMerge('flex items-center justify-start gap-2', className)}
    >
      {children}
    </div>
  )
}
