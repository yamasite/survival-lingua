import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import en from './messages/en.json';
import zhCN from './messages/zh-CN.json';
import zhTW from './messages/zh-TW.json';

// Can be imported from a shared config
const locales = ['en', 'zh-CN', 'zh-TW'];
const messages = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW
};

export default getRequestConfig(async ({locale}) => {
  const baseLocale = locale || 'en';
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale as any)) notFound();

  return {
    locale: baseLocale,
    messages: messages[baseLocale as keyof typeof messages]
  };
});