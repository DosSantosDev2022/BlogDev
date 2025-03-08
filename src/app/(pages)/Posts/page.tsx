import { GET_PAGINATED_POSTS } from '@/services/get-paginated-posts'
import type { Metadata } from 'next'

import {
	AdBanner,
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
	Pagination,
	TagsPost,
} from '@/components'
import {
	CardContent,
	CardDescription,
	CardImage,
	CardRoot,
	CardTitle,
} from '@/components/globals/cards/main-card'

export const metadata: Metadata = {
	title: 'Blog Dev | Todos os posts',
	description: 'Um blog para desenvolvedores',
}

interface AllPostsPageProps {
	searchParams?: { page?: number; first?: number; total: number }
}

export default async function AllPostsPage({
	searchParams,
}: AllPostsPageProps) {
	const page = Number(searchParams?.page) || 1
	const first = Number(searchParams?.first) || 4

	const { posts, postsConnection } = await GET_PAGINATED_POSTS(page, first)
	const totalCount = postsConnection.aggregate.count
	return (
		<div className='main-container'>
			<section className='section-posts'>
				<div className='p-2 w-full text-start mb-5 lg:mb-10'>
					<h1 className='text-4xl lg:text-6xl font-bold'>Nossos posts</h1>
				</div>
				<div className='flex flex-col justify-start gap-6'>
					{posts.map((post) => (
						<CardRoot slug={post.slug} key={post.id}>
							<CardImage
								title={post.title}
								coverImage={post.coverImage.url}
							/>
							<CardContent>
								<TagsPost tagName={post.tag.tagName} />
								<CardTitle className='text-md' title={post.title} />
								<AuthorRoot>
									<AuthorAvatar
										className='w-8 h-8'
										ImageProfile={post.author.photo.url}
										name={post.author.name}
									/>
									<div className='flex- flex-col gap-1'>
										<AuthorName
											nome={post.author.name}
											className='text-foreground text-xs'
										/>
										<AuthorCreateAd
											CreateAd={post.createdAt}
											className='text-muted text-xs'
										/>
									</div>
								</AuthorRoot>
								<CardDescription
									className='text-md'
									description={post.description}
								/>
							</CardContent>
						</CardRoot>
					))}
				</div>

				<Pagination
					path='/Posts?page='
					page={page}
					limit={first}
					total={totalCount}
				/>
			</section>
			<section className='section-secondary'>
				<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
			</section>
		</div>
	)
}
