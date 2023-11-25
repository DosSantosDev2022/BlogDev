import { BlogContext, Post } from '@/context/blogContext'
import { useContext } from 'react'
import Image from 'next/image'

interface AuthorProps {
  post: Post
  showDate?: boolean
  showImage?: boolean
  customStyles?: React.CSSProperties
  titleSize?: string
  titleColor?: string
  dateSize?: string
  dateColor?: string
  imageSize?: number
}

export function Author({
  post,
  showDate,
  showImage,
  titleSize,
  titleColor,
  dateSize,
  dateColor,
  imageSize,
}: AuthorProps) {
  const { posts } = useContext(BlogContext)

  return (
    <div className="flex items-center justify-start gap-2">
      {showImage && (
        <Image
          className="rounded-full"
          src={post.authorImage}
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )}
      <div className="flex flex-col items-start justify-start">
        <h5 className={`${titleSize} font-bold ${titleColor} `}>
          {post.author}
        </h5>
        {showDate && (
          <span className={`${dateSize} ${dateColor} `}>{post.date}</span>
        )}
      </div>
    </div>
  )
}
