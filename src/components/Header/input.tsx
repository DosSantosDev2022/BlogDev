import { BiSolidSearchAlt2 } from 'react-icons/bi'

export function InputSearch() {
  return (
    <form className="flex gap-2">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-500 leading-tight focus:outline-none focus:shadow-outline"
        type="search" 
        placeholder="Pesquisar" 
      />
      <button className=" text-slate-50 text-3xl rounded-md p-2">
        <BiSolidSearchAlt2/>
      </button>
    </form>
  )
}