import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import type { AllAuthors } from '@/types/Iauthors'

import { Author } from '../globals/author'
import { SectionTitle } from '../globals/SectionTitle'

const GetAuthors = async (): Promise<AllAuthors> => {
  const query = `
  query GetAllAuthors {
    authors(stage: PUBLISHED) {
      id
      name
      career
      bio {
        text
      }
      photo {
        url
      }
      authorlink {
        id
        link
        linkIcon
      }
    }
  }
  `
  return fetchHygraphQuery(query)
}

export async function AllAuthors() {
  const { authors } = await GetAuthors()
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-2 p-2">
      <SectionTitle title="Autores" />
      <div className="flex flex-col items-center justify-center space-y-5 p-2">
        {authors.map((author) => (
          <Author.Root
            key={author.id}
            className="flex items-start justify-start gap-2 w-[22.5rem] border px-4 py-2 rounded-md"
          >
            <Author.Avatar ImageProfile={author.photo.url} name={author.name} />
            <div className="flex flex-col ">
              <Author.Name
                nome={author.name}
                className="text-zinc-900 text-lg font-bold"
              />
              <Author.Carrer className="mb-2" text={author.career} />
              <div className="flex items-center gap-4">
                {author.authorlink.map((link) => (
                  <Author.Link
                    key={link.id}
                    Url={link.link}
                    icon={link.linkIcon}
                    className="hover:scale-105 duration-500 transition-all "
                  />
                ))}
              </div>
            </div>
          </Author.Root>
        ))}
      </div>
    </div>
  )
}
