
import Image from "next/image";


interface Post {
  id: number,
  title: string,
  content: string,
  description: string,
  coverImage: string
  tag: string,
  author: string,
  date: string,
  // Outras propriedades do post
}

export  function CardPosts({post} : {post : Post}){

  return (
    <div className=" w-[21rem] h-[24.75rem] flex flex-col items-start justify-start  rounded-md  bg-white shadow-md">
      <Image src={'/banner.png'} className="w-full h-auto" width={320}  height={195} alt="" />
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col items-start gap-1">
          <span className="bg-slate-900 text-slate-50 text-xs p-2 rounded-lg" >{post.tag}</span>
          <h2 className="text-base font-bold text-slate-900">{post.title}</h2>
          <p className="text-sm text-slate-600 font-normal">{post.description} </p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Image className="rounded-full" src={post.coverImage} width={32} height={32} alt=""/>
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-sm font-bold text-slate-900">{post.author} </h5>
            <span className="text-xs text-slate-400">{post.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}