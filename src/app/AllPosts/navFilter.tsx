'use client'

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
      <nav className="flex flex-wrap items-center justify-start gap-4  p-1  w-full ">
        {filterLinks.map((link) => (
          <Link
            className="bg-primary text-secondary p-[6px] rounded-md text-sm font-light"
            href={link.url}
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
