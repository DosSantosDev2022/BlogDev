import { Button } from '@/components/ui'
import { useLikes } from '@/context/LikesContext'
import { BiLike, BiSolidLike } from 'react-icons/bi'

interface LikeButtonProps {
	postId: string
	initialLikes: number
}

const LikeButton = ({ postId, initialLikes }: LikeButtonProps) => {
	const { likes, hasLiked, likePost } = useLikes()

	const currentLikes =
		likes[postId] !== undefined ? likes[postId] : initialLikes
	const liked = hasLiked(postId)

	const handleLikes = () => {
		likePost(postId)
	}

	return (
		<div className='relative flex flex-col items-center'>
			<span className='absolute -top-2 -right-3 bg-accent text-accent-foreground text-xs rounded-full px-2.5 py-1.5'>
				{currentLikes}
			</span>
			<Button
				className=' justify-center w-10 rounded-full flex items-center gap-2'
				onClick={handleLikes}
				variants='primary'
				disabled={liked}
			>
				{liked ? (
					<div className='flex items-center gap-2'>
						<BiSolidLike size={16} />
					</div>
				) : (
					<div className='flex items-center gap-2'>
						<BiLike size={16} />
					</div>
				)}
			</Button>
		</div>
	)
}

export { LikeButton }
