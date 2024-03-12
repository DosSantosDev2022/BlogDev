import { fetchHygraphQuery } from '@/app/api/fetchHygraph'
import { AllAuthors } from '@/types/Iauthors'
import { Author } from '../globals/author'

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
    }
  }
  `
  return fetchHygraphQuery(query)
}

export async function AllAuthors() {
  const { authors } = await GetAuthors()
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-2 p-2">
      <div className="lg:w-[22.5rem] h-12 md:w-full rounded-[10px] py-3 px-[6.375rem] bg-slate-900 flex items-center justify-center">
        <h3 className=" text-slate-50 ">Autores</h3>
      </div>
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
            </div>
          </Author.Root>
        ))}
      </div>
    </div>
  )
}
