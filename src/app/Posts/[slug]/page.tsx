'use client'

import Image from 'next/image'

export default function PagePost({ params }: { params: { slug: string } }) {
  return (
    <main className="grid  lg:grid-cols-12 gap-1 items-start justify-center mt-12 mb-12 ">
      <section className="flex flex-col items-center justify-start lg:col-span-8 ">
        <div className="w-full h-12 rounded-[10px] py-3 px-4 bg-slate-900 text-start">
          <p className="text-slate-50">{/* Renderiza o caminho do post */}</p>
        </div>
        <article className="mt-12 flex flex-col items-center justify-start w-full gap-10 p-2">
          <div className="flex flex-col items-start justify-center w-full gap-5">
            <h1 className="text-slate-900 text-5xl font-bold mb-3"></h1>
          </div>
          <div className="w-full border">
            <Image width={500} height={200} alt={''} src={''} />
          </div>
          <div className="w-full p-2">
            {' '}
            {/* Conteudo do post */}
            {''}
          </div>
        </article>
      </section>
      <section className="lg:col-span-4 flex flex-col items-start justify-center gap-5 mt-5 lg:mt-0 ">
        <div className="w-[22.5rem] h-12 rounded-[10px] py-3   bg-slate-900 flex items-center justify-center">
          <h3 className="text-slate-50 font">Posts Relacionados</h3>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5"></div>
      </section>
    </main>
  )
}
