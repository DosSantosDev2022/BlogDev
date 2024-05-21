'use client'

import { InputSearch } from '@/components/Header/Search'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Logo } from './logo'
import { Navigation } from './navegation'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className=" lg:h-28  bg-blumine-700 py-3 px-8  lg:flex items-center justify-between ">
      <div className="flex items-center justify-between">
        <Logo />
        <Button onClick={toggleMenu} className="lg:hidden rounded-sm ">
          {isMenuOpen ? <X size={30} /> : <FaBars size={30} />}
        </Button>
      </div>
      <div
        className={` ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex lg:flex-row flex-col  items-center justify-center gap-5 mt-10 lg:mt-0`}
      >
        <Navigation />
        <InputSearch />
      </div>
    </header>
  )
}
