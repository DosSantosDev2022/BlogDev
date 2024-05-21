'use client'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { FaSquareInstagram, FaSquareTwitter, FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'

export function NavBarFooter() {
  const Links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'Sobre o autor', url: '/About' },
    { id: 3, text: 'Posts', url: '/AllPosts' },
    { id: 4, text: 'Contato', url: '/Contact' },
  ]

  const Links2 = [
    { id: 5, text: 'HTML e Css', url: '/' },
    { id: 6, text: 'JavaScript', url: '/' },
    { id: 7, text: 'React Js', url: '/' },
    { id: 8, text: 'Next Js', url: '/' },
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
    <NavigationMenu.Root className="lg:col-span-3  w-full flex md:flex-row flex-col justify-around gap-10">
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-blumine-50 text-2xl font-semibold">Navegação</h3>
        {Links.map((link) => (
          <NavigationMenu.Item key={link.id}>
            <Link
              className="text-blumine-50 hover:underline font-light"
              href={link.url}
            >
              {link.text}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-blumine-50 text-2xl font-semibold">Categorias</h3>
        {Links2.map((link2) => (
          <NavigationMenu.Item key={link2.id}>
            <Link
              className="text-blumine-50 hover:underline font-light"
              href={link2.url}
            >
              {link2.text}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-blumine-50 text-2xl font-semibold">
          Redes Sociais
        </h3>
        {social.map((link) => (
          <NavigationMenu.Item key={link.id}>
            <Link
              className="text-blumine-50 flex items-center gap-3 hover:underline font-light"
              href={link.url}
            >
              <i className="text-lg">{link.icon}</i>
              {link.text}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
