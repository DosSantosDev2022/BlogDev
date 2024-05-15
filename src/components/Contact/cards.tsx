import Link from 'next/link'
import { ReactNode } from 'react'
import { Button } from '../ui/button'

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
      <p className="text-sm font-normal text-secundary">{props.paragraph} </p>
      <Button variant="primary" asChild>
        <Link target="_blank" href={props.link}>
          {props.name}
        </Link>
      </Button>
    </div>
  )
}
