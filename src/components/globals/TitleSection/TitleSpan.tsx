export function TitleSpan({ text }: { text: string }) {
  return (
    <span className="text-md font-normal text-mycolor-900 flex gap-1 items-center">
      {text}
    </span>
  )
}
