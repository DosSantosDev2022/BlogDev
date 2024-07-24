'use client'

import { useEffect } from 'react'

interface AdBannerTypes {
  dataAdSlot: string
  dataAdFormat: string
}

export function AdBanner({ dataAdFormat, dataAdSlot }: AdBannerTypes) {
  useEffect(() => {
    try {
      ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      )
    } catch (error) {
      console.error(error)
    }
  }, [dataAdSlot, dataAdFormat])

  return (
    <div key={dataAdSlot} className="bg-zinc-100 w-full border">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2827166560948178"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}
