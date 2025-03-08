'use client'

import { useEffect } from 'react'

interface AdBannerTypes {
	dataAdSlot: string
	dataAdFormat: string
}

export function AdBanner({ dataAdFormat, dataAdSlot }: AdBannerTypes) {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			try {
				const ads =
					(window as unknown as { adsbygoogle: unknown[] }).adsbygoogle ||
					[]
				ads.push({})
			} catch (error) {
				console.error(error)
			}
		}, 500)

		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<div className='border p-2'>
			<ins
				key={dataAdSlot}
				className='adsbygoogle bg-transparent w-full  flex justify-center items-center'
				style={{ display: 'block' }}
				data-ad-client='ca-pub-2827166560948178'
				data-ad-slot={dataAdSlot}
				data-ad-format={dataAdFormat}
				data-full-width-responsive='true'
			/>
		</div>
	)
}
