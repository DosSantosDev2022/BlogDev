import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { CMSIcon, RichText } from '@/components/index'
import type { RichTextContent } from '@graphcms/rich-text-types'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

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
	return fetchHygraphQuery(query, { cache: 'force-cache' })
}

export default async function AboutPage() {
	const { about } = await GET_ABOUT_DATA()

	return (
		<div
			className={twMerge(
				'relative w-full h-full flex flex-col gap-8 lg:p-16 p-4 items-center justify-center',
				'bg-[url("https://media.graphassets.com/BFsdlNDRjOmhPDwYgKOt")] bg-cover bg-no-repeat',
			)}
		>
			<div className='absolute inset-0 bg-muted opacity-95 z-0' />
			<div className='z-10'>
				<div className='w-full lg:p-4 p-2'>
					<h1 className='font-bold text-4xl lg:text-6xl'>Sobre o autor</h1>
				</div>
				<div className='flex lg:flex-row flex-col lg:space-x-10 items-start w-full lg:p-4 p-2'>
					<div className='w-full lg:w-[450px] lg:h-[450px] h-[310px] relative p-2'>
						<Image
							alt={about.title}
							src={about.authorImage.url}
							fill
							objectFit='cover'
							className='shadow-lg border rounded-lg'
						/>
					</div>

					<div className='w-full lg: max-w-[768px] p-2'>
						<RichText
							content={about.biograph.raw}
							renderers={{
								bold: ({ children }) => (
									<b className='text-mycolor text-base font-bold'>
										{children}{' '}
									</b>
								),
								p: ({ children }) => (
									<p className='font-light mt-2 text-slate-700'>
										{children}
									</p>
								),
							}}
						/>
						<div className='w-full mt-4 p-2 lg:p-4 flex flex-col items-start gap-2'>
							<h2 className='text-lg font-normal'>
								Me siga nas redes sociais !
							</h2>
							<div className='flex items-start space-x-2 w-full'>
								{about.socialLinks.map((link) => (
									<Link key={link.id} href={link.link}>
										<CMSIcon
											icon={link.linkIcon}
											className='text-3xl text-primary'
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
