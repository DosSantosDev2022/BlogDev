'use client'

import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'

interface ToShareProps {
  slug: string
  title?: string
}

export function ToShare({ slug, title }: ToShareProps) {
  return (
    <>
      <div className="w-full p-2 flex flex-col items-start justify-center gap-3">
        <h4 className="text-slate-900 font-bold text-lg">
          Compartilhe com seus amigos !!
        </h4>
        <div className="flex items-center justify-start gap-3">
          <TwitterShareButton
            title={title}
            rel="noopener noreferrer"
            url={`http://localhost:3000/Posts/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton
            rel="noopener noreferrer"
            url={`http://localhost:3000/Posts/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`http://localhost:3000/Posts/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <EmailShareButton
            url={`http://localhost:3000/Posts/${slug}`}
            className="hover:scale-105 duration-300 transition-all"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </>
  )
}
