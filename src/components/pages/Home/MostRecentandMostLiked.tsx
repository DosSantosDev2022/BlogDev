import type { PostsGlobalTypes } from '@/@types/Iposts'
import {
	AuthorAvatar,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
	TagsPost,
	TitleSections,
} from '@/components'
import {
	CardContent,
	CardDescription,
	CardImage,
	CardRoot,
	CardTitle,
} from '@/components/globals/cards/main-card'

interface RecentPostsProps {
	posts: PostsGlobalTypes['posts']
}

const MostRecentandMostLiked = ({ posts }: RecentPostsProps) => {
	const sortedPosts = posts.sort(
		(a, b) =>
			new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
	)
	const recentPosts = sortedPosts.slice(0, 6)
	const likedPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 6)

	return (
		<div className='w-full flex lg:flex-row flex-col items-start justify-between gap-10 lg:gap-2 bg-muted'>
			<div className='w-full p-2'>
				<TitleSections section='Recentes' />
				<div className='lg:grid lg:grid-cols-2 flex  gap-4  overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto lg:max-h-[380px] scrollbar-thin scrollbar-track-transparent'>
					{recentPosts.map((post) => (
						<CardRoot
							slug={post.slug}
							key={post.id}
							className='min-w-[310px] lg:w-full'
						>
							<CardImage
								title={post.title}
								coverImage={post.coverImage.url}
							/>
							<CardContent>
								<TagsPost tagName={post.tag.tagName} />
								<CardTitle className='text-xs' title={post.title} />
								<AuthorRoot>
									<AuthorAvatar
										className='w-8 h-8'
										ImageProfile={post.author.photo.url}
										name={post.author.name}
									/>
									<div className='flex flex-col gap-1'>
										<AuthorName
											nome={post.author.name}
											className='text-mycolor-900 text-xs'
										/>
										<AuthorCreateAd
											CreateAd={post.createdAt}
											className='text-mycolor-900 text-xs'
										/>
									</div>
								</AuthorRoot>
								<CardDescription
									className='text-xs'
									description={post.description}
								/>
							</CardContent>
						</CardRoot>
					))}
				</div>
			</div>

			<div className='lg:w-[400px] w-full'>
				<TitleSections section='Mais curtidos' />

				<div className='flex flex-col gap-2 overflow-y-auto p-2 max-h-[380px] scrollbar-thin scrollbar-track-transparent'>
					{likedPosts.map((post) => (
						<CardRoot className='' slug={post.slug} key={post.id}>
							<CardContent>
								<TagsPost tagName={post.tag.tagName} />
								<CardTitle className='text-[12px]' title={post.title} />
								<AuthorRoot>
									<AuthorAvatar
										className='w-5 h-5'
										ImageProfile={post.author.photo.url}
										name={post.author.name}
									/>
									<div className='flex flex-col gap-1'>
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
							</CardContent>
						</CardRoot>
					))}
				</div>
			</div>
		</div>
	)
}

export { MostRecentandMostLiked }
