'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'
import { Input } from '../ui/input'

export function InputSearch() {
  const router = useRouter()
  const query = router.push
  const searchParams = new URLSearchParams(query as unknown as string)
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(term: string) {
    if (term) {
      searchParams.set('query', term)
    } else {
      searchParams.delete('query')
    }

    router.push(`/search?${searchParams.toString()}&page=1`)

    // Limpar o valor do campo de busca após submeter a busca
    setSearchTerm('')
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
          search: { value: string }
        }
        const term = target.search.value
        handleSearch(term)
      }}
      className="flex gap-2 w-full"
    >
      <Input.Root className="bg-mycolor-900">
        <Input.Icon>
          <CiSearch size={18} className="text-mycolor-50" />
        </Input.Icon>
        <Input.Input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          placeholder="Buscar..."
        />
      </Input.Root>
    </form>
  )
}
