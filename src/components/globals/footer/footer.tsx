import { Logo } from '@/components'
import { FormFooter } from './formFooter'
import { NavBarFooter } from './navBarFooter'

const Footer = () => {
	return (
		<footer className='grid lg:grid-cols-6 grid-cols-1 gap-20 items-center bg-mycolor-950 lg:px-16 lg:py-20 px-5 py-10'>
			<div className=' lg:col-span-3 flex flex-col items-start justify-center gap-5'>
				<Logo />
				<p className='text-mycolor-50'>
					Cadastre-se em nosso newsletter para se manter atualizado sobre
					nossos lançamentos.
				</p>
				<FormFooter />
			</div>
			<NavBarFooter />
		</footer>
	)
}

export { Footer }
