export function TitleRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 px-1.5 py-2 rounded-md w-full bg-mycolor-50/50 flex items-center gap-2">
      {children}
    </div>
  )
}
