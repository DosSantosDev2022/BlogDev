import {
	AuthorAvatar,
	AuthorCarrer,
	AuthorLinks,
	AuthorName,
	AuthorRoot,
	TitleSections,
} from '@/components'
import { GET_AUTHORS } from '@/services/get-authors'

const OurAuthors = async () => {
	const { authors } = await GET_AUTHORS()
	return (
		<div className='w-full h-auto flex flex-col items-start justify-center gap-1 p-2 rounded-md bg-mycolor-50'>
			<TitleSections type='Nossos' section='Autores' />
			<div className='flex flex-col items-start justify-center space-y-5 p-2 w-full'>
				{authors.map((author) => (
					<AuthorRoot
						key={author.id}
						className='flex items-start justify-start gap-2 w-full border shadow-sm px-4 py-2 rounded-md'
					>
						<AuthorAvatar
							ImageProfile={author.photo.url}
							name={author.name}
							className='w-16 h-16'
						/>
						<div className='flex flex-col '>
							<AuthorName
								nome={author.name}
								className='text-mycolor-900 text-base font-bold'
							/>
							<AuthorCarrer
								className='mb-2 font-light text-xs text-mycolor-800'
								text={author.career}
							/>
							<div className='flex items-center gap-2'>
								{author.authorlink.map((link) => (
									<AuthorLinks
										key={link.id}
										Url={link.link}
										icon={link.linkIcon}
										className='hover:scale-105 text-lg duration-500 transition-all text-mycolor-900 '
									/>
								))}
							</div>
						</div>
					</AuthorRoot>
				))}
			</div>
		</div>
	)
}

export { OurAuthors }
