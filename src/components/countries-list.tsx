'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CountriesList({ countries }: { countries: any[] }) {
  const [lastIndex, setLastIndex] = useState(12);
  const visibleCountries = countries.slice(0, lastIndex);
  const lastVisibleCountryRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    setLastIndex(12);
  }, [countries]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && lastIndex <= countries.length - 1) {
        setLastIndex((prevIndex) => prevIndex + 12);
      }
    });
    if (lastVisibleCountryRef.current) {
      observer.observe(lastVisibleCountryRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [countries, lastIndex]);
  return (
    visibleCountries &&
    visibleCountries.map((country: any, ind) => (
      <Link
        ref={
          ind === visibleCountries.length - 1
            ? lastVisibleCountryRef
            : undefined
        }
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
        <div className="p-4 ">
          <h2 className="text-lg font-semibold">{country.name.official}</h2>
          <h3>Population: {`${country.population}`}</h3>
          <h4>Region: {`${country.region}`}</h4>
          <h5>Capital: {`${country.capital}`}</h5>
        </div>
      </Link>
    ))
  );
}
