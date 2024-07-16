import { GET_AUTHORS } from '@/app/api/queries/Get_Authors'
import { Author } from '@/components/Authors/author'
import { TitleSection } from '../globals/TitleSection'

export async function OurAuthors() {
  const { authors } = await GET_AUTHORS()
  return (
    <div className="w-full h-auto flex flex-col items-start justify-center gap-1 p-2 rounded-md bg-mycolor-50/15">
      <TitleSection.Root>
        <TitleSection.Highlight text="Nossos" />
        <TitleSection.Span text="Autores" />
      </TitleSection.Root>
      <div className="flex flex-col items-start justify-center space-y-5 p-2 w-full">
        {authors.map((author) => (
          <Author.Root
            key={author.id}
            className="flex items-start justify-start gap-2 w-full  px-4 py-2 rounded-md"
          >
            <Author.Avatar
              ImageProfile={author.photo.url}
              name={author.name}
              className="w-20 h-20"
            />
            <div className="flex flex-col ">
              <Author.Name
                nome={author.name}
                className="text-mycolor-900 text-lg font-bold"
              />
              <Author.Carrer
                className="mb-2 font-light text-mycolor-800"
                text={author.career}
              />
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
