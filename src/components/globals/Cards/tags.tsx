import { twMerge } from 'tailwind-merge'

interface TagProps {
  tagName: string
  className?: string
}

export function TagsPost({ tagName, className }: TagProps) {
  return (
    <span
      className={twMerge(
        `bg-primary text-light text-[10px]   w-[4.5rem] text-center px-2 py-1 rounded-[3px]`,
        className,
      )}
    >
      {tagName}
    </span>
  )
}
