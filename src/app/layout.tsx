import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { Metadata } from 'next'

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
      className="scrollbar scrollbar-track-blumine-50 scrollbar-thumb-blumine-600 overflow-y-scroll scrollbar-thumb-rounded-full"
    >
      <body className={`bg-secondary  ${font.className}  `}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
