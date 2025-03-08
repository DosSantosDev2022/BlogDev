import Link from 'next/link'

const Logo = () => {
	return (
		<>
			<Link href={'/'}>
				<h1 className='text-primary-foreground font-bold text-4xl'>
					Blog Dev
				</h1>
			</Link>
		</>
	)
}

export { Logo }
