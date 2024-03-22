

export function TitleSpan({text} : {text : string}) {
  return (
    <span className="text-md font-light  flex gap-1 items-center" >
      {text}
    </span>
  )
}