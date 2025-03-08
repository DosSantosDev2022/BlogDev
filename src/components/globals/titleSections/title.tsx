interface TitleSectionsProps {
	type?: string
	section: string
}

const TitleSections = ({ section, type }: TitleSectionsProps) => {
	return (
		<div className='mb-3 px-1.5 py-2 rounded-md max-w-full min-w-full flex items-center gap-2'>
			<h2 className='bg-primary px-2 py-1.5 rounded-md text-primary-foreground'>
				{type ? type : 'Posts'}
			</h2>
			<span className='text-md font-normal text-mycolor-900 flex gap-1 items-center'>
				{section}
			</span>
		</div>
	)
}

export { TitleSections }
