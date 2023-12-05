'use client'

export default function Category({ params }: { params: { category: string } }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-4">
      <h1 className="text-3xl font-bold text-slate-900">
        {params.category} Posts{' '}
      </h1>
      <ul className=" flex items-center justify-center flex-wrap gap-4"></ul>
    </div>
  )
}
