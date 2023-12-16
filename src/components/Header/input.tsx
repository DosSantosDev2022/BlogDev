export function InputSearch() {
  return (
    <form className="flex gap-2 w-full">
      <input
        type="text"
        id="first_name"
        className="border border-slate-300 text-slate-100 font-light text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 bg-slate-700"
        placeholder="Buscar"
        required
      />
    </form>
  )
}
