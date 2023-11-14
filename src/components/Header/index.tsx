'use client'

import Link from "next/link";
import { InputSearch } from "./input";
import { FaAngleDown, FaBars } from 'react-icons/fa'
import { useState } from "react";

export default function Header() {
  const categorys = [
    {label : "JavaScript" , href: "/Category/JavaScript"},
    {label : "React Js" , href: "/Category/React Js"},
    {label : "Next Js" , href: "/Category/Next Js"},
    {label : "Front End" , href: "/Category/Front End"},
    {label : "Carreira" , href: "/Category/Carreira"}
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCategories = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

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
          <li className="text-slate-50 font-light text-base">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-slate-50 font-light text-base relative group " onClick={toggleCategories}>
            <span className="cursor-pointer flex items-center">
              Categorias <FaAngleDown className="ml-1" />
            </span>
            {/* Lista Suspensa para Categorias */}
            <ul className={ `absolute transition-all ${isDropDownOpen ? "block" : "hidden"} bg-slate-50 p-2 space-y-2 shadow-md mt-2 rounded-md text-slate-900`}>
              {categorys.map((category) => (
                <li key={category.label}>
                  <Link className="hover:font-bold transition-all" href={`/category/${category.label}`}>
                   {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="text-slate-50 font-light text-base">
            <Link href={"/Contact"}>Contato</Link>
          </li>
        </ul>
        <InputSearch/>
      </nav>
    </header>
  )
}