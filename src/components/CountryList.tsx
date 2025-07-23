import Link from 'next/link';
import { useLocale } from 'next-intl';

const countries = [
  { name: 'Japan', path: 'japan' },
  { name: 'South Korea', path: 'korea' },
  { name: 'Malaysia', path: 'malaysia' },
  { name: 'Indonesia', path: 'indonesia' },
];

const CountryList = () => {
  const locale = useLocale();
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Explore Countries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Link key={country.name} href={`/${locale}/country/${country.path}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CountryList;