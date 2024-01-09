'use client'

import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import Link from 'next/link'

export function NavFilter() {
  const filterLinks = [
    { title: 'JavaScript', url: '/Categorys/JavaScript' },
    { title: 'React Js', url: '' },
    { title: 'Carreira', url: '' },
    { title: 'Next Js', url: '' },
    { title: 'Front-End', url: '' },
    { title: 'Back-End', url: '' },
  ]

  return (
    <div className="w-full flex items-center justify-start">
      <nav className="flex flex-wrap items-center justify-center gap-2 p-2 border w-full ">
        {filterLinks.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
