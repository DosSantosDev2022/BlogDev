'use client'

import { FaFacebookF, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

interface ToShareProps {
  url: string
}

export function ToShare({ url }: ToShareProps) {
  const shareLinks = [
    {
      name: '',
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/Posts/${url}`,
    },
    { name: '', icon: <FaSquareInstagram /> },
    {
      name: '',
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet/?text=http://localhost:3000/Posts/${url}`,
    },
    {
      name: '',
      icon: <FaTelegram />,
      url: `https://t.me/share/url?url=&text=${url}`,
    },
    {
      name: '',
      icon: <FaWhatsapp />,
    },
  ]
  return (
    <>
      <div className="w-full p-2 flex flex-col items-start justify-center gap-3">
        <h4 className="text-slate-900 font-bold text-lg">
          Compartilhe com seus amigos !!
        </h4>
        <div className="flex items-center justify-start gap-3">
          <ul>
            <li className="flex items-center justify-center gap-4">
              {shareLinks.map((link) => (
                <a
                  className="bg-zinc-50 border rounded-full p-2 flex items-center justify-center hover:scale-105 duration-300 text-xl"
                  key={link.name}
                  href={link.url}
                  target="_blank"
                >
                  {link.icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
