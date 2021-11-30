import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

// Nice to have, a way to handle all the translatioins without import them like this :S
import enCommon from '@/locales/en/common.json';
import enProjects from '@/locales/en/projects.json';
import enManifest from '@/locales/en/manifest.json';
import caCommon from '@/locales/ca/common.json';
import caProjects from '@/locales/ca/projects.json';
import caManifest from '@/locales/ca/manifest.json';


export const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { common: enCommon, projects: enProjects, manifest: enManifest },
      ca: { common: caCommon, projects: caProjects, manifest: caManifest },
    },
    lng: 'ca', // if you're using a language detector, do not define the lng option
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export { useTranslation, i18n };
