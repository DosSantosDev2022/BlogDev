import Image from 'next/image'
import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import Link from 'next/link'
import { RichTextContent } from '@graphcms/rich-text-types'
import { CMSIcon, RichText } from '@/components/index'

interface AuthorLink {
  id: string
  link: string
  linkIcon: string
}

export interface ABOUT_ME {
  about: {
    id: string
    slug: string
    title: string
    carrer: string
    biograph: {
      raw: RichTextContent
    }
    authorImage: {
      url: string
    }
    socialLinks: AuthorLink[]
  }
}

const GET_ABOUT_DATA = async (): Promise<ABOUT_ME> => {
  const query = `
  query MyQuery {
    about(where: {slug: "about"}) {
      id
      slug
      title
      carrer
      biograph {
        raw
      }
      authorImage {
        url
      }
      socialLinks {
        id
        link
        linkIcon
      }
    }
  }
  `
  return fetchHygraphQuery(query)
}

export default async function AboutPage() {
  const { about } = await GET_ABOUT_DATA()

  return (
    <div className="w-full h-full flex lg:flex-row flex-col gap-8 lg:p-20 p-8 items-center justify-center">
      <div className="w-full lg:w-[450px] h-[450px] relative p-2">
        <Image
          alt={about.title}
          src={about.authorImage.url}
          fill
          className="object-cover border rounded-md"
        />
      </div>

      <div className="w-full  p-2">
        <RichText
          content={about.biograph.raw}
          renderers={{
            bold: ({ children }) => (
              <b className="text-mycolor text-base font-bold">{children} </b>
            ),
            p: ({ children }) => (
              <p className="font-light mt-2 text-slate-700">{children}</p>
            ),
          }}
        />
        <div className="w-full mt-4  flex items-center gap-2">
          {about.socialLinks.map((link) => (
            <Link key={link.id} href={link.link}>
              <CMSIcon
                icon={link.linkIcon}
                className="text-2xl text-slate-700"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
