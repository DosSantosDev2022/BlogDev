'use client'

import Link from 'next/link'

export default function Home() {
  const categorys = [
    { label: 'JavaScript', href: '/Categorys/JavaScript' },
    { label: 'React Js', href: '/Categorys/React-Js' },
    { label: 'Next Js', href: '/Categorys/Next-Js' },
    { label: 'Front End', href: '/Categorys/Front-End' },
    { label: 'Carreira', href: '/Categorys/Carreira' },
  ]

  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
      <section className="flex flex-col items-center justify-start lg:col-span-8 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 items-center justify-center gap-4">
          {/* espaço para renderizar cards posts */}
        </div>
      </section>
      <section className=" lg:col-span-4 flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0 ">
        <div className="lg:w-[22.5rem] h-12 rounded-[10px] md:w-full py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
          <h3 className=" text-slate-50 ">Posts Populares</h3>
        </div>

        <div className="flex flex-col items-center justify-center space-y-5">
          {/* espaço para renderizar smallcards posts */}
        </div>

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
      </section>
    </main>
  )
}
