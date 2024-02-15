'use client'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { Button } from '../ui/button'
import { LucideSearch } from 'lucide-react'

export function InputSearch() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault()
    setSearch('')
    const value = search.trim().replace(/\s/g, '').toLocaleLowerCase()

    const pathname = '/SearchPosts/'
    router.push(`${pathname}${value}`)
  }
  return (
    <form className="flex gap-2 w-full" onSubmit={handleSearch}>
      <input
        type="search"
        id="first_name"
        className="border border-slate-300 text-slate-900 font-light text-sm rounded-sm focus:ring-slate-300 focus:border-slate-300 block w-full p-2 bg-slate-100"
        placeholder="Buscar..."
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className="flex items-center gap-1 font-normal"
        variant={'outline'}
        type="submit"
      >
        Buscar
      </Button>
    </form>
  )
}
