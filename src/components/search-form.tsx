'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useCallback } from 'react';

const regions = [
  {
    id: 'africa',
    value: 'Africa',
  },
  {
    id: 'america',
    value: 'America',
  },
  {
    id: 'asia',
    value: 'Asia',
  },
  {
    id: 'europe',
    value: 'Europe',
  },
  {
    id: 'oceania',
    value: 'Oceania',
  },
];
export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    e.preventDefault();
    router.push(
      pathname +
        '?' +
        createQueryString({
          name: formData.get('name')?.toString(),
          region: formData.get('region')?.toString(),
        })
    );
  };

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (queryObj: { name: string | undefined; region: string | undefined }) => {
      const params = new URLSearchParams(searchParams);
      params.delete('name');
      params.delete('region');
      if (queryObj.name) {
        params.set('name', queryObj.name);
      }
      if (queryObj.region) {
        params.set('region', queryObj.region);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="relative my-4 flex flex-col justify-start items-start"
      >
        <MagnifyingGlassIcon className="absolute left-2 top-3 h-4 w-4" />
        <input
          defaultValue={searchParams.get('name') ?? ''}
          name="name"
          className="w-full rounded px-8 dark:bg-slate-800"
          type="text"
          aria-label="country name"
          placeholder="search for a country"
        />
        <div className="my-4">
          <select
            name="region"
            id="region"
            aria-label="region"
            className="dark:bg-slate-800"
            defaultValue={searchParams.get('region') ?? 'default'}
          >
            <option value="default" disabled hidden>
              Filter by Region
            </option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.value}
              </option>
            ))}
          </select>
          <div className="my-4 flex gap-2">
            <button
              className="bg-red-600 px-4 text-red-50 py-2 rounded"
              type="reset"
              onClick={() => router.push('/countries')}
            >
              Reset
            </button>
            <button
              className="bg-blue-600 px-4 text-blue-50 py-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
