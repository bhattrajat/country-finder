import Image from 'next/image';
import Loading from './loading';

export default async function CountryDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
  );
  const [country] = await res.json();
  const borderCountries = country.borders
    ? await Promise.all(
        country.borders.map((code: string) =>
          fetch(
            `https://restcountries.com/v3.1/alpha/${code}?fields=name`
          ).then((res) => res.json())
        )
      )
    : null;

  return (
    <>
      <div className="lg:flex lg:gap-8">
        <Image
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full lg:max-w-2xl"
          width={400}
          objectFit="cover"
          height={400}
        />
        <div>
          <h2 className="text-lg lg:text-2xl font-bold mt-4">
            {country.name.common}
          </h2>
          <div className="lg:flex lg:gap-4">
            <dl className="grid my-4 grid-cols-2 gap-2">
              <dt className="font-semibold">Native Name:</dt>
              <dd className="">
                {Object.keys(country.name.nativeName)
                  .map((code) => country.name.nativeName?.[code].common)
                  .join(',')}
              </dd>
              <dt className="font-semibold">Population:</dt>
              <dd>{country.population.toLocaleString('en-US')}</dd>
              <dt className="font-semibold">Region:</dt>
              <dd>{country.region}</dd>
            </dl>
            <dl className="grid mt-6 mb-4 lg:my-4 grid-cols-2 gap-2">
              <dt className="font-semibold">Top level domain:</dt>
              <dd className="">{country?.tld?.[0]}</dd>
              <dt className="font-semibold">Currencies:</dt>
              <dd>
                {Object.keys(country.currencies)
                  .map((code) => country.currencies[code].name)
                  .join(',')}
              </dd>
              <dt className="font-semibold">Languages:</dt>
              <dd>
                {Object.keys(country.languages)
                  .map((code) => country.languages[code])
                  .join(',')}
              </dd>
            </dl>
          </div>
          {borderCountries && (
            <div>
              <h3 className="text-lg font-semibold">Border Countries:</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {borderCountries.map((country) => (
                  <li
                    className="px-4 py-2 text-center border-2 rounded border-slate-300 shadow"
                    key={country.name.common}
                  >
                    {country.name.common}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
