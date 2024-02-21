'use client'

import Link from 'next/link'
import { FaFacebookF, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

export function ToShare() {
  const shareLinks = [
    {
      name: '',
      icon: <FaFacebookF />,
      url: ``,
    },
    { name: '', icon: <FaSquareInstagram /> },
    {
      name: '',
      icon: <FaTwitter />,
      url: ``,
    },
    {
      name: '',
      icon: <FaTelegram />,
      url: ``,
    },
    {
      name: '',
      icon: <FaWhatsapp />,
      url: ``,
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
                <Link
                  className="bg-zinc-50 border rounded-full p-2 flex items-center justify-center hover:scale-105 duration-300 text-xl"
                  key={link.name}
                  target="_blank"
                  href={''}
                >
                  {link.icon}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
