import Image from "next/image";

export  function CardPosts(){
  return (
    <div className="flex flex-col items-start justify-center gap-2 rounded-md  bg-white shadow-md">
      <Image src={'/banner.png'} className="w-full h-auto"  width={360} height={191} alt="" layout="responsive"/>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col items-start gap-2">
          <span>Tag</span>
          <h2 className="text-lg font-semibold text-slate-900">Titulo do post</h2>
          <p className="text-sm text-slate-600 font-normal"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, sit!</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Image className="rounded-full" src={'/author.png'} width={32} height={32} alt=""/>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-sm font-bold text-slate-900">Juliano Santos</h5>
            <span className="text-xs text-slate-400">02/11/2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}