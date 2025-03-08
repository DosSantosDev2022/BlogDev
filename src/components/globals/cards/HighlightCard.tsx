import {
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
} from '@/components'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { TagsPost } from './tags'

interface CardPostsProps {
	title: string
	tag: string
	slug: string
	createdAd: string
	coverImage: {
		url: string
	}
	author: {
		name: string
		photo: {
			url: string
		}
	}
	className?: string
}

const HighlightCard = ({
	author,
	coverImage,
	createdAd,
	slug,
	tag,
	title,
	className,
}: CardPostsProps) => {
	return (
		<Link
			className='group relative'
			href={{
				pathname: `/Post/${slug}`,
			}}
		>
			<div
				className={twMerge(
					'rounded-md p-0 shadow-md overflow-hidden',
					'max-w-full min-w-full lg:h-[18rem] h-[14rem]',
					className,
				)}
			>
				<div
					className={twMerge(
						'flex flex-col justify-end h-full p-4 gap-3 rounded-md',
						'bg-cover  bg-center bg-no-repeat ease-in group-hover:scale-105',
						' duration-300 transform transition-transform',
					)}
					style={{
						backgroundImage: `url(${coverImage.url})`,
					}}
				/>
				{/* Gradiente sobre a imagem */}
				<div className='absolute inset-0 bg-gradient-to-t from-primary opacity-80' />

				{/* Conteúdo do card */}
				<div className='absolute inset-0 flex flex-col items-start justify-end gap-1 p-4 border'>
					<TagsPost tagName={tag} />
					<h2 className='lg:text-xl sm:text-base md:text-lg font-bold text-primary-foreground'>
						{title}
					</h2>

					<div className='w-full mt-1'>
						<AuthorRoot>
							<AuthorAvatar
								ImageProfile={author.photo.url}
								name={author.name}
							/>
							<div className='flex- flex-col gap-1'>
								<AuthorName nome={author.name} className='text-muted' />
								<AuthorCreateAd
									CreateAd={createdAd}
									className='text-muted'
								/>
							</div>
						</AuthorRoot>
					</div>
				</div>
			</div>
		</Link>
	)
}

export { HighlightCard }
