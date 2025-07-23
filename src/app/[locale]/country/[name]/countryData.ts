import { japanInfo } from './japan';
import { koreaInfo } from './korea';
import { malaysiaInfo } from './malaysia';
import { indonesiaInfo } from './indonesia';

interface App {
  name: string;
  description: string;
}

interface CountryInfo {
  name: string;
  basicInfo: {
    capital: string;
    language: string;
    currency: string;
  };
  culture: {
    customs: string[];
  };
  attractions: string[];
  food: string[];
  transportation: {
    trains: string;
    subways: string;
  };
  apps: App[];
}

const countryDataMap: { [key: string]: CountryInfo } = {
  japan: japanInfo,
  korea: koreaInfo,
  malaysia: malaysiaInfo,
  indonesia: indonesiaInfo,
};

export const getCountryData = (name: string) => {
  return countryDataMap[name.toLowerCase()];
};

export const getCountryNames = () => {
  return Object.keys(countryDataMap);
};