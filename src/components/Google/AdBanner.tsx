'use client'

import { useEffect } from 'react'

interface AdBannerTypes {
  dataAdSlot: string
  dataAdFormat: string
}

export function AdBanner({ dataAdFormat, dataAdSlot }: AdBannerTypes) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        )
      } catch (error) {
        console.error(error)
      }
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [dataAdSlot, dataAdFormat])

  return (
    <ins
      key={dataAdSlot}
      className="adsbygoogle bg-transparent w-full max-w-xs md:max-w-lg lg:max-w-2xl h-40 md:h-60 lg:h-72 flex justify-center items-center"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2827166560948178"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive="true"
    ></ins>
  )
}
