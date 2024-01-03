import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

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
        className={`bg-slate-50 scrollbar scrollbar-thumb-slate-900 scrollbar-rounded scrollbar-track-gray-100 ${font.className}`}
      >
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
