import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { BlogProvider } from '@/context/blogContext'

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '500' , '600' , '700']
})

export const metadata: Metadata = {
  title: 'Blog Dev',
  description: 'Um blog para desenvolvedores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-slate-50 ${font.className}`}>
        <BlogProvider>
          <Header/>
          <div className='px-20'>
          {children}
          </div>
        </BlogProvider>
      </body>
    </html>
  )
}
