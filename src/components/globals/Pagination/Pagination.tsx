'use client'
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination'
import { usePagination } from './usePagination'

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
  const lastPostIndex = Math.min(page * limit, total)
  return (
    <div className="mt-8 w-full flex items-center justify-between p-2 ">
      <div className="w-full">
        {`Mostrando ${lastPostIndex > 0 ? (page - 1) * limit + 1 : 0} - ${lastPostIndex} de ${total}`}
      </div>
      <PaginationRoot>
        <PaginationContent>
          {pages.map((pageNumber) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={`border rounded-sm hover:bg-slate-800 hover:text-slate-50 ${pageNumber === page ? 'bg-slate-800 text-slate-50' : ''} `}
                href={`/AllPosts?page=${pageNumber}&limit=${limit}`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </PaginationRoot>
    </div>
  )
}
