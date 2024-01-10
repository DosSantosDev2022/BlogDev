'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function InputSearch() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log({ search })

    setSearch('')
    const value = search.trim().replace(/\s/g, '').toLocaleLowerCase()
    router.push(`SearchPosts/${value}`)
    console.log(value)
  }
  return (
    <form className="flex gap-2 w-full" onSubmit={handleSearch}>
      <input
        type="search"
        id="first_name"
        className="border border-slate-300 text-slate-900 font-light text-sm rounded-lg focus:ring-slate-300 focus:border-slate-300 block w-full p-2 bg-slate-100"
        placeholder="Buscar..."
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">P</button>
    </form>
  )
}
