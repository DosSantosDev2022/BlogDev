import Link from "next/link";



export default function Banners() {
  return (
    <Link href={''}>
      <div  className="  flex items-end bg-contain bg-no-repeat bg-center bg-[url('/banner.png')] w-[46.5rem] h-[24.75rem] ">
        <div className="  bottom-14 left-16 flex flex-col gap-1 items-start">
            <span className="bg-slate-900 text-slate-50 text-sm p-2 rounded-lg">JavaScript</span>
            <h2 className="text-3xl font-bold">Titulo do post</h2>
            <h4 className="text-sm font-medium text-slate-950">Nome do autor</h4>
        </div>
      </div>
    </Link>
   
  )
} 