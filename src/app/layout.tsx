import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { BlogProvider } from '@/context/blogContext'
import { Footer } from '@/components/Footer'
import { SearchProvider } from '@/context/searchContext'

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
      <body className={`bg-slate-50 scrollbar scrollbar-thumb-slate-900 scrollbar-rounded scrollbar-track-gray-100 ${font.className}`}>
      <SearchProvider>
          <BlogProvider>
            <Header/>
            <div className='container mx-auto'>
            {children}
            </div>
            <Footer/>
          </BlogProvider>
        </SearchProvider>
      </body>
    </html>
  )
}
