'use client'

import { Button } from '@/components/ui/button'
import { usePagination } from '@/hooks/usePagination'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import Link from 'next/link'

interface PaginationProps {
	path: string
	page: number
	limit: number
	total: number
}

const Pagination = ({ page, limit, total, path }: PaginationProps) => {
	const { pages } = usePagination({
		page,
		limit,
		total,
	})

	const isFarstPage = page === 1
	const isLastPage = page === Math.ceil(total / limit)
	const getHrefFarstPage = () => `${path}${1}`
	const getHrefLastPage = () => `${path}${Math.ceil(total / limit)}`
	return (
		<div className='mt-8 w-full flex flex-col gap-6 items-center justify-center p-2 '>
			<span className='font-light text-light flex w-full'>
				Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
			</span>

			<div className='flex gap-2 items-center w-full'>
				<Button
					className='w-8 h-8 flex items-center justify-center'
					asChild
				>
					{isFarstPage ? (
						<Button
							variant='disabled'
							className='w-8 h-8 flex items-center justify-center'
						>
							<ChevronsLeft />
						</Button>
					) : (
						<Link href={getHrefFarstPage()}>
							<ChevronsLeft />
						</Link>
					)}
				</Button>
				{pages.map((pageNumber) => (
					<Button
						asChild
						key={pageNumber}
						className={
							page === pageNumber
								? 'bg-light text-mycolor-900 border hover:bg-mycolor-100 w-8 h-8 flex items-center justify-center " '
								: 'w-8 h-8 flex items-center justify-center'
						}
					>
						<Link href={`${path}${pageNumber}`}>{pageNumber}</Link>
					</Button>
				))}

				<Button
					className='w-8 h-8 flex items-center justify-center'
					asChild
				>
					{isLastPage ? (
						<Button
							variant='disabled'
							className='w-8 h-8 flex items-center justify-center'
						>
							<ChevronsRight />
						</Button>
					) : (
						<Link href={getHrefLastPage()}>
							<ChevronsRight />
						</Link>
					)}
				</Button>
			</div>
		</div>
	)
}

export { Pagination }
