import { Poppins } from 'next/font/google'
import './globals.css'
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
    <html lang="pt-br">
      <body
        className={`bg-secondary scrollbar scrollbar-thumb-slate-900  scrollbar-track-gray-100 ${font.className}`}
      >
        <Header />
        <div className="">{children}</div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
