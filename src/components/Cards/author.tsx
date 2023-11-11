import Image from "next/image"
import { twMerge } from "tailwind-merge"


interface Post {
  id: number,
  title: string,
  content: string,
  description: string,
  authorImage: string,
  coverImage : string
  tag: string,
  author: string,
  date: string,
  className: string,
  variant: string

}

interface VariantTypes {
  authorCard: string,
  authorSmallCard: string,
}


export function Author({post, className ,variant} : {post : Post ; className?: string; variant: keyof VariantTypes}) {
   
  const variantClasses : VariantTypes = {
      authorCard: "text-slate-50",
      authorSmallCard: "text-slate-900"
  }

  const _className = twMerge(
    variantClasses[variant],className
    
  )
  return (
    <div className="flex items-center justify-start gap-2">
      <Image className="rounded-full" src={post.authorImage} width={28} height={28} alt=""/>
      <div className="flex flex-col items-start justify-start">
        <h5 className={`text-xs font-bold ${_className}`}>{post.author}</h5>
        <span className={`text-xs ${_className}`}>{post.date}</span>
      </div>
  </div>
  )
}