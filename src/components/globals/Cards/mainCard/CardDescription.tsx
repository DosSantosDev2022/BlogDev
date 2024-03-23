import { twMerge } from 'tailwind-merge'

interface CardDescriptionProps {
  className?: string
  description: string
}

export function CardDescription({
  description,
  className,
}: CardDescriptionProps) {
  return (
    <p className={twMerge(`text-sm font-light  text-limit`, className)}>
      {description}
    </p>
  )
}
