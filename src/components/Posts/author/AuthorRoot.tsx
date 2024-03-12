import { ReactNode } from 'react'

interface AuthorRootProps {
  children: ReactNode
}

export function AuthorRoot({ children }: AuthorRootProps) {
  return <div className="flex items-center justify-start gap-2">{children}</div>
}
