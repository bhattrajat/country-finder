import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="p-4">
      <Skeleton className="relative my-4 h-8 flex flex-col justify-start items-start" />
      <Skeleton className="relative my-4 h-6 flex flex-col justify-start items-start" />
      <div className="grid gap-6 my-4 lg:grid-cols-4">
        {Array(8)
          .fill(0)
          .map((_, ind) => (
            <Skeleton key={ind} className="h-80" />
          ))}
      </div>
    </div>
  );
}
