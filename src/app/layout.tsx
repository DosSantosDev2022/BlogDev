import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import { Footer, Header, AdSenses } from '@/components/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Metadata } from 'next'
import { LikesProvider } from '@/context/LikesContext'

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
      <head>
        <AdSenses pId="pub-2827166560948178" />
      </head>
      <body className={`bg-secondary overflow-x-hidden ${font.className}  `}>
        <LikesProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
          <ToastContainer />
        </LikesProvider>
      </body>
    </html>
  )
}
