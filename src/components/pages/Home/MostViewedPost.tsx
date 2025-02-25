import type { PostsGlobalTypes } from '@/@types/Iposts'
import { Button, HighlightCard, TitleSections } from '@/components'
import Link from 'next/link'

interface MostViewedPostProps {
	posts: PostsGlobalTypes['posts']
}

const MostViewedPost = ({ posts }: MostViewedPostProps) => {
	return (
		<div className='w-full flex flex-col lg:items-start items-center justify-center  p-2'>
			<TitleSections section='Mais vistos' />

			<div className='grid md:grid-cols-2 lg:grid-cols-2 mt-3 mb-10 items-center   justify-center gap-2'>
				{posts.map((post) => (
					<HighlightCard
						key={post.id}
						author={post.author}
						coverImage={post.coverImage}
						title={post.title}
						tag={post.tag.tagName}
						slug={post.slug}
						createdAd={post.createdAt}
					/>
				))}
			</div>
			<div className='w-full flex items-center justify-end'>
				<Button
					variant='mycolor'
					className='w-28 h-10 flex items-center justify-center'
					asChild
				>
					<Link href={'/Posts?page=1&limit=10'}>Ver todos</Link>
				</Button>
			</div>
		</div>
	)
}

export { MostViewedPost }
