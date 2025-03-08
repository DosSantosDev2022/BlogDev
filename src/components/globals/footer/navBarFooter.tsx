'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import {
	FaLinkedin,
	FaSquareInstagram,
	FaSquareTwitter,
} from 'react-icons/fa6'

const NavBarFooter = () => {
	const Links = [
		{ id: 1, text: 'Home', url: '/' },
		{ id: 2, text: 'Sobre o autor', url: '/About' },
		{ id: 3, text: 'Posts', url: '/Posts' },
		{ id: 4, text: 'Contato', url: '/Contact' },
	]

	const Links2 = [
		{ id: 5, text: 'HTML e Css', url: '/Categorys/HTML' },
		{ id: 6, text: 'JavaScript', url: '/Categorys/JavaScript' },
		{ id: 7, text: 'React Js', url: '/Categorys/React-Js' },
		{ id: 8, text: 'Next Js', url: '/Categorys/Next-Js' },
	]

	const social = [
		{
			id: 9,
			text: 'Github',
			url: 'https://github.com/DosSantosDev2022',
			icon: <FaGithub />,
		},
		{
			id: 10,
			text: 'Instagram',
			url: 'instagram/julianosantosdev',
			icon: <FaSquareInstagram />,
		},
		{ id: 11, text: 'Twitter', url: '/', icon: <FaSquareTwitter /> },
		{
			id: 12,
			text: 'LinkedIn',
			url: 'https://www.linkedin.com/in/dossantosdev/',
			icon: <FaLinkedin />,
		},
	]
	return (
		<NavigationMenu.Root className='lg:col-span-3 text-primary-foreground  w-full flex md:flex-row flex-col justify-around gap-10'>
			<NavigationMenu.List className='flex flex-col gap-2'>
				<h3 className='text-xl font-semibold'>Navegação</h3>
				{Links.map((link) => (
					<NavigationMenu.Item key={link.id}>
						<Link className='hover:underline font-light' href={link.url}>
							{link.text}
						</Link>
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>
			<NavigationMenu.List className='flex flex-col gap-2'>
				<h3 className='text-xl font-semibold'>Categorias</h3>
				{Links2.map((link2) => (
					<NavigationMenu.Item key={link2.id}>
						<Link className='hover:underline font-light' href={link2.url}>
							{link2.text}
						</Link>
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>
			<NavigationMenu.List className='flex flex-col gap-2'>
				<h3 className='text-xl font-semibold'>Redes Sociais</h3>
				{social.map((link) => (
					<NavigationMenu.Item key={link.id}>
						<Link
							className='flex items-center gap-3 hover:underline font-light'
							href={link.url}
						>
							<i className='text-lg'>{link.icon}</i>
							{link.text}
						</Link>
					</NavigationMenu.Item>
				))}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	)
}

export { NavBarFooter }
