import CountriesList from '@/components/countries-list';
import SearchForm from '@/components/search-form';
import { fetchFilteredCountries } from '@/lib/api';

export default async function CountriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const filteredCountries = await fetchFilteredCountries(searchParams);
  return (
    <div className="bg-slate-100 px-8 py-4 dark:bg-slate-950">
      <SearchForm />
      <div className="grid gap-6 lg:grid-cols-4">
        {!filteredCountries || filteredCountries.length === 0 ? (
          <h1>{`No country found with that filter`}</h1>
        ) : (
          <CountriesList countries={filteredCountries} />
        )}
      </div>
    </div>
  );
}
