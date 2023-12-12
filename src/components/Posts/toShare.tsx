'use client'

interface ToShareProps {
  url: string
}

export function ToShare({ url }: ToShareProps) {
  return (
    <>
      <div className="w-full p-2 flex flex-col items-start justify-center gap-3">
        <h4 className="text-slate-900 font-bold text-lg">
          Compartilhe com seus amigos !!
        </h4>
        <div className="flex items-center justify-start gap-3"></div>
      </div>
    </>
  )
}
