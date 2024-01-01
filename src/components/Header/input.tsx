export function InputSearch() {
  return (
    <form className="flex gap-2 w-full">
      <input
        type="search"
        id="first_name"
        className="border border-slate-300 text-slate-900 font-light text-sm rounded-lg focus:ring-slate-300 focus:border-slate-300 block w-full p-2 bg-slate-100"
        placeholder="Buscar..."
        required
      />
    </form>
  )
}
