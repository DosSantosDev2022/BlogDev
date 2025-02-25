import { Button } from '@/components/ui'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ContactCardProps {
	name: string
	paragraph: string
	link: string
	icon: ReactNode
}

const ContactCard = (props: ContactCardProps) => {
	return (
		<div className='lg:w-[405px] w-full h-[205px] border rounded-md shadow-sm p-3 flex flex-col items-start justify-center gap-2'>
			<i className='text-4xl text-mycolor-950'>{props.icon} </i>
			<h4 className='text-lg font-bold text-mycolor-600'>{props.name} </h4>
			<p className='text-sm font-light text-mycolor-900'>
				{props.paragraph}{' '}
			</p>
			<Button variant='mycolor' asChild>
				<Link
					className='font-light p-2'
					target='_blank'
					href={props.link}
					aria-label='link para acessar as redes sociais do autor do blog dev'
				>
					Entre em contato
				</Link>
			</Button>
		</div>
	)
}

export { ContactCard }
