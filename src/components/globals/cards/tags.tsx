import { twMerge } from 'tailwind-merge'

interface TagProps {
	tagName: string
	className?: string
}

const TagsPost = ({ tagName, className }: TagProps) => {
	return (
		<span
			className={twMerge(
				'bg-primary text-primary-foreground lg:text-sm text-xs lg:w-24 w-20 p-1.5 flex items-center justify-center rounded',
				className,
			)}
		>
			{tagName}
		</span>
	)
}

export { TagsPost }
