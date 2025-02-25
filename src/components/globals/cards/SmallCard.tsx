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
			className='max-w-[340px] min-w-[340px] w-full h-[96px] flex items-center justify-center gap-3 rounded-lg overflow-hidden shadow-md bg-mycolor-50/15 px-2 py-3 hover:scale-105 duration-300 transition-all '
		>
			<Image
				src={coverImage.url}
				width={132}
				height={70}
				quality={100}
				alt={title}
				className='rounded-md '
			/>
			<div className='flex flex-col items-start gap-1 w-full '>
				<h2 className='text-xs text-mycolor-900 font-medium'>{title}</h2>
				<AuthorRoot>
					<AuthorAvatar
						className='w-7 h-7'
						ImageProfile={author.photo.url}
						name={author.name}
					/>

					<AuthorName
						nome={author.name}
						className='text-mycolor-900 text-xs'
					/>
				</AuthorRoot>
			</div>
		</Link>
	)
}

export { SmallCard }
