import { CMSIcon } from '@/components/globals/cms/IconCms'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface AuthorAvatarProps {
	ImageProfile: string
	name: string
	className?: string
}

const AuthorAvatar = ({
	ImageProfile,
	name,
	className,
}: AuthorAvatarProps) => {
	return (
		<div className={twMerge('relative w-8 h-8', className)}>
			<Image
				fill
				quality={100}
				src={ImageProfile}
				alt={name}
				className={'rounded-full object-cover'}
			/>
		</div>
	)
}

interface AuthorBioProps {
	text: string
}

const AuthorBio = ({ text }: AuthorBioProps) => {
	return <p className='text-sm font-normal'>{text}</p>
}

interface AuthorBioProps {
	text: string
	className: string
}

const AuthorCarrer = ({ text, className }: AuthorBioProps) => {
	return (
		<h6 className={twMerge('text-sm font-semibold', className)}>{text}</h6>
	)
}

interface AuthorCreateAdProps {
	CreateAd: string
	className?: string
}

const AuthorCreateAd = ({ CreateAd, className }: AuthorCreateAdProps) => {
	return (
		<p
			className={twMerge(
				'text-xs text-muted-foreground font-light',
				className,
			)}
		>
			{format(new Date(CreateAd), "dd 'de' MMM 'de' yyyy", {
				locale: ptBR,
			})}
		</p>
	)
}

interface AuthorLinksProps {
	Url: string
	icon: string
	className: string
}

const AuthorLinks = ({ Url, icon, className }: AuthorLinksProps) => {
	return (
		<Link
			href={Url}
			aria-label='link da rede social do autor do blog dev'
			title='Visite o perfil social do autor do Blog Dev'
			prefetch
		>
			<CMSIcon icon={icon} className={twMerge('text-lg', className)} />
		</Link>
	)
}

interface AuthorNameProps {
	nome: string
	className?: string
}

const AuthorName = ({ nome, className }: AuthorNameProps) => {
	return (
		<h3 className={twMerge('text-primary text-sm font-bold', className)}>
			{nome}
		</h3>
	)
}

interface AuthorRootProps {
	children: ReactNode
	className?: string
}

const AuthorRoot = ({ children, className }: AuthorRootProps) => {
	return (
		<div
			className={twMerge(
				'flex items-center justify-start gap-2',
				className,
			)}
		>
			{children}
		</div>
	)
}

export {
	AuthorAvatar,
	AuthorBio,
	AuthorCarrer,
	AuthorLinks,
	AuthorCreateAd,
	AuthorName,
	AuthorRoot,
}
