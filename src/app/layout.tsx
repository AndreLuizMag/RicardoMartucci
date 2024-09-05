import type { Metadata } from 'next'
import '@/styles/main.scss'
import 'helix-color'
import { Header } from '@/components/Header'
import { Montserrat } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { BtnFixed } from '@/components/BtnFixed'

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Dr. Ricardo Martucci',
	description: 'Referência no tratamento de varizes e especialista em transplantes de ponte de safena.',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='pt-BR'>
			<head>
				<link rel='icon' href='/favicon.png' sizes='any' />
			</head>
			<body
				className={`${montserrat.className} bg-light-primary`}>
				<Header />
				{children}
				<BtnFixed />
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
