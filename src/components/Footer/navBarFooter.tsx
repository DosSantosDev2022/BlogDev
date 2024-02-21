'use client'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {
  FaSquareInstagram,
  FaSquareTwitter,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa6'

export function NavBarFooter() {
  const Links = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'About', url: '/' },
    { id: 3, text: 'Posts', url: '/' },
    { id: 4, text: 'Contact', url: '/' },
  ]

  const Links2 = [
    { id: 5, text: 'HTML e Css', url: '/' },
    { id: 6, text: 'JavaScript', url: '/' },
    { id: 7, text: 'React Js', url: '/' },
    { id: 8, text: 'Next Js', url: '/' },
  ]

  const social = [
    { id: 9, text: 'Facebook', url: '/', icon: <FaFacebook /> },
    { id: 10, text: 'Instagram', url: '/', icon: <FaSquareInstagram /> },
    { id: 11, text: 'Twitter', url: '/', icon: <FaSquareTwitter /> },
    { id: 12, text: 'LinkedIn', url: '/', icon: <FaLinkedin /> },
  ]
  return (
    <NavigationMenu.Root className="lg:col-span-3  w-full flex md:flex-row flex-col justify-around gap-10">
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl font-semibold">Navegação</h3>
        {Links.map((link) => (
          <NavigationMenu.Item key={link.id}>
            <Link className="text-secondary hover:underline" href={link.url}>
              {link.text}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl font-semibold">Categorias</h3>
        {Links2.map((link2) => (
          <NavigationMenu.Item key={link2.id}>
            <Link className="text-secondary hover:underline" href={link2.url}>
              {link2.text}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <NavigationMenu.List className="flex flex-col gap-2">
        <h3 className="text-secondary text-2xl font-semibold">Redes Sociais</h3>
        {social.map((link) => (
          <NavigationMenu.Item key={link.id}>
            <Link
              className="text-secondary flex items-center gap-3 hover:underline"
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
