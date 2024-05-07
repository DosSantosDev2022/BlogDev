import { twMerge } from 'tailwind-merge'

interface AuthorNameProps {
  nome: string
  className?: string
}

export function AuthorName({ nome, className }: AuthorNameProps) {
  return (
    <h3 className={twMerge('text-slate-50 text-sm font-bold', className)}>
      {nome}
    </h3>
  )
}
