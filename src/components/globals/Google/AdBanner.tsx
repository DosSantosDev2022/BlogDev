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
      className="adsbygoogle bg-transparent w-full border min-h-[100px] flex justify-center items-center"
      style={{ display: 'block', width: '100%', minHeight: '100px' }}
      data-ad-client="ca-pub-2827166560948178"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive="true"
    ></ins>
  )
}
