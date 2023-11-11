import Image from "next/image"
import Link from "next/link"
import { Author } from "./author"


interface Post {
  id: number,
  title: string,
  content: string,
  description: string,
  authorImage: string,
  coverImage: string
  tag: string,
  author: string,
  date: string,
}

export default function SmallCard({post} : {post : Post}) {
  
  return (

    <Link href={''}>
      <div className=" w-[360px] h-[96px]  flex items-center justify-start gap-3 rounded-lg overflow-hidden shadow-md bg-white ">
        <Image src={post.coverImage} width={132} height={70} alt="" />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm text-slate-950   font-semibold">{post.title}</h2>
            <Author 
                titleColor="text-slate-900"
                titleSize="text-sm"
                dateColor="text-slate-700"
                dateSize="text-sm"
                showDate
                showImage
                post={post}
                imageSize={28}
            />
          </div>
      </div>
    </Link>
   
  )
}