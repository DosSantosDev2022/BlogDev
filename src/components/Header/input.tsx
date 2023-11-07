import { BiSolidSearchAlt2 } from 'react-icons/bi'

export function InputSearch() {
  return (
    <form className="flex gap-2">
      <input className="p-2 border-none rounded-md outline-none bg-slate-50 text-slate-500" 
        type="search" 
        placeholder="Pesquisar" 
      />
      <button className=" text-slate-50 text-3xl rounded-md p-2">
        <BiSolidSearchAlt2/>
      </button>
    </form>
  )
}