interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="w-full h-12 rounded-[10px] py-3 px-[6.375rem] bg-primary flex items-center justify-center">
      <h3 className=" text-secondary ">{title}</h3>
    </div>
  )
}
