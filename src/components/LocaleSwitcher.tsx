'use client';

import {useLocale, useTranslations} from 'next-intl';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    const currentPathname = window.location.pathname;
    const newPathname = currentPathname.replace(/\/(en|zh-CN|zh-TW)/, `/${nextLocale}`);
    window.location.href = newPathname;
  };

  return (
    <select defaultValue={locale} onChange={onSelectChange}>
      {['en', 'zh-CN', 'zh-TW'].map((cur) => (
        <option key={cur} value={cur}>
          {t(cur as any)}
        </option>
      ))}
    </select>
  );
}