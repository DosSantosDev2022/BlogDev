import Link from 'next/link'

export default function CustomPage404() {
	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 overflow-hidden'>
			<div className='absolute inset-0 flex items-center justify-center opacity-10'>
				<h1 className='text-[340px] font-bold text-mycolor-600'>404</h1>
			</div>
			<div className='relative z-10 text-center'>
				<div className='flex flex-col gap-3 mb-10 w-[374px] px-2 py-3 '>
					<h2 className='text-2xl font-bold text-gray-900'>
						Página não encontrada!
					</h2>
					<p className='text-lg font-light'>
						Não foi possível localizar o conteúdo buscado, por favor
						retorne a página inicial e tente novamente.
					</p>
				</div>

				<Link
					className='bg-mycolor-800 hover:bg-mycolor-700 duration-300 px-6 py-3 rounded-md text-mycolor-50'
					href={'/'}
				>
					Voltar para a página inicial
				</Link>
			</div>
		</div>
	)
}
