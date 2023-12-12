import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'

interface AuthorProps {
  ImageProfile: string
  Name: string
  CreateAd: string
  nameStyles: string
  dataStyles: string
}

export function Author({
  CreateAd,
  ImageProfile,
  Name,
  nameStyles,
  dataStyles,
}: AuthorProps) {
  return (
    <div className="flex items-start justify-start gap-2">
      <Image
        width={100}
        height={100}
        quality={100}
        src={ImageProfile}
        alt={Name}
        className="rounded-full w-12 h-12 "
      />
      <div className="flex flex-col gap-1">
        <p className={nameStyles}>{Name}</p>
        <p className={dataStyles}>
          {format(new Date(CreateAd), "dd 'de' MMM 'de' yyyy", {
            locale: ptBR,
          })}
        </p>
      </div>
    </div>
  )
}
