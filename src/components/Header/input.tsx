
import { useSearch } from '@/context/searchContext';

import { BiSolidSearchAlt2 } from 'react-icons/bi'

export function InputSearch() {
   const {searchTerm, updateSearchTerm } = useSearch()
   
  return (
    <form className="flex gap-2">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
        type="search" 
        placeholder="Pesquisar" 
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <button className=" text-slate-50 text-3xl rounded-md p-2">
        <BiSolidSearchAlt2/>
      </button>
    </form>
  )
}