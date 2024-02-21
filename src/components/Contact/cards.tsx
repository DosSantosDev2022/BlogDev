import Link from 'next/link'
import { ReactNode } from 'react'

interface ContactCardProps {
  name: string
  paragraph: string
  link: string
  icon: ReactNode
}

export function ContactCard(props: ContactCardProps) {
  return (
    <div className="lg:w-[405px] w-full h-[205px] border rounded-md shadow-sm p-3 flex flex-col items-start justify-center gap-2">
      <i className="text-4xl text-primary">{props.icon} </i>
      <h4 className="text-lg font-bold text-primary">{props.name} </h4>
      <p className="text-sm font-normal text-secondary-foreground">
        {props.paragraph}{' '}
      </p>
      <Link
        target="_blank"
        href={props.link}
        className="text-sm 
            font-normal text-secondary bg-primary
            p-2 rounded-md hover:scale-105 transition-all duration-500 hover:bg-primary"
      >
        {props.name}
      </Link>
    </div>
  )
}
