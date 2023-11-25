import { useSearch } from '@/context/searchContext'
import { ChangeEvent, FormEvent, useState } from 'react'

import { BiSolidSearchAlt2 } from 'react-icons/bi'

export function InputSearch() {
  const { updateSearchTerm } = useSearch()
  const [localSearchTerm, setLocalSearchTerm] = useState('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateSearchTerm(localSearchTerm)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setLocalSearchTerm(searchTerm)

    if (searchTerm.trim() === '') {
      updateSearchTerm('')
    }
  }

  return (
    <form className="flex gap-2" onSubmit={handleSearch}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
        type="search"
        placeholder="Pesquisar"
        value={localSearchTerm}
        onChange={handleInputChange}
      />
      <button className=" text-slate-50 text-3xl rounded-md p-2">
        <BiSolidSearchAlt2 />
      </button>
    </form>
  )
}
