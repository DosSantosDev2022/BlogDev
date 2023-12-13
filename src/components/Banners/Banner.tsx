import Image from 'next/image'

export function Banner() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src={'/banner.png'}
          alt=""
          width={720}
          height={720}
          quality={100}
        />
      </div>
    </>
  )
}
