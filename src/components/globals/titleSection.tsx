
interface TitleSectionProps {
  title: string
}

export function TitleSection({title} : TitleSectionProps) {
  return (
    <div className="mb-3 p-1 border">
      <h6 className="text-md font-light  flex gap-1 items-center">
        <span className="bg-slate-900 p-1 rounded-sm text-slate-50">Posts</span>
         {title}
      </h6>
    </div>
  )
}