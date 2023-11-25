import Image from 'next/image'
import { MdEmail } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { ContactCard } from './cards'

const cardContact = [
  {
    nome: 'Email',
    paragraph:
      'Mande um e-mail para tirar as suas dúvidas ou sejerir ideias para novos posts',
    link: 'Enviar e-mail',
    icon: <MdEmail />,
  },
  {
    nome: 'WhasApp',
    paragraph:
      'Entre em contato pelo meu whastapp para fecharmos novos projetos',
    link: 'Chamar no Whatsapp',
    icon: <IoLogoWhatsapp />,
  },
  {
    nome: 'Linkedin',
    paragraph: 'Se quiser me conhecer melhor este é o meu linkedin',
    link: 'Meu Linkedin',
    icon: <FaLinkedin />,
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 lg:px-16 px-5 w-full flex flex-col lg:flex-row justify-center items-start gap-20">
        <div className="w-full flex flex-col items-start justify-start">
          <h2 className="text-slate-900 font-semibold text-4xl">
            Entre em contato
          </h2>
          <p className="text-slate-700 font-medium text-lg">
            Aqui você pode me enviar ideias para criação de posts{' '}
          </p>
          <form className=" w-full flex flex-col gap-5 mt-10" action="">
            <input
              className="p-2 border-none outline-none bg-slate-100 rounded-sm text-slate-900"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              className="p-2 border-none outline-none bg-slate-100 rounded-sm text-slate-900"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <textarea
              className="p-2 border-none outline-none bg-slate-100 rounded-sm text-slate-900"
              name="coments"
              cols={30}
            />
            <button className="bg-slate-950 text-slate-50 p-2 rounded-md text-lg font-bold hover:scale-105 transition-all">
              Enviar
            </button>
          </form>
        </div>

        <Image
          className="border shadow-md rounded-md"
          width={350}
          height={694}
          alt=""
          src={'/profile.png'}
        />
      </section>
      <section className="py-28 lg:px-16 px-5 w-full flex flex-col lg:flex-row justify-center items-start gap-10 mb-20">
        {cardContact.map((item) => (
          <ContactCard
            email={item.nome}
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
