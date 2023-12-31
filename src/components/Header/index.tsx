'use client'

import { InputSearch } from './input'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Logo } from './logo'
import { Navigation } from './navegation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className=" bg-slate-900 py-3  container mx-auto lg:flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          onClick={toggleMenu}
          className="lg:hidden bg-slate-50 rounded-sm text-3xl "
        >
          <FaBars />
        </button>
      </div>
      <div
        className={` ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex lg:flex-row flex-col items-center justify-center gap-5 mt-10 lg:mt-0`}
      >
        <Navigation />
        <InputSearch />
      </div>
    </header>
  )
}
