'use client'

import Link from 'next/link'
import { InputSearch } from './input'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Logo } from './logo'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export default function Header() {
  const categorys = [
    { label: 'JavaScript', href: '/Categorys/JavaScript' },
    { label: 'React Js', href: '/Categorys/React-Js' },
    { label: 'Next Js', href: '/Categorys/Next-Js' },
    { label: 'Front End', href: '/Categorys/Front-End' },
    { label: 'Carreira', href: '/Categorys/Carreira' },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className=" bg-slate-900 py-3 px-3 lg:px-40 lg:flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          onClick={toggleMenu}
          className="lg:hidden bg-slate-50 rounded-sm text-3xl "
        >
          <FaBars />
        </button>
      </div>

      <NavigationMenu.Root
        className={` ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex lg:flex-row flex-col items-center justify-center gap-5 mt-10 lg:mt-0`}
      >
        <NavigationMenu.List className="flex items-start justify-center gap-5 list-none outline-none">
          <NavigationMenu.Item className="text-slate-50 font-light text-base">
            <Link href={'/'}>Home</Link>
          </NavigationMenu.Item>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="text-slate-50 font-light text-base outline-none ">
              Categoria
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                className=" mt-2 z-10 shadow w-44 rounded-lg py-2 px-1 bg-white flex flex-col gap-2 items-start justify-center  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              >
                {categorys.map((item) => (
                  <DropdownMenu.Item
                    className="w-full px-4 py-2 text-slate-950 hover:bg-slate-100 transition-all outline-none select-none"
                    key={item.label}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <NavigationMenu.Item className="text-slate-50 font-light text-base">
            <Link href={'/Contact'}>Contato</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <InputSearch />
      </NavigationMenu.Root>
    </header>
  )
}
