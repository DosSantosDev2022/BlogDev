import Link from "next/link";
import { InputSearch } from "./input";
import { FaBars } from 'react-icons/fa'

export default function Header() {
  return (
    <header className=" bg-slate-900 flex-shrink-0 py-3 px-40 flex items-center justify-between">
      <h1 className="text-slate-50 font-bold text-4xl">Blog Dev</h1>
      <nav className="lg:flex items-center justify-center gap-6 hidden">
        <ul className="flex items-start justify-center gap-5">
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Home</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Categorias</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Contato</Link></li>
        </ul>
        <InputSearch/>
      </nav>
      
      <button className="lg:hidden bg-slate-50 text-xl">
      <FaBars  />
      </button>
    </header>
  )
}