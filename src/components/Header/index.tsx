import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-slate-900 flex-shrink-0 py-3 px-40 flex items-center justify-between">
      <h1 className="text-slate-50 font-bold text-4xl">Blog Dev</h1>

      <nav className="flex items-center justify-center">
        <ul className="flex items-start justify-center gap-5">
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Home</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Categorias</Link></li>
          <li className=" text-slate-50 font-light text-base"><Link href={''}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}