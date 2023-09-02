import Link from 'next/link';

export default function CountryDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4">
      <Link
        className="px-4 py-2 my-4 inline-block border-slate-200 border-2 shadow rounded"
        href="/countries"
      >{`<- Back`}</Link>
      {children}
    </section>
  );
}
