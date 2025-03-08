'use client'
import { InputSearch, Logo } from '@/components/globals/header'
import { Button } from '@/components/ui'
import { X } from 'lucide-react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
	Navigation,
	NavigationItem,
	NavigationLink,
	NavigationList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const categorys: { title: string; href: string; id: string }[] = [
		{ id: uuidv4(), title: 'Carreira', href: '/Categorys/Carreira' },
		{ id: uuidv4(), title: 'JavaScript', href: '/Categorys/JavaScript' },
		{ id: uuidv4(), title: 'Next Js', href: '/Categorys/Next-Js' },
		{ id: uuidv4(), title: 'Front-end', href: '/Categorys/Front-End' },
		{ id: uuidv4(), title: 'Back-end', href: '/Categorys/Back-end' },
		{ id: uuidv4(), title: 'React Js', href: '/Categorys/React-Js' },
		{ id: uuidv4(), title: 'HTML 5', href: '/Categorys/HTML' },
	]

	return (
		<header className=' bg-primary py-3 px-8 lg:flex items-center justify-between lg:h-36 w-full'>
			<div className='flex items-center justify-between w-full lg:w-auto'>
				<Logo />
				<Button
					onClick={toggleMenu}
					className='lg:hidden rounded-md w-12 flex items-center justify-center '
				>
					{isMenuOpen ? <X size={24} /> : <FaBars size={24} />}
				</Button>
			</div>
			<div
				className={` ${
					isMenuOpen ? 'flex ' : 'hidden'
				} lg:flex lg:flex-row flex-col items-center justify-center gap-5 mt-10 lg:mt-0`}
			>
				<Navigation className='w-full'>
					<NavigationList className='flex-col items-start space-x-0 w-full'>
						<Link href={'/'}>
							<NavigationItem>Home</NavigationItem>
						</Link>
						<Link href={'/About'}>
							<NavigationItem>Sobre</NavigationItem>
						</Link>
						<Link href={'/Posts'}>
							<NavigationItem>Posts</NavigationItem>
						</Link>

						{/* Dropdown links */}
						<NavigationItem
							isDrop
							id='dropdown1'
							className='hover:bg-none'
							dropdownItems={categorys.map((category) => (
								<Link href={category.href} key={category.id}>
									{category.title}
								</Link>
							))}
						>
							Categorias
						</NavigationItem>
					</NavigationList>
				</Navigation>

				<InputSearch />
			</div>
		</header>
	)
}

export { Header }
