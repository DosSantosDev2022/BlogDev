import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

interface AuthorCreateAdProps {
  CreateAd: string
  className?: string
}

export function AuthorCreateAd({ CreateAd, className }: AuthorCreateAdProps) {
  return (
    <p
      className={twMerge('text-[0.75rem] text-slate-50 font-light', className)}
    >
      {format(new Date(CreateAd), "dd 'de' MMM 'de' yyyy", {
        locale: ptBR,
      })}
    </p>
  )
}
