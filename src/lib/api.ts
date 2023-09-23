import { intersection } from './utils';

export async function fetchFilteredCountries(searchParams: {
  [key: string]: string | undefined;
}): Promise<any[] | null> {
  const selectedName = searchParams['name'];
  const selectedRegion = searchParams['region'];
  let filteredNameCountries = null;
  let filteredRegionCountries = null;
  let allCountries = null;
  if (selectedName) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${selectedName}?fields=name,flags,population,capital`
    );
    if (res.ok) {
      filteredNameCountries = await res.json();
    }
  }
  if (selectedRegion) {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,flags,population,capital`
    );
    if (res.ok) {
      filteredRegionCountries = await res.json();
    }
  }
  if (!selectedName && !selectedRegion) {
    const res = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,flags,population,capital`
    );
    if (res.ok) {
      allCountries = await res.json();
    }
  }
  let filteredCountries = null;
  if (selectedName && selectedRegion) {
    filteredCountries = intersection(
      filteredNameCountries,
      filteredRegionCountries
    );
  } else if (selectedName) {
    filteredCountries = filteredNameCountries;
  } else if (selectedRegion) {
    filteredCountries = filteredRegionCountries;
  } else {
    filteredCountries = allCountries;
  }
  return filteredCountries;
}
