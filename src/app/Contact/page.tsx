import Image from 'next/image'

import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { ContactCard } from './cards'
import { Metadata } from 'next'
import { FormContact } from './form'

export const metadata: Metadata = {
  title: 'Contato | Blog Dev',
  description: 'Entre em contato para novas parcerias',
}

const cardContact = [
  {
    nome: 'Instagram',
    paragraph:
      'Me chame no instagram e já aproveite para me conhecer melhor seguindo a minha rede social !',
    link: 'https://www.instagram.com/julianosantosdev/',
    icon: <FaInstagramSquare />,
  },
  {
    nome: 'WhasApp',
    paragraph:
      'Entre em contato pelo meu whastapp para fecharmos novos projetos',
    link: 'https://w.app/h6WP2t',
    icon: <IoLogoWhatsapp />,
  },
  {
    nome: 'Linkedin',
    paragraph:
      'Se quiser me conhecer melhor o meu trabalho este é o meu linkedin',
    link: 'https://www.linkedin.com/in/dossantosdev/',
    icon: <FaLinkedin />,
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 lg:px-16 px-5 w-full flex flex-col lg:flex-row justify-center items-start gap-10">
        <div className="w-full flex flex-col items-start justify-start">
          <h2 className="text-slate-900 font-semibold text-4xl">
            Entre em contato
          </h2>
          <p className="text-slate-700 font-medium text-lg">
            Aqui você pode me enviar ideias para criação de posts
          </p>
          <FormContact />
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            className="border shadow-md rounded-md"
            width={350}
            height={694}
            alt=""
            src={'/profile.png'}
          />
        </div>
      </section>
      <section className="py-28 lg:px-16 px-5 w-full flex flex-col lg:flex-row justify-center items-start gap-10 mb-20">
        {cardContact.map((item) => (
          <ContactCard
            name={item.nome}
            paragraph={item.paragraph}
            link={item.link}
            icon={item.icon}
            key={item.nome}
          />
        ))}
      </section>
    </main>
  )
}
