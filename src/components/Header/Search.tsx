'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'

import { Input } from '../ui/input'

export function InputSearch() {
  const searchParams = useSearchParams()

  const { push } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    push(`/search?${params.toString()}`)
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
          type="search"
          id="search"
          required
          placeholder="Buscar..."
        />
      </Input.Root>
    </form>
  )
}
