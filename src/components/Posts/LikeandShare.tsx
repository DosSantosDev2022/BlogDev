'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'
import { LikeButton } from './LikeButton'

interface ToShareProps {
  slug: string
  title?: string
  postId: string
  initialLikes: number
}

export function LikeandShare({
  slug,
  title,
  postId,
  initialLikes,
}: ToShareProps) {
  return (
    <>
      <div className="w-full flex flex-col items-start justify-center gap-3">
        <h4 className="text-mycolor-900 font-bold text-sm lg:text-lg">
          Curta e Compartilhe!
        </h4>
        <div className="flex  items-center justify-start gap-3 w-full">
          <TwitterShareButton
            title={title}
            rel="noopener noreferrer"
            url={`http://blog-dev-two.vercel.app/Post/${slug}`}
            className="hover:scale-105 duration-300 transition-all w-10"
          >
            <XIcon size={38} round />
          </TwitterShareButton>

          <LinkedinShareButton
            rel="noopener noreferrer"
            url={`http://blog-dev-two.vercel.app/Post/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <LinkedinIcon size={38} round />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`http://blog-dev-two.vercel.app/Post/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <WhatsappIcon size={38} round />
          </WhatsappShareButton>
          <FacebookShareButton
            url={`http://blog-dev-two.vercel.app/Post/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <FacebookIcon size={38} round />
          </FacebookShareButton>

          <EmailShareButton
            url={`http://blog-dev-two.vercel.app/Post/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <EmailIcon size={38} round />
          </EmailShareButton>

          <LikeButton initialLikes={initialLikes} postId={postId} />
        </div>
      </div>
    </>
  )
}
