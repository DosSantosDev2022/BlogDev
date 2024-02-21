'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage?: number
  totalPages?: number
}

export function PaginationPosts({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className=" px-2 mt-10 flex gap-2">
      <button className="w-12 h-10 flex items-center justify-center border rounded-sm hover:bg-primary hover:text-secondary duration-500 transition-all">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button className="w-12 h-10 border rounded-sm  hover:bg-primary hover:text-secondary duration-500 transition-all">
        1
      </button>
      <button className="w-12 h-10 border rounded-sm  hover:bg-primary hover:text-secondary duration-500 transition-all">
        2
      </button>
      <button className="w-12 h-10 border rounded-sm  hover:bg-primary hover:text-secondary duration-500 transition-all">
        3
      </button>
      <button className="w-12 h-10 ">...</button>
      <button className="w-12 h-10 flex items-center justify-center gap-1  border rounded-sm  hover:bg-primary hover:text-secondary duration-500 transition-all">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
