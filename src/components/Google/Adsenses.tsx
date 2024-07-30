import Script from 'next/script'

interface AdsensesProps {
  pId: string
}

export function AdSenses({ pId }: AdsensesProps) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      security="afterInteractive"
    />
  )
}
