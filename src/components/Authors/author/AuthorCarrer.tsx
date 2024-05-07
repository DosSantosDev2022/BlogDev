import { twMerge } from 'tailwind-merge'

interface AuthorBioProps {
  text: string
  className: string
}

export function AuthorCarrer({ text, className }: AuthorBioProps) {
  return (
    <h6 className={twMerge(`text-sm font-semibold `, className)}>{text}</h6>
  )
}
