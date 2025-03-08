import {
	AdBanner,
	BannerCarrousel,
	SectionPosts,
	MostRecentandMostLiked,
	NavCategorys,
	OurAuthors,
	PopularPosts,
} from '@/components/index'
import { GET_ALL_POST } from '@/services/get-all-posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home | Blog Dev',
	description: 'Um blog para desenvolvedores',
	openGraph: {
		title: 'Home | Blog Dev',
		description: 'Um blog para desenvolvedores',
		images: [
			{
				url: '/blogdev.png',
				width: 800,
				height: 600,
				alt: 'Blog Dev',
			},
		],
		type: 'website',
		locale: 'pt_BR',
		url: 'blog-dev-two.vercel.app',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@BlogDev',
		title: 'Home | Blog Dev',
		description: 'Um blog para desenvolvedores',
		images: '/blogdev.png',
	},
}

export default async function Home() {
	const response = await GET_ALL_POST()

	if (!response || !response.posts) {
		return <div>Error:Could not load posts.</div>
	}

	const { posts } = response

	const featuredPosts = posts.filter((post) => post.destaque)
	const highlightPosts = posts.filter((post) => post.destaque)

	return (
		<div>
			<div className='w-full flex items-center justify-center'>
				<BannerCarrousel featuredPosts={featuredPosts} />
			</div>
			<div className='lg:px-16 px-4 mt-10'>
				<MostRecentandMostLiked posts={posts} />
				<div className='main-container lg:px-8'>
					<section className='section-posts'>
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						{/* Componente de posts em destaque */}
						<SectionPosts title='Em destaque' posts={highlightPosts} />

						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						{/* Componente de posts mais vistos */}
						<SectionPosts title='Mais vistos' posts={posts} />

						<SectionPosts title='Novidades' posts={posts} />
					</section>
					<aside className='section-secondary'>
						<PopularPosts posts={posts} />{' '}
						{/* Componente de posts populares */}
						<NavCategorys />
						{/* Componente de navegação de categoria */}
						<OurAuthors />
						{/* Componente renderiza anuncios do google ads */}
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
						<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
					</aside>
				</div>
				<div className='p-4'>
					<AdBanner dataAdFormat='auto' dataAdSlot='2166293754' />
				</div>
			</div>
		</div>
	)
}
