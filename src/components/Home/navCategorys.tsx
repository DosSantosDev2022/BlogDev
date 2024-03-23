import Link from 'next/link'
import { TitleSection } from '../globals//TitleSection'

export function NavCategorys() {
  const categorys = [
    { label: 'JavaScript', href: '/Categorys/JavaScript' },
    { label: 'React Js', href: '/Categorys/React-Js' },
    { label: 'Next Js', href: '/Categorys/Next-Js' },
    { label: 'Front End', href: '/Categorys/Front-End' },
    { label: 'Carreira', href: '/Categorys/Carreira' },
  ]
  return (
    <div className="w-full h-auto flex flex-col items-start justify-center gap-1 p-2 bg-slate-50">
      <TitleSection.Root>
        <TitleSection.Highlight text="Posts" />
        <TitleSection.Span text="por categorias" />
      </TitleSection.Root>
      <div className="flex flex-wrap mt-5  gap-2  items-center justify-center w-full">
        {categorys.map((category) => (
          <ul key={category.label}>
            <li className=" cursor-pointer border  rounded-md shadow-sm px-5 py-[10px] text-center hover:bg-slate-100 transition-all">
              <Link className="text-sm" href={category.href}>
                {category.label}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
