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
import { GET_BY_CATEGORYS_POSTS } from '@/services/get-by-categorys-posts'
import type { Metadata } from 'next'
import Image from 'next/image'

interface PostsByCategoryProps {
	params: {
		tagName: string
	}
	searchParams: {
		page?: number
		first?: number
		total?: number
	}
}

export async function generateMetadata({
	params,
}: {
	params?: { tagName?: string }
}): Promise<Metadata> {
	const category = params?.tagName
	const title = `Resultado da busca para "${category}" | Blog Dev`
	const description = `Veja os resultados da busca para "${category}" no Blog Dev. Encontre artigos, tutoriais e mais conteúdo relevante para desenvolvedores.`
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://blog-dev-two.vercel.app/Categorys/query=${category}`,
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

export default async function PostsByCategory({
	params,
	searchParams,
}: PostsByCategoryProps) {
	const tagName = params?.tagName || ''
	const page = Number(searchParams?.page) || 1
	const first = Number(searchParams?.first) || 10
	const { posts, postsConnection } = await GET_BY_CATEGORYS_POSTS(
		tagName,
		page,
		first,
	)
	const category = posts.find((post) => post.tag.tagName === tagName)
	const totalCount = postsConnection.aggregate.count
	return (
		<>
			<div className='relative w-full lg:h-[500px] h-48 flex flex-col items-center justify-center'>
				{/* Fundo com imagem de background */}
				<div
					className='absolute inset-0 h-full w-full bg-center bg-cover bg-no-repeat opacity-70'
					style={{
						backgroundImage: `url(${category?.tag.backgroundTag.url || ''})`,
					}}
				/>

				{/* Imagem relativa sobreposta */}
				<div className='relative top-24 lg:right-72 z-10 lg:w-[768px] w-80 h-52 lg:h-[380px] p-2 gap-3 rounded-md overflow-hidden'>
					{category?.tag.coverTag ? (
						<Image
							fill
							className='object-cover rounded-lg'
							src={`${category?.tag.coverTag?.url}`}
							alt={category?.title || ''}
						/>
					) : null}
				</div>
			</div>

			<div className='main-container'>
				{/* Seção de posts */}
				<section className='section-posts lg:mt-12 mt-20'>
					<div className='w-full space-y-3 px-2 py-3'>
						<h3 className='font-bold text-3xl lg:text-6xl'>
							{category?.tag.tagName}
						</h3>
						<p className='text-muted-foreground text-sm lg:text-base'>
							{category?.description}
						</p>
					</div>
					<div className='flex flex-wrap gap-6 mt-4 mb-32 lg:mb-10 px-2 py-3'>
						{posts.length === 0 ? (
							<div className='flex items-start justify-center w-full p-2 h-screen'>
								<h1 className='text-4xl font-bold text-blumine-900'>
									Nenhuma categoria foi encontrada.
								</h1>
							</div>
						) : (
							posts.map((post) => (
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
											<div className='flex flex-col gap-1'>
												<AuthorName
													nome={post.author.name}
													className='text-muted-foreground text-xs'
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
							))
						)}
					</div>

					{/* Paginação */}
					<div className='w-full flex justify-between px-2 py-3'>
						<Pagination
							path={`/Categorys/${tagName}?page=`}
							page={page}
							limit={first}
							total={totalCount}
						/>
					</div>
				</section>

				{/* Seção de anúncios */}
				<section className='section-secondary'>
					<div className='top-24 lg:mt-8 mt-4 mb-32 lg:mb-10 px-2 py-3 space-y-3'>
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					</div>
				</section>
			</div>
		</>
	)
}
