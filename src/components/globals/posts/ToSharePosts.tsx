'use client'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import {
	EmailIcon,
	FacebookIcon,
	LinkedinIcon,
	WhatsappIcon,
	XIcon,
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	TwitterShareButton,
} from 'react-share'

interface ToShareProps {
	slug: string
	title?: string
}

const ToSharePosts = ({ slug, title }: ToShareProps) => {
	const baseUrl =
		typeof window !== 'undefined'
			? window.location.hostname === 'localhost'
				? 'http://localhost:3000/' // Para desenvolvimento (localhost)
				: window.location.origin // Para produção (domínio correto)
			: '' // Caso não tenha acesso ao window (no servidor)

	// Criação da URL completa para compartilhamento
	const shareUrl = `${baseUrl}/Post/${slug}`

	const shareLinks = [
		{
			id: uuidv4(),
			icon: FacebookIcon,
			href: `https://www.facebook.com/sharer/share...{url}&quote=${title}: ${shareUrl}`,
		},
		{
			id: uuidv4(),
			icon: LinkedinIcon,
			href: '',
		},
		{
			id: uuidv4(),
			icon: WhatsappIcon,
			href: `https://web.whatsapp.com/send?text=${title}: ${shareUrl}`,
		},
		{
			id: uuidv4(),
			icon: EmailIcon,
			href: '',
		},
		{
			id: uuidv4(),
			icon: XIcon,
			href: `https://x.com/intent/tweet?text=${title}: ${shareUrl}`,
		},
	]

	return (
		<>
			<div className='w-full flex flex-col items-start justify-center gap-3'>
				<h4 className='text-mycolor-900 font-bold text-sm lg:text-lg'>
					Compartilhe com seus amigos !
				</h4>
				<div className='flex  items-center justify-start gap-3 w-full'>
					<EmailShareButton url={shareUrl} title=''>
						<EmailIcon size={48} className='rounded-full' />
					</EmailShareButton>

					<FacebookShareButton url={shareUrl} title=''>
						<FacebookIcon size={48} className='rounded-full' />
					</FacebookShareButton>

					<LinkedinShareButton url={shareUrl} title=''>
						<LinkedinIcon size={48} className='rounded-full' />
					</LinkedinShareButton>

					<WhatsappShareButton url={shareUrl} title=''>
						<WhatsappIcon size={48} className='rounded-full' />
					</WhatsappShareButton>

					<TwitterShareButton url={shareUrl} title=''>
						<XIcon size={48} className='rounded-full' />
					</TwitterShareButton>
				</div>
			</div>
		</>
	)
}

export { ToSharePosts }
