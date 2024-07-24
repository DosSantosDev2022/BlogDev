import { useLikes } from '@/context/LikesContext'
import { Button } from '../ui/button'
import { BiLike, BiSolidLike } from 'react-icons/bi'
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
      className="w-[120px] flex items-center gap-2"
      onClick={handleLikes}
      variant="mycolor"
      disabled={liked}
    >
      {liked ? (
        <div className="flex items-center gap-2">
          {' '}
          <BiSolidLike size={16} />
          Curtido {currentLikes}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {' '}
          <BiLike size={16} /> Curtir {currentLikes}
        </div>
      )}
    </Button>
  )
}
