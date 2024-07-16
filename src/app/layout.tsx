import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Blog Dev',
  description: 'Um blog para desenvolvedores',
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className="scrollbar scrollbar-track-mycolor-50 scrollbar-thumb-mycolor-800 overflow-x-hidden scrollbar-thumb-rounded-full"
    >
      <body className={`bg-secondary  ${font.className}  `}>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.PUBLIC_GOOGLE_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        ></Script>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
