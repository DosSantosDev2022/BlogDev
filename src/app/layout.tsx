import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import { Footer, Header } from '@/components/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import type { Metadata } from 'next'

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
			lang='pt-BR'
			className='custom-scrollbar bg-background text-foreground'
		>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2827166560948178'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={`bg-secondary overflow-x-hidden ${font.className}`}>
				<Header />
				<main>{children}</main>
				<Footer />
				<ToastContainer />
			</body>
		</html>
	)
}
