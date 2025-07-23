import { getCountryData } from './countryData';
import { getTranslations } from 'next-intl/server';

interface App {
  name: string;
  description: string;
}

type Props = {
  params: Promise<{ name: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { name, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const countryData = getCountryData(name);
  const countryName = countryData ? countryData.name : 'Country';

  return {
    title: `Survival Lingua - ${countryName}`,
  };
}

export default async function CountryPage({ params }: Props) {
  const { name } = await params;
  const countryData = getCountryData(name);

  if (!countryData) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{countryData.name}</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Information</h2>
          <p><strong>Capital:</strong> {countryData.basicInfo.capital}</p>
          <p><strong>Language:</strong> {countryData.basicInfo.language}</p>
          <p><strong>Currency:</strong> {countryData.basicInfo.currency}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Culture</h2>
          <ul className="list-disc list-inside">
            {countryData.culture.customs.map((custom: string, index: number) => (
              <li key={index}>{custom}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Popular Attractions</h2>
          <ul className="list-disc list-inside">
            {countryData.attractions.map((attraction: string, index: number) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Food</h2>
          <ul className="list-disc list-inside">
            {countryData.food.map((food: string, index: number) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Transportation</h2>
          <p>{countryData.transportation.trains}</p>
          <p>{countryData.transportation.subways}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Recommended Apps</h2>
          <ul className="list-disc list-inside">
            {countryData.apps.map((app: App, index: number) => (
              <li key={index}><strong>{app.name}:</strong> {app.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
