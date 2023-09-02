'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useCallback, useState } from 'react';

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
  const [countryName, setCountryName] = useState(
    searchParams.get('name') ?? ''
  );
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(pathname + '?' + createQueryString('name', countryName));
  };

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete('name');
      params.delete('region');
      params.set(name, value);

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
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
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
            onChange={(e) => {
              router.push(
                pathname + '?' + createQueryString('region', e.target.value)
              );
              setCountryName('');
            }}
          >
            <option disabled selected hidden>
              Filter by Region
            </option>
            {regions.map((region) => (
              <option
                selected={region.id === searchParams.get('region')}
                key={region.id}
                value={region.id}
              >
                {region.value}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}
