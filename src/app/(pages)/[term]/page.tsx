import {
	CardContent,
	CardDescription,
	CardImage,
	CardRoot,
	CardTitle,
} from '@/components/globals/cards/main-card'
import {
	AdBanner,
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
	Pagination,
	TagsPost,
} from '@/components/index'
import { GET_POSTS_BY_SEARCH } from '@/services/get-posts-by-search'
import type { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
	searchParams,
}: {
	searchParams?: { query?: string }
}): Promise<Metadata> {
	const query = searchParams?.query
	const title = `Resultado da busca para "${query}" | Blog Dev`
	const description = `Veja os resultados da busca para "${query}" no Blog Dev. Encontre artigos, tutoriais e mais conteúdo relevante para desenvolvedores.`
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://blog-dev-two.vercel.app/search?query=${query}`,
			images: [
				{
					url: 'blogdev.png',
					width: 800,
					height: 600,
					alt: 'Blog Dev',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@BlogDev',
			title,
			description,
			images: '/blogdev.png',
		},
	}
}

export default async function PostsBySearch({
	searchParams,
}: {
	searchParams?: {
		query?: string
		page?: number
		first?: number
		total?: number
	}
}) {
	const query = searchParams?.query || ''
	const page = Number(searchParams?.page) || 1
	const first = Number(searchParams?.first) || 2

	const { posts, postsConnection } = await GET_POSTS_BY_SEARCH(
		query,
		page,
		first,
	)
	const totalCount = postsConnection.aggregate.count
	const postCover = posts.find(
		(post) => post.tag.tagName === searchParams?.query,
	)

	return (
		<div className='main-container'>
			<section className='section-posts'>
				{postCover ? (
					<div className='relative w-full lg:h-[320px] h-[220px] p-4 gap-3 rounded-md'>
						<Image
							fill
							className='object-cover'
							src={`${postCover?.tag.coverTag?.url}`}
							alt={postCover.title}
						/>
					</div>
				) : (
					<></>
				)}
				{posts.length === 0 ? (
					<></>
				) : (
					<div className='py-2 border-b border-border flex items-start justify-start w-full '>
						<h2 className='text-2xl font-medium'>
							{`Resultado da busca para  ${searchParams?.query}`}
						</h2>
					</div>
				)}

				<div className='flex flex-wrap justify-start gap-6 p-2'>
					{posts.length === 0 ? (
						<>
							<div className='flex items-start justify-center w-full p-2 h-screen'>
								<h1 className='text-4xl font-bold text-accent'>
									Nenhum post foi encontrado.{' '}
								</h1>
							</div>
						</>
					) : (
						<>
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
													className='text-primary text-xs'
												/>
												<AuthorCreateAd
													CreateAd={post.createdAt}
													className='text-muted-foreground text-xs'
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
						</>
					)}
				</div>
				<div className=' w-full flex justify-between px-2 py-3'>
					<Pagination
						path={`/search?query=${query}&page=`}
						page={page}
						limit={first}
						total={totalCount}
					/>
				</div>
			</section>
			<section className='section-secondary'>
				<div className='top-24 lg:mt-8 mt-4 mb-32 lg:mb-10 px-2 py-3 space-y-3'>
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				</div>
			</section>
		</div>
	)
}
