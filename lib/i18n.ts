import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import enCommon from '@/locales/en/common.json';
import caCommon from '@/locales/ca/common.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { common: enCommon },
      ca: { common: caCommon },
    },
    lng: 'ca', // if you're using a language detector, do not define the lng option
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export { useTranslation, i18n };
