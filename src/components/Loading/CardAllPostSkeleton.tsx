import { Skeleton } from '../ui/skeleton'

export function CardAllPostSkeleton() {
  return (
    <>
      <div className="w-[372px] h-[450] flex flex-col items-start justify-start border rounded-sm shadow-sm space-y-2 ">
        <Skeleton className="w-[372px] h-[400px] " />

        <div className="flex flex-col items-start p-2 w-full gap-2">
          <Skeleton className="w-[5rem] text-center p-[0.375rem] rounded-lg" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="p-2 mt-2 w-full" />
        </div>
      </div>{' '}
    </>
  )
}
