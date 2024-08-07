import Link from 'next/link'
import { TitleSection } from '@/components/index'
import { GET_CATEGORYS } from '@/app/api/queries/Get_Categorys'

export async function NavCategorys() {
  const { tags } = await GET_CATEGORYS()
  const counts: { [key: string]: number } = {}
  tags.forEach((tag) => {
    counts[tag.tagName] = tag.posts.length
  })

  return (
    <div className="w-full h-auto flex flex-col items-start justify-center gap-1  rounded-md bg-mycolor-50/15">
      <TitleSection.Root>
        <TitleSection.Highlight text="Posts" />
        <TitleSection.Span text="por categorias" />
      </TitleSection.Root>
      <div className="flex flex-col mt-5 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-mycolor-600  scrollbar-track-mycolor-50 gap-2  items-center justify-center w-full">
        {tags.map((tag) => (
          <ul key={tag.tagName} className="w-full  ">
            <li className=" cursor-pointer flex items-center justify-between hover:bg-mycolor-100 duration-300 transition-all  rounded-md shadow-sm px-5 py-[10px] text-start text-mycolor-900">
              <Link className="text-sm" href={`/Categorys/${tag.tagName}`}>
                {tag.tagName}
              </Link>

              <span key={tag.tagName}>{counts[tag.tagName] || 0}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
