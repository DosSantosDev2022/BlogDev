import {
	AdBanner,
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
	ToSharePosts,
	RichText,
	SmallCard,
	TitleSections,
} from '@/components'
import { defaultRenders } from '@/components/globals/cms/rickTextRenders'
import { SEARCH_RELATED_POSTS } from '@/services/get-relatead-post'
import { SEARCH_DETAILS_POST } from '@/services/search-details-posts'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PagePostProps {
	params: {
		slug: string
	}
}

export async function generateMetadata({
	params,
}: PagePostProps): Promise<Metadata> {
	const { post } = await SEARCH_DETAILS_POST(params.slug)

	return {
		title: post?.title,
		description: post?.subtitle,
		category: post?.tag?.tagName,
		authors: post?.author,

		openGraph: {
			title: post?.title,
			description: post?.subtitle,
			images: [{ url: post?.coverImage?.url || '' }],
			type: 'article',
		},
		twitter: {
			card: 'summary_large_image',
			title: post?.title,
			description: post?.subtitle,
			images: post?.coverImage?.url,
		},
		metadataBase: new URL('https://blog-dev-two.vercel.app'),
	}
}

export default async function PagePost({ params }: PagePostProps) {
	const { post } = await SEARCH_DETAILS_POST(params.slug)

	if (!post) {
		notFound()
	}

	const { posts } = await SEARCH_RELATED_POSTS(
		post.tag.tagName,
		params.slug,
	)

	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-2 items-start justify-center my-12 lg:px-4 px-2'>
				<section className='flex flex-col items-center justify-start lg:col-span-9 px-6 py-3 lg:px-24 lg:py-4 border rounded-md shadow-sm'>
					<article className='flex flex-col items-center justify-start w-full gap-10 '>
						<div className='flex flex-col items-start justify-center w-full gap-5'>
							<div className='p-2 max-w-5xl space-x-2'>
								<h1 className='text-accent md:text-5xl lg:text-6xl p-2 text-3xl font-bold'>
									{post?.title}
								</h1>
								<p className='font-light'>{post.description}</p>
							</div>

							<div className='w-full p-2'>
								<AuthorRoot>
									<AuthorAvatar
										className='w-12 h-12'
										ImageProfile={post?.author.photo.url || ''}
										name={post.author.name}
									/>
									<div className='flex flex-col gap-1'>
										<AuthorName
											nome={post.author.name}
											className='text-base'
										/>
										<AuthorCreateAd
											CreateAd={post.createdAt}
											className='text-sm'
										/>
									</div>
								</AuthorRoot>
							</div>
						</div>
						<div className='w-full'>
							{post?.coverImage?.url ? (
								<Image
									width={1000}
									height={1000}
									alt={post.title}
									src={post?.coverImage.url}
									quality={100}
									className='bg-cover w-full rounded-md'
								/>
							) : (
								<p>Imagem não disponível</p>
							)}
						</div>
						<div className='w-full p-2 space-y-5'>
							<RichText
								content={post?.content.raw}
								renderers={defaultRenders}
							/>
						</div>
						<div className='flex w-full justify-between items-start px-2 py-3 mb-10 '>
							<ToSharePosts slug={params.slug} title={post.title} />
						</div>
					</article>
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				</section>
				<section className='lg:col-span-3 flex flex-col items-start justify-center px-2 gap-5 mt-5 lg:mt-0'>
					<TitleSections section='Relacionados' />
					<div className='flex flex-wrap justify-start p-2 gap-4 items-center w-full'>
						{posts?.map((post) => (
							<SmallCard
								slug={post.slug}
								key={post.id}
								author={post.author}
								coverImage={post.coverImage}
								title={post.title}
								createdAd={post.createdAt}
							/>
						))}

						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					</div>
				</section>
			</div>
		</>
	)
}
