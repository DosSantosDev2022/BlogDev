import { useLikes } from '@/context/LikesContext'
import { Button } from '../ui/button'

interface LikeButtonProps {
  postId: string
  initialLikes: number
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const { likes, hasLiked, likePost } = useLikes()
  const currentLikes =
    likes[postId] !== undefined ? likes[postId] : initialLikes
  const liked = hasLiked(postId)

  const handleLikes = () => {
    likePost(postId)
  }

  return (
    <Button
      className="w-[80px]"
      onClick={handleLikes}
      variant="mycolor"
      disabled={liked}
    >
      {currentLikes}
    </Button>
  )
}
