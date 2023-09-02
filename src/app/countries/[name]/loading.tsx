import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div>
      <Skeleton className="px-4 py-2 h-8 w-20 my-4 inline-block border-slate-200 border-2 shadow rounded" />
      <div className="lg:flex lg:gap-8">
        <Skeleton className="w-full h-96 lg:max-w-2xl" />
        <div className="lg:flex-grow">
          <Skeleton className="h-8 w-40 mt-4" />
          <div className="lg:flex w-full lg:gap-4">
            <Skeleton className="grid my-4 lg:w-1/2 h-20 grid-cols-2 gap-2" />
            <Skeleton className="grid mt-6 lg:w-1/2 h-20 mb-4 lg:my-4 grid-cols-2 gap-2" />
          </div>
          <div>
            <Skeleton className="h-12" />
            <div className="grid grid-cols-3 gap-2">
              {Array(3)
                .fill(0)
                .map((_, ind) => (
                  <Skeleton
                    className="px-4 py-2 text-center h-8 border-2 rounded border-slate-300 shadow"
                    key={ind}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
