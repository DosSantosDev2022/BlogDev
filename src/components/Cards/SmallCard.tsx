import Image from "next/image"
import Link from "next/link"

interface CardsProps {
  imageUrl : string,
  title: string,
  link: string,
  date: string,
  author : string
}

export default function SmallCard({imageUrl, title,link,date,author} : CardsProps) {
  
  return (

    <Link href={link}>
      <div className=" w-[360px] h-[96px] p-3 flex items-center justify-center gap-3 rounded-lg overflow-hidden shadow-md bg-white ">
        <Image src={imageUrl} width={132} height={70} alt="" />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm text-slate-950   font-semibold">{title}</h2>
            <p className="text-sm font-thin text-slate-400">{date}</p>
            <p className="text-sm text-slate-500">{author}</p>
          </div>
      </div>
    </Link>
   
  )
}