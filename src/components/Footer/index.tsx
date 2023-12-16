'use client'
import Link from 'next/link'
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
} from 'react-icons/fa6'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Logo } from '../Header/logo'
import { FormFooter } from './formFooter'

export function Footer() {
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
    <footer className="grid lg:grid-cols-6 grid-cols-1 gap-20 items-center bg-slate-950 lg:px-16 lg:py-20 px-5 py-10">
      <div className=" lg:col-span-3 flex flex-col items-start justify-center gap-5">
        <Logo />
        <p className="text-slate-50">
          Cadastre-se em nosso newsletter para se manter atualizado sobre nossos
          lançamentos.
        </p>
        <FormFooter />
      </div>
      <NavigationMenu.Root className="lg:col-span-3  w-full flex md:flex-row flex-col justify-around gap-10">
        <NavigationMenu.List className="flex flex-col gap-2">
          <h3 className="text-slate-50 text-2xl font-semibold">Navegação</h3>
          {Links.map((link) => (
            <NavigationMenu.Item key={link.id}>
              <Link className="text-slate-50" href={link.url}>
                {link.text}
              </Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
        <NavigationMenu.List className="flex flex-col gap-2">
          <h3 className="text-slate-50 text-2xl font-semibold">Categorias</h3>
          {Links2.map((link2) => (
            <NavigationMenu.Item key={link2.id}>
              <Link className="text-slate-50" href={link2.url}>
                {link2.text}
              </Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
        <NavigationMenu.List className="flex flex-col gap-2">
          <h3 className="text-slate-50 text-2xl font-semibold">
            Redes Sociais
          </h3>
          {social.map((link) => (
            <NavigationMenu.Item key={link.id}>
              <Link
                className="text-slate-50 flex items-center gap-3"
                href={link.url}
              >
                <i className="text-lg">{link.icon}</i>
                {link.text}
              </Link>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </footer>
  )
}
