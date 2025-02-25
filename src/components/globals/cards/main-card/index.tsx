import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const CardContent = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex flex-col items-start p-2 w-full space-y-2'>
			{children}
		</div>
	)
}

interface CardDescriptionProps {
	className?: string
	description: string
}

const CardDescription = ({
	description,
	className,
}: CardDescriptionProps) => {
	return (
		<p className={twMerge('text-sm font-light  text-limit', className)}>
			{description}
		</p>
	)
}

interface CardImageProps {
	coverImage: string
	title: string
	className?: string
}

const CardImage = ({ coverImage, title, className }: CardImageProps) => {
	return (
		<div
			className={twMerge(
				'w-full min-h-[150px] max-h-[150px]  relative ',
				className,
			)}
		>
			<Image
				className='rounded-md object-cover '
				fill
				src={coverImage}
				alt={title}
				quality={100}
			/>
		</div>
	)
}

interface CardRootProps {
	children: ReactNode
	className?: string
	slug: string
}

const CardRoot = ({ children, className, slug }: CardRootProps) => {
	return (
		<Link
			href={{
				pathname: `/Post/${slug}`,
			}}
			className={twMerge(
				'w-full flex flex-col lg:flex-row gap-8 border p-2 items-center',
				className,
			)}
		>
			{children}
		</Link>
	)
}

interface CardTitleProps {
	title: string
	className?: string
}

const CardTitle = ({ title, className }: CardTitleProps) => {
	return (
		<h4
			className={twMerge(
				'font-semibold  w-full flex items-center mt-2',
				className,
			)}
		>
			{title}
		</h4>
	)
}

export { CardContent, CardDescription, CardImage, CardRoot, CardTitle }
