interface TagProps {
  tagName: string
}

export function TagsPost({ tagName }: TagProps) {
  return (
    <span className="bg-slate-950 text-slate-50 text-xs w-[5rem] text-center p-[0.375rem] rounded-lg">
      {tagName}
    </span>
  )
}
