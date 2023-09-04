import CountriesList from '@/components/countries-list';
import SearchForm from '@/components/search-form';

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
  console.log(url);
  const res = await fetch(url, { cache: 'no-store' });
  if (res.status === 404) {
    return <h1>{`No country found with that filter`}</h1>;
  }
  const data = await res.json();
  console.log(data[0].name.common);
  return (
    <div className="bg-slate-100 px-8 py-4 dark:bg-slate-950">
      <SearchForm />
      <div className="grid gap-6 lg:grid-cols-4">
        <CountriesList countries={data} />
      </div>
    </div>
  );
}
