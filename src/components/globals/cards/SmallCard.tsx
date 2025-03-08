import { AuthorAvatar, AuthorName, AuthorRoot } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

interface SmallCardProps {
	title: string
	subtitle?: string
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
}

const SmallCard = ({
	author,
	coverImage,
	slug,
	title,
}: SmallCardProps) => {
	return (
		<Link
			href={{
				pathname: `/Post/${slug}`,
			}}
			className=' w-full flex items-center justify-center gap-3 rounded-lg overflow-hidden shadow p-3 ease-in hover:scale-105 duration-300 transition-all '
		>
			<Image
				src={coverImage.url}
				width={100}
				height={100}
				quality={100}
				alt={title}
				className='rounded-md '
			/>
			<div className='flex flex-col items-start gap-1 w-full '>
				<h2 className='text-xs text-primary font-medium'>{title}</h2>
				<AuthorRoot>
					<AuthorAvatar
						className='w-7 h-7'
						ImageProfile={author.photo.url}
						name={author.name}
					/>

					<AuthorName nome={author.name} className='text-xs' />
				</AuthorRoot>
			</div>
		</Link>
	)
}

export { SmallCard }
