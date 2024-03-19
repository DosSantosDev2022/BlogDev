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
            className="flex items-start justify-start gap-2 w-[22.5rem] border px-2 py-4 rounded-md"
          >
            <Author.Avatar ImageProfile={author.photo.url} name={author.name} />
            <div className="flex flex-col gap-1">
              <Author.Name
                nome={author.name}
                className="text-zinc-900 text-lg font-medium"
              />
              <Author.Bio text={author.bio.text} />
              <div className='flex items-center gap-4'>
                {author.authorlink.map((link) => (
                  <Author.Link key={link.id} Url={link.link} icon={link.linkIcon} />
                ))}
            </div>
            </div>
            
          </Author.Root>
        ))}
      </div>
    </div>
  )
}
