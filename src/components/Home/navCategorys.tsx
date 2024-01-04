import Link from 'next/link'

export function NavCategorys() {
  const categorys = [
    { label: 'JavaScript', href: '/Categorys/JavaScript' },
    { label: 'React Js', href: '/Categorys/React-Js' },
    { label: 'Next Js', href: '/Categorys/Next-Js' },
    { label: 'Front End', href: '/Categorys/Front-End' },
    { label: 'Carreira', href: '/Categorys/Carreira' },
  ]
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
      <div className="lg:w-[22.5rem] h-12 md:w-full rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
        <h3 className=" text-slate-50 ">Posts Categorias</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        {categorys.map((category) => (
          <ul key={category.label}>
            <li className=" cursor-pointer border w-[22.5rem] rounded-md shadow-sm p-2 text-center hover:bg-slate-100 transition-all">
              <Link href={category.href}>{category.label}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
