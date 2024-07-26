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
    <div className="relative flex flex-col items-center">
      <span className="absolute top-[-10px] right-[-10px]  border-mycolor-700 border-[2px] bg-mycolor-950 text-white text-xs rounded-full px-2 py-1">
        {currentLikes}
      </span>
      <Button
        className=" justify-center w-10 rounded-full flex items-center gap-2"
        onClick={handleLikes}
        variant="mycolor"
        disabled={liked}
      >
        {liked ? (
          <div className="flex items-center gap-2">
            <BiSolidLike size={16} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <BiLike size={16} />
          </div>
        )}
      </Button>
    </div>
  )
}
