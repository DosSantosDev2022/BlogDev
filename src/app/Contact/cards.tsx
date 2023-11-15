import Link from "next/link"
import { ReactNode } from "react"


interface ContactCardProps {
  email: string
  paragraph: string
  link: string
  icon: ReactNode
}

export function ContactCard(props : ContactCardProps) {
  return (
    <div className="lg:w-[405px] w-full border rounded-md shadow-sm p-3 flex flex-col items-start gap-2">
        <i className="text-4xl text-slate-950">{props.icon} </i>
        <h4 className="text-lg font-bold text-slate-900">{props.email} </h4>
        <p className="text-sm font-normal text-slate-700">{props.paragraph} </p>
        <Link href={props.link} 
          className="text-sm 
            font-normal text-slate-50 bg-slate-950 
            p-2 rounded-md hover:scale-105 transition-all hover:bg-slate-900"
          >
            {props.link} 
        </Link>
    </div>
  )
}