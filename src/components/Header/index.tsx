'use client'

import Link from "next/link";
import { InputSearch } from "./input";
import { FaBars } from 'react-icons/fa'
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className=" bg-slate-900 py-3 px-3 lg:px-40 lg:flex items-center justify-between">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-50 font-bold text-4xl">Blog Dev</h1>
          <button onClick={toggleMenu} className="lg:hidden bg-slate-50 rounded-sm text-3xl">
          <FaBars  />
          </button>
      </div>
        
      <nav className={`transition-all ${
        isMenuOpen ? "flex" : "hidden"
      } lg:flex lg:flex-row flex-col items-center justify-center gap-5 mt-10 lg:mt-0 `}>
        <ul className="flex items-start justify-center gap-5">
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Home</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Categorias</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Contato</Link></li>
        </ul>
        <InputSearch/>
      </nav>
    </header>
  )
}