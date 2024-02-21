'use client'
import { useSearchParams, useRouter } from 'next/navigation'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function InputSearch() {
  const searchParams = useSearchParams()

  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    }

    replace(`SearchPosts/?${params.toString()}`)
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
      <Button
        className="flex items-center gap-1 font-normal duration-500"
        variant={'outline'}
        type="button"
      >
        Buscar
      </Button>
    </form>
  )
}
