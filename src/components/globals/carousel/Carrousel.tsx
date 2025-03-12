'use client'
import type { PostsGlobalTypes } from '@/@types/Iposts'
import {
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
	Carousel,
	CarouselContent,
	CarouselItem,
	TagsPost,
} from '@/components/index'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import * as React from 'react'

interface BannerCarrouselProps {
	featuredPosts: PostsGlobalTypes['posts']
}

export function BannerCarrousel({ featuredPosts }: BannerCarrouselProps) {
	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnInteraction: false }),
	)
	return (
		<Carousel plugins={[plugin.current]} className='w-full'>
			<CarouselContent>
				{featuredPosts.map((post) => (
					<CarouselItem key={post.id}>
						<Link
							href={{
								pathname: `/Post/${post.slug}`,
							}}
						>
							<div className='w-full  lg:h-[550px] h-[250px]'>
								<div
									className='flex flex-col lg:items-center items-start justify-center h-full p-8 gap-3  bg-center  bg-cover  bg-no-repeat '
									style={{
										backgroundImage: `linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, rgba(22, 49, 70, 0.45) 45.38%, #152532 100%), url(${post.coverImage.url})`,
									}}
								>
									<div className='flex flex-col items-start gap-3 lg:w-9/12'>
										<TagsPost tagName={post.tag.tagName} />
										<h2 className='lg:text-6xl font-bold text-primary-foreground'>
											{post.title}
										</h2>
										<AuthorRoot>
											<AuthorAvatar
												className='lg:w-14 lg:h-14 w-10 h-10'
												ImageProfile={post.author.photo.url}
												name={post.author.name}
											/>
											<div className='flex flex-col space-x-1'>
												<AuthorName
													nome={post.author.name}
													className='lg:text-lg text-sm text-muted'
												/>
												<AuthorCreateAd
													CreateAd={post.createdAt}
													className='text-xs lg:text-sm text-muted'
												/>
											</div>
										</AuthorRoot>
									</div>
								</div>
							</div>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
