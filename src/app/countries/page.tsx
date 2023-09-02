import SearchForm from '@/components/search-form';
import Image from 'next/image';
import Link from 'next/link';

export default async function CountriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const url = searchParams['name']
    ? `https://restcountries.com/v3.1/name/${searchParams['name']}`
    : searchParams['region']
    ? `https://restcountries.com/v3.1/region/${searchParams['region']}`
    : 'https://restcountries.com/v3.1/all';
  const res = await fetch(url);
  if (res.status === 404) {
    return <h1>{`No country found with that filter`}</h1>;
  }
  const data = await res.json();
  return (
    <div className="bg-slate-100 px-8 py-4 dark:bg-slate-950">
      <SearchForm />
      <div className="grid gap-6 lg:grid-cols-4">
        {data &&
          data.map((country: any) => (
            <Link
              href={`/countries/${country.name.common.toLowerCase()}`}
              key={country.name.common}
              className="rounded bg-white shadow dark:bg-slate-800"
            >
              <Image
                src={country.flags.svg}
                className="aspect-video w-full rounded-t object-cover lg:h-52"
                height={400}
                width={400}
                alt={`flag of ${country.name.official}`}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {country.name.official}
                </h2>
                <h3>Population: {`${country.population}`}</h3>
                <h4>Region: {`${country.region}`}</h4>
                <h5>Capital: {`${country.capital}`}</h5>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
