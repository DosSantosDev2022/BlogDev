'use client'
import { useSearchParams, useRouter } from 'next/navigation'

import { Input } from '../ui/input'

export function InputSearch() {
  const searchParams = useSearchParams()

  const { push } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    console.log(params)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    push(`/search/?${params.toString()}`)
    console.log(term)
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
      <Input type="search" id="search" placeholder="Buscar..." required />
    </form>
  )
}
