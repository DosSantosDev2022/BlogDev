import type { PostsGlobalTypes } from '@/@types/Iposts'
import { SmallCard, TitleSections } from '@/components'

interface PopularPosts {
	posts: PostsGlobalTypes['posts']
}

const PopularPosts = ({ posts }: PopularPosts) => {
	return (
		<div className='w-full flex flex-col lg:items-start items-center justify-center gap-2 rounded-md'>
			<div className='w-full flex items-start pl-5'>
				<TitleSections section='Populares' />
			</div>
			<div className='grid lg:grid-cols-1 justify-center gap-4 items-center  mt-3'>
				{posts.map((post) => (
					<SmallCard
						slug={post.slug}
						key={post.id}
						author={post.author}
						coverImage={post.coverImage}
						title={post.title}
						createdAd={post.createdAt}
					/>
				))}
			</div>
		</div>
	)
}

export { PopularPosts }
