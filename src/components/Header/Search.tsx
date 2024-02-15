'use client'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { Button } from '../ui/button'
import { LucideSearch } from 'lucide-react'
import { Input } from '../ui/input'

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
      <Input
        type="search"
        id="first_name"
        placeholder="Buscar..."
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className="flex items-center gap-1 font-normal duration-500"
        variant={'outline'}
        type="submit"
      >
        Buscar
      </Button>
    </form>
  )
}
