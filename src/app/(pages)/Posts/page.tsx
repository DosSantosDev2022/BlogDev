import { GET_PAGINATED_POSTS } from '@/services/get-paginated-posts'
import type { Metadata } from 'next'

import {
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
		<main className='flex flex-col'>
			<div
				className=' w-full flex items-center justify-center lg:h-[412px] h-80  opacity-90 bg-cover bg-no-repeat'
				style={{
					backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${'https://media.graphassets.com/SBtjEU9QD6ytECylLRnU'})`,
				}}
			>
				<div className='flex items-center justify-center py-2 px-3 lg:w-2/3 w-full  '>
					<h2 className='lg:text-6xl text-3xl md:text-5xl font-semibold text-mycolor-50'>
						Aprenda o melhor do mundo da programação aqui no BlogDev.
					</h2>
				</div>
			</div>

			<div className='grid lg:px-16 lg:py-20 px-5 lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12  '>
				<div className='flex flex-col items-center justify-center lg:col-span-8 gap-5  '>
					<div className=' w-full'>
						<div className='flex flex-col justify-start gap-6  '>
							{posts.map((post) => (
								<CardRoot slug={post.slug} key={post.id}>
									<CardImage
										className='h-[190px]'
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
													className='text-slate-900 text-xs'
												/>
												<AuthorCreateAd
													CreateAd={post.createdAt}
													className='text-slate-400 text-xs'
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
					</div>
				</div>
				<div className=' lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 '>
					aaaaa
				</div>
			</div>
		</main>
	)
}
