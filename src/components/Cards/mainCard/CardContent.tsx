import { ReactNode } from 'react'

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start p-2 w-full space-y-2">
      {children}
    </div>
  )
}
