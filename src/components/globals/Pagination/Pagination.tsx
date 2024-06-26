'use client'

import { usePagination } from './usePagination'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationProps {
  page: number
  limit: number
  total: number
}

export function Pagination({ page, limit, total }: PaginationProps) {
  const { pages } = usePagination({
    page,
    limit,
    total,
  })

  const isFarstPage = page === 1
  const isLastPage = page === Math.ceil(total / limit)

  return (
    <div className="mt-8 w-full flex items-center justify-between p-2 ">
      <span className="font-light text-light flex w-full">
        Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
      </span>

      <div className="flex gap-2 items-center">
        <Button
          className="w-12 h-12 flex items-center justify-center"
          variant="primary"
          asChild
        >
          {!isFarstPage ? (
            <Link href={`/AllPosts?page=1`}>
              <ChevronsLeft />
            </Link>
          ) : (
            <Button
              variant="disabled"
              className="w-12 h-12 flex items-center justify-center"
            >
              <ChevronsLeft />
            </Button>
          )}
        </Button>
        {pages.map((pageNumber) => (
          <Button
            asChild
            key={pageNumber}
            className={
              page === pageNumber
                ? 'bg-light text-primary border hover:bg-slate-100 w-12 h-12 flex items-center justify-center " '
                : 'w-12 h-12 flex items-center justify-center'
            }
          >
            <Link href={`/AllPosts?page=${pageNumber}`}>{pageNumber}</Link>
          </Button>
        ))}

        <Button className="w-12 h-12 flex items-center justify-center" asChild>
          {!isLastPage ? (
            <Link href={`/AllPosts?page=${Math.ceil(total / limit)}`}>
              <ChevronsRight />
            </Link>
          ) : (
            <Button
              variant="disabled"
              className="w-12 h-12 flex items-center justify-center"
            >
              <ChevronsRight />
            </Button>
          )}
        </Button>
      </div>
    </div>
  )
}
