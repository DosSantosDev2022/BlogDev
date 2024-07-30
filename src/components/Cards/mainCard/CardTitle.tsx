import { twMerge } from 'tailwind-merge'

interface CardTitleProps {
  title: string
  className?: string
}

export function CardTitle({ title, className }: CardTitleProps) {
  return (
    <h4
      className={twMerge(
        `font-semibold  w-full flex items-center mt-2`,
        className,
      )}
    >
      {title}
    </h4>
  )
}
